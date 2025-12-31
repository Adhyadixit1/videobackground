
import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

const newKnowledge = [
    // --- Products & Services ---
    {
        keywords: ['product', 'products', 'list', 'screens', 'offer', 'selling', 'produit', 'liste', 'ecran', 'offre', 'verkaufen', 'produkt'],
        response_en: "We offer a wide range of Digital Signage solutions including: 1. Outdoor LED Screens (high brightness) 2. Shop Window Screens (sunlight readable) 3. Indoor Video Walls 4. Transparent LED Films. Which one interests you?",
        response_fr: "Nous proposons une large gamme de solutions d'affichage dynamique incluant : 1. Écrans géants LED Extérieurs 2. Écrans Vitrine (haute luminosité) 3. Murs d'images Intérieurs 4. Films LED Transparents. Lequel vous intéresse ?",
        response_de: "Wir bieten eine breite Palette an Digital Signage-Lösungen, darunter: 1. LED-Außenbildschirme 2. Schaufensterbildschirme 3. Innen-Videowände 4. Transparente LED-Folien. Was interessiert Sie?",
        suggested_options: [
            { label_en: "Outdoor Screens", label_fr: "Écrans Extérieurs", label_de: "Außenbildschirme", query: "outdoor screens" },
            { label_en: "Shop Windows", label_fr: "Vitrines", label_de: "Schaufenster", query: "shop windows" },
            { label_en: "Video Walls", label_fr: "Murs Vidéo", label_de: "Videowände", query: "video walls" }
        ]
    },
    {
        keywords: ['outdoor', 'outside', 'exterior', 'exterieur', 'aussen'],
        response_en: "Our Outdoor LED Screens are weatherproof (IP65), high-brightness (6000+ nits) for direct sunlight visibility, and come in various pixel pitches (P2.5 to P10). Perfect for billboards and building facades.",
        response_fr: "Nos écrans géants extérieurs sont résistants aux intempéries (IP65), ultra-lumineux (6000+ nits) pour une visibilité en plein soleil, et disponibles en plusieurs pitchs (P2.5 à P10). Parfait pour les façades et panneaux publicitaires.",
        response_de: "Unsere LED-Außenbildschirme sind wetterfest (IP65), sehr hell (6000+ Nits) für direkte Sonneneinstrahlung und in verschiedenen Pixelabständen (P2.5 bis P10) erhältlich.",
        suggested_options: [
            { label_en: "Get a Quote", label_fr: "Obtenir un devis", label_de: "Angebot anfordern", query: "quote" },
            { label_en: "Technical Specs", label_fr: "Specs Techniques", label_de: "Technische Daten", query: "specs" }
        ]
    },
    {
        keywords: ['price', 'cost', 'how much', 'pricing', 'prix', 'cout', 'combien', 'tarif', 'kosten', 'preis'],
        response_en: "Our pricing is tailored to your specific project needs (screen size, pixel pitch, and installation location). However, we offer competitive rates starting from basic rental packages to full ownership. Would you like a personalized quote?",
        response_fr: "Nos tarifs sont adaptés à votre projet (taille d'écran, pitch, emplacement). Cependant, nous offrons des tarifs compétitifs, de la location à l'achat complet. Souhaitez-vous un devis personnalisé ?",
        response_de: "Unsere Preise richten sich nach Ihren spezifischen Projektanforderungen. Wir bieten jedoch wettbewerbsfähige Preise. Möchten Sie ein persönliches Angebot?",
        suggested_options: [
            { label_en: "Request Quote", label_fr: "Demander un devis", label_de: "Angebot anfordern", query: "i want a quote" },
            { label_en: "Leasing Options", label_fr: "Options de location", label_de: "Leasing-Optionen", query: "leasing" }
        ]
    },
    // --- Capabilities ---
    {
        keywords: ['what can you do', 'what can you answer', 'help', 'capabilities', 'aide', 'quoi repondre', 'hallo', 'bot'],
        response_en: "I can help you with: 1. Information about our Screen Products 2. Pricing and Quotes 3. Technical Specifications 4. Organizing a site visit. Just ask me!",
        response_fr: "Je peux vous aider avec : 1. Infos sur nos Écrans 2. Tarifs et Devis 3. Spécifications Techniques 4. Organiser une visite sur site. Posez-moi vos questions !",
        response_de: "Ich kann Ihnen helfen bei: 1. Informationen zu unseren Bildschirmen 2. Preise und Angebote 3. Technische Daten 4. Organisation eines Besuchs. Fragen Sie mich einfach!",
        suggested_options: [
            { label_en: "Our Products", label_fr: "Nos Produits", label_de: "Unsere Produkte", query: "products" },
            { label_en: "Contact Sales", label_fr: "Contacter Ventes", label_de: "Vertrieb kontaktieren", query: "contact" }
        ]
    },
    // --- Stats & Reach ---
    {
        keywords: ['reach', 'audience', 'traffic', 'numbers', 'statistiques', 'audience', 'trafic', 'reichweite'],
        response_en: "Luxio Media manages over 2,000 active screens reaching 15 Million people monthly. We have a captive audience with 100% visibility in high-traffic zones.",
        response_fr: "Luxio Media gère plus de 2 000 écrans actifs touchant 15 millions de personnes par mois. Nous garantissons une audience captive avec 100% de visibilité.",
        response_de: "Luxio Media verwaltet über 2.000 aktive Bildschirme, die monatlich 15 Millionen Menschen erreichen. Wir garantieren ein fesselndes Publikum.",
        suggested_options: [
            { label_en: "Network Map", label_fr: "Carte Réseau", label_de: "Netzwerkkarte", query: "network" },
            { label_en: "Case Studies", label_fr: "Études de cas", label_de: "Fallstudien", query: "case studies" }
        ]
    },
    // --- Brand/Company ---
    {
        keywords: ['luxio', 'company', 'who are you', 'agency', 'agence', 'qui etes vous', 'firma', 'wer sind sie'],
        response_en: "Luxio Media is a leading digital signage media agency in Europe. We combine high-tech hardware with creative content strategies to maximize your brand's impact.",
        response_fr: "Luxio Media est une agence média d'affichage dynamique leader en Europe. Nous combinons matériel high-tech et stratégies de contenu créatives pour maximiser votre impact.",
        response_de: "Luxio Media ist eine führende Agentur für Digital Signage in Europa. Wir kombinieren High-Tech-Hardware mit kreativen Content-Strategien.",
        suggested_options: [
            { label_en: "Our Team", label_fr: "Notre Équipe", label_de: "Unser Team", query: "team" },
            { label_en: "Locations", label_fr: "Emplacements", label_de: "Standorte", query: "locations" }
        ]
    }
];

async function seed() {
    try {
        console.log("Connecting to DB...");

        // 1. Clear existing generic inputs if needed, or just Upsert. 
        // For now, let's delete old generic ones to keep it clean, OR just insert new ones on top.
        // Let's just insert/update based on keywords overlap? No, keywords is an array.
        // Simpler: Insert these as new knowledge.

        const insertQuery = `
            INSERT INTO chatbot_responses (keywords, response_en, response_fr, response_de, suggested_options)
            VALUES ($1, $2, $3, $4, $5)
        `;

        for (const item of newKnowledge) {
            await pool.query(insertQuery, [
                item.keywords,
                item.response_en,
                item.response_fr,
                item.response_de,
                JSON.stringify(item.suggested_options)
            ]);
            console.log(`Inserted knowledge for keywords: ${item.keywords[0]}...`);
        }

        console.log("Seeding complete!");
    } catch (err) {
        console.error("Error seeding:", err);
    } finally {
        pool.end();
    }
}

seed();
