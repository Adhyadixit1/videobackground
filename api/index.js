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

        // Special handling for "Why DOOH" vs "What is DOOH"
        const whyKeywords = ['why', 'benefits', 'advantage', 'reason', 'pourquoi', 'avantage', 'raison', 'warum', 'vorteil', 'grund'];
        const defineKeywords = ['what', 'define', 'meaning', 'definition', 'explain', 'qu\'est-ce', 'que', 'signifie', 'was', 'definition', 'erklaeren'];

        const isWhyDooh = words.includes('dooh') && words.some(w => whyKeywords.includes(w));
        const isDefineDooh = words.includes('dooh') && (words.some(w => defineKeywords.includes(w)) || words.includes('marketing'));

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
        } else if (isWhyDooh) {
            const whyResponses = {
                en: "DOOH offers a 100% captive audience, dynamic video content, and precise targeting. Unlike static ads, it allows for real-time updates, measuring engagement, and significantly higher brand recall.",
                fr: "Le DOOH offre une audience 100% captive, un contenu vidéo dynamique et un ciblage précis. Contrairement à l'affichage statique, il permet des mises à jour en temps réel et génère une mémorisation de marque nettement supérieure.",
                de: "DOOH bietet ein 100% fesselndes Publikum, dynamische Videoinhalte und präzises Targeting. Im Gegensatz zu statischer Werbung ermöglicht es Echtzeit-Updates und steigert die Markenerinnerung erheblich."
            };
            responseText = whyResponses[detectedLang] || whyResponses['en'];
            suggestedOptions = [
                { label: detectedLang === 'fr' ? "Nos Solutions" : "Our Solutions", query: "solutions" },
                { label: detectedLang === 'fr' ? "Contact" : "Contact", query: "contact" }
            ];
        } else if (isDefineDooh) {
            const defineResponses = {
                en: "DOOH (Digital Out-Of-Home) refers to digital advertising screens found in public spaces like gas stations, malls, and streets. Unlike static billboards, DOOH allows for dynamic, video-based content that captures more attention and can be updated in real-time.",
                fr: "Le DOOH (Digital Out-Of-Home) désigne les écrans publicitaires numériques dans les lieux publics. Contrairement à l'affichage statique, le DOOH permet un contenu dynamique et vidéo qui capte davantage l'attention et peut être mis à jour en temps réel.",
                de: "DOOH (Digital Out-Of-Home) bezeichnet digitale Werbebildschirme im öffentlichen Raum. Im Gegensatz zu statischen Plakatwänden ermöglicht DOOH dynamische, videobasierte Inhalte, die mehr Aufmerksamkeit erregen und in Echtzeit aktualisiert werden können."
            };
            responseText = defineResponses[detectedLang] || defineResponses['en'];
            suggestedOptions = [
                { label: detectedLang === 'fr' ? "Pourquoi DOOH ?" : "Why DOOH?", query: "why dooh" },
                { label: detectedLang === 'fr' ? "Nos Services" : "Our Services", query: "services" }
            ];
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
                en: "I'm not sure specifically, but I can tell you about our Outdoor Screens, Video Walls, or Digital Marketing services. What are you interested in?",
                fr: "Je ne suis pas sûr spécifiquement, mais je peux vous parler de nos écrans extérieurs, murs vidéo ou services de marketing numérique. Qu'est-ce qui vous intéresse ?",
                de: "Ich bin mir nicht sicher, aber ich kann Ihnen von unseren Außenbildschirmen, Videowänden oder digitalen Marketingdiensten erzählen. Woran sind Sie interessiert?"
            };
            responseText = fallbackResponse[detectedLang] || fallbackResponse['en'];

            // Default options for fallback
            suggestedOptions = [
                { label: detectedLang === 'fr' ? "Nos Services" : (detectedLang === 'de' ? "Unsere Dienstleistungen" : "Our Services"), query: "services" },
                { label: detectedLang === 'fr' ? "Tarifs" : (detectedLang === 'de' ? "Preise" : "Pricing"), query: "pricing" },
                { label: detectedLang === 'fr' ? "Contact" : (detectedLang === 'de' ? "Kontakt" : "Contact"), query: "contact" }
            ];
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

if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

export default app;
