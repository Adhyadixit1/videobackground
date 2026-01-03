
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
        response_en: "Here are our key solutions tailored to your specific needs:\n\n1. **Outdoor LCD Screen 43 inch**: A slim, sunlight-readable totem designed for service stations. It features directional audio and high-definition visuals to capture drivers' attention during fueling (4+ mins captive time).\n\n2. **Vertical Infrared Touch Screen 55 inch**: An interactive freestanding display perfect for retail and wayfinding. Its precise multi-touch technology drives deeper customer engagement and self-service convenience.\n\n3. **Outdoor Waterproof OD Series**: A rugged, IP65-rated all-in-one display with 3000+ nits brightness. Built to withstand rain, snow, and direct sunlight while delivering vibrant 4K visuals 24/7.\n\n4. **Digital Marketing Services**: Extend your impact beyond the screen. We synchronize your DOOH campaigns with Meta, TikTok, and Waze ads to retarget audiences on mobile after they leave the location.",
        response_fr: "Voici nos solutions clés adaptées à vos besoins :\n\n1. **Écran LCD extérieur 43 pouces** : Un totem fin et lisible au soleil, conçu pour les stations-service. Il intègre l'audio directionnel pour capter l'attention pendant le plein (4+ min d'audience captive).\n\n2. **Écran Tactile Infrarouge Vertical 55 pouces** : Une borne interactive idéale pour le retail. Sa technologie multi-touch précise favorise l'engagement client et le libre-service.\n\n3. **Écran tout-en-un extérieur étanche Série OD** : Un écran robuste IP65 avec 3000+ nits de luminosité. Conçu pour résister à la pluie et au soleil tout en diffusant des visuels 4K vibrants 24/7.\n\n4. **Services de Marketing Digital** : Amplifiez votre impact au-delà de l'écran. Nous synchronisons vos campagnes DOOH avec des pubs Meta, TikTok et Waze pour retargeter votre audience sur mobile.",
        response_de: "Hier sind unsere Lösungen für Ihre Bedürfnisse:\n\n1. **43-Zoll-Outdoor-LCD**: Ein schlanker Totem für Tankstellen, gut lesbar bei Sonnenlicht. Mit Richtaudio, um die Aufmerksamkeit beim Tanken zu gewinnen.\n\n2. **Vertikaler 55-Zoll-Infrarot-Touchscreen**: Ein interaktives Display für Einzelhandel und Wegweisung. Fördert Kundenbindung durch präzise Multi-Touch-Technologie.\n\n3. **Wasserdichte Outdoor-Serie OD**: Ein robustes All-in-One-Display (IP65) mit 3000+ Nits. Hält jedem Wetter stand und liefert rund um die Uhr brillante 4K-Bilder.\n\n4. **Digitale Marketingdienste**: Erweitern Sie Ihre Reichweite. Wir synchronisieren Ihre DOOH-Kampagnen mit Social-Media-Anzeigen, um Zielgruppen mobil erneut anzusprechen.",
        suggested_options: [
            { label_en: "Outdoor LCD 43\"", label_fr: "Écran LCD 43\"", label_de: "Outdoor LCD 43\"", query: "43 inch outdoor lcd" },
            { label_en: "Touch Screen 55\"", label_fr: "Écran Tactile 55\"", label_de: "Touchscreen 55\"", query: "55 inch touch" },
            { label_en: "OD Series Waterproof", label_fr: "Série OD Étanche", label_de: "OD Serie Wasserdicht", query: "outdoor waterproof" },
            { label_en: "Digital Marketing", label_fr: "Marketing Digital", label_de: "Digitales Marketing", query: "digital marketing services" }
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
