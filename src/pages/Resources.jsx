import React from 'react'
import { Link } from 'react-router-dom'
import FooterSection from '../components/home/FooterSection'
import PageHero from '../components/common/PageHero'
import LottieVisual from '../components/common/LottieVisual'
import { useLanguage } from '../context/LanguageContext'

const Resources = () => {
    const { t } = useLanguage()

    const resources = [
        {
            type: 'Guide',
            title: 'Guide de lancement campagne DOOH',
            description: 'Tout ce que vous devez savoir pour réussir votre première campagne d\'affichage digital.',
            icon: (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
                </svg>
            )
        },
        {
            type: 'Étude',
            title: 'Impact du DOOH sur le trafic en point de vente',
            description: 'Découvrez les résultats de notre étude sur l\'efficacité de l\'affichage digital en stations-service.',
            icon: (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                </svg>
            )
        },
        {
            type: 'Webinar',
            title: 'Synergie DOOH + Social Media',
            description: 'Comment maximiser l\'impact de vos campagnes avec une approche cross-canal intégrée.',
            icon: (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' />
                </svg>
            )
        },
        {
            type: 'Infographie',
            title: 'Les chiffres clés du marché DOOH en France',
            description: 'Une vue d\'ensemble du marché de l\'affichage digital Out Of Home en 2024.',
            icon: (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z' />
                </svg>
            )
        },
        {
            type: 'Template',
            title: 'Kit de création vidéo publicitaire',
            description: 'Modèles et bonnes pratiques pour créer des spots vidéo efficaces de 10 secondes.',
            icon: (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
                </svg>
            )
        },
        {
            type: 'Case Study',
            title: 'Success Stories par secteur',
            description: 'Retours d\'expérience détaillés de nos clients dans l\'automobile, l\'immobilier et le retail.',
            icon: (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z' />
                </svg>
            )
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
        <div className='bg-black text-white min-h-screen'>
            {/* Hero Section */}
            <PageHero
                title={t('resources.heroTitle')}
                highlight={t('resources.heroTitleHighlight')}
                description={t('resources.heroDesc')}
                ctaText={t('resources.cta')}
                ctaLink="#resources"
                visual={<LottieVisual url="https://assets3.lottiefiles.com/packages/lf20_sk5h1kfn.json" />}
            />

            {/* Resources Grid */}
            <section id="resources" className='py-20 lg:py-32 px-4 lg:px-12'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                        {resources.map((resource, index) => (
                            <div
                                key={index}
                                className='group p-8 rounded-3xl border border-white/10 hover:border-[#D3FD50]/50 bg-gradient-to-br from-white/5 to-transparent transition-all duration-500 hover:scale-[1.02] cursor-pointer'
                            >
                                {/* Type Badge */}
                                <span className='inline-block px-3 py-1 bg-[#D3FD50]/10 text-[#D3FD50] text-xs font-[font1] uppercase tracking-wider rounded-full mb-6'>
                                    {resource.type}
                                </span>

                                {/* Icon */}
                                <div className='w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:text-[#D3FD50] group-hover:bg-[#D3FD50]/10 transition-all duration-300 mb-6'>
                                    {resource.icon}
                                </div>

                                {/* Content */}
                                <h3 className='font-[font2] text-white text-lg lg:text-xl mb-3 group-hover:text-[#D3FD50] transition-colors duration-300'>
                                    {resource.title}
                                </h3>
                                <p className='font-[font1] text-white/60 text-sm leading-relaxed mb-6'>
                                    {resource.description}
                                </p>

                                {/* CTA */}
                                <div className='flex items-center gap-2 text-white/40 group-hover:text-[#D3FD50] transition-colors duration-300'>
                                    <span className='text-sm font-[font1]'>Accéder</span>
                                    <svg className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className='py-20 lg:py-32 px-4 lg:px-12 bg-gradient-to-b from-zinc-950 to-black'>
                <div className='max-w-4xl mx-auto'>
                    <div className='text-center mb-16'>
                        <span className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4 block'>
                            FAQ
                        </span>
                        <h2 className='font-[font2] text-white text-[8vw] lg:text-[3vw] uppercase'>
                            Questions fréquentes
                        </h2>
                    </div>

                    <div className='space-y-4'>
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className='p-6 lg:p-8 rounded-2xl border border-white/10 hover:border-[#D3FD50]/30 bg-white/5 transition-all duration-300'
                            >
                                <h4 className='font-[font2] text-white text-lg mb-3'>
                                    {faq.question}
                                </h4>
                                <p className='font-[font1] text-white/60 text-sm lg:text-base leading-relaxed'>
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className='text-center mt-12'>
                        <p className='font-[font1] text-white/60 mb-4'>
                            Vous avez d'autres questions ?
                        </p>
                        <Link
                            to='/contact'
                            className='inline-flex items-center gap-3 px-6 py-3 bg-[#D3FD50] text-black font-[font2] text-sm uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300'
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
