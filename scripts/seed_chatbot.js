
import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

const seedData = [
    // 0. Greetings
    {
        keywords: ['hi', 'hello', 'bonjour', 'salut', 'hallo', 'guten tag', 'hey', 'greetings', 'yo', 'coucou', 'holla'],
        response_en: "Hello! How can I help you today? Feel free to ask about our ad services, screens, or pricing.",
        response_fr: "Bonjour ! Comment puis-je vous aider aujourd'hui ? N'hésitez pas à me poser des questions sur nos services publicitaires, nos écrans ou nos tarifs.",
        response_de: "Hallo! Wie kann ich Ihnen heute helfen? Fragen Sie mich gerne nach unseren Werbedienstleistungen, Bildschirmen oder Preisen.",
        suggested_options: [
            { label_en: 'Our Services', label_fr: 'Nos Services', label_de: 'Unsere Dienstleistungen', query: 'services' },
            { label_en: '📩 Request a Quote', label_fr: '📩 Demander un devis', label_de: '📩 Angebot anfordern', query: 'quote_redirect' }
        ]
    },
    // 1. About Us / Who are we
    {
        keywords: [
            'about', 'who', 'company', 'luxio', 'agency', 'history', 'mission', 'vision',
            'qui', 'sommes', 'nous', 'entreprise', 'agence', 'histoire',
            'über', 'wer', 'wir', 'firma', 'agentur', 'geschichte',
            'abot', 'compny', 'agenci', 'entrprise' // typos
        ],
        response_en: "Luxio Media is your strategic partner in digital signage. We leverage our available network of high traffic locations like supermarkets, kiosks, and other busy areas where we setup screens for better brand visibility. We manage over 2,000 screens across Europe, combining high-impact DOOH with data-driven social media amplification.",
        response_fr: "Luxio Media est votre partenaire stratégique en affichage dynamique. Nous utilisons notre réseau disponible de lieux à fort trafic comme les supermarchés, kiosques et autres zones de passage où nous installons des écrans pour une meilleure visibilité de la marque. Nous gérons plus de 2 000 écrans en Europe, combinant DOOH et amplification sociale.",
        response_de: "Luxio Media ist Ihr strategischer Partner für Digital Signage. Wir nutzen unser verfügbares Netzwerk an hochfrequentierten Standorten wie Supermärkten, Kiosken und anderen belebten Bereichen, wo wir Bildschirme installieren. Wir verwalten über 2.000 Bildschirme in Europa.",
        suggested_options: [
            { label_en: 'Our Services', label_fr: 'Nos Services', label_de: 'Unsere Dienstleistungen', query: 'services' },
            { label_en: 'Contact Us', label_fr: 'Contactez-nous', label_de: 'Kontaktieren Sie uns', query: 'contact' }
        ]
    },

    // 2. Privacy Policy
    {
        keywords: [
            'privacy', 'policy', 'data', 'protect', 'gdpr', 'confidentiality',
            'confidentialité', 'politique', 'données', 'rgpd', 'protection', 'privee',
            'datenschutz', 'richtlinie', 'daten', 'schützen', 'dsgvo',
            'privcy', 'polcy', 'confiden', 'donnees' // typos
        ],
        response_en: "We take your privacy seriously. We collect minimal personal info (name, email) only when you contact us, and use cookies to improve our site. Your data is stored securely and never shared without consent. You can view our full Privacy Policy on our website.",
        response_fr: "Nous prenons votre vie privée au sérieux. Nous collectons un minimum d'informations personnelles (nom, e-mail) uniquement lorsque vous nous contactez, et utilisons des cookies pour améliorer notre site. Vos données sont stockées en toute sécurité et ne sont jamais partagées sans consentement.",
        response_de: "Wir nehmen Ihre Privatsphäre ernst. Wir sammeln minimale persönliche Daten (Name, E-Mail) nur, wenn Sie uns kontaktieren, und verwenden Cookies, um unsere Website zu verbessern. Ihre Daten werden sicher gespeichert und niemals ohne Zustimmung weitergegeben.",
        suggested_options: [
            { label_en: 'Read Full Policy', label_fr: 'Lire la politique complète', label_de: 'Vollständige Richtlinie lesen', query: 'privacy' }
            // Note: 'privacy' query usually routes to page or more info? Chatbot just links to page usually
        ]
    },

    // 3. Terms of Use
    {
        keywords: [
            'terms', 'conditions', 'rules', 'regulations', 'use', 'agreement', 'legal',
            'conditions', 'utilisation', 'règles', 'règlements', 'termes', 'légal',
            'nutzungsbedingungen', 'regeln', 'vorschriften', 'nutzung', 'vereinbarung', 'rechtlich',
            'trms', 'condtions', 'useage' // typos
        ],
        response_en: "By using our website, you agree to our Terms of Use. All content is property of Luxio Media. Usage is for personal, non-commercial viewing. We operate under Luxembourg law.",
        response_fr: "En utilisant notre site web, vous acceptez nos Conditions d'Utilisation. Tout le contenu est la propriété de Luxio Media. L'utilisation est réservée à un usage personnel et non commercial. Nous opérons sous le droit luxembourgeois.",
        response_de: "Durch die Nutzung unserer Website stimmen Sie unseren Nutzungsbedingungen zu. Alle Inhalte sind Eigentum von Luxio Media. Die Nutzung ist nur für persönliche, nicht-kommerzielle Zwecke gestattet. Wir arbeiten nach luxemburgischem Recht.",
        suggested_options: [
            { label_en: 'Full Terms', label_fr: 'Conditions complètes', label_de: 'Vollständige Bedingungen', query: 'terms' }
        ]
    },

    // 4. DOOH Marketing (What is it?)
    {
        keywords: [
            'dooh', 'digital', 'out-of-home', 'signage', 'marketing', 'what', 'is', 'advertising',
            'affichage', 'dynamique', 'extérieur', 'publicité', 'qu\'est-ce', 'c\'est', 'quoi',
            'aussenwerbung', 'werbung', 'was', 'ist',
            'doh', 'markting', 'adver', 'signge' // typos
        ],
        response_en: "DOOH (Digital Out-Of-Home) refers to digital advertising screens found in public spaces like supermarkets, kiosks, malls, and streets. Unlike static billboards, DOOH allows for dynamic, video-based content that captures more attention and can be updated in real-time.",
        response_fr: "Le DOOH (Digital Out-Of-Home) désigne les écrans publicitaires numériques situés dans les espaces publics comme les supermarchés, kiosques, centres commerciaux et rues. Contrairement aux panneaux statiques, le DOOH permet des contenus vidéo dynamiques qui captent plus l'attention.",
        response_de: "DOOH (Digital Out-Of-Home) bezeichnet digitale Werbebildschirme im öffentlichen Raum wie Supermärkten, Kiosken oder Einkaufszentren. Im Gegensatz zu statischen Plakaten ermöglicht DOOH dynamische Videoinhalte, die mehr Aufmerksamkeit erregen.",
        suggested_options: [
            { label_en: 'Why DOOH?', label_fr: 'Pourquoi le DOOH ?', label_de: 'Warum DOOH?', query: 'why dooh' },
            { label_en: 'Our Screens', label_fr: 'Nos Écrans', label_de: 'Unsere Bildschirme', query: 'screens' }
        ]
    },

    // 5. Why DOOH? (Benefits)
    {
        keywords: [
            'why', 'benefit', 'advantage', 'traffic', 'captive', 'audience', 'roi',
            'pourquoi', 'avantage', 'bénéfice', 'trafic', 'cautive', 'audience',
            'warum', 'vorteil', 'nutzen', 'verkehr', 'publikum',
            'benfit', 'advntage' // typos
        ],
        response_en: "DOOH offers a 100% captive audience (e.g., while shopping or waiting), high engagement through motion, and precise geo-targeting. It bridges the gap between physical visibility and digital retargeting.",
        response_fr: "Le DOOH offre une audience 100% captive (ex: pendant les achats ou l'attente), un fort engagement grâce au mouvement, et un ciblage géographique précis. Il fait le pont entre la visibilité physique et le retargeting digital.",
        response_de: "DOOH bietet ein 100% gefangenes Publikum (z.B. beim Einkaufen oder Warten), hohes Engagement durch Bewegung und präzises Geo-Targeting. Es schlägt eine Brücke zwischen physischer Sichtbarkeit und digitalem Retargeting.",
        suggested_options: [
            { label_en: 'Our Screens', label_fr: 'Nos Écrans', label_de: 'Unsere Bildschirme', query: 'screens' }
        ]
    },

    // 6. Contact Info
    {
        // ... (omitted for brevity, just keeping structure)
        keywords: [
            'contact', 'phone', 'email', 'reach', 'call',
            'contacter', 'téléphone', 'mail', 'joindre', 'appeler',
            'kontakt', 'telefon', 'erreichen', 'anrufen',
            'contct', 'phon', 'emil' // typos
        ],
        response_en: "You can reach us at 26 Bd Royal Level 5, 2449 Ville-Haute Luxembourg. Email: contact@luxiomedia.lu, Phone: +352 661 16 77 25.",
        response_fr: "Vous pouvez nous joindre au 26 Bd Royal Level 5, 2449 Ville-Haute Luxembourg. Email : contact@luxiomedia.lu, Téléphone : +352 661 16 77 25.",
        response_de: "Sie erreichen uns im 26 Bd Royal Level 5, 2449 Ville-Haute Luxembourg. E-Mail: contact@luxiomedia.lu, Telefon: +352 661 16 77 25.",
        suggested_options: [
            { label_en: 'Start Chat', label_fr: 'Démarrer le Chat', label_de: 'Chat starten', query: 'whatsapp' }
        ]
    },

    // 7. Services Overview
    {
        keywords: [
            'service', 'offer', 'solution', 'product', 'what do you do',
            'services', 'offre', 'solution', 'produit', 'que faites vous',
            'dienstleistung', 'angebot', 'produkt', 'was machen sie',
            'servce', 'soluton' // typos
        ],
        response_en: "We offer Digital Signage (2000+ screens), custom Video Production (high-impact ads & motion spots), Social Media Management, and Website Creation. We leverage our available network of displays in supermarkets, kiosks, and other high traffic locations for better brand visibility.",
        response_fr: "Nous proposons l'Affichage Dynamique (2000+ écrans), la Production Vidéo personnalisée (pubs & spots animés), la Gestion des Réseaux Sociaux et la Création de Sites Web. Nous utilisons notre réseau disponible d'écrans dans des supermarchés, kiosques et autres lieux à fort trafic pour une meilleure visibilité de la marque.",
        response_de: "Wir bieten Digital Signage (2000+ Bildschirme), individuelle Videoproduktion (effektive Anzeigen & Motion Spots), Social Media Management und Website-Erstellung. Wir nutzen unser verfügbares Netzwerk von Bildschirmen in Supermärkten, Kiosken und anderen stark frequentierten Orten für eine bessere Markensichtbarkeit.",
        suggested_options: [
            { label_en: 'Video Production', label_fr: 'Production Vidéo', label_de: 'Videoproduktion', query: 'video production' },
            { label_en: 'Our Screens', label_fr: 'Nos Écrans', label_de: 'Unsere Bildschirme', query: 'screens' }
        ]
    },

    // 8. Video Production & Ads
    {
        keywords: [
            'digital marketing', 'video', 'production', 'social media', 'dooh', 'advertising', 'management',
            'marketing digital', 'vidéo', 'réseaux sociaux', 'publicité',
            'digitales marketing', 'video', 'soziale medien', 'werbung',
            'commercial', 'ads', 'spot', 'motion'
        ],
        response_en: "We create videos as per brand needs, provide custom social media management, and execute DOOH advertising to increase visibility.",
        response_fr: "Nous créons des vidéos selon les besoins de la marque, assurons une gestion personnalisée des réseaux sociaux et réalisons de la publicité DOOH pour augmenter la visibilité.",
        response_de: "Wir erstellen Videos nach Markenbedarf, bieten individuelles Social-Media-Management und führen DOOH-Werbung durch, um die Sichtbarkeit zu erhöhen.",
        suggested_options: [
            { label_en: '📩 Request a Quote', label_fr: '📩 Demander un devis', label_de: '📩 Angebot anfordern', query: 'quote_redirect' },
            { label_en: '📊 Launch Campaign', label_fr: '📊 Lancer une campagne', label_de: '📊 Kampagne starten', query: 'launch_campaign_redirect' },
            { label_en: '📞 Request Callback', label_fr: '📞 Être rappelé', label_de: '📞 Rückruf anfordern', query: 'callback_request' }
        ]
    },

    // 9. Website Development
    {
        keywords: [
            'website', 'web design', 'development', 'platform', 'seo', '3d', 'animation', 'shopify', 'wordpress', 'next.js', 'node.js',
            'site web', 'développement', 'création site', 'seo', 'animation 3d',
            'webseite', 'entwicklung', 'webdesign', 'plattform'
        ],
        response_en: "We create all kinds of websites and platforms, with 3D animations and SEO optimisation, using modern technologies like Next.js and Node.js. We also provide services like Shopify and WordPress development according to client needs.",
        response_fr: "Nous créons tous types de sites web et plateformes, avec animations 3D et optimisation SEO, via des technologies modernes comme Next.js et Node.js. Nous proposons aussi du développement Shopify et WordPress selon vos besoins.",
        response_de: "Wir erstellen alle Arten von Websites und Plattformen mit 3D-Animationen und SEO-Optimierung unter Verwendung moderner Technologien wie Next.js und Node.js. Nach Bedarf bieten wir auch Shopify- und WordPress-Entwicklung an.",
        suggested_options: [
            { label_en: 'Our Services', label_fr: 'Nos Services', label_de: 'Unsere Dienstleistungen', query: 'services' },
            { label_en: 'Contact Us', label_fr: 'Contactez-nous', label_de: 'Kontaktieren Sie uns', query: 'contact' }
        ]
    },

    // 9. Media Types
    {
        keywords: [
            'media types', 'format', 'support', 'kiosk', 'totem', 'billboard',
            'types de médias', 'formats', 'supports', 'borne', 'panneau',
            'medientypen', 'format', 'träger', 'kiosk', 'plakatwand'
        ],
        response_en: "We offer, among others: Large-format LED screens, Storefront window screens, Digital kiosks, Mobile DOOH displays, and Indoor/Outdoor signage solutions.",
        response_fr: "Nous proposons, entre autres : Écrans LED grand format, Écrans vitrines, Bornes digitales, DOOH mobile, Signalisation intérieure et extérieure.",
        response_de: "Wir bieten unter anderem: Großformatige LED-Bildschirme, Schaufensterbildschirme, Digitale Kioske, Mobile DOOH-Displays und Innen-/Außenbeschilderungslösungen.",
        suggested_options: [
            { label_en: '📍 View Ad Locations', label_fr: '📍 Voir supports pub', label_de: '📍 Werbeflächen ansehen', query: 'view_locations_redirect' }
        ]
    },

    // 10. Target Audience
    {
        keywords: [
            'who is it for', 'target audience', 'clients', 'for whom',
            'pour qui', 'cible', 'audience', 'clients',
            'für wen', 'zielgruppe', 'kunden'
        ],
        response_en: "Our solutions are designed for: Businesses and shops, National and international brands, Communication agencies, Local authorities and institutions, Events and local promotions.",
        response_fr: "Nos solutions sont conçues pour : Entreprises et commerces, Marques nationales et internationales, Agences de communication, Collectivités locales et institutions, Événements et promotions locales.",
        response_de: "Unsere Lösungen sind konzipiert für: Unternehmen und Geschäfte, Nationale und internationale Marken, Kommunikationsagenturen, Lokale Behörden und Institutionen, Veranstaltungen und lokale Promotionen.",
        suggested_options: []
    },

    // 11. Location Clarification (Office vs Ad Spots)
    {
        keywords: [
            'location', 'address', 'where', 'spot', 'place', 'office', 'located',
            'localisation', 'adresse', 'où', 'place', 'bureau', 'situé',
            'standort', 'adresse', 'wo', 'platz', 'büro'
        ],
        response_en: "Just to be sure which location you are asking for, I want to confirm: are you looking for our Business Location or the Locations of our Signage Boards?",
        response_fr: "Pour être sûr de quelle localisation vous parlez, je souhaite confirmer : cherchez-vous nos Bureaux ou les Emplacements de nos Écrans ?",
        response_de: "Um sicherzugehen, welchen Standort Sie meinen: Suchen Sie unseren Bürostandort oder die Standorte unserer Werbebildschirme?",
        suggested_options: [
            { label_en: '🏢 Business Location', label_fr: '🏢 Nos Bureaux', label_de: '🏢 Bürostandort', query: 'contact' },
            { label_en: '📺 Signage Boards', label_fr: '📺 Écrans Pub', label_de: '📺 Werbebildschirme', query: 'view_locations_redirect' }
        ]
    },

    // 12. Geography
    {
        keywords: [
            'geography', 'operate', 'country', 'area',
            'géographie', 'opérer', 'pays', 'zone',
            'geografie', 'tätig', 'land', 'gebiet'
        ],
        response_en: "We operate primarily in Luxembourg, with the possibility of intervening in France and neighboring countries depending on the project.",
        response_fr: "Nous opérons principalement au Luxembourg, avec la possibilité d'intervenir en France et dans les pays limitrophes selon le projet.",
        response_de: "Wir sind hauptsächlich in Luxemburg tätig, mit der Möglichkeit, je nach Projekt auch in Frankreich und den Nachbarländern einzugreifen.",
        suggested_options: [
            { label_en: '📍 View Ad Locations', label_fr: '📍 Voir supports pub', label_de: '📍 Werbeflächen ansehen', query: 'view_locations_redirect' }
        ]
    },

    // 12. Turnkey Campaigns
    {
        keywords: [
            'turnkey', 'full service', 'handle everything', 'strategy', 'programming',
            'clé en main', 'service complet', 'tout gérer', 'stratégie', 'programmation',
            'schlüsselfertig', 'komplettservice', 'alles erledigen', 'strategie', 'programmierung'
        ],
        response_en: "Yes. Luxio Media can handle: Broadcasting strategy, Visual creation, Screen programming, Campaign monitoring and optimization.",
        response_fr: "Oui. Luxio Media peut gérer : Stratégie de diffusion, Création visuelle, Programmation des écrans, Suivi et optimisation de campagne.",
        response_de: "Ja. Luxio Media kann übernehmen: Ausstrahlungsstrategie, Visuelle Erstellung, Bildschirmprogrammierung, Kampagnenüberwachung und -optimierung.",
        suggested_options: [
            { label_en: '📩 Request a Quote', label_fr: '📩 Demander un devis', label_de: '📩 Angebot anfordern', query: 'quote_redirect' }
        ]
    },

    // 13. Campaign Duration
    {
        keywords: [
            'duration', 'how long', 'period', 'minimum time',
            'durée', 'combien de temps', 'période', 'temps minimum',
            'dauer', 'wie lange', 'zeitraum', 'mindestzeit'
        ],
        response_en: "The duration depends on the medium and your objectives. Some campaigns can last a few days, while others run for several weeks or months.",
        response_fr: "La durée dépend du support et de vos objectifs. Certaines campagnes peuvent durer quelques jours, tandis que d'autres s'étendent sur plusieurs semaines ou mois.",
        response_de: "Die Dauer hängt vom Medium und Ihren Zielen ab. Manche Kampagnen dauern wenige Tage, andere laufen über mehrere Wochen oder Monate.",
        suggested_options: []
    },

    // 14. Targeting Options
    {
        keywords: [
            'target time', 'schedule', 'specific time', 'slot', 'rush hour',
            'ciblage temps', 'horaire', 'heure spécifique', 'créneau', 'heure de pointe',
            'zeit targeting', 'zeitplan', 'bestimmte zeit', 'slot', 'stoßzeit'
        ],
        response_en: "Yes. Campaigns can be programmed for specific time slots (rush hour, evenings, weekends, etc.).",
        response_fr: "Oui. Les campagnes peuvent être programmées pour des créneaux horaires spécifiques (heures de pointe, soirées, week-ends, etc.).",
        response_de: "Ja. Kampagnen können für bestimmte Zeitfenster programmiert werden (Stoßzeiten, Abende, Wochenenden usw.).",
        suggested_options: []
    },

    // 15. Modification
    {
        keywords: [
            'modify', 'change', 'update', 'adjust campaign',
            'modifier', 'changer', 'mettre à jour', 'ajuster campagne',
            'ändern', 'bearbeiten', 'aktualisieren', 'kampagne anpassen'
        ],
        response_en: "Yes, content can be adjusted or replaced according to the conditions set out in your contract.",
        response_fr: "Oui, le contenu peut être ajusté ou remplacé selon les conditions définies dans votre contrat.",
        response_de: "Ja, Inhalte können gemäß den in Ihrem Vertrag festgelegten Bedingungen angepasst oder ersetzt werden.",
        suggested_options: []
    },

    // 16. Agencies
    {
        keywords: [
            'agency', 'agencies', 'collaboration', 'partner',
            'agence', 'agences', 'collaboration', 'partenaire',
            'agentur', 'agenturen', 'zusammenarbeit', 'partner'
        ],
        response_en: "Yes, we regularly collaborate with agencies for local or national campaigns.",
        response_fr: "Oui, nous collaborons régulièrement avec des agences pour des campagnes locales ou nationales.",
        response_de: "Ja, wir arbeiten regelmäßig mit Agenturen für lokale oder nationale Kampagnen zusammen.",
        suggested_options: [
            { label_en: '📞 Request Callback', label_fr: '📞 Être rappelé', label_de: '📞 Rückruf anfordern', query: 'callback_request' }
        ]
    },

    // 17. Reporting / Stats
    {
        keywords: [
            'stats', 'statistics', 'report', 'monitoring', 'data', 'results',
            'stats', 'statistiques', 'rapport', 'suivi', 'données', 'résultats',
            'statistik', 'statistiken', 'bericht', 'überwachung', 'daten', 'ergebnisse'
        ],
        response_en: "Depending on the medium, we can provide: Broadcasting data, Audience estimates, Campaign reports.",
        response_fr: "Selon le support, nous pouvons fournir : Données de diffusion, Estimations d'audience, Rapports de campagne.",
        response_de: "Je nach Medium können wir bereitstellen: Ausstrahlungsdaten, Publikumsschätzungen, Kampagnenberichte.",
        suggested_options: []
    },

    // 18. How to Launch
    {
        keywords: [
            'how to launch', 'start campaign', 'procedure', 'steps', 'begin',
            'comment lancer', 'démarrer campagne', 'procédure', 'étapes', 'commencer',
            'wie starten', 'kampagne starten', 'verfahren', 'schritte', 'beginnen'
        ],
        response_en: "Simply: Contact us via the website or chatbot > Define your objectives > Confirm the media and duration > Launch the broadcast.",
        response_fr: "Simplement : Contactez-nous via le site ou le chatbot > Définissez vos objectifs > Confirmez les supports et la durée > Lancez la diffusion.",
        response_de: "Ganz einfach: Kontaktieren Sie uns über die Website oder den Chatbot > Definieren Sie Ihre Ziele > Bestätigen Sie Medien und Dauer > Starten Sie die Ausstrahlung.",
        suggested_options: [
            { label_en: '📊 Launch Campaign', label_fr: '📊 Lancer une campagne', label_de: '📊 Kampagne starten', query: 'launch_campaign_redirect' }
        ]
    },
    // 19. Callback Request Intent
    {
        keywords: [
            'callback', 'call me', 'phone me', 'speak to someone', 'talk to human',
            'rappel', 'appeler', 'parler', 'téléphone', 'joindre',
            'rückruf', 'anrufen', 'sprechen', 'telefonieren'
        ],
        response_en: "Certainly. If you'd like to speak with a specialist directly, please request a callback below.",
        response_fr: "Certainement. Si vous souhaitez parler directement à un spécialiste, veuillez demander un rappel ci-dessous.",
        response_de: "Gerne. Wenn Sie direkt mit einem Spezialisten sprechen möchten, fordern Sie bitte unten einen Rückruf an.",
        suggested_options: [
            { label_en: '📞 Request Callback', label_fr: '📞 Être rappelé', label_de: '📞 Rückruf anfordern', query: 'callback_request' }
        ]
    }
];

const seedChatbot = async () => {
    try {
        console.log('Connecting to database...');
        await pool.connect();
        console.log('Connected!');

        // Check if table exists, if not create it (safety check)
        await pool.query(`
            CREATE TABLE IF NOT EXISTS chatbot_responses (
                id SERIAL PRIMARY KEY,
                keywords TEXT[] NOT NULL,
                response_en TEXT,
                response_fr TEXT,
                response_de TEXT,
                suggested_options JSONB,
                created_at TIMESTAMP DEFAULT NOW()
            );
        `);

        // Clear existing data (optional, but good for resetting state to match user request of "all context")
        // We will delete rows that match our new keywords to avoid duplicates, or just truncate for a clean slate.
        // Given the instructions, let's truncate to ensure "all context" is fresh and correct.
        console.log('Clearing old chatbot data...');
        await pool.query('TRUNCATE TABLE chatbot_responses');

        console.log('Seeding new data...');
        for (const data of seedData) {
            await pool.query(
                `INSERT INTO chatbot_responses 
                (keywords, response_en, response_fr, response_de, suggested_options) 
                VALUES ($1, $2, $3, $4, $5)`,
                [
                    data.keywords,
                    data.response_en,
                    data.response_fr,
                    data.response_de,
                    JSON.stringify(data.suggested_options)
                ]
            );
        }

        console.log('Seeding completed successfully!');
    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {
        await pool.end();
    }
};

seedChatbot();
