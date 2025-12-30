import { solutionsPart1 } from './solutionsPart1';
import { solutionsPart2 } from './solutionsPart2';
import { solutionsPart3 } from './solutionsPart3';
import { solutionsPart4 } from './solutionsPart4';
import { solutionsFR } from './solutionsFR';
import { solutionsDE } from './solutionsDE';

import { legal } from './legal';

// English Solutions
const solutionsEN = {
    ...solutionsPart1,
    ...solutionsPart2,
    ...solutionsPart3,
    ...solutionsPart4,
    common: {
        backToSolutions: "← Back to Solutions",
        keyFeatures: "Key Features",
        requestQuote: "Request a Quote",
        viewCaseStudies: "View Case Studies",
        whyChoose: "Why Choose",
        campaign: "Campaign",
        specifications: "Specifications",
        specsDescription: 'Everything you need to know about running campaigns on this format.',
        applications: "Applications",
        useCases: "Use Cases",
        support: "Support",
        faq: "Frequently Asked Questions",
        exploreMore: "Explore More",
        relatedSolutions: "Related Solutions",
        learnMore: "Learn More",
        readyToStart: "Ready to Get Started with",
        ctaDescription: "Contact our team today to discuss your project requirements and get a customized solution tailored to your needs.",
        contactUs: "Contact Us",
        callUs: "Call",
        productGallery: "Product Gallery",
        ourProcess: "Our Process",
        howItWorks: "How It Works",
        industries: "Industries",
        industriesWeServe: "Industries We Serve",
        testimonials: "Testimonials",
        whatClientsSay: "What Our Clients Say",
        pricing: "Pricing",
        chooseYourPlan: "Choose Your Plan",
        recommended: "Recommended",
        getStarted: "Get Started"
    },
    legal: legal.en
};

// German Solutions (English base with German overrides for specific products)
const solutionsPagesDE = {
    ...solutionsEN,
    ...solutionsDE,
    common: {
        ...solutionsEN.common,
        backToSolutions: "← Zurück zu Lösungen",
        keyFeatures: "Hauptmerkmale",
        requestQuote: "Angebot anfordern",
        viewCaseStudies: "Fallstudien ansehen",
        whyChoose: "Warum wählen",
        campaign: "Kampagne",
        specifications: "Spezifikationen",
        specsDescription: "Alles, was Sie über Kampagnen auf diesem Format wissen müssen.",
        applications: "Anwendungen",
        useCases: "Anwendungsfälle",
        support: "Support",
        faq: "Häufig gestellte Fragen",
        exploreMore: "Mehr entdecken",
        relatedSolutions: "Verwandte Lösungen",
        learnMore: "Mehr erfahren",
        readyToStart: "Bereit zu starten mit",
        ctaDescription: "Kontaktieren Sie unser Team noch heute, um Ihre Projektanforderungen zu besprechen und eine maßgeschneiderte Lösung zu erhalten.",
        contactUs: "Kontaktieren Sie uns",
        callUs: "Anrufen",
        productGallery: "Produktgalerie",
        ourProcess: "Unser Prozess",
        howItWorks: "Wie es funktioniert",
        industries: "Industrien",
        industriesWeServe: "Branchen, die wir bedienen",
        testimonials: "Testimonials",
        whatClientsSay: "Was unsere Kunden sagen",
        pricing: "Preise",
        chooseYourPlan: "Wählen Sie Ihren Plan",
        recommended: "Empfohlen",
        getStarted: "Loslegen"
    },
    legal: legal.de
};

export const translations = {
    fr: {
        nav: {
            solutions: 'Nos solutions',
            whyFillup: 'Pourquoi Luxio Media ?',
            aboutUs: 'Qui sommes-nous ?',
            caseStudies: 'Nos cas clients',
            resources: 'Nos ressources',
            careers: 'Nous rejoindre',
            investors: 'Investisseurs',
            contact: 'Contact',
            startProject: 'Démarrer un projet',
            subtitles: {
                solutions: 'Nos solutions',
                whyFillup: 'Pourquoi choisir Luxio Media ?',
                aboutUs: 'En savoir plus sur nous',
                caseStudies: 'Nos réussites clients',
                resources: 'Nos ressources',
                careers: 'Rejoignez-nous',
                investors: 'Espace Investisseurs',
                contact: 'Contactez-nous'
            },
            home: 'Accueil',
            projects: 'Projets',
            agency: 'Agence'
        },
        solutionPages: { ...solutionsFR, legal: legal.fr },
        footer: {
            contactCTA: 'Contactez-nous',
            companyName: 'Luxio Media',
            tagline: 'Votre partenaire en affichage digital à travers l\'Europe. Des écrans premium pour une visibilité et un impact maximaux.',
            navTitle: 'Navigation',
            navItems: [
                { label: 'Accueil', path: '/' },
                { label: 'Pourquoi Luxio Media', path: '/why-luxio' },
                { label: 'Solutions', path: '/solutions' },
                { label: 'Contact', path: '/contact' }
            ],
            servicesTitle: 'Services',
            servicesList: [
                { label: 'Diffusion sur écran', path: '/solutions#screen-diffusion' },
                { label: 'Publicités digitales', path: '/solutions#digital-ads' },
                { label: 'Production vidéo', path: '/solutions#video-production' },
                { label: 'Installation d\'écrans', path: '/solutions#screen-installation' }
            ],
            contactTitle: 'Contact',
            contactDetails: {
                email: 'contact@luxiomedia.lu',
                phone: '+352 661 16 77 25',
                addressLines: ['26 Bd Royal Level 5,', '2449 Ville-Haute Luxembourg']
            },
            legal: {
                rights: '© 2024 Luxio Media. Tous droits réservés.',
                privacy: 'Politique de confidentialité',
                terms: 'Conditions d\'utilisation',
                cookies: 'Cookies'
            }
        },
        home: {
            hero: 'Votre agence digitale à Paris',
            heroBtn: 'Contactez-moi',
            heroBtnSecondary: 'Nos réalisations',
            servicesTitle: 'Nos Expertises',
            servicesSubtitle: '4 expertises digitales pour booster votre visibilité',
            featured: 'Nos',
            featuredSubtitle: 'Projets',
            statsTitle: 'Chiffres Clés',
            networkTitle: 'Notre Réseau',
            testimonialsTitle: 'Ils parlent de nous',
            testimonials: {
                subtitle: 'On parle de nous',
                title1: 'Avis',
                title2: 'Clients',
                list: [
                    {
                        quote: "Une expérience exceptionnelle avec Luxio Media ! Je tiens à remercier Jacques pour son professionnalisme remarquable. Il a été à l'écoute et extrêmement gentil. Ses conseils avisés ont été d'une grande aide.",
                        author: "Centre Soon",
                        role: "Client"
                    },
                    {
                        quote: "Une équipe à l'écoute, professionnelle et très réactive ! Ils comprennent rapidement vos besoins et prennent vos demandes en considération afin que vous soyez pleinement satisfait ! Que demander de mieux ! Merci encore.",
                        author: "Renov Luxeparis",
                        role: "Client"
                    },
                    {
                        quote: "Excellente rencontre avec des professionnels de l'écran dynamique. Les messages représentatifs de notre salon de coiffure élaborés par l'équipe correspondent tout à fait à l'image de notre entreprise. Je recommande vivement.",
                        author: "Afro 3",
                        role: "Client"
                    }
                ]
            },
            cta: {
                subtitle: 'Commencez dès aujourd\'hui',
                title1: 'Prêt à',
                title2: 'Communiquer ?',
                desc: 'Offrez à votre marque la visibilité qu\'elle mérite grâce à notre réseau d\'affichage digital premium à travers l\'Europe.',
                btnPrimary: 'Demander un devis',
                btnSecondary: 'Nous contacter',
                orReach: 'Ou contactez-nous à'
            },
            pinterest: {
                subtitle: 'Nos Installations',
                title1: 'Écrans',
                title2: 'À la Une',
                viewAll: 'Voir tous les écrans',
                categories: {
                    digitalDisplays: 'Affichage Digital',
                    pumpDisplays: 'Écrans Pompe',
                    outdoorScreens: 'Écrans Extérieurs',
                    stationScreens: 'Écrans Station',
                    freestandingDisplays: 'Écrans Autonomes',
                    videoWalls: 'Murs Vidéo',
                    touchDisplays: 'Écrans Tactiles',
                    digitalMenus: 'Menus Digitaux',
                    digitalServices: 'Marketing Digital'
                },
                projects: [
                    { title: 'Écran Station Service', category: 'Écrans LCD' },
                    { title: 'Pompe Digitale', category: 'Totems Digitaux' },
                    { title: 'Réseau Station Service', category: 'Écrans Extérieurs' },
                    { title: 'Affichage Extérieur', category: 'Murs LED' },
                    { title: 'Écran Promotionnel', category: 'Murs Vidéo' },
                    { title: 'Réseau Station', category: 'Menus Digitaux' },
                    { title: 'Publicité Carburant', category: 'Écrans d\'Info' },
                    { title: 'Écran Digital', category: 'Borne Interactive' }
                ]
            }
        },
        solutions: {
            title: 'Nos Solutions',
            heroTitle: 'La puissance de l\'affichage, la précision du',
            heroTitleHighlight: 'digital',
            heroDesc: 'Développez votre notoriété en combinant une audience 100% disponible en stations-service avec des campagnes réseaux sociaux ciblées.',
            heroScroll: 'Découvrir',
            statsLabel1: 'Écrans Actifs',
            statsLabel2: 'Contacts Mensuels',
            statsLabel3: 'Annonceurs',
            statsLabel4: 'Audience Captive',
            offerTitle: 'Notre Offre',
            offerSubtitle1: 'Une solution',
            offerSubtitle2: 'complète',
            screenDiff: 'Diffusion Écrans',
            screenDiffDesc: 'Diffusion géo-ciblée de vos messages publicitaires sur notre réseau de 2000+ écrans en stations-service.',
            socialSynergy: 'Social Media Synergy',
            socialSynergyDesc: 'Amplifiez votre impact avec des campagnes cross-canal Facebook & Instagram synchronisées.',
            analytics: 'Analytics & Insights',
            analyticsDesc: 'Suivez l\'efficacité de vos campagnes avec nos outils de mesure et d\'analyse en temps réel.',
            f1: ['Accompagnement personnalisé', 'Création de vidéo animée 10 secondes', 'Enregistrement voix-off professionnel', 'Ciblage géographique précis'],
            f2: ['Adaptation vidéo multi-formats', 'Ciblage audience précis', 'Gestion de campagne optimisée', 'Reporting détaillé des performances'],
            f3: ['Dashboard temps réel', 'Métriques d\'engagement', 'Rapports personnalisés', 'Optimisation continue'],
            synergyTitle: 'Synergie Cross-Canal',
            synergyHeader: 'Les réseaux sociaux,',
            synergyHeaderHighlight: 'canal n°1',
            synergyHeaderEnd: 'pour optimiser le DOOH',
            synergyDesc: 'Maximisez l\'impact de vos campagnes d\'affichage digital grâce à une stratégie cross-canal intégrée. Notre approche combine la puissance de l\'affichage en station-service avec la précision du ciblage sur Facebook et Instagram.',
            synergyBtn: 'Démarrer une campagne',
            ctaTitle: 'Prêt à transformer',
            ctaTitleHighlight: 'votre communication ?',
            ctaDesc: 'Contactez notre équipe pour découvrir comment nos solutions peuvent amplifier votre visibilité.',
            ctaBtn1: 'Nous contacter',
            ctaBtn2: 'Voir nos cas clients',
            // Campaign Architecture Section
            campaignNetworkLabel: 'Réseau Luxembourg',
            campaignTitle: 'Architecture de Campagne & Stack Media',
            campaignIntro: 'Nous opérons un réseau DOOH propriétaire à travers les hubs de mobilité luxembourgeois. Chaque écran, signal de données et création alimente le trading desk de Luxio pour des plans publicitaires mesurables — pas de vente de matériel.',
            campaignTags: ['DOOH Forecourt', 'Temps d\'attention 100% captif', 'Couverture nationale', 'Part de voix garantie', 'Amplification sociale', 'Studio créatif', 'Reporting full-funnel'],
            campaignHighlights: [
                { title: 'Inventaire Premium Propriétaire', text: 'Plus de 2 000 écrans TFT grand format positionnés dans les stations-service et hubs de mobilité, déjà installés et maintenus par notre équipe d\'exploitation.' },
                { title: 'Intelligence Audience', text: 'Données de ravitaillement, clustering horaire et superposition de points d\'intérêt pour des plans média qui reflètent les trajets réels des consommateurs.' },
                { title: 'Créations qui Convertissent', text: 'Motion design, voix-off multilingue et adaptations sociales conçus pour des temps d\'attention de 10 secondes et une cohérence omnicanale.' },
                { title: 'Amplification 360°', text: 'Meta, TikTok, Waze et retargeting programmatique maintiennent votre message en tête bien après que les conducteurs aient quitté la pompe.' },
                { title: 'Performance Transparente', text: 'Dashboards en direct, corrélations d\'uplift en magasin et bilans post-campagne lient chaque impression à des résultats business mesurables.' }
            ],
            audienceInsightsTitle: 'Insights Audience',
            audienceInsights: [
                { title: 'Temps d\'attention captif', value: '4m 12s en moyenne de session de ravitaillement avec le regard dirigé vers nos totems TFT.' },
                { title: 'Décideurs du foyer', value: '73% des spectateurs s\'identifient comme l\'acheteur principal pour l\'alimentation, la mobilité ou les loisirs.' },
                { title: 'Contexte géographique', value: 'Périmètres personnalisés (5 km à national) superposés avec logique socio-démo et zone de chalandise.' },
                { title: 'Contrôle horaire', value: 'Bursts matinaux, trajets et week-ends alignés sur les lancements produits ou pics saisonniers.' }
            ],
            activationStackTitle: 'Stack d\'Activation',
            activationStack: [
                { title: 'Studio Créatif', value: 'Scripts, storyboards et adaptation multilingue livrés sous 7 jours.' },
                { title: 'Trading Media', value: 'Garanties de part de voix, capping fréquence et A/B testing gérés par les traders Luxio.' },
                { title: 'Extension Sociale', value: 'Audiences lookalike synchronisées depuis les expositions sur site vers Meta, TikTok et pipelines programmatiques.' },
                { title: 'Couche de Mesure', value: 'QR uplift, trafic magasin, remboursements coupons et études brand-lift dans un seul dashboard.' }
            ],
            mediaPlaybooksLabel: 'Playbooks Media',
            mediaPlaybooksTitle: 'Programmes Publicitaires Packagés',
            mediaPlaybooksDesc: 'Choisissez un playbook managé ou laissez-nous construire un plan de trading personnalisé depuis le Luxembourg, orchestrant chaque impression DOOH et son écho social.',
            campaignPackages: [
                { plan: 'Boost Local', objective: 'Générer du trafic dans un rayon de 15 km autour de votre réseau de magasins.', channels: 'DOOH Forecourt + Audience Personnalisée Meta', formats: 'Boucle DOOH 10s + cinemagraph social payant', reporting: 'Snapshots hebdomadaires reach & trafic.' },
                { plan: 'Takeover Régional', objective: 'Dominer la conversation pendant les périodes retail clés.', channels: 'Réseau TFT + TikTok Spark Ads + Waze Pins', formats: 'Vidéo contextuelle, statics animés, callouts audio', reporting: 'Optimisation mi-vol et benchmarking territorial.' },
                { plan: 'Lancement National', objective: 'Scaler la notoriété pour les lancements produits ou déploiements franchise.', channels: 'DOOH National + DOOH Programmatique + Seeding Influenceur', formats: 'Film hero, déclinaisons modulaires, overlays QR interactifs', reporting: 'Dashboard full-funnel avec KPIs brand & ventes.' }
            ],
            campaignDeliverables: [
                { title: 'Stratégie & Insights', items: ['Ateliers définition audience', 'Géo-intelligence & POI mapping', 'Pacing budget + flighting'] },
                { title: 'Production Créative', items: ['Storyboard + copywriting', 'Motion design & sound design', 'Versioning par langue/canal'] },
                { title: 'Activation & Ops', items: ['Booking réseau & trafficking', 'Règles daypart dynamiques', 'Conformité & brand safety'] },
                { title: 'Mesure & Apprentissage', items: ['Dashboards temps réel', 'Attribution trafic / ventes', 'Bilan post-campagne & next steps'] }
            ],
            portfolioLabel: 'Notre Travail',
            portfolioTitle: 'Notre Portfolio'
        },
        why: {
            heroTitle: 'Le media qui accompagne',
            heroTitleHighlight: 'vos clients',
            heroDesc: 'Profitez d\'un moment unique dans le parcours consommateur : le temps de ravitaillement. Une audience 100% captive, réceptive à votre message.',
            advantagesTitle: 'Nos Avantages',
            adv1Title: 'Audience Captive',
            adv1Desc: 'Une audience 100% disponible pendant le temps de ravitaillement.',
            adv2Title: 'Ciblage Géographique',
            adv2Desc: 'Touchez précisément votre zone de chalandise.',
            adv3Title: 'Synergie Digitale',
            adv3Desc: 'Amplifiez l\'impact avec des campagnes social media synchronisées.',
            processTitle: 'Notre Processus',
            adv4Title: 'Accompagnement Expert',
            adv4Desc: 'Une équipe dédiée vous accompagne de A à Z : stratégie, création, diffusion et mesure des performances.',
            processSteps: [
                { step: '1', title: 'Définition Stratégie', desc: 'Analyse de vos objectifs et définition du message clé' },
                { step: '2', title: 'Création Contenu', desc: 'Production de votre vidéo animée 10 secondes avec voix-off' },
                { step: '3', title: 'Diffusion Ciblée', desc: 'Broadcast géo-ciblé sur les écrans de votre zone' },
                { step: '4', title: 'Amplification Social', desc: 'Campagnes Facebook & Instagram synchronisées' },
                { step: '5', title: 'Mesure & Optimisation', desc: 'Reporting détaillé et optimisation continue' }
            ],
            stats: {
                screens: 'Écrans',
                contacts: 'Contacts/mois',
                advertisers: 'Annonceurs',
                captive: 'Captive'
            },
            cta: {
                title: 'Prêt à développer',
                titleHighlight: 'votre impact ?',
                desc: 'Rejoignez les 3400+ annonceurs qui font confiance à Luxio Media pour leurs communications.',
                btn: 'Démarrer maintenant'
            },
            comparison: {
                title: 'L\'Avantage Luxio Media',
                us: 'Luxio Media',
                them: 'Autres Solutions',
                rows: [
                    { feature: 'Attention Audience', us: '100% Captive & Sonore', them: 'Passif & Silencieux' },
                    { feature: 'Ciblage', us: 'Hyperlocal & Contextuel', them: 'Large & Peu précis' },
                    { feature: 'Créativité', us: 'Studio Motion Intégré', them: 'Adaptation Standard' },
                    { feature: 'Mesure', us: 'Data Précise & ROI', them: 'Estimations' }
                ]
            },
            features: {
                title: 'Une technologie de pointe',
                list: [
                    {
                        title: 'Écrans Haute Définition',
                        desc: 'Des écrans LED et LCD dernière génération, visibles même en plein soleil, pour une qualité d\'image irréprochable qui valorise votre marque.'
                    },
                    {
                        title: 'Diffusion Intelligente',
                        desc: 'Notre algorithme optimise la diffusion de votre message en fonction des heures de pointe et du profil de l\'audience pour maximiser l\'impact.'
                    },
                    {
                        title: 'Son Immersif',
                        desc: 'Contrairement à l\'affichage classique, nos écrans diffusent du son (directionnel) pour capter l\'attention auditive et visuelle simultanément.'
                    },
                    {
                        title: 'Reporting Détaillé',
                        desc: 'Accédez à des statistiques précises sur les diffusions, l\'audience touchée et l\'impact de votre campagne en toute transparence.'
                    }
                ]
            },
            values: {
                title: 'Nos Valeurs Fondamentales',
                subtitle: 'L\'excellence au service de votre communication',
                list: [
                    { title: 'Innovation', desc: 'Nous repoussons sans cesse les limites technologiques pour vous offrir les meilleurs supports de communication du marché.' },
                    { title: 'Performance', desc: 'Chaque campagne est optimisée pour garantir un retour sur investissement maximal et une visibilité exceptionnelle.' },
                    { title: 'Proximité', desc: 'Avec un réseau dense à travers l\'Europe, nous vous permettons de toucher vos clients au plus près de leurs habitudes.' },
                    { title: 'Transparence', desc: 'Nous fournissons des données réelles et vérifiables pour chaque impression, assurant une confiance totale dans notre partenariat.' }
                ]
            },
            portfolio: {
                title: 'Notre Portfolio d\'Excellence',
                subtitle: 'Découvrez nos installations les plus emblématiques à travers l\'Europe.',
                viewProject: 'Voir le projet'
            }
        },
        agency: {
            heroTitle: 'QUI SOMMES-NOUS ?',
            heroTitleHighlight: 'LUXIO MEDIA',
            heroHeaderDesc: 'Votre partenaire stratégique en affichage dynamique et communication digitale basé au Luxembourg.',
            aboutUs: `Bienvenue chez Luxio Media, votre partenaire stratégique en affichage dynamique et communication digitale, basé au cœur du Luxembourg, carrefour européen de l’innovation et des affaires.

Fondée avec l’ambition de moderniser la communication visuelle des entreprises et des institutions, Luxio Media s’est rapidement imposée comme un acteur fiable et innovant dans le domaine des écrans LED professionnels, des solutions d’affichage LCD haute performance et des dispositifs de communication digitale sur mesure.

Nos solutions sont conçues pour répondre aux exigences des environnements urbains, commerciaux et institutionnels, et s’adressent notamment aux mairies et administrations, centres commerciaux, franchises, entreprises, établissements sportifs, hôtels, restaurants, salles de jeux, événementiel, ainsi qu’aux espaces publics et privés à forte visibilité.

Fort d’une expertise solide et d’une vision tournée vers l’avenir, notre équipe accompagne chaque client de la conception à l’installation, jusqu’à la maintenance et l’optimisation des performances. Grâce à un réseau de partenaires et de techniciens qualifiés, Luxio Media garantit un service de proximité, réactif et adapté aux standards luxembourgeois et européens.

Luxio Media, c’est l’alliance de la technologie, de l’impact visuel et de l’accompagnement sur mesure pour donner une nouvelle dimension à votre communication.`,
            tagline: 'L’alliance de la technologie, de l’impact visuel et de l’accompagnement sur mesure.',
            cta: 'Contactez-nous'
        },
        projects: {
            heroTitle: 'Nos',
            heroTitleHighlight: 'Réalisations',
            heroDesc: 'Découvrez comment nous transformons les espaces avec nos écrans digitaux.',
            cta: 'Voir les projets',
            list: [
                { id: 1, title: 'Station TotalEnergies', category: 'Publicité Carburant', image: '/WhatsApp Image 2025-12-25 at 10.13.14 AM (1).jpeg', link: '/solutions/fuel-advertising' },
                { id: 2, title: 'Hub Shell EV', category: 'Pompe Digitale', image: '/WhatsApp Image 2025-12-25 at 10.13.14 AM (2).jpeg', link: '/solutions/digital-pump' },
                { id: 3, title: 'Carrefour Market', category: 'Affichage Extérieur', image: '/WhatsApp Image 2025-12-25 at 10.13.15 AM.jpeg', link: '/solutions/outdoor-display' },
                { id: 4, title: 'Aire de Repos Autoroute', category: 'Écran Station Service', image: '/WhatsApp Image 2025-12-25 at 10.13.16 AM.jpeg', link: '/solutions/station-service-display' },
                { id: 5, title: 'Kiosque Centre-Ville', category: 'Totems Digitaux', image: '/WhatsApp Image 2025-12-25 at 10.13.16 AM (1).jpeg', link: '/solutions/digital-totems' },
                { id: 6, title: 'Installation Mur LED', category: 'Murs LED', image: '/WhatsApp Image 2025-12-25 at 10.13.17 AM.jpeg', link: '/solutions/led-walls' },
                { id: 7, title: 'Terminal Interactif', category: 'Borne Interactive', image: '/WhatsApp Image 2025-12-25 at 10.13.18 AM (1).jpeg', link: '/solutions/interactive-kiosk' },
                { id: 8, title: 'Menu Board', category: 'Dynamic Menu Boards', image: '/WhatsApp Image 2025-12-25 at 10.13.20 AM.jpeg', link: '/solutions/menu-boards' }
            ]
        },
        resources: {
            heroTitle: 'Apprenez &',
            heroTitleHighlight: 'Inspirez-vous',
            heroDesc: 'Guides, études et outils pour maximiser l\'impact de vos campagnes DOOH.',
            cta: 'Parcourir'
        },
        careers: {
            heroTitle: 'Rejoignez',
            heroTitleHighlight: 'l\'aventure',
            heroDesc: 'Participez à la révolution de la publicité digitale en stations-service. Nous recherchons des talents passionnés.',
            cta: 'Voir les offres'
        },
        investors: {
            heroTitle: 'Pourquoi investir dans',
            heroTitleHighlight: 'Luxio Media',
            heroDesc: 'Participez à la révolution de l\'affichage dynamique et du DOOH depuis le cœur technologique de l\'Europe.',
            cta: 'Découvrir l\'opportunité',
            anchor: {
                title: 'Le Luxembourg comme point d’ancrage stratégique européen',
                content1: 'Basée au Luxembourg, au cœur de l’Europe et de l’un des écosystèmes financiers et business les plus stables du continent, Luxio Media opère dans un environnement propice à l’innovation, à la structuration de projets internationaux et à l’attraction d’investisseurs institutionnels.',
                content2: 'Depuis le Luxembourg, Luxio Media développe et pilote des stratégies de Digital Out-Of-Home (DOOH) et d’affichage dynamique à l’échelle européenne, en combinant rigueur financière, vision long terme et exécution opérationnelle.'
            },
            market: {
                title: 'Un marché en pleine expansion : le DOOH',
                desc: 'Luxio Media évolue au cœur d’un secteur à forte croissance : le Digital Out-Of-Home (DOOH), qui redéfinit la manière dont les marques captent l’attention des consommateurs dans les espaces physiques et digitaux.',
                features: [
                    'performance mesurable',
                    'ciblage géographique et contextuel',
                    'interaction et dynamisme des contenus',
                    'exploitation intelligente de la donnée'
                ]
            },
            mission: {
                title: 'Notre mission',
                desc: 'Chez Luxio Media, notre ambition est de redéfinir la communication extérieure pour l’ère digitale, en proposant des solutions à forte valeur ajoutée pour les annonceurs.',
                items: [
                    'Des campagnes DOOH hautement ciblées et mesurables, parfaitement synchronisées avec l’écosystème digital des marques.',
                    'Une orchestration intégrée entre les impressions physiques (écrans LED, vitrines digitales, totems, réseaux urbains) et leur amplification sur les réseaux sociaux et plateformes digitales.',
                    'Une technologie de diffusion intelligente, associée à un accompagnement sur-mesure, afin de maximiser la performance et le retour sur investissement.'
                ]
            },
            model: {
                title: 'Un modèle économique durable et scalable',
                leviers: [
                    'Location d’espaces publicitaires DOOH premium',
                    'Prestations créatives et production de contenus enrichis',
                    'Services de data, ciblage et optimisation de campagnes',
                    'Offres SaaS dédiées à la planification DOOH automatisée'
                ],
                benefits: [
                    'Une forte récurrence des revenus',
                    'Une scalabilité naturelle',
                    'Une création de valeur croissante à mesure que le réseau s’étend'
                ]
            },
            traction: {
                title: 'Traction & opportunités de croissance',
                points: [
                    'Un réseau d’écrans DOOH en expansion en Europe',
                    'Un pipeline commercial solide et des partenaires stratégiques',
                    'Un positionnement différenciant entre DOOH et digital'
                ]
            },
            team: {
                title: 'Équipe & gouvernance',
                skills: [
                    'Déploiement et exploitation de réseaux DOOH',
                    'Marketing digital et stratégies d’amplification',
                    'Développement international et montée en puissance'
                ]
            },
            whyNow: {
                title: 'Pourquoi investir maintenant',
                points: [
                    'un modèle économique scalable',
                    'une expertise technologique distinctive',
                    'une dynamique de croissance soutenue',
                    'une intégration fluide DOOH & digital'
                ],
                ambitions: [
                    'l’expansion dans les principales capitales européennes',
                    'le développement de solutions propriétaires de mesure',
                    'la mise en place de partenariats stratégiques'
                ]
            },
            relations: {
                title: 'Relations investisseurs',
                desc: 'Pour accéder à notre dossier investisseurs, à nos projections financières détaillées et échanger sur les opportunités d’investissement, contactez-nous :',
                email: 'investor@luxiomedia.lu',
                phone: '+352 661 167 725'
            }
        },
        contact: {
            heroTitle: 'Parlons de',
            heroTitleHighlight: 'votre projet',
            title: 'Parlons de votre projet',
            subtitle: 'Contact',
            desc: 'Développez votre visibilité locale',
            formName: 'Nom complet',
            formEmail: 'Email',
            formCompany: 'Société',
            formPhone: 'Téléphone',
            formSector: 'Secteur d\'activité',
            formMessage: 'Votre message',
            submit: 'Envoyer le message',
            success: 'Merci pour votre message!',
            intro: 'Notre équipe est à votre disposition pour vous accompagner dans la mise en place de votre campagne d\'affichage digital. Contactez-nous pour une étude personnalisée.',
            followUs: 'Suivez-nous',
            address: 'Adresse',
            formTitle: 'Envoyez-nous un message',
            placeholders: {
                name: 'Votre nom',
                email: 'email@exemple.com',
                company: 'Nom de votre entreprise',
                phone: 'X XX XX XX XX',
                sector: 'Sélectionnez votre secteur',
                message: 'Décrivez votre projet...'
            },
            sectorsList: ['Automobile', 'Ameublement', 'Immobilier', 'Loisirs', 'Restauration', 'Commerce', 'Services', 'Autre']
        },
        caseStudies: {
            heroTitle: 'Un support conçu pour',
            heroTitleHighlight: 'tous les secteurs',
            heroDesc: 'Découvrez comment nos clients de différents secteurs utilisent notre réseau d\'écrans pour développer leur visibilité locale.',
            stats: {
                advertisers: 'Annonceurs Actifs',
                sectors: 'Secteurs d\'activité',
                satisfaction: 'Taux de Satisfaction'
            },
            filterAll: 'Tous les secteurs',
            sectors: {
                automobile: {
                    title: 'Automobile',
                    subtitle: 'annonceurs',
                    desc: 'Générer du trafic qualifié en concession, promouvoir les nouveaux modèles et booster les Journées Portes Ouvertes.'
                },
                ameublement: {
                    title: 'Ameublement',
                    subtitle: 'annonceurs',
                    desc: 'Développer le trafic en magasin, annoncer les opérations commerciales (Soldes, Black Friday) et se démarquer de la concurrence locale.'
                },
                immobilier: {
                    title: 'Immobilier',
                    subtitle: 'annonceurs',
                    desc: 'Promouvoir les nouveaux programmes immobiliers, recruter des agents/franchisés et valoriser l\'expertise auprès des propriétaires locaux.'
                },
                loisirs: {
                    title: 'Loisirs',
                    subtitle: 'annonceurs',
                    desc: 'Augmenter les visites physiques grâce au ciblage local et promouvoir les événements saisonniers ou offres vacances scolaires.'
                }
            },
            details: {
                automobile: {
                    sector: "Automobile",
                    title: "Lancement Peugeot 3008 Hybride",
                    summary: "Comment Peugeot a généré du trafic qualifié en concession et boosté les essais du nouveau 3008 Hybride grâce à une campagne DOOH ciblée.",
                    challenge: "Peugeot souhaitait maximiser la visibilité de son nouveau modèle hybride et attirer des prospects intentionnistes en concession lors des journées portes ouvertes, tout en ciblant spécifiquement les zones de chalandise de chaque concessionnaire.",
                    solution: "Déploiement d'une campagne d'affichage digital sur 500 écrans en stations-service stratégiquement situées à moins de 10km des concessions participantes. Usage de spots vidéo dynamiques de 10 secondes mettant en avant le design et l'offre de lancement.",
                    results: [
                        "+25% de trafic piéton en concession durant l'opération",
                        "1,5 Millions de contacts délivrés sur la cible conducteurs",
                        "Taux de mémorisation assistée de 45% post-campagne",
                        "Augmentation significative des demandes d'essai"
                    ],
                    stats: [
                        { value: "+25%", label: "Trafic Concession" },
                        { value: "1.5M", label: "Impressions" },
                        { value: "45%", label: "Mémorisation" },
                        { value: "500", label: "Écrans Activés" }
                    ],
                    tags: ["Lancement Produit", "Drive-to-Store", "Automobile"],
                    image: "/WhatsApp Image 2025-12-25 at 10.13.14 AM (1).jpeg"
                },
                ameublement: {
                    sector: "Ameublement",
                    title: "Leroy Merlin - Opération Black Friday",
                    summary: "Une stratégie Drive-to-Store efficace pour Leroy Merlin lors du Black Friday, augmentant la fréquentation et le panier moyen.",
                    challenge: "Dans un contexte concurrentiel fort, Leroy Merlin voulait se démarquer pour annoncer ses offres exclusives Black Friday et inciter les consommateurs à se rendre en magasin plutôt que d'acheter en ligne.",
                    solution: "Diffusion massive de spots promotionnels 'Compte à Rebours' sur les écrans digitaux à l'entrée des zones commerciales et en stations-service. Mise à jour dynamique des offres selon les stocks et les jours restants.",
                    results: [
                        "+18% de visites en magasin par rapport à l'année précédente",
                        "ROAS (Retour sur dépenses pub) de x4 sur la période",
                        "Panier moyen en hausse grâce à la promotion d'articles complémentaires",
                        "Forte visibilité sur les zones de chalandise clés"
                    ],
                    stats: [
                        { value: "+18%", label: "Visites Magasin" },
                        { value: "x4", label: "ROAS" },
                        { value: "3M", label: "Vues Totales" },
                        { value: "100%", label: "Couverture Locale" }
                    ],
                    tags: ["Black Friday", "Retail", "Promotion"],
                    image: "/WhatsApp Image 2025-12-25 at 10.13.15 AM.jpeg"
                },
                immobilier: {
                    sector: "Immobilier",
                    title: "Nexity - Lancement Eco-Quartier",
                    summary: "Promotion réussie d'un nouveau programme immobilier éco-responsable auprès des investisseurs et résidents locaux.",
                    challenge: "Nexity lançait un nouveau programme ambitieux et devait capter l'attention des riverains (acheteurs potentiels) et des investisseurs de passage, en mettant l'accent sur la qualité de vie et l'écologie.",
                    solution: "Campagne d'hyper-proximité sur les totems digitaux et écrans de pompes dans un rayon de 15km autour du futur chantier. Visuels 3D immersifs du projet et QR code pour prise de rendez-vous immédiate.",
                    results: [
                        "50+ leads qualifiés générés en 2 semaines",
                        "80% des prospects venaient de la zone de diffusion",
                        "Accélération des pré-réservations de 30%",
                        "Notoriété locale du projet établie avant même la première pierre"
                    ],
                    stats: [
                        { value: "50+", label: "Leads Qualifiés" },
                        { value: "80%", label: "Ciblage Local" },
                        { value: "+30%", label: "Pré-réservations" },
                        { value: "15km", label: "Rayon Ciblage" }
                    ],
                    tags: ["Lancement", "Immobilier", "Local"],
                    image: "/WhatsApp Image 2025-12-25 at 10.13.16 AM.jpeg"
                },
                loisirs: {
                    sector: "Loisirs",
                    title: "Disneyland Paris - Saison Halloween",
                    summary: "Comment Disneyland a ensorcelé le public et boosté les visites pour sa saison d'Halloween avec une campagne immersive.",
                    challenge: "Augmenter les ventes de billets pour la saison d'Halloween et promouvoir les événements spéciaux nocturnes auprès des familles et jeunes adultes.",
                    solution: "Utilisation des murs LED géants et écrans outdoor pour diffuser des teasers vidéo spectaculaires et colorés. Ciblage des horaires de sortie d'école et week-ends pour toucher les familles.",
                    results: [
                        "Hausse significative des ventes de billets sur la période",
                        "Engagement record sur les réseaux sociaux en lien avec la campagne",
                        "Augmentation de la fréquentation des soirées spéciales",
                        "Impact visuel fort renforçant l'image de marque"
                    ],
                    stats: [
                        { value: "Record", label: "Ventes Billets" },
                        { value: "Haute", label: "Fréquentation" },
                        { value: "+40%", label: "Engagement Social" },
                        { value: "4K", label: "Qualité Visuelle" }
                    ],
                    tags: ["Tourisme", "Événementiel", "Famille"],
                    image: "/WhatsApp Image 2025-12-25 at 10.13.17 AM.jpeg"
                }
            },
            featuredHeader: 'Ils nous font confiance',
            featuredTitle: 'Nos clients',
            ctaTitle: 'Rejoignez nos',
            ctaTitleHighlight: '3,400+ annonceurs',
            ctaDesc: 'Développez votre visibilité locale grâce à notre réseau d\'écrans en stations-service.',
            ctaBtn: 'Lancer ma campagne'
        },
        network: {
            subtitle: 'Notre réseau',
            titlePart1: 'Un réseau national au service de',
            titlePart2: 'l\'efficacité locale',
            desc1: 'Avec plus de 600 stations-service et près de 4 000 écrans en France, vous trouverez forcément un emplacement proche de votre établissement.',
            desc2: 'Que vous soyez un annonceur local ou national, nous répondons à des objectifs de communication variés.',
            cta: 'Trouver un écran proche de chez-vous'
        },
        stations: {
            subtitle: 'Nos Atouts',
            titlePart1: 'L\'affichage digital',
            titlePart2: 'haute performance',
            notoriety: 'Notoriété',
            notorietyDesc: 'Diffusez votre message sur des écrans premium pour toucher votre audience cible efficacement.',
            coverage: 'Couverture',
            coverageDesc: 'Activez une campagne stratégique et soyez visibles là où se trouvent vos clients.',
            captivating: 'Captivant',
            captivatingDesc: 'Un format vidéo immersif, vu et entendu : un moment où l\'attention est maximale.',
            bottomText: 'Communiquez au plus près des consommateurs dans votre zone de chalandise pour une visibilité renforcée.'
        },
        services: {
            headerTiny: 'Nos Expertises',
            headerBig: '4 Piliers Digitaux',
            explore: 'Découvrir',
            s1Title: 'Site Web',
            s1Desc: 'Création de sites web : un site performant pour votre entreprise. Qu\'il s\'agisse d\'un site vitrine ou e-commerce, nos solutions web maximisent votre visibilité en ligne et transforment vos visiteurs en clients.',
            s2Title: 'Community Management',
            s2Desc: 'Engagez votre audience. Boostez votre image sur les réseaux sociaux avec nos contenus originaux et engageants. Nos Community Managers créent des stratégies qui transforment vos abonnés en clients fidèles.',
            s3Title: 'Affichage Dynamique',
            s3Desc: 'Attirez avec des écrans innovants. Nos solutions d\'affichage dynamique (vitrines interactives, écrans tactiles, murs LED) transforment votre espace en un outil de communication puissant.',
            s4Title: 'Création de Vidéos',
            s4Desc: 'Sublimez votre marque. Du storytelling à la vidéo promotionnelle, nous créons des contenus captivants qui mettent votre marque en avant sur tous les canaux (vidéos virales, conversion accrue).'
        },
        stats: {
            title: 'Impact',
            subtitle: 'Pourquoi choisir Luxio Media, votre agence digitale ?',
            screens: 'Clients Satisfaits',
            countries: 'Années d\'Activité',
            clients: 'Experts',
            support: 'Visibilité'
        },
        common: {
            viewAll: 'Tout voir',
            readMore: 'Lire la suite',
            apply: 'Postuler',
            download: 'Télécharger',
            backToSolutions: "← Retour aux Solutions",
            keyFeatures: "Caractéristiques Clés",
            requestQuote: "Demander un Devis",
            viewCaseStudies: "Voir les Études de Cas",
            whyChoose: "Pourquoi Choisir",
            campaign: "Campagne",
            specifications: "Spécifications",
            specsDescription: "Tout ce que vous devez savoir sur les campagnes sur ce format.",
            applications: "Applications",
            useCases: "Cas d'Usage",
            support: "Support",
            faq: "Questions Fréquemment Posées",
            exploreMore: "Explorer Plus",
            relatedSolutions: "Solutions Connexes",
            learnMore: "En Savoir Plus",
            readyToStart: "Prêt à Commencer avec",
            ctaDescription: "Contactez notre équipe aujourd'hui pour discuter de vos besoins de projet et obtenir une solution personnalisée.",
            contactUs: "Nous Contacter",
            callUs: "Appeler",
            productGallery: "Galerie de Produits",
            ourProcess: "Notre Processus",
            howItWorks: "Comment ça Marche",
            industries: "Industries",
            industriesWeServe: "Industries que Nous Servons",
            testimonials: "Témoignages",
            whatClientsSay: "Ce que Disent Nos Clients",
            pricing: "Tarifs",
            chooseYourPlan: "Choisissez Votre Plan",
            recommended: "Recommandé",
            getStarted: "Commencer"
        }
    },
    en: {
        nav: {
            solutions: 'Our Solutions',
            whyFillup: 'Why Luxia media?',
            aboutUs: 'About Us',
            caseStudies: 'Case Studies',
            resources: 'Resources',
            careers: 'Careers',
            investors: 'Investors',
            contact: 'Contact',
            startProject: 'Start a Project',
            subtitles: {
                solutions: 'Our solutions',
                whyFillup: 'Why choose Luxio Media?',
                aboutUs: 'Learn more about us',
                caseStudies: 'Customer success stories',
                resources: 'Our resources',
                careers: 'Join us / Careers',
                investors: 'Investors',
                contact: 'Get in touch'
            },
            home: 'Home',
            projects: 'Projects',
            agency: 'Agency'
        },
        solutionPages: solutionsEN,
        footer: {
            contactCTA: 'Contact us',
            companyName: 'Luxio Media',
            tagline: 'Your partner in digital signage across Europe. Premium screens for maximum visibility and impact.',
            navTitle: 'Navigation',
            navItems: [
                { label: 'Home', path: '/' },
                { label: 'Why Luxio Media', path: '/why-luxio' },
                { label: 'Solutions', path: '/solutions' },
                { label: 'Contact', path: '/contact' }
            ],
            servicesTitle: 'Services',
            servicesList: [
                { label: 'Screen Diffusion', path: '/solutions#screen-diffusion' },
                { label: 'Digital Ads', path: '/solutions#digital-ads' },
                { label: 'Video Production', path: '/solutions#video-production' },
                { label: 'Screen Installation', path: '/solutions#screen-installation' }
            ],
            contactTitle: 'Contact',
            contactDetails: {
                email: 'contact@luxiomedia.lu',
                phone: '+352 661 16 77 25',
                addressLines: ['26 Bd Royal Level 5,', '2449 Ville-Haute Luxembourg']
            },
            legal: {
                rights: '© 2024 Luxio Media. All rights reserved.',
                privacy: 'Privacy Policy',
                terms: 'Terms of Service',
                cookies: 'Cookies'
            }
        },
        home: {
            hero: 'Your digital agency in Paris',
            heroBtn: 'Contact me',
            heroBtnSecondary: 'Find a Screen',
            servicesTitle: 'Our Offer',
            servicesSubtitle: 'A Complete Solution',
            featured: 'Featured',
            featuredSubtitle: 'Screens',
            statsTitle: 'Key Figures',
            networkTitle: 'Our Network',
            testimonialsTitle: 'Testimonials',
            testimonials: {
                subtitle: 'Testimonials',
                title1: 'Client',
                title2: 'Stories',
                list: [
                    {
                        quote: "An exceptional experience with Luxio Media! I want to thank Jacques for his remarkable professionalism. He was attentive and extremely kind. His sage advice was of great help.",
                        author: "Centre Soon",
                        role: "Client"
                    },
                    {
                        quote: "A listening, professional, and very reactive team! They quickly understand your needs and take your requests into consideration so that you are fully satisfied! What more could you ask for! Thanks again.",
                        author: "Renov Luxeparis",
                        role: "Client"
                    },
                    {
                        quote: "Excellent meeting with digital screen professionals. The messages representative of our hair salon developed by the team correspond perfectly to our company image. I highly recommend.",
                        author: "Afro 3",
                        role: "Client"
                    }
                ]
            },
            cta: {
                subtitle: 'Get Started Today',
                title1: 'Ready To',
                title2: 'Advertise?',
                desc: 'Give your brand the visibility it deserves with our premium digital signage network across Europe.',
                btnPrimary: 'Request a Quote',
                btnSecondary: 'Contact Us',
                orReach: 'Or reach us at'
            },
            pinterest: {
                subtitle: 'Our Installations',
                title1: 'Featured',
                title2: 'Screens',
                viewAll: 'View All Screens',
                categories: {
                    digitalDisplays: 'Digital Displays',
                    pumpDisplays: 'Pump Displays',
                    outdoorScreens: 'Outdoor Screens',
                    stationScreens: 'Station Screens',
                    freestandingDisplays: 'Freestanding Displays',
                    videoWalls: 'Video Walls',
                    touchDisplays: 'Touch Displays',
                    digitalMenus: 'Digital Menus',
                    digitalServices: 'Digital Marketing'
                },
                projects: [
                    { title: 'Station Service Display', category: 'LCD Screens' },
                    { title: 'Digital Pump', category: 'Digital Totems' },
                    { title: 'Gas Station Network', category: 'Outdoor Screens' },
                    { title: 'Outdoor Display', category: 'LED Walls' },
                    { title: 'Promotional Screen', category: 'Video Walls' },
                    { title: 'Station Network', category: 'Menu Boards' },
                    { title: 'Fuel Advertising', category: 'Info Displays' },
                    { title: 'Digital Screen', category: 'Interactive Kiosk' }
                ]
            }
        },
        solutions: {
            title: 'Our Solutions',
            heroTitle: 'The power of display, the precision of',
            heroTitleHighlight: 'digital',
            heroDesc: 'Grow your brand awareness by combining a 100% available audience at gas stations with targeted social media campaigns.',
            heroScroll: 'Discover',
            statsLabel1: 'Active Screens',
            statsLabel2: 'Monthly Contacts',
            statsLabel3: 'Advertisers',
            statsLabel4: 'Captive Audience',
            offerTitle: 'Our Offer',
            offerSubtitle1: 'A complete',
            offerSubtitle2: 'solution',
            screenDiff: 'Screen Broadcasting',
            screenDiffDesc: 'Geo-targeted broadcasting of your advertising messages on our network of 2000+ screens in gas stations.',
            socialSynergy: 'Social Media Synergy',
            socialSynergyDesc: 'Amplify your impact with synchronized cross-channel Facebook & Instagram campaigns.',
            analytics: 'Analytics & Insights',
            analyticsDesc: 'Track the effectiveness of your campaigns with our real-time measurement and analysis tools.',
            f1: ['Personalized guidance', '10s animated video creation', 'Professional voice-over', 'Precise geo-targeting'],
            f2: ['Multi-format video adaptation', 'Precise audience targeting', 'Optimized campaign management', 'Detailed performance reporting'],
            f3: ['Real-time dashboard', 'Engagement metrics', 'Custom reports', 'Continuous optimization'],
            synergyTitle: 'Cross-Channel Synergy',
            synergyHeader: 'Social media,',
            synergyHeaderHighlight: '#1 channel',
            synergyHeaderEnd: 'to optimize DOOH',
            synergyDesc: 'Maximize the impact of your digital signage campaigns with an integrated cross-channel strategy. Our approach combines the power of gas station displays with the precision of Facebook and Instagram targeting.',
            synergyBtn: 'Start a campaign',
            ctaTitle: 'Ready to transform',
            ctaTitleHighlight: 'your communication?',
            ctaDesc: 'Contact our team to discover how our solutions can amplify your visibility.',
            ctaBtn1: 'Contact us',
            ctaBtn2: 'See our case studies',
            // Campaign Architecture Section
            campaignNetworkLabel: 'Luxembourg Network',
            campaignTitle: 'Campaign Architecture & Media Stack',
            campaignIntro: 'We operate an owned DOOH footprint across Luxembourg mobility hubs. Every screen, data signal, and creative asset feeds back into Luxio\'s trading desk to deliver measurable advertising plans—not hardware sales.',
            campaignTags: ['Forecourt DOOH', '100% captive dwell time', 'Nationwide coverage', 'Guaranteed share of voice', 'Social amplification', 'Creative studio', 'Full-funnel reporting'],
            campaignHighlights: [
                { title: 'Owned Premium Inventory', text: '2,000+ large-format TFT screens positioned across service stations and mobility hubs, already installed and maintained by our operations team.' },
                { title: 'Audience Intelligence', text: 'Fueling data, time-of-day clustering, and point-of-interest layering deliver media plans that mirror real consumer journeys.' },
                { title: 'Creative That Converts', text: 'Motion design, multilingual voice-over, and social cutdowns crafted for 10-second dwell times and omnichannel consistency.' },
                { title: '360° Amplification', text: 'Meta, TikTok, Waze, and programmatic retargeting keep your message top-of-mind long after drivers leave the pump.' },
                { title: 'Transparent Performance', text: 'Live dashboards, store uplift correlations, and post-campaign reviews tie each impression to measurable business outcomes.' }
            ],
            audienceInsightsTitle: 'Audience Insights',
            audienceInsights: [
                { title: 'Captive dwell time', value: '4m 12s average fueling session with eyesight directed to our TFT towers.' },
                { title: 'Household decision makers', value: '73% of viewers identify as the primary buyer for food retail, mobility, or leisure expenses.' },
                { title: 'Geo-context', value: 'Custom perimeters (5 km to nationwide) layered with socio-demo and store catchment logic.' },
                { title: 'Daypart control', value: 'Breakfast, commute, and weekend bursts aligned with product launches or seasonal peaks.' }
            ],
            activationStackTitle: 'Activation Stack',
            activationStack: [
                { title: 'Creative Studio', value: 'Scripts, storyboards, and multilingual adaptation delivered within 7 days.' },
                { title: 'Media Trading', value: 'Share-of-voice guarantees, frequency capping, and A/B testing managed by Luxio traders.' },
                { title: 'Social Extension', value: 'Lookalike audiences synced from on-site exposures to Meta, TikTok, and programmatic pipelines.' },
                { title: 'Measurement Layer', value: 'QR uplift, store footfall, coupon redemptions, and brand-lift surveys in a single dashboard.' }
            ],
            mediaPlaybooksLabel: 'Media Playbooks',
            mediaPlaybooksTitle: 'Packaged Advertising Programs',
            mediaPlaybooksDesc: 'Pick a managed playbook or let us build a custom trade plan from Luxembourg, orchestrating every DOOH impression and its social echo.',
            campaignPackages: [
                { plan: 'Local Boost', objective: 'Drive footfall within 15 km of your store network.', channels: 'Forecourt DOOH + Meta Custom Audience', formats: '10s DOOH loop + paid social cinemagraph', reporting: 'Weekly reach & footfall snapshots.' },
                { plan: 'Regional Takeover', objective: 'Own the conversation during key retail periods.', channels: 'TFT Network + TikTok Spark Ads + Waze Pins', formats: 'Contextual video, motion statics, audio callouts', reporting: 'Mid-flight optimization and territory benchmarking.' },
                { plan: 'National Launch', objective: 'Scale awareness for product drops or franchise rollouts.', channels: 'Nationwide DOOH + Programmatic DOOH + Influencer seeding', formats: 'Hero film, modular cutdowns, interactive QR overlays', reporting: 'Full-funnel dashboard with brand & sales KPIs.' }
            ],
            campaignDeliverables: [
                { title: 'Strategy & Insights', items: ['Audience definition workshops', 'Geo-intelligence & POI mapping', 'Budget pacing + flighting'] },
                { title: 'Creative Production', items: ['Storyboard + copywriting', 'Motion design & sound design', 'Versioning per language/channel'] },
                { title: 'Activation & Ops', items: ['Network booking & trafficking', 'Dynamic daypart rules', 'Compliance & brand safety checks'] },
                { title: 'Measurement & Learning', items: ['Real-time dashboards', 'Footfall / sales attribution', 'Post-campaign review & next steps'] }
            ],
            portfolioLabel: 'Our Work',
            portfolioTitle: 'Our Portfolio'
        },
        why: {
            heroTitle: 'The media that accompanies',
            heroTitleHighlight: 'your customers',
            heroDesc: 'Take advantage of a unique moment in the consumer journey: refueling time. A 100% captive audience, receptive to your message.',
            advantagesTitle: 'Our Advantages',
            adv1Title: 'Captive Audience',
            adv1Desc: 'A 100% available audience during refueling time.',
            adv2Title: 'Geo-Targeting',
            adv2Desc: 'Precisely target your catchment area.',
            adv3Title: 'Digital Synergy',
            adv3Desc: 'Amplify impact with synchronized social media campaigns.',
            processTitle: 'Our Process',
            adv4Title: 'Expert Support',
            adv4Desc: 'A dedicated team accompanies you from A to Z: strategy, creation, broadcasting, and performance measurement.',
            processSteps: [
                { step: '1', title: 'Strategy Definition', desc: 'Analysis of your objectives and definition of the key message' },
                { step: '2', title: 'Content Creation', desc: 'Production of your 10-second animated video with voice-over' },
                { step: '3', title: 'Targeted Broadcasting', desc: 'Geo-targeted broadcast on screens in your area' },
                { step: '4', title: 'Social Amplification', desc: 'Synchronized Facebook & Instagram campaigns' },
                { step: '5', title: 'Measurement & Optimization', desc: 'Detailed reporting and continuous optimization' }
            ],
            stats: {
                screens: 'Screens',
                contacts: 'Contacts/month',
                advertisers: 'Advertisers',
                captive: 'Captive'
            },
            cta: {
                title: 'Ready to Boost',
                titleHighlight: 'Your Visibility?',
                desc: 'Join 3400+ advertisers who trust Luxio Media with their communication.',
                btn: 'Start Now'
            },
            comparison: {
                title: 'The Luxio Media Advantage',
                us: 'Luxio Media',
                them: 'Other Solutions',
                rows: [
                    { feature: 'Audience Attention', us: '100% Captive & Sound', them: 'Passive & Silent' },
                    { feature: 'Targeting', us: 'Hyperlocal & Contextual', them: 'Broad & Imprecise' },
                    { feature: 'Creativity', us: 'Integrated Motion Studio', them: 'Standard Adaptation' },
                    { feature: 'Measurement', us: 'Precise Data & ROI', them: 'Estimates' }
                ]
            },
            features: {
                title: 'Cutting-Edge Technology',
                list: [
                    {
                        title: 'High Definition Screens',
                        desc: 'Latest generation LED and LCD screens, visible even in direct sunlight, for impeccable image quality that enhances your brand.'
                    },
                    {
                        title: 'Smart Broadcasting',
                        desc: 'Our algorithm optimizes the broadcasting of your message based on peak hours and audience profile to maximize impact.'
                    },
                    {
                        title: 'Immersive Sound',
                        desc: 'Unlike traditional signage, our screens broadcast sound (directional) to capture both auditory and visual attention simultaneously.'
                    },
                    {
                        title: 'Detailed Reporting',
                        desc: 'Access precise statistics on broadcasts, audience reached, and the impact of your campaign in complete transparency.'
                    }
                ]
            },
            values: {
                title: 'Our Core Values',
                subtitle: 'Excellence at the service of your communication',
                list: [
                    { title: 'Innovation', desc: 'We constantly push technological boundaries to offer you the best communication media on the market.' },
                    { title: 'Performance', desc: 'Every campaign is optimized to guarantee maximum return on investment and exceptional visibility.' },
                    { title: 'Proximity', desc: 'With a dense network across Europe, we allow you to reach your customers as close as possible to their habits.' },
                    { title: 'Transparency', desc: 'We provide real and verifiable data for every impression, ensuring total trust in our partnership.' }
                ]
            },
            portfolio: {
                title: 'Our Excellence Portfolio',
                subtitle: 'Discover our most iconic installations across Europe.',
                viewProject: 'View Project'
            }
        },
        agency: {
            heroTitle: 'WHO ARE WE?',
            heroTitleHighlight: 'LUXIO MEDIA',
            heroHeaderDesc: 'Your strategic partner in digital signage and digital communication based in Luxembourg.',
            aboutUs: `Welcome to Luxio Media, your strategic partner in digital signage and digital communication, based in the heart of Luxembourg, the European hub for innovation and business.

Founded with the ambition to modernize the visual communication of companies and institutions, Luxio Media has quickly established itself as a reliable and innovative player in the field of professional LED screens, high-performance LCD display solutions, and custom digital communication devices.

Our solutions are designed to meet the requirements of urban, commercial, and institutional environments, and particularly cater to town halls and administrations, shopping centers, franchises, companies, sports facilities, hotels, restaurants, gaming rooms, events, as well as high-visibility public and private spaces.

With solid expertise and a forward-looking vision, our team supports each client from design to installation, through to maintenance and performance optimization. Thanks to a network of qualified partners and technicians, Luxio Media guarantees a local, reactive service adapted to Luxembourgish and European standards.

Luxio Media is the alliance of technology, visual impact, and bespoke support to give a new dimension to your communication.`,
            tagline: 'The alliance of technology, visual impact, and bespoke support.',
            cta: 'Contact Us'
        },
        projects: {
            heroTitle: 'Our',
            heroTitleHighlight: 'Projects',
            heroDesc: 'Discover how we transform spaces with our digital screens.',
            cta: 'View projects',
            list: [
                { id: 1, title: 'TotalEnergies Station', category: 'Fuel Advertising', image: '/WhatsApp Image 2025-12-25 at 10.13.14 AM (1).jpeg', link: '/solutions/fuel-advertising' },
                { id: 2, title: 'Shell EV Hub', category: 'Digital Pump', image: '/WhatsApp Image 2025-12-25 at 10.13.14 AM (2).jpeg', link: '/solutions/digital-pump' },
                { id: 3, title: 'Carrefour Market', category: 'Outdoor Display', image: '/WhatsApp Image 2025-12-25 at 10.13.15 AM.jpeg', link: '/solutions/outdoor-display' },
                { id: 4, title: 'Highway Rest Stop', category: 'Station Service Display', image: '/WhatsApp Image 2025-12-25 at 10.13.16 AM.jpeg', link: '/solutions/station-service-display' },
                { id: 5, title: 'City Center Kiosk', category: 'Digital Totems', image: '/WhatsApp Image 2025-12-25 at 10.13.16 AM (1).jpeg', link: '/solutions/digital-totems' },
                { id: 6, title: 'LED Wall Installation', category: 'LED Walls', image: '/WhatsApp Image 2025-12-25 at 10.13.17 AM.jpeg', link: '/solutions/led-walls' },
                { id: 7, title: 'Interactive Terminal', category: 'Interactive Kiosk', image: '/WhatsApp Image 2025-12-25 at 10.13.18 AM (1).jpeg', link: '/solutions/interactive-kiosk' },
                { id: 8, title: 'Menu Board', category: 'Menu Boards', image: '/WhatsApp Image 2025-12-25 at 10.13.20 AM.jpeg', link: '/solutions/menu-boards' }
            ]
        },
        resources: {
            heroTitle: 'Learn &',
            heroTitleHighlight: 'Get Inspired',
            heroDesc: 'Guides, studies, and tools to maximize the impact of your DOOH campaigns.',
            cta: 'Browse'
        },
        careers: {
            heroTitle: 'Join',
            heroTitleHighlight: 'the Adventure',
            heroDesc: 'Join the digital advertising revolution at service stations. We are looking for passionate talents.',
            cta: 'View openings'
        },
        investors: {
            heroTitle: 'Why Invest in',
            heroTitleHighlight: 'Luxio Media',
            heroDesc: 'Join the revolution of digital signage and DOOH from the technological heart of Europe.',
            cta: 'Discover the Opportunity',
            anchor: {
                title: 'Luxembourg as a Strategic European Anchor',
                content1: 'Based in Luxembourg, at the heart of Europe and one of the continent\'s most stable financial and business ecosystems, Luxio Media operates in an environment conducive to innovation, international project structuring, and attracting institutional investors.',
                content2: 'From Luxembourg, Luxio Media develops and steers Digital Out-Of-Home (DOOH) and digital signage strategies on a European scale, combining financial rigor, long-term vision, and operational execution.'
            },
            market: {
                title: 'A Rapidly Expanding Market: DOOH',
                desc: 'Luxio Media operates in a high-growth sector: Digital Out-Of-Home (DOOH), which is redefining how brands capture consumer attention in physical and digital spaces.',
                features: [
                    'measurable performance',
                    'geographical and contextual targeting',
                    'interactive and dynamic content',
                    'intelligent data exploitation'
                ]
            },
            mission: {
                title: 'Our Mission',
                desc: 'At Luxio Media, our ambition is to redefine outdoor communication for the digital era, offering high-value solutions for advertisers.',
                items: [
                    'Highly targeted and measurable DOOH campaigns, perfectly synchronized with brand digital ecosystems.',
                    'Integrated orchestration between physical impressions (LED screens, digital windows, totems, urban networks) and their amplification on social networks.',
                    'Intelligent broadcast technology combined with tailor-made support to maximize performance and ROI.'
                ]
            },
            model: {
                title: 'A Sustainable and Scalable Business Model',
                leviers: [
                    'Premium DOOH advertising space rental',
                    'Creative services and enriched content production',
                    'Data, targeting, and campaign optimization services',
                    'SaaS offers dedicated to automated DOOH planning'
                ],
                benefits: [
                    'High revenue recurrence',
                    'Natural scalability',
                    'Increasing value creation as the network expands'
                ]
            },
            traction: {
                title: 'Traction & Growth Opportunities',
                points: [
                    'Expanding DOOH screen network in Europe',
                    'Solid commercial pipeline and strategic partners',
                    'Differentiating positioning between DOOH and digital'
                ]
            },
            team: {
                title: 'Team & Governance',
                skills: [
                    'DOOH network deployment and operation',
                    'Digital marketing and amplification strategies',
                    'International development and scaling'
                ]
            },
            whyNow: {
                title: 'Why Invest Now',
                points: [
                    'scalable business model',
                    'differentiating technological expertise',
                    'sustained growth dynamics',
                    'seamless DOOH & digital integration'
                ],
                ambitions: [
                    'expansion into major European capitals',
                    'development of proprietary measurement solutions',
                    'implementation of strategic partnerships'
                ]
            },
            relations: {
                title: 'Investor Relations',
                desc: 'To access our investor file, detailed financial projections, and discuss investment opportunities, contact us:',
                email: 'investor@luxiomedia.lu',
                phone: '+352 661 167 725'
            }
        },
        contact: {
            heroTitle: 'Let\'s talk about',
            heroTitleHighlight: 'your project',
            title: 'Let\'s talk about your project',
            subtitle: 'Contact',
            desc: 'Grow your local visibility',
            formName: 'Full Name',
            formEmail: 'Email',
            formCompany: 'Company',
            formPhone: 'Phone',
            formSector: 'Industry Sector',
            formMessage: 'Your Message',
            submit: 'Send Message',
            success: 'Thank you for your message!',
            intro: 'Our team is at your disposal to assist you in setting up your digital signage campaign. Contact us for a personalized study.',
            followUs: 'Follow us',
            address: 'Address',
            formTitle: 'Send us a message',
            placeholders: {
                name: 'Your name',
                email: 'email@example.com',
                company: 'Company name',
                phone: 'X XX XX XX XX',
                sector: 'Select your industry',
                message: 'Describe your project...'
            },
            sectorsList: ['Automotive', 'Furniture', 'Real Estate', 'Leisure', 'Restaurants', 'Retail', 'Services', 'Other']
        },
        caseStudies: {
            heroTitle: 'A medium designed for',
            heroTitleHighlight: 'all sectors',
            heroDesc: 'Discover how our clients from different sectors use our screen network to grow their local visibility.',
            stats: {
                advertisers: 'Active Advertisers',
                sectors: 'Industry Sectors',
                satisfaction: 'Satisfaction Rate'
            },
            filterAll: 'All Sectors',
            sectors: {
                automobile: {
                    title: 'Automotive',
                    subtitle: 'advertisers',
                    desc: 'Generate qualified traffic in dealerships, promote new models, and boost Open House Days.'
                },
                ameublement: {
                    title: 'Furniture',
                    subtitle: 'advertisers',
                    desc: 'Drive in-store traffic, announce sales operations (Sales, Black Friday), and stand out from local competition.'
                },
                immobilier: {
                    title: 'Real Estate',
                    subtitle: 'advertisers',
                    desc: 'Promote new real estate developments, recruit agents/franchisees, and showcase expertise to local owners.'
                },
                loisirs: {
                    title: 'Leisure',
                    subtitle: 'advertisers',
                    desc: 'Increase physical visits through local targeting and promote seasonal events or school holiday offers.'
                }
            },
            details: {
                automobile: {
                    sector: "Automotive",
                    title: "Peugeot 3008 Hybrid Launch",
                    summary: "How Peugeot generated qualified dealership traffic and boosted test drives for the new 3008 Hybrid through a targeted DOOH campaign.",
                    challenge: "Peugeot wanted to maximize visibility for its new hybrid model and attract intent-driven prospects to dealerships during open house days, while specifically targeting the catchment areas of each dealer.",
                    solution: "Deployment of a digital signage campaign on 500 screens in service stations strategically located within 10km of participating dealerships. Use of dynamic 10-second video spots highlighting the design and launch offer.",
                    results: [
                        "+25% foot traffic in dealerships during the operation",
                        "1.5 Million contacts delivered to the driver target",
                        "45% aided recall rate post-campaign",
                        "Significant increase in test drive requests"
                    ],
                    stats: [
                        { value: "+25%", label: "Dealership Traffic" },
                        { value: "1.5M", label: "Impressions" },
                        { value: "45%", label: "Recall" },
                        { value: "500", label: "Screens Activated" }
                    ],
                    tags: ["Product Launch", "Drive-to-Store", "Automotive"],
                    image: "/WhatsApp Image 2025-12-25 at 10.13.14 AM (1).jpeg"
                },
                ameublement: {
                    sector: "Furniture",
                    title: "Leroy Merlin - Black Friday Operation",
                    summary: "An effective Drive-to-Store strategy for Leroy Merlin during Black Friday, increasing footfall and average basket size.",
                    challenge: "In a highly competitive context, Leroy Merlin wanted to stand out to announce its exclusive Black Friday offers and encourage consumers to visit the store rather than buying online.",
                    solution: "Massive broadcast of 'Countdown' promotional spots on digital screens at the entrance of commercial zones and in service stations. Dynamic update of offers based on stock and remaining days.",
                    results: [
                        "+18% store visits compared to the previous year",
                        "ROAS (Return on Ad Spend) of x4 over the period",
                        "Average basket increase thanks to the promotion of complementary items",
                        "High visibility in key catchment areas"
                    ],
                    stats: [
                        { value: "+18%", label: "Store Visits" },
                        { value: "x4", label: "ROAS" },
                        { value: "3M", label: "Total Views" },
                        { value: "100%", label: "Local Coverage" }
                    ],
                    tags: ["Black Friday", "Retail", "Promotion"],
                    image: "/WhatsApp Image 2025-12-25 at 10.13.15 AM.jpeg"
                },
                immobilier: {
                    sector: "Real Estate",
                    title: "Nexity - Eco-District Launch",
                    summary: "Successful promotion of a new eco-responsible real estate program to local residents and investors.",
                    challenge: "Nexity was launching an ambitious new program and needed to capture the attention of local residents (potential buyers) and passing investors, emphasizing quality of life and ecology.",
                    solution: "Hyper-proximity campaign on digital totems and pump screens within a 15km radius around the future construction site. Immersive 3D visuals of the project and QR code for immediate appointment booking.",
                    results: [
                        "50+ qualified leads generated in 2 weeks",
                        "80% of prospects came from the broadcast area",
                        "30% acceleration in pre-reservations",
                        "Local project awareness established even before the first stone"
                    ],
                    stats: [
                        { value: "50+", label: "Qualified Leads" },
                        { value: "80%", label: "Local Targeting" },
                        { value: "+30%", label: "Pre-reservations" },
                        { value: "15km", label: "Targeting Radius" }
                    ],
                    tags: ["Launch", "Real Estate", "Local"],
                    image: "/WhatsApp Image 2025-12-25 at 10.13.16 AM.jpeg"
                },
                loisirs: {
                    sector: "Leisure",
                    title: "Disneyland Paris - Halloween Season",
                    summary: "How Disneyland enchanted the public and boosted visits for its Halloween season with an immersive campaign.",
                    challenge: "Increase ticket sales for the Halloween season and promote special night events to families and young adults.",
                    solution: "Use of giant LED walls and outdoor screens to broadcast spectacular and colorful video teasers. Targeting school exit times and weekends to touch families.",
                    results: [
                        "Significant increase in ticket sales over the period",
                        "Record social media engagement linked to the campaign",
                        "Increased attendance at special parties",
                        "Strong visual impact reinforcing brand image"
                    ],
                    stats: [
                        { value: "Record", label: "Ticket Sales" },
                        { value: "High", label: "Attendance" },
                        { value: "+40%", label: "Social Engagement" },
                        { value: "4K", label: "Visual Quality" }
                    ],
                    tags: ["Tourism", "Events", "Family"],
                    image: "/WhatsApp Image 2025-12-25 at 10.13.17 AM.jpeg"
                }
            },
            featuredHeader: 'They trust us',
            featuredTitle: 'Our Clients',
            ctaTitle: 'Join our',
            ctaTitleHighlight: '3,400+ advertisers',
            ctaDesc: 'Grow your local visibility with our gas station screen network.',
            ctaBtn: 'Launch my campaign'
        },
        network: {
            subtitle: 'Our Network',
            titlePart1: 'A national network serving',
            titlePart2: 'local efficiency',
            desc1: 'With over 600 gas stations and nearly 4,000 screens in France and Luxembourg, you will definitely find a location near your establishment.',
            desc2: 'Whether you are a local or national advertiser, we meet various communication objectives.',
            cta: 'Find a screen near you'
        },
        stations: {
            subtitle: 'Our Assets',
            titlePart1: 'High performance',
            titlePart2: 'digital signage',
            notoriety: 'Brand Awareness',
            notorietyDesc: 'Broadcast your message on premium screens to effectively reach your target audience.',
            coverage: 'Coverage',
            coverageDesc: 'Activate a strategic campaign and be visible where your customers are.',
            captivating: 'Captivating',
            captivatingDesc: 'An immersive video format, seen and heard: a moment when attention is maximal.',
            bottomText: 'Communicate as close as possible to consumers in your catchment area for reinforced visibility.'
        },
        services: {
            headerTiny: 'Our Expertise',
            headerBig: '4 Digital Pillars',
            explore: 'Discover',
            s1Title: 'Website',
            s1Desc: 'Website Creation: A high-performance site for your business. Whether showcase or e-commerce, our web solutions maximize your online visibility and turn visitors into clients.',
            s2Title: 'Community Management',
            s2Desc: 'Engage your audience. Boost your image on social networks with our original and engaging content. Our Community Managers create strategies that turn subscribers into loyal customers.',
            s3Title: 'Digital Signage',
            s3Desc: 'Attract with innovative screens. Our digital signage solutions (interactive showcases, touch screens, LED walls) transform your space into a powerful communication tool.',
            s4Title: 'Video Creation',
            s4Desc: 'Sublimate your brand. From storytelling to promotional video, we create captivating content that highlights your brand across all channels (viral videos, conversion accrued).'
        },
        stats: {
            title: 'Impact',
            subtitle: 'Why choose Luxio Media, your digital agency?',
            screens: 'Satisfied Clients',
            countries: 'Years Activity',
            clients: 'Experts',
            support: 'Visibility'
        },
        common: {
            viewAll: 'View All',
            readMore: 'Read More',
            apply: 'Apply',
            download: 'Download',
            backToSolutions: "← Back to Solutions",
            keyFeatures: "Key Features",
            requestQuote: "Request a Quote",
            viewCaseStudies: "View Case Studies",
            whyChoose: "Why Choose",
            campaign: "Campaign",
            specifications: "Specifications",
            specsDescription: "Everything you need to know about running campaigns on this format.",
            applications: "Applications",
            useCases: "Use Cases",
            support: "Support",
            faq: "Frequently Asked Questions",
            exploreMore: "Explore More",
            relatedSolutions: "Related Solutions",
            learnMore: "Learn More",
            readyToStart: "Ready to Get Started with",
            ctaDescription: "Contact our team today to discuss your project requirements and get a customized solution tailored to your needs.",
            contactUs: "Contact Us",
            callUs: "Call",
            productGallery: "Product Gallery",
            ourProcess: "Our Process",
            howItWorks: "How It Works",
            industries: "Industries",
            industriesWeServe: "Industries We Serve",
            testimonials: "Testimonials",
            whatClientsSay: "What Our Clients Say",
            pricing: "Pricing",
            chooseYourPlan: "Choose Your Plan",
            recommended: "Recommended",
            getStarted: "Get Started"
        }
    },
    de: {
        nav: {
            solutions: 'Unsere Lösungen',
            whyFillup: 'Warum Luxio Media?',
            aboutUs: 'Über uns',
            caseStudies: 'Fallstudien',
            resources: 'Ressourcen',
            careers: 'Karriere',
            investors: 'Investoren',
            contact: 'Kontakt',
            startProject: 'Projekt starten',
            subtitles: {
                solutions: 'Unsere Lösungen',
                whyFillup: 'Warum Luxio Media wählen?',
                aboutUs: 'Erfahren Sie mehr über uns',
                caseStudies: 'Kundenerfolgsgeschichten',
                resources: 'Unsere Ressourcen',
                careers: 'Karriere / Melden Sie sich',
                investors: 'Investoren',
                contact: 'Kontaktieren Sie uns'
            },
            home: 'Startseite',
            projects: 'Projekte',
            agency: 'Agentur'
        },
        solutionPages: { ...solutionsPagesDE, legal: legal.de },
        footer: {
            contactCTA: 'Kontaktieren Sie uns',
            companyName: 'Luxio Media',
            tagline: 'Ihr Partner für Digital Signage in ganz Europa. Premium-Bildschirme für maximale Sichtbarkeit und Wirkung.',
            navTitle: 'Navigation',
            navItems: [
                { label: 'Startseite', path: '/' },
                { label: 'Warum Luxio Media', path: '/why-luxio' },
                { label: 'Lösungen', path: '/solutions' },
                { label: 'Kontakt', path: '/contact' }
            ],
            servicesTitle: 'Dienstleistungen',
            servicesList: [
                { label: 'Bildschirmübertragung', path: '/solutions#screen-diffusion' },
                { label: 'Digitale Anzeigen', path: '/solutions#digital-ads' },
                { label: 'Videoproduktion', path: '/solutions#video-production' },
                { label: 'Bildschirminstallation', path: '/solutions#screen-installation' }
            ],
            contactTitle: 'Kontakt',
            contactDetails: {
                email: 'contact@luxiomedia.lu',
                phone: '+352 661 16 77 25',
                addressLines: ['26 Bd Royal Level 5,', '2449 Ville-Haute Luxembourg']
            },
            legal: {
                rights: '© 2024 Luxio Media. Alle Rechte vorbehalten.',
                privacy: 'Datenschutzrichtlinie',
                terms: 'Nutzungsbedingungen',
                cookies: 'Cookies'
            }
        },
        home: {
            hero: 'Ihre Digitalagentur in Paris',
            heroBtn: 'Kontaktieren Sie mich',
            heroBtnSecondary: 'Bildschirm finden',
            servicesTitle: 'Unser Angebot',
            servicesSubtitle: 'Eine Komplettlösung',
            featured: 'Ausgewählte',
            featuredSubtitle: 'Bildschirme',
            statsTitle: 'Kennzahlen',
            networkTitle: 'Unser Netzwerk',
            testimonialsTitle: 'Referenzen',
            testimonials: {
                subtitle: 'Referenzen',
                title1: 'Kunden',
                title2: 'Geschichten',
                list: [
                    {
                        quote: "Luxio Media hat uns geholfen, unsere Sichtbarkeit bei der Zielgruppe zu vervielfachen. Ein reaktionsschnelles und professionelles Team.",
                        author: "Jean Dupont",
                        role: "Marketingleiter, Unternehmen ABC"
                    },
                    {
                        quote: "Die Qualität der Bildschirme und die Unterstützung bei der Erstellung unserer Inhalte haben den Unterschied für unsere Kampagne gemacht.",
                        author: "Marie Lambert",
                        role: "Kommunikationsmanagerin, Stadtverwaltung"
                    },
                    {
                        quote: "Ein vertrauenswürdiger Partner für unsere digitale Kommunikation. Die Ergebnisse sind konstant mit einem hervorragenden ROI.",
                        author: "Pierre Bernard",
                        role: "CEO, Innovations-Startup"
                    }
                ]
            },
            cta: {
                subtitle: 'Starten Sie noch heute',
                title1: 'Bereit zu',
                title2: 'Werben?',
                desc: 'Verleihen Sie Ihrer Marke die Sichtbarkeit, die sie verdient, mit unserem Premium-Digital-Signage-Netzwerk in ganz Europa.',
                btnPrimary: 'Angebot anfordern',
                btnSecondary: 'Kontaktieren Sie uns',
                orReach: 'Oder erreichen Sie uns unter'
            },
            pinterest: {
                subtitle: 'Unsere Installationen',
                title1: 'Ausgewählte',
                title2: 'Bildschirme',
                viewAll: 'Alle Bildschirme ansehen',
                categories: {
                    digitalDisplays: 'Digital Displays',
                    pumpDisplays: 'Pump Displays',
                    outdoorScreens: 'Outdoor Screens',
                    stationScreens: 'Station Screens',
                    freestandingDisplays: 'Freestanding Displays',
                    videoWalls: 'Video Walls',
                    touchDisplays: 'Touch Displays',
                    digitalMenus: 'Digital Menus',
                    digitalServices: 'Digital Marketing'
                },
                projects: [
                    { title: 'Tankstellen-Display', category: 'LCD-Bildschirme' },
                    { title: 'Digitale Zapfsäule', category: 'Digitale Totems' },
                    { title: 'Tankstellennetz', category: 'Außenbildschirme' },
                    { title: 'Außenanzeige', category: 'LED-Wände' },
                    { title: 'Werbebildschirm', category: 'Videowände' },
                    { title: 'Stationsnetzwerk', category: 'Menüboards' },
                    { title: 'Kraftstoffwerbung', category: 'Info-Displays' },
                    { title: 'Digitaler Bildschirm', category: 'Interaktiver Kiosk' }
                ]
            }
        },
        solutions: {
            title: 'Unsere Lösungen',
            heroTitle: 'Die Kraft der Anzeige, die Präzision des',
            heroTitleHighlight: 'Digitalen',
            heroDesc: 'Steigern Sie Ihre Markenbekanntheit durch die Kombination einer 100% verfügbaren Zielgruppe an Tankstellen mit gezielten Social-Media-Kampagnen.',
            heroScroll: 'Entdecken',
            statsLabel1: 'Aktive Bildschirme',
            statsLabel2: 'Monatliche Kontakte',
            statsLabel3: 'Werbetreibende',
            statsLabel4: 'Gefangenes Publikum',
            offerTitle: 'Unser Angebot',
            offerSubtitle1: 'Eine komplette',
            offerSubtitle2: 'Lösung',
            screenDiff: 'Bildschirmübertragung',
            screenDiffDesc: 'Gezielte Übertragung Ihrer Werbebotschaften auf unserem Netzwerk von 2000+ Bildschirmen an Tankstellen.',
            socialSynergy: 'Social Media Synergie',
            socialSynergyDesc: 'Verstärken Sie Ihre Wirkung mit synchronisierten Cross-Channel-Kampagnen auf Facebook & Instagram.',
            analytics: 'Analysen & Einblicke',
            analyticsDesc: 'Verfolgen Sie die Wirksamkeit Ihrer Kampagnen mit unseren Echtzeit-Mess- und Analysetools.',
            f1: ['Persönliche Beratung', 'Erstellung von 10s Animationsvideos', 'Professionelle Sprachaufnahme', 'Präzises Geo-Targeting'],
            f2: ['Multi-Format Video-Anpassung', 'Präzises Zielgruppen-Targeting', 'Optimiertes Kampagnenmanagement', 'Detailliertes Leistungsreporting'],
            f3: ['Echtzeit-Dashboard', 'Engagement-Metriken', 'Benutzerdefinierte Berichte', 'Kontinuierliche Optimierung'],
            synergyTitle: 'Cross-Channel Synergie',
            synergyHeader: 'Soziale Medien,',
            synergyHeaderHighlight: 'Kanal Nr. 1',
            synergyHeaderEnd: 'zur Optimierung von DOOH',
            synergyDesc: 'Maximieren Sie die Wirkung Ihrer Digital Signage Kampagnen durch eine integrierte Cross-Channel-Strategie. Unser Ansatz kombiniert die Kraft von Tankstellenanzeigen mit der Präzision von Facebook- und Instagram-Targeting.',
            synergyBtn: 'Kampagne starten',
            ctaTitle: 'Bereit, Ihre Kommunikation',
            ctaTitleHighlight: 'zu transformieren?',
            ctaDesc: 'Kontaktieren Sie unser Team, um zu erfahren, wie unsere Lösungen Ihre Sichtbarkeit verstärken können.',
            ctaBtn1: 'Kontaktieren Sie uns',
            ctaBtn2: 'Unsere Fallstudien ansehen',
            // Campaign Architecture Section
            campaignNetworkLabel: 'Luxemburg Netzwerk',
            campaignTitle: 'Kampagnenarchitektur & Media Stack',
            campaignIntro: 'Wir betreiben ein eigenes DOOH-Netzwerk in luxemburgischen Mobilitätszentren. Jeder Bildschirm, jedes Datensignal und jedes kreative Asset fließt in Luxios Trading Desk ein, um messbare Werbepläne zu liefern — kein Hardwareverkauf.',
            campaignTags: ['Forecourt DOOH', '100% gefangene Verweildauer', 'Landesweite Abdeckung', 'Garantierter Share of Voice', 'Soziale Verstärkung', 'Kreativstudio', 'Full-Funnel Reporting'],
            campaignHighlights: [
                { title: 'Eigenes Premium-Inventar', text: 'Über 2.000 großformatige TFT-Bildschirme an Tankstellen und Mobilitätszentren, bereits installiert und von unserem Betriebsteam gewartet.' },
                { title: 'Publikumsintelligenz', text: 'Tankdaten, Tageszeitclustering und POI-Layering liefern Mediapläne, die reale Verbraucherreisen widerspiegeln.' },
                { title: 'Kreationen, die Konvertieren', text: 'Motion Design, mehrsprachige Voice-Over und Social Cutdowns für 10-Sekunden-Verweildauer und Omnichannel-Konsistenz.' },
                { title: '360° Verstärkung', text: 'Meta, TikTok, Waze und programmatisches Retargeting halten Ihre Botschaft im Gedächtnis, lange nachdem Fahrer die Zapfsäule verlassen haben.' },
                { title: 'Transparente Leistung', text: 'Live-Dashboards, Store-Uplift-Korrelationen und Post-Kampagnen-Reviews verbinden jede Impression mit messbaren Geschäftsergebnissen.' }
            ],
            audienceInsightsTitle: 'Publikumseinblicke',
            audienceInsights: [
                { title: 'Gefangene Verweildauer', value: 'Durchschnittlich 4m 12s Tanksession mit Blick auf unsere TFT-Türme.' },
                { title: 'Haushaltsentscheider', value: '73% der Zuschauer identifizieren sich als Haupteinkäufer für Lebensmittel, Mobilität oder Freizeitausgaben.' },
                { title: 'Geo-Kontext', value: 'Benutzerdefinierte Perimeter (5 km bis landesweit) mit Sozio-Demo und Einzugsgebietslogik überlagert.' },
                { title: 'Tageszeit-Kontrolle', value: 'Frühstücks-, Pendel- und Wochenend-Bursts abgestimmt auf Produkteinführungen oder saisonale Spitzen.' }
            ],
            activationStackTitle: 'Aktivierungs-Stack',
            activationStack: [
                { title: 'Kreativstudio', value: 'Skripte, Storyboards und mehrsprachige Anpassung innerhalb von 7 Tagen geliefert.' },
                { title: 'Media Trading', value: 'Share-of-Voice-Garantien, Frequency Capping und A/B-Tests von Luxio-Tradern verwaltet.' },
                { title: 'Soziale Erweiterung', value: 'Lookalike-Audiences synchronisiert von Vor-Ort-Expositionen zu Meta, TikTok und programmatischen Pipelines.' },
                { title: 'Messungsebene', value: 'QR-Uplift, Ladenbesuche, Coupon-Einlösungen und Brand-Lift-Umfragen in einem Dashboard.' }
            ],
            mediaPlaybooksLabel: 'Media Playbooks',
            mediaPlaybooksTitle: 'Fertige Werbeprogramme',
            mediaPlaybooksDesc: 'Wählen Sie ein verwaltetes Playbook oder lassen Sie uns einen maßgeschneiderten Handelsplan von Luxemburg aus erstellen, der jede DOOH-Impression und ihr soziales Echo orchestriert.',
            campaignPackages: [
                { plan: 'Lokaler Boost', objective: 'Frequenz im Umkreis von 15 km um Ihr Filialnetz steigern.', channels: 'Forecourt DOOH + Meta Custom Audience', formats: '10s DOOH-Loop + bezahlter Social Cinemagraph', reporting: 'Wöchentliche Reichweiten- & Frequenz-Snapshots.' },
                { plan: 'Regionale Übernahme', objective: 'Die Konversation in wichtigen Retail-Perioden dominieren.', channels: 'TFT-Netzwerk + TikTok Spark Ads + Waze Pins', formats: 'Kontextuelles Video, Motion Statics, Audio-Callouts', reporting: 'Mid-Flight-Optimierung und Territori-Benchmarking.' },
                { plan: 'Nationaler Launch', objective: 'Bekanntheit für Produktlaunches oder Franchise-Rollouts skalieren.', channels: 'Landesweites DOOH + Programmatisches DOOH + Influencer Seeding', formats: 'Hero-Film, modulare Cutdowns, interaktive QR-Overlays', reporting: 'Full-Funnel-Dashboard mit Brand- & Sales-KPIs.' }
            ],
            campaignDeliverables: [
                { title: 'Strategie & Insights', items: ['Zielgruppen-Definitionsworkshops', 'Geo-Intelligence & POI-Mapping', 'Budget-Pacing + Flighting'] },
                { title: 'Kreativproduktion', items: ['Storyboard + Copywriting', 'Motion Design & Sound Design', 'Versionierung pro Sprache/Kanal'] },
                { title: 'Aktivierung & Ops', items: ['Netzwerkbuchung & Trafficking', 'Dynamische Tageszeit-Regeln', 'Compliance- & Brand-Safety-Checks'] },
                { title: 'Messung & Lernen', items: ['Echtzeit-Dashboards', 'Frequenz-/Umsatzattribution', 'Post-Kampagnen-Review & nächste Schritte'] }
            ],
            portfolioLabel: 'Unsere Arbeit',
            portfolioTitle: 'Unser Portfolio'
        },
        why: {
            heroTitle: 'Das Medium, das Ihre Kunden',
            heroTitleHighlight: 'begleitet',
            heroDesc: 'Nutzen Sie einen einzigartigen Moment in der Customer Journey: die Tankzeit. Ein 100% gefangenes Publikum, empfänglich für Ihre Botschaft.',
            advantagesTitle: 'Unsere Vorteile',
            adv1Title: 'Gefangenes Publikum',
            adv1Desc: 'Ein 100% verfügbares Publikum während der Tankzeit.',
            adv2Title: 'Geo-Targeting',
            adv2Desc: 'Zielen Sie genau auf Ihr Einzugsgebiet.',
            adv3Title: 'Digitale Synergie',
            adv3Desc: 'Verstärken Sie die Wirkung mit synchronisierten Social-Media-Kampagnen.',
            processTitle: 'Unser Prozess',
            adv4Title: 'Expertenunterstützung',
            adv4Desc: 'Ein engagiertes Team begleitet Sie von A bis Z: Strategie, Kreation, Ausstrahlung und Erfolgsmessung.',
            processSteps: [
                { step: '1', title: 'Strategiedefinition', desc: 'Analyse Ihrer Ziele und Definition der Kernbotschaft' },
                { step: '2', title: 'Content-Erstellung', desc: 'Produktion Ihres 10-sekündigen Animationsvideos mit Voice-Over' },
                { step: '3', title: 'Gezielte Ausstrahlung', desc: 'Geo-gezielte Übertragung auf Bildschirmen in Ihrer Umgebung' },
                { step: '4', title: 'Soziale Verstärkung', desc: 'Synchronisierte Facebook- & Instagram-Kampagnen' },
                { step: '5', title: 'Messung & Optimierung', desc: 'Detailliertes Reporting und kontinuierliche Optimierung' }
            ],
            stats: {
                screens: 'Bildschirme',
                contacts: 'Kontakte/Monat',
                advertisers: 'Werbetreibende',
                captive: 'Gefangenes Publikum'
            },
            cta: {
                title: 'Bereit, Ihre',
                titleHighlight: 'Sichtbarkeit zu steigern?',
                desc: 'Schließen Sie sich 3.400+ Werbetreibenden an, die Luxio Media ihre Kommunikation anvertrauen.',
                btn: 'Jetzt starten'
            },
            comparison: {
                title: 'Der Luxio Media Vorteil',
                us: 'Luxio Media',
                them: 'Andere Lösungen',
                rows: [
                    { feature: 'Publikumsaufmerksamkeit', us: '100% Fesselnd & Ton', them: 'Passiv & Geräuschlos' },
                    { feature: 'Targeting', us: 'Hyperlokal & Kontextuell', them: 'Breit & Ungenau' },
                    { feature: 'Kreativität', us: 'Integriertes Motion Studio', them: 'Standardanpassung' },
                    { feature: 'Messung', us: 'Präzise Daten & ROI', them: 'Schätzungen' }
                ]
            },
            features: {
                title: 'Spitzentechnologie',
                list: [
                    {
                        title: 'High-Definition-Bildschirme',
                        desc: 'LED- und LCD-Bildschirme der neuesten Generation, die selbst bei direkter Sonneneinstrahlung sichtbar sind, für eine tadellose Bildqualität, die Ihre Marke aufwertet.'
                    },
                    {
                        title: 'Intelligente Ausstrahlung',
                        desc: 'Unser Algorithmus optimiert die Ausstrahlung Ihrer Nachricht basierend auf Stoßzeiten und Publikumsprofil, um die Wirkung zu maximieren.'
                    },
                    {
                        title: 'Immersiver Sound',
                        desc: 'Im Gegensatz zu herkömmlicher Beschilderung übertragen unsere Bildschirme Ton (gerichtet), um gleichzeitig auditive und visuelle Aufmerksamkeit zu erregen.'
                    },
                    {
                        title: 'Detailliertes Reporting',
                        desc: 'Greifen Sie transparent auf präzise Statistiken zu Ausstrahlungen, erreichtem Publikum und der Wirkung Ihrer Kampagne zu.'
                    }
                ]
            }
        },
        agency: {
            heroTitle: 'WER SIND WIR?',
            heroTitleHighlight: 'LUXIO MEDIA',
            heroHeaderDesc: 'Ihr strategischer Partner für Digital Signage und digitale Kommunikation mit Sitz in Luxemburg.',
            aboutUs: `Willkommen bei Luxio Media, Ihrem strategischen Partner für digitale Beschilderung und digitale Kommunikation, mit Sitz im Herzen von Luxemburg, dem europäischen Drehkreuz für Innovation und Wirtschaft.

Gegründet mit dem Ehrgeiz, die visuelle Kommunikation von Unternehmen und Institutionen zu modernisieren, hat sich Luxio Media schnell als zuverlässiger und innovativer Akteur im Bereich professioneller LED-Bildschirme, leistungsstarker LCD-Display-Lösungen und maßgeschneiderter digitaler Kommunikationsgeräte etabliert.

Unsere Lösungen sind darauf ausgelegt, den Anforderungen städtischer, kommerzieller und institutioneller Umgebungen gerecht zu werden und richten sich insbesondere an Rathäuser und Verwaltungen, Einkaufszentren, Franchise-Unternehmen, Unternehmen, Sportstätten, Hotels, Restaurants, Spielzimmer, Veranstaltungen sowie an hochfrequentierte öffentliche und private Räume.

Mit solider Expertise und einer zukunftsorientierten Vision begleitet unser Team jeden Kunden vom Entwurf über die Installation bis hin zur Wartung und Leistungsoptimierung. Dank eines Netzwerks aus qualifizierten Partnern und Technikern garantiert Luxio Media einen lokalen, reaktionsschnellen Service, der an luxemburgische und europäische Standards angepasst ist.

Luxio Media ist die Allianz aus Technologie, visueller Wirkung und maßgeschneiderter Unterstützung, um Ihrer Kommunikation eine neue Dimension zu verleihen.`,
            tagline: 'Die Allianz aus Technologie, visueller Wirkung und maßgeschneiderter Unterstützung.',
            cta: 'Kontaktiere uns'
        },
        projects: {
            heroTitle: 'Unsere',
            heroTitleHighlight: 'Projekte',
            heroDesc: 'Entdecken Sie, wie unsere digitalen Lösungen Räume transformieren und Zielgruppen in ganz Europa begeistern.',
            cta: 'Projekte ansehen',
            list: [
                { id: 1, title: 'TotalEnergies Station', category: 'Kraftstoffwerbung', image: '/WhatsApp Image 2025-12-25 at 10.13.14 AM (1).jpeg', link: '/solutions/fuel-advertising' },
                { id: 2, title: 'Shell EV Hub', category: 'Digitale Zapfsäule', image: '/WhatsApp Image 2025-12-25 at 10.13.14 AM (2).jpeg', link: '/solutions/digital-pump' },
                { id: 3, title: 'Carrefour Market', category: 'Außenanzeige', image: '/WhatsApp Image 2025-12-25 at 10.13.15 AM.jpeg', link: '/solutions/outdoor-display' },
                { id: 4, title: 'Autobahnraststätte', category: 'Station-Service-Display', image: '/WhatsApp Image 2025-12-25 at 10.13.16 AM.jpeg', link: '/solutions/station-service-display' },
                { id: 5, title: 'Stadtzentrum Kiosk', category: 'Digitale Totems', image: '/WhatsApp Image 2025-12-25 at 10.13.16 AM (1).jpeg', link: '/solutions/digital-totems' },
                { id: 6, title: 'LED-Wand-Installation', category: 'LED-Wände', image: '/WhatsApp Image 2025-12-25 at 10.13.17 AM.jpeg', link: '/solutions/led-walls' },
                { id: 7, title: 'Interaktives Terminal', category: 'Interaktiver Kiosk', image: '/WhatsApp Image 2025-12-25 at 10.13.18 AM (1).jpeg', link: '/solutions/interactive-kiosk' },
                { id: 8, title: 'Menütafel', category: 'Digitale Menüboards', image: '/WhatsApp Image 2025-12-25 at 10.13.20 AM.jpeg', link: '/solutions/menu-boards' }
            ]
        },
        resources: {
            heroTitle: 'Lernen &',
            heroTitleHighlight: 'Inspirieren lassen',
            heroDesc: 'Leitfäden, Studien und Tools zur Maximierung Ihrer DOOH-Kampagnen.',
            cta: 'Durchsuchen'
        },
        careers: {
            heroTitle: 'Werde Teil',
            heroTitleHighlight: 'des Abenteuers',
            heroDesc: 'Nehmen Sie an der Revolution der digitalen Werbung an Tankstellen teil. Wir suchen leidenschaftliche Talente.',
            cta: 'Angebote ansehen'
        },
        investors: {
            heroTitle: 'Warum in',
            heroTitleHighlight: 'Luxio Media investieren',
            heroDesc: 'Beteiligen Sie sich an der Revolution von Digital Signage und DOOH aus dem technologischen Herzen Europas.',
            cta: 'Gelegenheit entdecken',
            anchor: {
                title: 'Luxemburg als strategischer europäischer Ankerpunkt',
                content1: 'Luxio Media hat seinen Sitz in Luxemburg, im Herzen Europas und in einem der stabilsten Finanz- und Wirtschafts-Ökosysteme des Kontinents. Das Unternehmen operiert in einem Umfeld, das Innovationen, die Strukturierung internationaler Projekte und die Gewinnung institutioneller Investoren begünstigt.',
                content2: 'Von Luxemburg aus entwickelt und steuert Luxio Media Digital Out-Of-Home (DOOH) und Digital Signage Strategien auf europäischer Ebene und kombiniert finanzielle Stringenz, langfristige Vision und operative Umsetzung.'
            },
            market: {
                title: 'Ein rasant wachsender Markt: DOOH',
                desc: 'Luxio Media bewegt sich im Zentrum eines wachstumsstarken Sektors: Digital Out-Of-Home (DOOH), der die Art und Weise neu definiert, wie Marken die Aufmerksamkeit der Verbraucher in physischen und digitalen Räumen gewinnen.',
                features: [
                    'messbare Leistung',
                    'geografisches und kontextbezogenes Targeting',
                    'Interaktion und Dynamik der Inhalte',
                    'intelligente Datennutzung'
                ]
            },
            mission: {
                title: 'Unsere Mission',
                desc: 'Unser Ziel bei Luxio Media ist es, die Außenwerbe-Kommunikation für das digitale Zeitalter neu zu definieren und Werbetreibenden Lösungen mit hohem Mehrwert anzubieten.',
                items: [
                    'Hochgradig zielgerichtete und messbare DOOH-Kampagnen, perfekt synchronisiert mit den digitalen Ökosystemen der Marken.',
                    'Integrierte Orchestrierung zwischen physischen Impressionen (LED-Bildschirme, digitale Schaufenster, Totems, städtische Netzwerke) and deren Verstärkung in sozialen Netzwerken.',
                    'Intelligente Übertragungstechnologie kombiniert mit maßgeschneiderter Unterstützung zur Maximierung von Leistung und ROI.'
                ]
            },
            model: {
                title: 'Ein nachhaltiges und skalierbares Geschäftsmodell',
                leviers: [
                    'Vermietung von Premium-DOOH-Werbeflächen',
                    'Kreativleistungen und Produktion angereicherter Inhalte',
                    'Daten-, Targeting- und Kampagnenoptimierungsdienste',
                    'SaaS-Angebote für die automatisierte DOOH-Planung'
                ],
                benefits: [
                    'Hohe Umsatzwiederkehr',
                    'Natürliche Skalierbarkeit',
                    'Steigende Wertschöpfung bei Netzerweiterung'
                ]
            },
            traction: {
                title: 'Traktion & Wachstumschancen',
                points: [
                    'Expandierendes DOOH-Netzwerk in Europa',
                    'Solide Vertriebspipeline und strategische Partner',
                    'Differenzierende Positionierung zwischen DOOH und Digital'
                ]
            },
            team: {
                title: 'Team & Governance',
                skills: [
                    'Bereitstellung und Betrieb von DOOH-Netzwerken',
                    'Digitales Marketing und Amplifikationsstrategien',
                    'Internationale Entwicklung und Skalierung'
                ]
            },
            whyNow: {
                title: 'Warum jetzt investieren',
                points: [
                    'skalierbares Geschäftsmodell',
                    'differenzierende Technologie-Expertise',
                    'anhaltende Wachstumsdynamik',
                    'nahtlose DOOH- & Digital-Integration'
                ],
                ambitions: [
                    'Expansion in die wichtigsten europäischen Hauptstädte',
                    'Entwicklung proprietärer Messlösungen',
                    'Aufbau strategischer Partnerships'
                ]
            },
            relations: {
                title: 'Investor Relations',
                desc: 'Um auf unsere Investoren-Unterlagen und detaillierten Finanzprognosen zuzugreifen und über Investitionsmöglichkeiten zu sprechen, kontaktieren Sie uns:',
                email: 'investor@luxiomedia.lu',
                phone: '+352 661 167 725'
            }
        },
        contact: {
            heroTitle: 'Lassen Sie uns über',
            heroTitleHighlight: 'Ihr Projekt sprechen',
            title: 'Lassen Sie uns über Ihr Projekt sprechen',
            subtitle: 'Kontakt',
            desc: 'Steigern Sie Ihre lokale Sichtbarkeit',
            formName: 'Vollständiger Name',
            formEmail: 'E-Mail',
            formCompany: 'Unternehmen',
            formPhone: 'Telefon',
            formSector: 'Branche',
            formMessage: 'Ihre Nachricht',
            submit: 'Nachricht senden',
            success: 'Vielen Dank für Ihre Nachricht!',
            intro: 'Unser Team steht Ihnen zur Verfügung, um Sie bei der Einrichtung Ihrer Digital Signage Kampagne zu unterstützen. Kontaktieren Sie uns für eine persönliche Beratung.',
            followUs: 'Folgen Sie uns',
            address: 'Adresse',
            formTitle: 'Senden Sie uns eine Nachricht',
            placeholders: {
                name: 'Ihr Name',
                email: 'email@beispiel.com',
                company: 'Firmenname',
                phone: 'X XX XX XX XX',
                sector: 'Wählen Sie Ihre Branche',
                message: 'Beschreiben Sie Ihr Projekt...'
            },
            sectorsList: ['Automobil', 'Möbel', 'Immobilien', 'Freizeit', 'Gastronomie', 'Einzelhandel', 'Dienstleistungen', 'Sonstige']
        },
        caseStudies: {
            heroTitle: 'Ein Medium für',
            heroTitleHighlight: 'alle Branchen',
            heroDesc: 'Entdecken Sie, wie unsere Kunden aus verschiedenen Branchen unser Bildschirmnetzwerk nutzen, um ihre lokale Sichtbarkeit zu erhöhen.',
            stats: {
                advertisers: 'Aktive Werbetreibende',
                sectors: 'Branchen',
                satisfaction: 'Zufriedenheitsrate'
            },
            filterAll: 'Alle Branchen',
            sectors: {
                automobile: {
                    title: 'Automobil',
                    subtitle: 'Werbetreibende',
                    desc: 'Generieren Sie qualifizierten Traffic im Autohaus, fördern Sie neue Modelle und steigern Sie Tage der offenen Tür.'
                },
                ameublement: {
                    title: 'Möbel',
                    subtitle: 'Werbetreibende',
                    desc: 'Steigern Sie den Traffic im Geschäft, kündigen Sie Verkaufsaktionen an (Sales, Black Friday) und heben Sie sich von der lokalen Konkurrenz ab.'
                },
                immobilier: {
                    title: 'Immobilien',
                    subtitle: 'Werbetreibende',
                    desc: 'Bewerben Sie neue Immobilienprojekte, rekrutieren Sie Makler/Franchisenehmer und präsentieren Sie Ihre Expertise lokalen Eigentümern.'
                },
                loisirs: {
                    title: 'Freizeit',
                    subtitle: 'Werbetreibende',
                    desc: 'Steigern Sie physische Besuche durch lokales Targeting und bewerben Sie saisonale Events oder Ferienangebote.'
                }
            },
            details: {
                automobile: {
                    sector: "Automobil",
                    title: "Peugeot 3008 Hybrid Launch",
                    summary: "Wie Peugeot qualifizierten Traffic im Autohaus generierte und Probefahrten für den neuen 3008 Hybrid durch eine gezielte DOOH-Kampagne steigerte.",
                    challenge: "Peugeot wollte die Sichtbarkeit seines neuen Hybridmodells maximieren und kaufbereite Interessenten während der Tage der offenen Tür in die Autohäuser locken, wobei speziell die Einzugsgebiete jedes Händlers angesprochen wurden.",
                    solution: "Einsatz einer Digital-Signage-Kampagne auf 500 Bildschirmen an Tankstellen, die strategisch günstig im Umkreis von 10 km um die teilnehmenden Autohäuser liegen. Verwendung dynamischer 10-Sekunden-Videospots, die das Design und das Einführungsangebot hervorheben.",
                    results: [
                        "+25% Besucherfrequenz im Autohaus während der Aktion",
                        "1,5 Millionen Kontakte in der Zielgruppe Autofahrer",
                        "45% gestützte Erinnerungsrate nach der Kampagne",
                        "Signifikante Steigerung der Probefahrtanfragen"
                    ],
                    stats: [
                        { value: "+25%", label: "Autohaus Traffic" },
                        { value: "1.5M", label: "Impressionen" },
                        { value: "45%", label: "Erinnerung" },
                        { value: "500", label: "Aktive Bildschirme" }
                    ],
                    tags: ["Produkteinführung", "Drive-to-Store", "Automobil"],
                    image: "/WhatsApp Image 2025-12-25 at 10.13.14 AM (1).jpeg"
                },
                ameublement: {
                    sector: "Möbel",
                    title: "Leroy Merlin - Black Friday Operation",
                    summary: "Eine effektive Drive-to-Store-Strategie für Leroy Merlin während des Black Fridays, die die Kundenfrequenz und den durchschnittlichen Warenkorb erhöhte.",
                    challenge: "In einem stark umkämpften Umfeld wollte sich Leroy Merlin abheben, um seine exklusiven Black-Friday-Angebote anzukündigen und die Verbraucher zu ermutigen, das Geschäft zu besuchen, anstatt online zu kaufen.",
                    solution: "Massive Ausstrahlung von 'Countdown'-Werbespots auf digitalen Bildschirmen am Eingang von Gewerbegebieten und an Tankstellen. Dynamische Aktualisierung der Angebote je nach Lagerbestand und verbleibenden Tagen.",
                    results: [
                        "+18% Ladenbesuche im Vergleich zum Vorjahr",
                        "ROAS (Return on Ad Spend) von x4 im Zeitraum",
                        "Erhöhung des durchschnittlichen Warenkorbs durch die Bewerbung ergänzender Artikel",
                        "Hohe Sichtbarkeit in den wichtigsten Einzugsgebieten"
                    ],
                    stats: [
                        { value: "+18%", label: "Ladenbesuche" },
                        { value: "x4", label: "ROAS" },
                        { value: "3M", label: "Gesamtansichten" },
                        { value: "100%", label: "Lokale Abdeckung" }
                    ],
                    tags: ["Black Friday", "Einzelhandel", "Promotion"],
                    image: "/WhatsApp Image 2025-12-25 at 10.13.15 AM.jpeg"
                },
                immobilier: {
                    sector: "Immobilien",
                    title: "Nexity - Öko-Viertel Launch",
                    summary: "Erfolgreiche Bewerbung eines neuen ökologisch verantwortlichen Immobilienprogramms bei Anwohnern und Investoren.",
                    challenge: "Nexity startete ein ehrgeiziges neues Programm und musste die Aufmerksamkeit der Anwohner (potenzielle Käufer) und durchreisender Investoren gewinnen, wobei der Schwerpunkt auf Lebensqualität und Ökologie lag.",
                    solution: "Hyper-Proximity-Kampagne auf digitalen Totems und Pumpenbildschirmen in einem Radius von 15 km um die zukünftige Baustelle. Immersive 3D-Visualisierungen des Projekts und QR-Code für sofortige Terminbuchung.",
                    results: [
                        "50+ qualifizierte Leads in 2 Wochen generiert",
                        "80% der Interessenten kamen aus dem Sendegebiet",
                        "30% Beschleunigung der Vorreservierungen",
                        "Lokale Bekanntheit des Projekts bereits vor der Grundsteinlegung etabliert"
                    ],
                    stats: [
                        { value: "50+", label: "Qualifizierte Leads" },
                        { value: "80%", label: "Lokales Targeting" },
                        { value: "+30%", label: "Vorreservierungen" },
                        { value: "15km", label: "Targeting Radius" }
                    ],
                    tags: ["Launch", "Immobilien", "Lokal"],
                    image: "/WhatsApp Image 2025-12-25 at 10.13.16 AM.jpeg"
                },
                loisirs: {
                    sector: "Freizeit",
                    title: "Disneyland Paris - Halloween Saison",
                    summary: "Wie Disneyland das Publikum verzauberte und die Besucherzahlen für seine Halloween-Saison mit einer immersiven Kampagne steigerte.",
                    challenge: "Steigerung des Ticketverkaufs für die Halloween-Saison und Bewerbung spezieller Abendveranstaltungen bei Familien und jungen Erwachsenen.",
                    solution: "Einsatz riesiger LED-Wände und Außenbildschirme zur Ausstrahlung spektakulärer und farbenfroher Video-Teaser. Ausrichtung auf Schulschlusszeiten und Wochenenden, um Familien zu erreichen.",
                    results: [
                        "Signifikante Steigerung des Ticketverkaufs im Zeitraum",
                        "Rekord-Engagement in sozialen Medien im Zusammenhang mit der Kampagne",
                        "Erhöhte Besucherzahlen bei Sonderveranstaltungen",
                        "Starke visuelle Wirkung stärkt das Markenimage"
                    ],
                    stats: [
                        { value: "Rekord", label: "Ticketverkauf" },
                        { value: "Hoch", label: "Besucher" },
                        { value: "+40%", label: "Social Engagement" },
                        { value: "4K", label: "Visuelle Qualität" }
                    ],
                    tags: ["Tourismus", "Events", "Familie"],
                    image: "/WhatsApp Image 2025-12-25 at 10.13.17 AM.jpeg"
                }
            },
            featuredHeader: 'Sie vertrauen uns',
            featuredTitle: 'Unsere Kunden',
            ctaTitle: 'Schließen Sie sich',
            ctaTitleHighlight: '3.400+ Werbetreibenden an',
            ctaDesc: 'Steigern Sie Ihre lokale Sichtbarkeit mit unserem Tankstellen-Bildschirmnetzwerk.',
            ctaBtn: 'Kampagne starten'
        },
        network: {
            subtitle: 'Unser Netzwerk',
            titlePart1: 'Ein nationales Netzwerk im Dienste der',
            titlePart2: 'lokalen Effizienz',
            desc1: 'Mit über 600 Tankstellen und fast 4.000 Bildschirmen in Frankreich finden Sie sicher einen Standort in der Nähe Ihres Unternehmens.',
            desc2: 'Ob Sie ein lokaler oder nationaler Werbetreibender sind, wir erfüllen verschiedene Kommunikationsziele.',
            cta: 'Einen Bildschirm in Ihrer Nähe finden'
        },
        stations: {
            subtitle: 'Unsere Vorteile',
            titlePart1: 'Leistungsstarke',
            titlePart2: 'digitale Beschilderung',
            notoriety: 'Markenbekanntheit',
            notorietyDesc: 'Senden Sie Ihre Botschaft auf Premium-Bildschirmen, um Ihre Zielgruppe effektiv zu erreichen.',
            coverage: 'Reichweite',
            coverageDesc: 'Aktivieren Sie eine strategische Kampagne und seien Sie dort sichtbar, wo Ihre Kunden sind.',
            captivating: 'Fesselnd',
            captivatingDesc: 'Ein immersives Videoformat, das gesehen und gehört wird: ein Moment maximaler Aufmerksamkeit.',
            bottomText: 'Kommunizieren Sie so nah wie möglich an den Verbrauchern in Ihrem Einzugsgebiet für verstärkte Sichtbarkeit.'
        },
        services: {
            headerTiny: 'Unsere Expertise',
            headerBig: '4 Digitale Säulen',
            explore: 'Entdecken',
            s1Title: 'Webseite',
            s1Desc: 'Website-Erstellung: Eine leistungsstarke Seite für Ihr Unternehmen. Ob Showcase oder E-Commerce, unsere Web-Lösungen maximieren Ihre Online-Sichtbarkeit und verwandeln Besucher in Kunden.',
            s2Title: 'Community Management',
            s2Desc: 'Engagieren Sie Ihr Publikum. Steigern Sie Ihr Image in sozialen Netzwerken mit unseren originellen und ansprechenden Inhalten. Unsere Community Manager entwickeln Strategien, die Abonnenten in treue Kunden verwandeln.',
            s3Title: 'Digital Signage',
            s3Desc: 'Ziehen Sie mit innovativen Bildschirmen an. Unsere Digital-Signage-Lösungen (interaktive Schaufenster, Touchscreens, LED-Wände) verwandeln Ihren Raum in ein leistungsstarkes Kommunikationstool.',
            s4Title: 'Videoerstellung',
            s4Desc: 'Veredeln Sie Ihre Marke. Von Storytelling bis hin zu Werbevideos erstellen wir fesselnde Inhalte, die Ihre Marke auf allen Kanälen hervorheben (virale Videos, erhöhte Konversion).'
        },
        stats: {
            title: 'Wirkung',
            subtitle: 'Warum Luxio Media, Ihre Digitalagentur, wählen?',
            screens: 'Zufriedene Kunden',
            countries: 'Jahre Aktivität',
            clients: 'Experten',
            support: 'Sichtbarkeit'
        },
        common: {
            viewAll: 'Alle ansehen',
            readMore: 'Mehr lesen',
            apply: 'Bewerben',
            download: 'Herunterladen',
            backToSolutions: "← Zurück zu Lösungen",
            keyFeatures: "Hauptmerkmale",
            requestQuote: "Angebot anfordern",
            viewCaseStudies: "Fallstudien ansehen",
            whyChoose: "Warum wählen",
            campaign: "Kampagne",
            specifications: "Spezifikationen",
            specsDescription: "Alles, was Sie über Kampagnen auf diesem Format wissen müssen.",
            applications: "Anwendungen",
            useCases: "Anwendungsfälle",
            support: "Support",
            faq: "Häufig gestellte Fragen",
            exploreMore: "Mehr entdecken",
            relatedSolutions: "Verwandte Lösungen",
            learnMore: "Mehr erfahren",
            readyToStart: "Bereit zu starten mit",
            ctaDescription: "Kontaktieren Sie unser Team noch heute, um Ihre Projektanforderungen zu besprechen und eine maßgeschneiderte Lösung zu erhalten.",
            contactUs: "Kontaktieren Sie uns",
            callUs: "Anrufen",
            productGallery: "Produktgalerie",
            ourProcess: "Unser Prozess",
            howItWorks: "Wie es funktioniert",
            industries: "Industrien",
            industriesWeServe: "Branchen, die wir bedienen",
            testimonials: "Testimonials",
            whatClientsSay: "Was unsere Kunden sagen",
            pricing: "Preise",
            chooseYourPlan: "Wählen Sie Ihren Plan",
            recommended: "Empfohlen",
            getStarted: "Loslegen"
        }
    }
};
