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

        // Language Detection Heuristic
        const englishIndicators = ['the', 'is', 'are', 'what', 'how', 'why', 'who', 'thank', 'thanks', 'hello', 'hi', 'good', 'morning', 'afternoon', 'evening', 'help', 'can', 'you', 'please'];
        const frenchIndicators = ['le', 'la', 'les', 'est', 'sont', 'comment', 'pourquoi', 'qui', 'merci', 'bonjour', 'salut', 'bonsoir', 'aide', 'pouvez', 'vous', 'svp', 'garantie'];
        const germanIndicators = ['der', 'die', 'das', 'ist', 'sind', 'wie', 'warum', 'wer', 'danke', 'hallo', 'guten', 'morgen', 'tag', 'abend', 'hilfe', 'können', 'sie', 'bitte'];

        let detectedLang = language;

        const enCount = words.filter(w => englishIndicators.includes(w)).length;
        const frCount = words.filter(w => frenchIndicators.includes(w)).length;
        const deCount = words.filter(w => germanIndicators.includes(w)).length;

        if (enCount > frCount && enCount > deCount) detectedLang = 'en';
        else if (frCount > enCount && frCount > deCount) detectedLang = 'fr';
        else if (deCount > enCount && deCount > frCount) detectedLang = 'de';

        // Check DB for any matching keywords
        // Optimized to find the best match based on the number of matching keywords
        // Special handling for Price/Quote queries
        const priceKeywords = ['price', 'pricing', 'cost', 'quote', 'quotation', 'rates', 'fee', // English
            'prix', 'tarif', 'coût', 'devis', 'cotation', 'taux', // French
            'preis', 'kosten', 'angebot', 'kostenvoranschlag', 'gebühr' // German
        ];

        const isPriceQuery = words.some(w => priceKeywords.includes(w));

        let responseText = null;
        let suggestedOptions = null;
        let showWhatsapp = false;

        if (isPriceQuery) {
            const priceResponses = {
                en: "Our prices are available upon quotation. To get a personalized quote that matches your specific needs, please reach out to us directly via WhatsApp below.",
                fr: "Nos tarifs sont disponibles sur devis. Pour obtenir un devis personnalisé correspondant à vos besoins spécifiques, veuillez nous contacter directement via WhatsApp ci-dessous.",
                de: "Unsere Preise sind auf Anfrage erhältlich. Um ein auf Ihre Bedürfnisse zugeschnittenes Angebot zu erhalten, kontaktieren Sie uns bitte direkt über WhatsApp unten."
            };
            responseText = priceResponses[detectedLang] || priceResponses['en'];
            showWhatsapp = true; // Flag to trigger WhatsApp CTA on frontend
        } else {
            const query = `
          SELECT *, 
                 (SELECT count(*) FROM unnest(keywords) k WHERE k = ANY($1::text[])) as match_count
          FROM chatbot_responses 
          WHERE keywords && $1::text[]
          ORDER BY match_count DESC
          LIMIT 1;
        `;

            const result = await pool.query(query, [words]);

            if (result.rows.length > 0) {
                const row = result.rows[0];
                responseText = detectedLang === 'fr' ? row.response_fr : (detectedLang === 'de' ? row.response_de : row.response_en);

                if (row.suggested_options && Array.isArray(row.suggested_options)) {
                    suggestedOptions = row.suggested_options.map(opt => ({
                        label: detectedLang === 'fr' ? opt.label_fr : (detectedLang === 'de' ? opt.label_de : opt.label_en),
                        query: opt.query
                    }));
                }
            }
        }

        // Fallback if no specific response found or response is empty (generic fallback)
        if (!responseText) {
            const fallbackResponse = {
                en: "I'm not sure I understand your specific request. Could you please rephrase or contact our team directly below?",
                fr: "Je ne suis pas sûr de comprendre votre demande spécifique. Pourriez-vous reformuler ou contacter notre équipe directement ci-dessous ?",
                de: "Ich bin mir nicht sicher, ob ich Ihre Anfrage verstehe. Könnten Sie sie bitte umformulieren oder unser Team direkt kontaktieren?"
            };
            responseText = fallbackResponse[detectedLang] || fallbackResponse['en'];

            // No specific options for fallback to avoid leading to empty/irrelevant pages
            suggestedOptions = [];
            showWhatsapp = true; // Encourage direct contact if bot fails
        }

        // Log Bot Response if lead_id exists
        if (lead_id) {
            await pool.query(
                'INSERT INTO chat_logs (lead_id, role, message) VALUES ($1, $2, $3)',
                [lead_id, 'bot', responseText]
            );
        }

        res.json({ response: responseText, options: suggestedOptions, showWhatsapp });
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

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
