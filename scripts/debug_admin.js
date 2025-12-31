
import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

async function run() {
    try {
        console.log("Fetching chat history...");
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
        console.log("Count:", result.rows.length);
        if (result.rows.length > 0) {
            console.log("Sample Row:", JSON.stringify(result.rows[0], null, 2));
            // Check specifically for problematic rows where lead_id might be undefined in JS (unlikely for SQL results) or message is empty
            const badRows = result.rows.filter(r => !r.lead_id || !r.message);
            if (badRows.length > 0) {
                console.log("Found rows with missing lead_id or message:", badRows.length);
                console.log("Bad Row Sample:", badRows[0]);
            } else {
                console.log("All rows have lead_id and message.");
            }
        }
    } catch (err) {
        console.error(err);
    } finally {
        pool.end();
    }
}

run();
