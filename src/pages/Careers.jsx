import React from 'react'
import { Link } from 'react-router-dom'
import FooterSection from '../components/home/FooterSection'
import PageHero from '../components/common/PageHero'
import LottieVisual from '../components/common/LottieVisual'
import { useLanguage } from '../context/LanguageContext'

const Careers = () => {
    const { t } = useLanguage()

    const values = [
        {
            icon: (
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M13 10V3L4 14h7v7l9-11h-7z' />
                </svg>
            ),
            title: 'Innovation',
            description: 'Nous repoussons constamment les limites de la publicité digitale pour offrir des solutions créatives et efficaces.'
        },
        {
            icon: (
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
            ),
            title: 'Collaboration',
            description: 'Une équipe soudée où chaque voix compte. Nous croyons en la force du collectif.'
        },
        {
            icon: (
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                </svg>
            ),
            title: 'Excellence',
            description: 'Nous visons l\'excellence dans tout ce que nous faisons, de la stratégie à l\'exécution.'
        },
        {
            icon: (
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
            ),
            title: 'Impact',
            description: 'Nous créons un impact réel pour nos clients et contribuons à la transformation du paysage publicitaire.'
        }
    ]

    const openings = [
        {
            title: 'Account Manager',
            department: 'Commercial',
            location: 'Luxembourg',
            type: 'CDI'
        },
        {
            title: 'Motion Designer',
            department: 'Création',
            location: 'Luxembourg',
            type: 'CDI'
        },
        {
            title: 'Data Analyst',
            department: 'Tech',
            location: 'Luxembourg',
            type: 'CDI'
        },
        {
            title: 'Campaign Manager',
            department: 'Opérations',
            location: 'Luxembourg',
            type: 'CDI'
        },
        {
            title: 'Business Developer',
            department: 'Commercial',
            location: 'Luxembourg',
            type: 'CDI'
        }
    ]

    const benefits = [
        'Télétravail flexible',
        'Tickets restaurant',
        'Mutuelle premium',
        'Formation continue',
        'Événements team building',
        'Équipement de qualité'
    ]

    return (
        <div className='bg-black text-white min-h-screen'>
            {/* Hero Section */}
            <PageHero
                title={t('careers.heroTitle')}
                highlight={t('careers.heroTitleHighlight')}
                description={t('careers.heroDesc')}
                ctaText={t('careers.cta')}
                ctaLink="#openings"
                visual={<LottieVisual url="https://assets5.lottiefiles.com/packages/lf20_5tl1xxnz.json" />}
            />

            {/* Values Section */}
            <section className='py-20 lg:py-32 px-4 lg:px-12 bg-gradient-to-b from-zinc-950 to-black'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center mb-16'>
                        <span className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4 block'>
                            Nos Valeurs
                        </span>
                        <h2 className='font-[font2] text-white text-[8vw] lg:text-[3vw] uppercase'>
                            Ce qui nous définit
                        </h2>
                    </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className='group p-8 rounded-3xl border border-white/10 hover:border-[#D3FD50]/50 bg-gradient-to-br from-white/5 to-transparent transition-all duration-500 text-center'
                            >
                                <div className='w-16 h-16 mx-auto rounded-2xl bg-[#D3FD50]/10 flex items-center justify-center text-[#D3FD50] mb-6 group-hover:bg-[#D3FD50]/20 transition-colors duration-300'>
                                    {value.icon}
                                </div>
                                <h3 className='font-[font2] text-white text-xl mb-3 group-hover:text-[#D3FD50] transition-colors duration-300'>
                                    {value.title}
                                </h3>
                                <p className='font-[font1] text-white/60 text-sm leading-relaxed'>
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="openings" className='py-20 lg:py-32 px-4 lg:px-12'>
                <div className='max-w-5xl mx-auto'>
                    <div className='text-center mb-16'>
                        <span className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4 block'>
                            Postes Ouverts
                        </span>
                        <h2 className='font-[font2] text-white text-[8vw] lg:text-[3vw] uppercase'>
                            Nos opportunités
                        </h2>
                    </div>

                    <div className='space-y-4'>
                        {openings.map((job, index) => (
                            <div
                                key={index}
                                className='group p-6 lg:p-8 rounded-2xl border border-white/10 hover:border-[#D3FD50]/50 bg-white/5 hover:bg-[#D3FD50]/5 transition-all duration-300 cursor-pointer'
                            >
                                <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-4'>
                                    <div>
                                        <h3 className='font-[font2] text-white text-lg lg:text-xl group-hover:text-[#D3FD50] transition-colors duration-300'>
                                            {job.title}
                                        </h3>
                                        <div className='flex flex-wrap gap-3 mt-2'>
                                            <span className='text-white/50 text-sm'>{job.department}</span>
                                            <span className='text-white/30'>•</span>
                                            <span className='text-white/50 text-sm'>{job.location}</span>
                                            <span className='text-white/30'>•</span>
                                            <span className='text-[#D3FD50] text-sm'>{job.type}</span>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2 text-white/40 group-hover:text-[#D3FD50] transition-colors duration-300'>
                                        <span className='font-[font1] text-sm'>Postuler</span>
                                        <svg className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Spontaneous Application */}
                    <div className='mt-12 p-8 lg:p-12 rounded-3xl border border-[#D3FD50]/30 bg-gradient-to-br from-[#D3FD50]/10 to-transparent text-center'>
                        <h3 className='font-[font2] text-white text-xl lg:text-2xl mb-4'>
                            Candidature spontanée
                        </h3>
                        <p className='font-[font1] text-white/60 text-base mb-6'>
                            Vous ne trouvez pas le poste idéal ? Envoyez-nous votre CV !
                        </p>
                        <Link
                            to='/contact'
                            className='inline-flex items-center gap-3 px-6 py-3 bg-[#D3FD50] text-black font-[font2] text-sm uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300'
                        >
                            Nous contacter
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className='py-20 lg:py-32 px-4 lg:px-12 bg-gradient-to-t from-zinc-950 to-black'>
                <div className='max-w-5xl mx-auto'>
                    <div className='text-center mb-16'>
                        <span className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4 block'>
                            Avantages
                        </span>
                        <h2 className='font-[font2] text-white text-[8vw] lg:text-[3vw] uppercase'>
                            Ce que nous offrons
                        </h2>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6'>
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className='p-6 rounded-2xl border border-white/10 bg-white/5 text-center hover:border-[#D3FD50]/30 transition-colors duration-300'
                            >
                                <span className='font-[font1] text-white text-sm lg:text-base'>
                                    {benefit}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    )
}

export default Careers
