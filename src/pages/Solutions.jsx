import React from 'react'
import { Link } from 'react-router-dom'
import FooterSection from '../components/home/FooterSection'
import { useLanguage } from '../context/LanguageContext'

const Solutions = () => {
    const { t } = useLanguage()

    const services = [
        {
            icon: (
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
            ),
            title: t('solutions.screenDiff'),
            subtitle: '', // Removed or could be a secondary key if needed
            description: t('solutions.screenDiffDesc'),
            features: t('solutions.f1', { returnObjects: true }) || []
        },
        {
            icon: (
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z' />
                </svg>
            ),
            title: t('solutions.socialSynergy'),
            subtitle: '',
            description: t('solutions.socialSynergyDesc'),
            features: t('solutions.f2', { returnObjects: true }) || []
        },
        {
            icon: (
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                </svg>
            ),
            title: t('solutions.analytics'),
            subtitle: '',
            description: t('solutions.analyticsDesc'),
            features: t('solutions.f3', { returnObjects: true }) || []
        }
    ]

    const stats = [
        { value: '2000+', label: t('solutions.statsLabel1'), sublabel: 'Active Screens' },
        { value: '15M', label: t('solutions.statsLabel2'), sublabel: 'Monthly Reach' },
        { value: '3400+', label: t('solutions.statsLabel3'), sublabel: 'Advertisers' },
        { value: '100%', label: t('solutions.statsLabel4'), sublabel: 'Captive Audience' }
    ]

    return (
        <div className='bg-black text-white min-h-screen'>
            {/* Hero Section */}
            <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
                {/* Background decorations */}
                <div className='absolute inset-0'>
                    <div className='absolute top-1/4 -left-32 w-96 h-96 bg-[#D3FD50]/10 rounded-full blur-3xl' />
                    <div className='absolute bottom-1/4 -right-32 w-96 h-96 bg-[#D3FD50]/5 rounded-full blur-3xl' />
                    <div className='absolute inset-0' style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className='relative z-10 text-center px-4 lg:px-12 max-w-6xl mx-auto pt-32'>
                    <span className='inline-block px-4 py-2 rounded-full border border-[#D3FD50]/30 text-[#D3FD50] text-xs font-[font1] uppercase tracking-[0.3em] mb-8'>
                        {t('solutions.title')}
                    </span>
                    <h1 className='font-[font2] text-[10vw] lg:text-[6vw] leading-[0.9] uppercase mb-6'>
                        {t('solutions.heroTitle')}
                    </h1>
                    <p className='font-[font1] text-white/60 text-lg lg:text-xl max-w-2xl mx-auto mt-8'>
                        {t('solutions.heroDesc')}
                    </p>
                </div>

                {/* Scroll indicator */}
                <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'>
                    <span className='text-white/40 text-xs uppercase tracking-widest'>{t('solutions.heroScroll')}</span>
                    <div className='w-px h-12 bg-gradient-to-b from-[#D3FD50] to-transparent' />
                </div>
            </section>

            {/* Stats Section */}
            <section className='relative py-20 lg:py-32 border-y border-white/10'>
                <div className='max-w-7xl mx-auto px-4 lg:px-12'>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
                        {stats.map((stat, index) => (
                            <div key={index} className='text-center group'>
                                <div className='font-[font2] text-[#D3FD50] text-4xl lg:text-6xl mb-2 group-hover:scale-110 transition-transform duration-300'>
                                    {stat.value}
                                </div>
                                <div className='font-[font1] text-white text-sm lg:text-base uppercase tracking-wider'>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className='relative py-20 lg:py-32 px-4 lg:px-12'>
                <div className='max-w-7xl mx-auto'>
                    {/* Section Header */}
                    <div className='mb-16 lg:mb-24'>
                        <span className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4 block'>
                            {t('solutions.offerTitle')}
                        </span>
                        <h2 className='font-[font2] text-white text-[8vw] lg:text-[4vw] leading-none uppercase'>
                            {t('solutions.offerSubtitle1')}
                        </h2>
                        <h2 className='font-[font2] text-white/20 text-[8vw] lg:text-[4vw] leading-none uppercase'>
                            {t('solutions.offerSubtitle2')}
                        </h2>
                    </div>

                    {/* Services Grid */}
                    <div className='grid lg:grid-cols-3 gap-6 lg:gap-8'>
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className='group relative p-8 lg:p-10 rounded-3xl border border-white/10 hover:border-[#D3FD50]/50 bg-gradient-to-br from-white/5 to-transparent transition-all duration-500 hover:scale-[1.02]'
                            >
                                {/* Icon */}
                                <div className='w-16 h-16 rounded-2xl bg-[#D3FD50]/10 flex items-center justify-center text-[#D3FD50] mb-6 group-hover:bg-[#D3FD50]/20 transition-colors duration-300'>
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className='font-[font2] text-white text-xl lg:text-2xl mb-2 group-hover:text-[#D3FD50] transition-colors duration-300'>
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className='font-[font1] text-white/60 text-sm lg:text-base mb-6 leading-relaxed'>
                                    {service.description}
                                </p>

                                {/* Features List */}
                                <ul className='space-y-3'>
                                    {Array.isArray(service.features) && service.features.map((feature, fIndex) => (
                                        <li key={fIndex} className='flex items-center gap-3 text-white/70 text-sm'>
                                            <span className='w-1.5 h-1.5 rounded-full bg-[#D3FD50]' />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Decorative corner */}
                                <div className='absolute top-0 right-0 w-24 h-24 border-t border-r border-white/10 rounded-tr-3xl group-hover:border-[#D3FD50]/30 transition-colors duration-300' />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DOOH + Social Media Section */}
            <section className='relative py-20 lg:py-32 px-4 lg:px-12 bg-gradient-to-b from-zinc-950 to-black'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
                        {/* Left Content */}
                        <div>
                            <span className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4 block'>
                                {t('solutions.synergyTitle')}
                            </span>
                            <h2 className='font-[font2] text-white text-3xl lg:text-5xl leading-tight uppercase mb-6'>
                                {t('solutions.synergyHeader')}{' '}
                                <span className='text-[#D3FD50]'>{t('solutions.synergyHeaderHighlight')}</span>{' '}
                                {t('solutions.synergyHeaderEnd')}
                            </h2>
                            <p className='font-[font1] text-white/60 text-base lg:text-lg leading-relaxed mb-8'>
                                {t('solutions.synergyDesc')}
                            </p>
                            <Link
                                to='/contact'
                                className='inline-flex items-center gap-3 px-6 py-3 bg-[#D3FD50] text-black font-[font2] text-sm uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300'
                            >
                                {t('solutions.synergyBtn')}
                                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                </svg>
                            </Link>
                        </div>

                        {/* Right Visual */}
                        <div className='relative'>
                            <div className='aspect-square rounded-3xl bg-gradient-to-br from-[#D3FD50]/20 to-transparent border border-white/10 p-8 lg:p-12'>
                                {/* Decorative circles - retained purely visual */}
                                <div className='absolute inset-0 flex items-center justify-center'>
                                    <div className='w-64 h-64 rounded-full border border-[#D3FD50]/20 animate-pulse' />
                                    <div className='absolute w-48 h-48 rounded-full border border-[#D3FD50]/30' />
                                    <div className='absolute w-32 h-32 rounded-full bg-[#D3FD50]/10 flex items-center justify-center'>
                                        <svg className='w-12 h-12 text-[#D3FD50]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='relative py-20 lg:py-32 px-4 lg:px-12'>
                <div className='max-w-4xl mx-auto text-center'>
                    <h2 className='font-[font2] text-white text-[8vw] lg:text-[3vw] leading-tight uppercase mb-6'>
                        {t('solutions.ctaTitle')}<br />
                        <span className='text-[#D3FD50]'>{t('solutions.ctaTitleHighlight')}</span>
                    </h2>
                    <p className='font-[font1] text-white/60 text-lg mb-8'>
                        {t('solutions.ctaDesc')}
                    </p>
                    <div className='flex flex-wrap justify-center gap-4'>
                        <Link
                            to='/contact'
                            className='px-8 py-4 bg-[#D3FD50] text-black font-[font2] text-sm uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300'
                        >
                            {t('solutions.ctaBtn1')}
                        </Link>
                        <Link
                            to='/case-studies'
                            className='px-8 py-4 border border-white/30 text-white font-[font2] text-sm uppercase tracking-wider rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all duration-300'
                        >
                            {t('solutions.ctaBtn2')}
                        </Link>
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    )
}

export default Solutions
