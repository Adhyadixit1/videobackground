import React from 'react'
import { Link } from 'react-router-dom'
import FooterSection from '../components/home/FooterSection'
import PageHero from '../components/common/PageHero'
import { useLanguage } from '../context/LanguageContext'

const Investors = () => {
    const { t } = useLanguage()

    const keyMetrics = [
        { value: '2000+', label: 'Écrans déployés', growth: '+25% vs 2023' },
        { value: '15M', label: 'Contacts mensuels', growth: '+40% vs 2023' },
        { value: '3400+', label: 'Annonceurs actifs', growth: '+30% vs 2023' },
        { value: '€XXM', label: 'Chiffre d\'affaires', growth: 'En croissance' }
    ]

    const milestones = [
        { year: '2018', title: 'Création', description: 'Fondation de Luxia media avec une vision claire : révolutionner la publicité en stations-service.' },
        { year: '2019', title: 'Premiers écrans', description: 'Déploiement des 100 premiers écrans dans les stations Esso et Total.' },
        { year: '2020', title: 'Expansion nationale', description: 'Extension du réseau à 500 écrans couvrant 10 régions françaises.' },
        { year: '2021', title: 'Partenariats majeurs', description: 'Signature avec les grandes enseignes : Carrefour, Intermarché, Leclerc.' },
        { year: '2022', title: 'Social Media Synergy', description: 'Lancement de l\'offre cross-canal DOOH + Social Media.' },
        { year: '2023', title: '2000 écrans', description: 'Franchissement du cap symbolique des 2000 écrans actifs.' },
        { year: '2024', title: 'Innovation tech', description: 'Développement de nouvelles solutions de ciblage et mesure.' }
    ]

    const strengths = [
        {
            icon: (
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                </svg>
            ),
            title: 'Position de leader',
            description: 'N°1 de l\'affichage digital en stations-service en France avec le plus grand réseau déployé.'
        },
        {
            icon: (
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' />
                </svg>
            ),
            title: 'Croissance soutenue',
            description: 'Croissance annuelle à deux chiffres depuis la création, portée par l\'expansion du réseau et des annonceurs.'
        },
        {
            icon: (
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' />
                </svg>
            ),
            title: 'Technologie propriétaire',
            description: 'Plateforme de gestion et diffusion développée en interne, offrant flexibilité et scalabilité.'
        },
        {
            icon: (
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
            ),
            title: 'Équipe expérimentée',
            description: 'Une équipe de direction avec plus de 15 ans d\'expérience combinée dans le media et la tech.'
        }
    ]

    return (
        <div className='bg-black text-white min-h-screen'>
            {/* Hero Section */}
            <PageHero
                title={t('investors.heroTitle')}
                highlight={t('investors.heroTitleHighlight')}
                description={t('investors.heroDesc')}
                ctaText={t('investors.cta')}
                ctaLink="#metrics"
            />

            {/* Key Metrics */}
            <section id="metrics" className='py-16 border-y border-white/10'>
                <div className='max-w-7xl mx-auto px-4 lg:px-12'>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                        {keyMetrics.map((metric, index) => (
                            <div key={index} className='text-center group'>
                                <div className='font-[font2] text-[#D3FD50] text-4xl lg:text-5xl mb-2'>
                                    {metric.value}
                                </div>
                                <div className='font-[font1] text-white text-sm uppercase tracking-wider mb-1'>
                                    {metric.label}
                                </div>
                                <div className='font-[font1] text-[#D3FD50]/60 text-xs'>
                                    {metric.growth}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Investment Thesis */}
            <section className='py-20 lg:py-32 px-4 lg:px-12 bg-gradient-to-b from-zinc-950 to-black'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center mb-16'>
                        <span className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4 block'>
                            Pourquoi Investir
                        </span>
                        <h2 className='font-[font2] text-white text-[8vw] lg:text-[3vw] uppercase'>
                            Nos forces
                        </h2>
                    </div>

                    <div className='grid md:grid-cols-2 gap-6 lg:gap-8'>
                        {strengths.map((strength, index) => (
                            <div
                                key={index}
                                className='group p-8 lg:p-10 rounded-3xl border border-white/10 hover:border-[#D3FD50]/50 bg-gradient-to-br from-white/5 to-transparent transition-all duration-500'
                            >
                                <div className='w-14 h-14 rounded-2xl bg-[#D3FD50]/10 flex items-center justify-center text-[#D3FD50] mb-6'>
                                    {strength.icon}
                                </div>
                                <h3 className='font-[font2] text-white text-xl lg:text-2xl mb-3 group-hover:text-[#D3FD50] transition-colors duration-300'>
                                    {strength.title}
                                </h3>
                                <p className='font-[font1] text-white/60 text-sm lg:text-base leading-relaxed'>
                                    {strength.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className='py-20 lg:py-32 px-4 lg:px-12'>
                <div className='max-w-5xl mx-auto'>
                    <div className='text-center mb-16'>
                        <span className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4 block'>
                            Notre Histoire
                        </span>
                        <h2 className='font-[font2] text-white text-[8vw] lg:text-[3vw] uppercase'>
                            Milestones
                        </h2>
                    </div>

                    <div className='relative'>
                        {/* Vertical Line */}
                        <div className='absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D3FD50] via-[#D3FD50]/50 to-transparent' />

                        <div className='space-y-8'>
                            {milestones.map((milestone, index) => (
                                <div
                                    key={index}
                                    className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                                >
                                    {/* Content */}
                                    <div className={`flex-1 ml-12 lg:ml-0 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}>
                                        <span className='text-[#D3FD50] font-[font2] text-2xl lg:text-3xl'>
                                            {milestone.year}
                                        </span>
                                        <h4 className='font-[font2] text-white text-lg lg:text-xl mt-2 mb-2'>
                                            {milestone.title}
                                        </h4>
                                        <p className='font-[font1] text-white/60 text-sm'>
                                            {milestone.description}
                                        </p>
                                    </div>

                                    {/* Dot */}
                                    <div className='absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-3 h-3 rounded-full bg-[#D3FD50] border-4 border-black' />

                                    {/* Spacer for desktop */}
                                    <div className='hidden lg:block flex-1' />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className='py-20 lg:py-32 px-4 lg:px-12 bg-gradient-to-t from-zinc-950 to-black'>
                <div className='max-w-4xl mx-auto text-center'>
                    <div className='p-12 lg:p-16 rounded-3xl border border-[#D3FD50]/30 bg-gradient-to-br from-[#D3FD50]/10 to-transparent'>
                        <h2 className='font-[font2] text-white text-[8vw] lg:text-[2.5vw] leading-tight uppercase mb-6'>
                            Intéressé par<br />
                            <span className='text-[#D3FD50]'>notre projet ?</span>
                        </h2>
                        <p className='font-[font1] text-white/60 text-lg mb-8'>
                            Contactez notre équipe pour recevoir notre présentation investisseurs<br className='hidden lg:block' />
                            et discuter des opportunités de collaboration.
                        </p>
                        <div className='flex flex-wrap justify-center gap-4'>
                            <Link
                                to='/contact'
                                className='inline-flex items-center gap-3 px-8 py-4 bg-[#D3FD50] text-black font-[font2] text-sm uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300'
                            >
                                Nous contacter
                                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                </svg>
                            </Link>
                            <a
                                href='mailto:investors@fillupmedia.fr'
                                className='inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-[font2] text-sm uppercase tracking-wider rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all duration-300'
                            >
                                investors@fillupmedia.fr
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    )
}

export default Investors
