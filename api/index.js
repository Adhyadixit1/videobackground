import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import cors from 'cors';

const { Pool } = pg;

const app = express();
const port = process.env.PORT || 3001;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

app.use(cors());
app.use(express.json());

// Chatbot Endpoint with History Logging
app.post('/api/chat', async (req, res) => {
    const { message, language = 'en', lead_id } = req.body;
    const lowerMsg = message.toLowerCase();

    try {
        // Log User Message if lead_id exists
        if (lead_id) {
            await pool.query(
                'INSERT INTO chat_logs (lead_id, role, message) VALUES ($1, $2, $3)',
                [lead_id, 'user', message]
            );
        }

        const words = lowerMsg.split(/[\s,.?!]+/);

        // Check DB for any matching keywords
        const query = `
      SELECT * FROM chatbot_responses 
      WHERE keywords && $1::text[]
      LIMIT 1;
    `;

        const result = await pool.query(query, [words]);
        let responseText = null;

        if (result.rows.length > 0) {
            const row = result.rows[0];
            responseText = language === 'fr' ? row.response_fr : (language === 'de' ? row.response_de : row.response_en);
        }

        // Log Bot Response if lead_id exists and response exists
        if (lead_id && responseText) {
            await pool.query(
                'INSERT INTO chat_logs (lead_id, role, message) VALUES ($1, $2, $3)',
                [lead_id, 'bot', responseText]
            );
        } else if (lead_id && !responseText) {
            await pool.query(
                'INSERT INTO chat_logs (lead_id, role, message) VALUES ($1, $2, $3)',
                [lead_id, 'bot', 'FALLBACK_TRIGGERED']
            );
        }

        res.json({ response: responseText });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Create Lead with Source
app.post('/api/leads', async (req, res) => {
    const { name, email, phone, language, query, source = 'chatbot' } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO leads (name, email, phone, language, last_query, source) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [name, email, phone, language, query, source]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create lead' });
    }
});

// Admin: Get Filtered Leads
app.get('/api/leads', async (req, res) => {
    const { source } = req.query;
    try {
        let query = 'SELECT * FROM leads';
        const params = [];

        if (source) {
            query += ' WHERE source = $1';
            params.push(source);
        }

        query += ' ORDER BY created_at DESC';

        const result = await pool.query(query, params);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch leads' });
    }
});

// Admin: Get Conversation History
app.get('/api/admin/chat-history', async (req, res) => {
    try {
        // Join leads with chat logs
        const query = `
            SELECT 
                l.id as lead_id, 
                l.name, 
                l.email, 
                c.role, 
                c.message, 
                c.created_at 
            FROM chat_logs c
            JOIN leads l ON c.lead_id = l.id
            ORDER BY c.created_at ASC
        `;
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch chat history' });
    }
});

// Admin: Verify Lead
app.patch('/api/leads/:id', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const result = await pool.query(
            'UPDATE leads SET status = $1 WHERE id = $2 RETURNING *',
            [status, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update lead' });
    }
});

// Admin: Login
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (result.rows.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

        const user = result.rows[0];
        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        res.json({ user: { id: user.id, email: user.email, role: user.role } });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Login failed' });
    }
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

export default app;
