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

        // Improved Tokenization & Logging
        const words = lowerMsg.replace(/[^\w\s]/g, '').split(/\s+/).filter(w => w.length > 0);
        console.log(`[Chatbot] Incoming Query: "${message}" | Parsed Words:`, words);

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
        const priceKeywords = ['price', 'pricing', 'cost', 'quote', 'quotation', 'rates', 'fee', 'quote_redirect', // English
            'prix', 'tarif', 'coût', 'devis', 'cotation', 'taux', // French
            'preis', 'kosten', 'angebot', 'kostenvoranschlag', 'gebühr' // German
        ];

        const isPriceQuery = words.some(w => priceKeywords.includes(w));

        const greetingKeywords = ['hi', 'hello', 'bonjour', 'salut', 'hallo', 'guten', 'hey', 'yo', 'coucou', 'holla'];
        const isGreeting = words.some(w => greetingKeywords.includes(w));

        // Special handling for "Why DOOH" vs "What is DOOH"
        const whyKeywords = ['why', 'benefits', 'advantage', 'reason', 'pourquoi', 'avantage', 'raison', 'warum', 'vorteil', 'grund'];
        const defineKeywords = ['what', 'define', 'meaning', 'definition', 'explain', 'qu\'est-ce', 'que', 'signifie', 'was', 'definition', 'erklaeren'];

        const isWhyDooh = words.includes('dooh') && words.some(w => whyKeywords.includes(w));
        const isDefineDooh = words.includes('dooh') && (words.some(w => defineKeywords.includes(w)) || words.includes('marketing'));
        const isScreensQuery = words.some(w => ['screens', 'ecrans', 'bildschirme', 'projects', 'installations', 'projets', 'projekte', 'projects_redirect'].includes(w));
        const isServicesQuery = words.some(w => ['services', 'solutions', 'offer', 'service', 'lösungen'].includes(w)) && !words.includes('contact');
        const isCaseStudiesQuery = (words.includes('case') && words.includes('studies')) || words.includes('portfolio') || words.includes('realisations');
        const isWhyLuxio = (words.includes('luxio') || words.includes('us') || words.includes('we')) && (words.includes('why') || words.includes('better') || words.includes('difference') || words.includes('advantage') || words.includes('competition'));

        const locationKeywords = ['location', 'address', 'where', 'spot', 'place', 'office', 'located', 'localisation', 'adresse', 'où', 'place', 'bureau', 'situé', 'standort', 'wo', 'platz', 'büro'];
        // Ensure it's not a "Why" question (Why dooh?) or "What" question
        const isLocationQuery = words.some(w => locationKeywords.includes(w)) && !isWhyDooh && !isDefineDooh;

        const isSignageRequest = words.includes('signage_locations_info');

        let responseText = null;
        let suggestedOptions = null;
        let showWhatsapp = false;

        if (isGreeting) {
            const greetingResponses = {
                en: "Hello! How can I help you today? Feel free to ask about our ad services, screens, or pricing.",
                fr: "Bonjour ! Comment puis-je vous aider aujourd'hui ? N'hésitez pas à me poser des questions sur nos services publicitaires, nos écrans ou nos tarifs.",
                de: "Hallo! Wie kann ich Ihnen heute helfen? Fragen Sie mich gerne nach unseren Werbedienstleistungen, Bildschirmen oder Preisen."
            };
            responseText = greetingResponses[detectedLang] || greetingResponses['en'];
            suggestedOptions = [
                { label: detectedLang === 'fr' ? "Nos Services" : "Our Services", query: "services" },
                { label: detectedLang === 'fr' ? "Demander un devis" : "Request a Quote", query: "quote_redirect" }
            ];
        } else if (isSignageRequest) {
            const signageResponses = {
                en: "We have over 2,000 screens located in strategic high-traffic areas such as supermarkets, kiosks, gas stations, and shopping malls to ensure maximum visibility.",
                fr: "Nous disposons de plus de 2 000 écrans situés dans des zones stratégiques à fort trafic telles que les supermarchés, kiosques, stations-service et centres commerciaux pour garantir une visibilité maximale.",
                de: "Wir verfügen über mehr als 2.000 Bildschirme an strategischen, hochfrequentierten Standorten wie Supermärkten, Kiosken, Tankstellen und Einkaufszentren, um maximale Sichtbarkeit zu gewährleisten."
            };
            responseText = signageResponses[detectedLang] || signageResponses['en'];
            suggestedOptions = [];
        } else if (isLocationQuery) {
            const locationResponses = {
                en: "Just to be sure which location you are asking for, I want to confirm: are you looking for our Business Location or the Locations of our Signage Boards?",
                fr: "Pour être sûr de quelle localisation vous parlez, je souhaite confirmer : cherchez-vous nos Bureaux ou les Emplacements de nos Écrans ?",
                de: "Um sicherzugehen, welchen Standort Sie meinen: Suchen Sie unseren Bürostandort oder die Standorte unserer Werbebildschirme?"
            };
            responseText = locationResponses[detectedLang] || locationResponses['en'];
            suggestedOptions = [
                { label: detectedLang === 'fr' ? "🏢 Nos Bureaux" : (detectedLang === 'de' ? "🏢 Bürostandort" : "🏢 Business Locations"), query: "contact" },
                { label: detectedLang === 'fr' ? "📺 Emplacements Pub" : (detectedLang === 'de' ? "📺 Werbebildschirme" : "📺 Locations of Signage Boards"), query: "signage_locations_info" }
            ];
        } else if (isServicesQuery) {
            const servicesResponses = {
                en: "We offer comprehensive digital signage solutions including installation, content creation, and ad management. Explore our full range of services [here](/solutions).",
                fr: "Nous proposons des solutions complètes d'affichage dynamique incluant l'installation, la création de contenu et la gestion publicitaire. Découvrez notre gamme complète de services [ici](/solutions).",
                de: "Wir bieten umfassende Digital-Signage-Lösungen einschließlich Installation, Content-Erstellung und Anzeigenverwaltung. Entdecken Sie unser gesamtes Dienstleistungsangebot [hier](/solutions)."
            };
            responseText = servicesResponses[detectedLang] || servicesResponses['en'];
            suggestedOptions = [
                { label: detectedLang === 'fr' ? "Nos Écrans" : "Our Screens", query: "projects_redirect" }
            ];
        } else if (isCaseStudiesQuery) {
            const caseResponses = {
                en: "See how we've helped other businesses grow with our digital signage network. Check out our latest Case Studies [here](/case-studies).",
                fr: "Découvrez comment nous avons aidé d'autres entreprises à se développer grâce à notre réseau d'affichage numérique. Consultez nos dernières études de cas [ici](/case-studies).",
                de: "Sehen Sie, wie wir anderen Unternehmen geholfen haben, mit unserem Digital-Signage-Netzwerk zu wachsen. Schauen Sie sich unsere neuesten Fallstudien [hier](/case-studies) an."
            };
            responseText = caseResponses[detectedLang] || caseResponses['en'];
            suggestedOptions = [];
        } else if (isPriceQuery) {
            const priceResponses = {
                en: "Our prices are available upon quotation. To get a personalized quote, please [Contact Us](/contact) or message us on WhatsApp below.",
                fr: "Nos tarifs sont disponibles sur devis. Pour obtenir un devis personnalisé, veuillez [Nous Contacter](/contact) ou nous envoyer un message sur WhatsApp ci-dessous.",
                de: "Unsere Preise sind auf Anfrage erhältlich. Um ein persönliches Angebot zu erhalten, [kontaktieren Sie uns](/contact) oder schreiben Sie uns unten auf WhatsApp."
            };
            responseText = priceResponses[detectedLang] || priceResponses['en'];
            showWhatsapp = true; // Flag to trigger WhatsApp CTA on frontend
        } else if (isWhyLuxio) {
            const whyLuxioResponses = {
                en: "Luxio Media ensures massive coverage in high-traffic areas using high-end, interactive TFT signages and high-brightness displays that demand attention. We focus on precise location selection and targeted marketing tailored specifically to your brand's interaction needs.",
                fr: "Luxio Media assure une couverture massive dans les zones à fort trafic en utilisant des écrans TFT interactifs haut de gamme et des affichages haute luminosité. Nous nous concentrons sur une sélection précise des emplacements et un marketing ciblé adapté à vos besoins.",
                de: "Luxio Media sorgt für massive Reichweite an hochfrequentierten Standorten durch High-End-TFT-Displays und hochhelle Bildschirme. Wir konzentrieren uns auf präzise Standortauswahl und zielgerichtetes Marketing, das speziell auf Ihre Marke zugeschnitten ist."
            };
            responseText = whyLuxioResponses[detectedLang] || whyLuxioResponses['en'];
            suggestedOptions = [
                { label: detectedLang === 'fr' ? "Voir nos Ecrans" : "View Our Screens", query: "projects_redirect" },
                { label: detectedLang === 'fr' ? "Contact" : "Contact", query: "contact" }
            ];
        } else if (isWhyDooh) {
            const whyResponses = {
                en: "DOOH offers a 100% captive audience (e.g., while shopping or waiting), high engagement through motion, and precise geo-targeting. It bridges the gap between physical visibility and digital retargeting.",
                fr: "Le DOOH offre une audience 100% captive (ex: pendant les achats ou l'attente), un fort engagement grâce au mouvement, et un ciblage géographique précis. Il fait le pont entre la visibilité physique et le retargeting digital.",
                de: "DOOH bietet ein 100% gefangenes Publikum (z.B. beim Einkaufen oder Warten), hohes Engagement durch Bewegung und präzises Geo-Targeting. Es schlägt eine Brücke zwischen physischer Sichtbarkeit und digitalem Retargeting."
            };
            responseText = whyResponses[detectedLang] || whyResponses['en'];
            suggestedOptions = [
                { label: detectedLang === 'fr' ? "Nos Solutions" : "Our Solutions", query: "solutions" },
                { label: detectedLang === 'fr' ? "Contact" : "Contact", query: "contact" }
            ];
        } else if (isDefineDooh) {
            const defineResponses = {
                en: "DOOH increases reach, brand recall, and brand value, providing better brand visibility than static hoardings. It allows for dynamic, high-impact content that captures more attention.",
                fr: "Le DOOH augmente la portée, le rappel et la valeur de la marque, offrant une meilleure visibilité que l'affichage statique. Il permet un contenu dynamique et percutant qui capte davantage l'attention.",
                de: "DOOH steigert Reichweite, Markenerinnerung und Markenwert und bietet eine bessere Sichtbarkeit als statische Plakatwände. Es ermöglicht dynamische, wirkungsvolle Inhalte, die mehr Aufmerksamkeit erregen."
            };
            responseText = defineResponses[detectedLang] || defineResponses['en'];
            suggestedOptions = [
                { label: detectedLang === 'fr' ? "Pourquoi DOOH ?" : "Why DOOH?", query: "why dooh" },
                { label: detectedLang === 'fr' ? "Nos Services" : "Our Services", query: "services" }
            ];
        } else if (isScreensQuery) {
            const screensResponses = {
                en: "You can view our wide range of digital screens and projects [here](/projects). We have solutions for every environment.",
                fr: "Vous pouvez consulter notre large gamme d'écrans numériques et nos projets [ici](/projects). Nous avons des solutions pour chaque environnement.",
                de: "Sie können unser breites Angebot an digitalen Bildschirmen und Projekten [hier](/projects) einsehen. Wir haben Lösungen für jede Umgebung."
            };
            responseText = screensResponses[detectedLang] || screensResponses['en'];
            suggestedOptions = [
                { label: detectedLang === 'fr' ? "Voir les Projets" : "View Projects", query: "projects_redirect" }
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

// Debug: Fix Chatbot Content (Available for manual trigger to bypass local network issues)
app.get('/api/debug/fix-content', async (req, res) => {
    try {
        // 1. Insert Greeting
        await pool.query(`
            INSERT INTO chatbot_responses (keywords, response_en, response_fr, response_de, suggested_options)
            VALUES (
              ARRAY['hi', 'hello', 'bonjour', 'salut', 'hallo', 'guten tag', 'hey', 'greetings', 'yo', 'coucou', 'holla'],
              'Hello! How can I help you today? Feel free to ask about our ad services, screens, or pricing.',
              'Bonjour ! Comment puis-je vous aider aujourd''hui ? N''hésitez pas à me poser des questions sur nos services publicitaires, nos écrans ou nos tarifs.',
              'Hallo! Wie kann ich Ihnen heute helfen? Fragen Sie mich gerne nach unseren Werbedienstleistungen, Bildschirmen oder Preisen.',
              '[{"label_en": "Our Services", "label_fr": "Nos Services", "label_de": "Unsere Dienstleistungen", "query": "services"}, {"label_en": "📩 Request a Quote", "label_fr": "📩 Demander un devis", "label_de": "📩 Angebot anfordern", "query": "quote_redirect"}]'::jsonb
            )
            ON CONFLICT DO NOTHING;
        `);

        // 2. Fix Service Overview
        await pool.query(`
            UPDATE chatbot_responses 
            SET 
              response_en = 'We offer Digital Signage (2000+ screens), custom Video Production (high-impact ads & motion spots), Social Media Management, and Website Creation. We leverage our available network of displays in supermarkets, kiosks, and other high traffic locations for better brand visibility.',
              response_fr = 'Nous proposons l''Affichage Dynamique (2000+ écrans), la Production Vidéo personnalisée (pubs & spots animés), la Gestion des Réseaux Sociaux et la Création de Sites Web. Nous utilisons notre réseau disponible d''écrans dans des supermarchés, kiosques et autres lieux à fort trafic pour une meilleure visibilité de la marque.',
              response_de = 'Wir bieten Digital Signage (2000+ Bildschirme), individuelle Videoproduktion (effektive Anzeigen & Motion Spots), Social Media Management und Website-Erstellung. Wir nutzen unser verfügbares Netzwerk von Bildschirmen in Supermärkten, Kiosken und anderen stark frequentierten Orten für eine bessere Markensichtbarkeit.'
            WHERE 'service' = ANY(keywords);
        `);

        // 3. Fix About Us
        await pool.query(`
            UPDATE chatbot_responses
            SET
              response_en = 'Luxio Media is your strategic partner in digital signage. We leverage our available network of high traffic locations like supermarkets, kiosks, and other busy areas where we setup screens for better brand visibility. We manage over 2,000 screens across Europe, combining high-impact DOOH with data-driven social media amplification.',
              response_fr = 'Luxio Media est votre partenaire stratégique en affichage dynamique. Nous utilisons notre réseau disponible de lieux à fort trafic comme les supermarchés, kiosques et autres zones de passage où nous installons des écrans pour une meilleure visibilité de la marque. Nous gérons plus de 2 000 écrans en Europe, combinant DOOH et amplification sociale.',
              response_de = 'Luxio Media ist Ihr strategischer Partner für Digital Signage. Wir nutzen unser verfügbares Netzwerk an hochfrequentierten Standorten wie Supermärkten, Kiosken und anderen belebten Bereichen, wo wir Bildschirme installieren. Wir verwalten über 2.000 Bildschirme in Europa.'
            WHERE 'about' = ANY(keywords);
         `);

        // 4. Fix DOOH Marketing
        await pool.query(`
            UPDATE chatbot_responses
            SET
              response_en = 'DOOH (Digital Out-Of-Home) refers to digital advertising screens found in public spaces like supermarkets, kiosks, malls, and streets. Unlike static billboards, DOOH allows for dynamic, video-based content that captures more attention and can be updated in real-time.',
              response_fr = 'Le DOOH (Digital Out-Of-Home) désigne les écrans publicitaires numériques situés dans les espaces publics comme les supermarchés, kiosques, centres commerciaux et rues. Contrairement aux panneaux statiques, le DOOH permet des contenus vidéo dynamiques qui captent plus l''attention.',
              response_de = 'DOOH (Digital Out-Of-Home) bezeichnet digitale Werbebildschirme im öffentlichen Raum wie Supermärkten, Kiosken oder Einkaufszentren. Im Gegensatz zu statischen Plakaten ermöglicht DOOH dynamische Videoinhalte, die mehr Aufmerksamkeit erregen.'
            WHERE 'dooh' = ANY(keywords);
        `);

        // 5. Fix Why DOOH
        await pool.query(`
            UPDATE chatbot_responses
            SET
              response_en = 'DOOH offers a 100% captive audience (e.g., while shopping or waiting), high engagement through motion, and precise geo-targeting. It bridges the gap between physical visibility and digital retargeting.',
              response_fr = 'Le DOOH offre une audience 100% captive (ex: pendant les achats ou l''attente), un fort engagement grâce au mouvement, et un ciblage géographique précis. Il fait le pont entre la visibilité physique et le retargeting digital.',
              response_de = 'DOOH bietet ein 100% gefangenes Publikum (z.B. beim Einkaufen oder Warten), hohes Engagement durch Bewegung und präzises Geo-Targeting. Es schlägt eine Brücke zwischen physischer Sichtbarkeit und digitalem Retargeting.'
            WHERE 'why' = ANY(keywords);
        `);

        // 6. Callback Intent
        await pool.query(`
            INSERT INTO chatbot_responses (keywords, response_en, response_fr, response_de, suggested_options)
            VALUES (
              ARRAY['callback', 'call me', 'phone me', 'speak to someone', 'talk to human', 'rappel', 'appeler', 'parler', 'téléphone', 'joindre', 'rückruf', 'anrufen', 'sprechen', 'telefonieren'],
              'Certainly. If you''d like to speak with a specialist directly, please request a callback below.',
              'Certainement. Si vous souhaitez parler directement à un spécialiste, veuillez demander un rappel ci-dessous.',
              'Gerne. Wenn Sie direkt mit einem Spezialisten sprechen möchten, fordern Sie bitte unten einen Rückruf an.',
              '[{"label_en": "📞 Request Callback", "label_fr": "📞 Être rappelé", "label_de": "📞 Rückruf anfordern", "query": "callback_request"}]'::jsonb
            )
            ON CONFLICT DO NOTHING;
        `);

        // 7. Clean up Contact Info Keywords (Remove 'location', 'address' so they don't trigger contact info immediately)
        await pool.query(`
            UPDATE chatbot_responses
            SET keywords = ARRAY['contact', 'phone', 'email', 'reach', 'call', 'contacter', 'téléphone', 'mail', 'joindre', 'appeler', 'kontakt', 'telefon', 'erreichen', 'anrufen']
            WHERE 'contact' = ANY(keywords);
        `);

        // 8. Clean up Geography Keywords (Remove 'where', 'location')
        await pool.query(`
            UPDATE chatbot_responses
            SET keywords = ARRAY['geography', 'operate', 'country', 'area', 'géographie', 'opérer', 'pays', 'zone', 'geografie', 'tätig', 'land', 'gebiet']
            WHERE 'operate' = ANY(keywords);
        `);

        // 9. Insert/Update Location Clarification Intent (The Clarifier)
        // We delete first to ensure cleaner update of the response text
        await pool.query("DELETE FROM chatbot_responses WHERE 'location' = ANY(keywords)");

        await pool.query(`
            INSERT INTO chatbot_responses (keywords, response_en, response_fr, response_de, suggested_options)
            VALUES (
              ARRAY['location', 'address', 'where', 'spot', 'place', 'office', 'located', 'localisation', 'adresse', 'où', 'place', 'bureau', 'situé', 'standort', 'adresse', 'wo', 'platz', 'büro'],
              'Just to be sure which location you are asking for, I want to confirm: are you looking for our Business Location or the Locations of our Signage Boards?',
              'Pour être sûr de quelle localisation vous parlez, je souhaite confirmer : cherchez-vous nos Bureaux ou les Emplacements de nos Écrans ?',
              'Um sicherzugehen, welchen Standort Sie meinen: Suchen Sie unseren Bürostandort oder die Standorte unserer Werbebildschirme?',
              '[{"label_en": "🏢 Business Location", "label_fr": "🏢 Nos Bureaux", "label_de": "🏢 Bürostandort", "query": "contact"}, {"label_en": "📺 Signage Boards", "label_fr": "📺 Écrans Pub", "label_de": "📺 Werbebildschirme", "query": "view_locations_redirect"}]'::jsonb
            );
        `);

        // 10. Update DOOH Definition Text (Make it benefit-driven)
        await pool.query(`
            UPDATE chatbot_responses
            SET 
                response_en = 'DOOH increases reach, brand recall, and brand value, providing better brand visibility than static hoardings. It allows for dynamic, high-impact content that captures more attention.',
                response_fr = 'Le DOOH augmente la portée, le rappel et la valeur de la marque, offrant une meilleure visibilité que l''affichage statique. Il permet un contenu dynamique et percutant qui capte davantage l''attention.',
                response_de = 'DOOH steigert Reichweite, Markenerinnerung und Markenwert und bietet eine bessere Sichtbarkeit als statische Plakatwände. Es ermöglicht dynamische, wirkungsvolle Inhalte, die mehr Aufmerksamkeit erregen.'
            WHERE 'marketing' = ANY(keywords) OR 'dooh' = ANY(keywords);
        `);

        // 11. Update Contact Options to "WhatsApp Now"
        await pool.query(`
            UPDATE chatbot_responses
            SET suggested_options = '[{"label_en": "WhatsApp Now", "label_fr": "WhatsApp Maintenant", "label_de": "WhatsApp Jetzt", "query": "whatsapp"}]'::jsonb
            WHERE 'contact' = ANY(keywords);
        `);

        res.json({ message: "Content updated successfully in Database!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update content', details: err.message });
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
        console.log("SERVER UPDATED: Location & Signage Logic v3 Active");
    });
}

export default app;
