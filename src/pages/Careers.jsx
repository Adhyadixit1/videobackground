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
            icon: '⚡',
            title: 'Innovation',
            description: 'Nous repoussons constamment les limites de la publicité digitale pour offrir des solutions créatives et efficaces.'
        },
        {
            icon: '🤝',
            title: 'Collaboration',
            description: 'Une équipe soudée où chaque voix compte. Nous croyons en la force du collectif.'
        },
        {
            icon: '💎',
            title: 'Excellence',
            description: 'Nous visons l\'excellence dans tout ce que nous faisons, de la stratégie à l\'exécution.'
        },
        {
            icon: '🌍',
            title: 'Impact',
            description: 'Nous créons un impact réel pour nos clients et contribuons à la transformation du paysage publicitaire.'
        }
    ]

    const openingsList = [
        {
            title: 'Account Manager',
            department: 'Commercial',
            location: 'Luxembourg',
            type: 'CDI',
            reward: 'Premium Package'
        },
        {
            title: 'Motion Designer',
            department: 'Création',
            location: 'Luxembourg',
            type: 'CDI',
            reward: 'Creative Freedom'
        },
        {
            title: 'Data Analyst',
            department: 'Tech',
            location: 'Luxembourg',
            type: 'CDI',
            reward: 'Modern Stack'
        },
        {
            title: 'Campaign Manager',
            department: 'Opérations',
            location: 'Luxembourg',
            type: 'CDI',
            reward: 'Strategic Role'
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
        <div className='bg-[#050505] text-white min-h-screen overflow-x-hidden'>
            {/* Hero Section */}
            <PageHero
                title={t('careers.heroTitle')}
                highlight={t('careers.heroTitleHighlight')}
                description={t('careers.heroDesc')}
                ctaText={t('careers.cta')}
                ctaLink="#openings"
                visual={<LottieVisual url="https://assets5.lottiefiles.com/packages/lf20_5tl1xxnz.json" />}
            />

            {/* Values Section - High Profile Design */}
            <section className='relative py-12 lg:py-20 px-6'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center mb-12 lg:mb-16'>
                        <span className='text-[#D3FD50] font-[font1] text-[10px] tracking-[0.4em] uppercase mb-4 block'>
                            Nos Valeurs
                        </span>
                        <h2 className='font-[font2] text-white text-4xl lg:text-7xl uppercase tracking-tighter'>
                            Ce qui nous définit
                        </h2>
                    </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-1'>
                        {values.map((item, index) => (
                            <div key={index} className='p-10 bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-all duration-500 group'>
                                <div className='text-4xl mb-8 group-hover:scale-110 transition-transform duration-500'>{item.icon}</div>
                                <h3 className='font-[font2] text-xl mb-4 uppercase tracking-wide group-hover:text-[#D3FD50] transition-colors'>{item.title}</h3>
                                <p className='text-white/40 font-[font1] text-xs leading-relaxed'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions - Modern Minimalist List */}
            <section id="openings" className='relative py-12 lg:py-20 px-6 bg-[#080808]'>
                <div className='max-w-5xl mx-auto'>
                    <div className='flex flex-col lg:flex-row justify-between items-end gap-10 mb-12 lg:mb-16'>
                        <div className='max-w-2xl'>
                            <span className='text-[#D3FD50] font-[font1] text-xs tracking-[0.4em] uppercase mb-4 block'>
                                Postes Ouverts
                            </span>
                            <h2 className='font-[font2] text-4xl lg:text-7xl leading-none text-white uppercase'>
                                Nos opportunités
                            </h2>
                        </div>
                    </div>

                    <div className='divide-y divide-white/5'>
                        {openingsList.map((job, index) => (
                            <div key={index} className='group py-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 hover:px-8 transition-all duration-500 cursor-pointer'>
                                <div className='space-y-4'>
                                    <div className='flex items-center gap-4'>
                                        <h3 className='font-[font2] text-2xl lg:text-4xl uppercase tracking-tight group-hover:text-[#D3FD50] transition-colors'>
                                            {job.title}
                                        </h3>
                                        <span className='px-3 py-1 bg-[#D3FD50]/10 text-[#D3FD50] text-[10px] font-[font2] uppercase tracking-widest rounded-full opacity-0 group-hover:opacity-100 transition-all'>
                                            {job.reward}
                                        </span>
                                    </div>
                                    <div className='flex flex-wrap gap-4 font-[font1] text-xs uppercase tracking-widest text-white/30'>
                                        <span>{job.department}</span>
                                        <span>•</span>
                                        <span>{job.location}</span>
                                        <span>•</span>
                                        <span className='text-white/60'>{job.type}</span>
                                    </div>
                                </div>
                                <div className='flex items-center gap-6'>
                                    <div className='w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#D3FD50] group-hover:border-[#D3FD50] transition-all duration-500'>
                                        <svg className='w-6 h-6 text-white group-hover:text-black transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Spontaneous Application */}
                    <div className='mt-20 p-10 lg:p-16 rounded-[40px] bg-white/[0.02] border border-white/5 relative overflow-hidden text-center'>
                        <div className='absolute -top-20 -right-20 w-64 h-64 bg-[#D3FD50]/5 blur-[80px] rounded-full' />
                        <h3 className='font-[font2] text-2xl lg:text-4xl uppercase mb-6'>Candidature spontanée</h3>
                        <p className='text-white/40 font-[font1] text-base lg:text-lg max-w-xl mx-auto mb-10'>
                            Vous ne trouvez pas le poste idéal ? Notre réseau grandit chaque jour. Envoyez-nous votre dossier.
                        </p>
                        <Link
                            to='/contact'
                            className='inline-flex items-center gap-4 px-10 py-4 border border-white/20 text-white font-[font2] text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-white hover:text-black transition-all'
                        >
                            Soumettre mon CV
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits - Modern Grid List */}
            <section className='relative py-12 lg:py-20 px-6'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center mb-12 lg:mb-16'>
                        <span className='text-[#D3FD50] font-[font1] text-[10px] tracking-[0.4em] uppercase mb-4 block'>
                            Avantages
                        </span>
                        <h2 className='font-[font2] text-white text-4xl lg:text-6xl uppercase tracking-tighter'>
                            Ce que nous offrons
                        </h2>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-3 gap-1'>
                        {benefits.map((benefit, index) => (
                            <div key={index} className='p-12 bg-white/[0.02] border border-white/5 text-center group hover:bg-white/[0.05] transition-all'>
                                <span className='font-[font2] text-white/40 text-xs uppercase tracking-widest group-hover:text-white transition-colors duration-500'>
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
