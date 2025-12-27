import React from 'react'
import { Link } from 'react-router-dom'
import FooterSection from '../components/home/FooterSection'
import PageHero from '../components/common/PageHero'
import LottieVisual from '../components/common/LottieVisual'
import { useLanguage } from '../context/LanguageContext'

const Resources = () => {
    const { t } = useLanguage()

    const resourcesList = [
        {
            type: 'Guide',
            title: 'Guide de lancement campagne DOOH',
            description: 'Tout ce que vous devez savoir pour réussir votre première campagne d\'affichage digital.',
            icon: '📖',
            image: '/WhatsApp Image 2025-12-25 at 10.13.14 AM (2).jpeg'
        },
        {
            type: 'Étude',
            title: 'Impact du DOOH sur le trafic en point de vente',
            description: 'Découvrez les résultats de notre étude sur l\'efficacité de l\'affichage digital en stations-service.',
            icon: '📊',
            image: '/WhatsApp Image 2025-12-25 at 10.13.15 AM.jpeg'
        },
        {
            type: 'Webinar',
            title: 'Synergie DOOH + Social Media',
            description: 'Comment maximiser l\'impact de vos campagnes avec une approche cross-canal intégrée.',
            icon: '🎥',
            image: '/WhatsApp Image 2025-12-25 at 10.13.17 AM.jpeg'
        },
        {
            type: 'Infographie',
            title: 'Les chiffres clés du marché DOOH en France',
            description: 'Une vue d\'ensemble du marché de l\'affichage digital Out Of Home en 2024.',
            icon: '📈',
            image: '/WhatsApp Image 2025-12-25 at 10.13.18 AM (1).jpeg'
        },
        {
            type: 'Template',
            title: 'Kit de création vidéo publicitaire',
            description: 'Modèles et bonnes pratiques pour créer des spots vidéo efficaces de 10 secondes.',
            icon: '✨',
            image: '/WhatsApp Image 2025-12-25 at 10.13.20 AM.jpeg'
        },
        {
            type: 'Case Study',
            title: 'Success Stories par secteur',
            description: 'Retours d\'expérience détaillés de nos clients dans l\'automobile, l\'immobilier et le retail.',
            icon: '🏆',
            image: '/WhatsApp Image 2025-12-25 at 10.13.16 AM.jpeg'
        }
    ]

    const faqs = [
        {
            question: 'Combien coûte une campagne ?',
            answer: 'Le coût dépend de la durée, de la zone géographique et du nombre d\'écrans. Contactez-nous pour un devis personnalisé.'
        },
        {
            question: 'Quelle est la durée minimale d\'une campagne ?',
            answer: 'Nos campagnes commencent à partir de 2 semaines minimum pour garantir une visibilité optimale.'
        },
        {
            question: 'Comment créer ma vidéo publicitaire ?',
            answer: 'Notre équipe créative prend en charge la conception de votre spot vidéo de 10 secondes, incluant l\'animation et la voix-off.'
        },
        {
            question: 'Comment mesurer les résultats ?',
            answer: 'Vous recevez des rapports détaillés incluant le nombre d\'affichages, la couverture géographique et les insights social media.'
        }
    ]

    return (
        <div className='bg-[#050505] text-white min-h-screen overflow-x-hidden'>
            {/* Hero Section */}
            <PageHero
                title={t('resources.heroTitle')}
                highlight={t('resources.heroTitleHighlight')}
                description={t('resources.heroDesc')}
                ctaText={t('resources.cta')}
                ctaLink="#resources-grid"
                visual={<LottieVisual url="https://assets3.lottiefiles.com/packages/lf20_sk5h1kfn.json" />}
            />

            {/* Resources Grid - Premium Tile Design */}
            <section id="resources-grid" className='relative py-12 lg:py-20 px-6'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {resourcesList.map((item, index) => (
                            <div key={index} className='group relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 hover:border-[#D3FD50]/50 transition-all duration-700 bg-black'>
                                <img src={item.image} className='absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700' alt='' />
                                <div className='absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent' />

                                <div className='absolute inset-0 p-10 flex flex-col justify-end'>
                                    <span className='inline-block px-3 py-1 bg-[#D3FD50]/10 text-[#D3FD50] text-[10px] font-[font2] uppercase tracking-[0.2em] rounded-full mb-6 w-fit'>
                                        {item.type}
                                    </span>

                                    <div className='w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-3xl mb-6 group-hover:bg-[#D3FD50] group-hover:text-black transition-all duration-300'>
                                        {item.icon}
                                    </div>

                                    <h3 className='font-[font2] text-2xl mb-4 uppercase leading-tight group-hover:text-[#D3FD50] transition-colors'>
                                        {item.title}
                                    </h3>

                                    <p className='text-white/40 font-[font1] text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500'>
                                        {item.description}
                                    </p>

                                    <div className='flex items-center gap-3 text-[#D3FD50] font-[font2] text-[10px] uppercase tracking-widest translate-y-8 group-hover:translate-y-0 transition-all duration-500'>
                                        Accéder
                                        <svg className='w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section - Clean & Tight */}
            <section className='relative py-12 lg:py-20 px-6 bg-[#080808]'>
                <div className='max-w-4xl mx-auto'>
                    <div className='text-center mb-12 lg:mb-16'>
                        <span className='text-[#D3FD50] font-[font1] text-[10px] tracking-[0.4em] uppercase mb-4 block'>
                            FAQ
                        </span>
                        <h2 className='font-[font2] text-white text-4xl lg:text-6xl uppercase tracking-tighter'>
                            Questions fréquentes
                        </h2>
                    </div>

                    <div className='grid gap-4'>
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className='group p-8 rounded-3xl border border-white/5 bg-white/5 hover:border-[#D3FD50]/30 transition-all duration-300'
                            >
                                <h4 className='font-[font2] text-white text-lg mb-4 uppercase tracking-wide group-hover:text-[#D3FD50] transition-colors'>
                                    {faq.question}
                                </h4>
                                <p className='font-[font1] text-white/40 text-sm lg:text-base leading-relaxed'>
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className='text-center mt-12'>
                        <Link
                            to='/contact'
                            className='inline-flex items-center gap-4 px-10 py-4 bg-[#D3FD50] text-black font-[font2] text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_rgba(211,253,80,0.2)]'
                        >
                            Contactez-nous
                        </Link>
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    )
}

export default Resources
