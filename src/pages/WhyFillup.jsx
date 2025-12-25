import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import FooterSection from '../components/home/FooterSection'
import { useLanguage } from '../context/LanguageContext'

const WhyFillup = () => {
    const { t } = useLanguage()

    const advantages = useMemo(() => [
        {
            number: '01',
            title: t('why.adv1Title'),
            description: t('why.adv1Desc'),
            icon: (
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                </svg>
            )
        },
        {
            number: '02',
            title: t('why.adv2Title'),
            description: t('why.adv2Desc'),
            icon: (
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
            )
        },
        {
            number: '03',
            title: t('why.adv3Title'),
            description: t('why.adv3Desc'),
            icon: (
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M13 10V3L4 14h7v7l9-11h-7z' />
                </svg>
            )
        },
        {
            number: '04',
            title: t('why.adv4Title'),
            description: t('why.adv4Desc'),
            icon: (
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                </svg>
            )
        }
    ], [t])

    const process = t('why.processSteps', { returnObjects: true }) || []

    return (
        <div className='bg-black text-white min-h-screen'>
            {/* Hero Section */}
            <section className='relative min-h-screen flex items-center overflow-hidden'>
                {/* Background */}
                <div className='absolute inset-0'>
                    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#D3FD50]/5 via-transparent to-transparent' />
                    <div className='absolute top-1/3 -right-32 w-[600px] h-[600px] bg-[#D3FD50]/10 rounded-full blur-3xl' />
                    <div className='absolute inset-0' style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className='relative z-10 max-w-7xl mx-auto px-4 lg:px-12 pt-32 lg:pt-40'>
                    <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
                        {/* Left Content */}
                        <div>
                            <span className='inline-block px-4 py-2 rounded-full border border-[#D3FD50]/30 text-[#D3FD50] text-xs font-[font1] uppercase tracking-[0.3em] mb-8'>
                                {t('nav.whyFillup')}
                            </span>
                            <h1 className='font-[font2] text-[12vw] lg:text-[4vw] leading-[0.9] uppercase mb-6'>
                                {t('why.heroTitle')}
                            </h1>
                            <p className='font-[font1] text-white/60 text-lg lg:text-xl leading-relaxed mb-8'>
                                {t('why.heroDesc')}
                            </p>
                            <div className='flex flex-wrap gap-4'>
                                <Link
                                    to='/solutions'
                                    className='px-6 py-3 bg-[#D3FD50] text-black font-[font2] text-sm uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300'
                                >
                                    {t('nav.solutions')}
                                </Link>
                                <Link
                                    to='/case-studies'
                                    className='px-6 py-3 border border-white/30 text-white font-[font2] text-sm uppercase tracking-wider rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all duration-300'
                                >
                                    {t('nav.caseStudies')}
                                </Link>
                            </div>
                        </div>

                        {/* Right Stats */}
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='p-6 lg:p-8 rounded-3xl bg-white/5 border border-white/10'>
                                <div className='font-[font2] text-[#D3FD50] text-4xl lg:text-5xl mb-2'>2000+</div>
                                <div className='font-[font1] text-white/60 text-sm uppercase tracking-wider'>{t('why.stats.screens')}</div>
                            </div>
                            <div className='p-6 lg:p-8 rounded-3xl bg-white/5 border border-white/10'>
                                <div className='font-[font2] text-[#D3FD50] text-4xl lg:text-5xl mb-2'>15M</div>
                                <div className='font-[font1] text-white/60 text-sm uppercase tracking-wider'>{t('why.stats.contacts')}</div>
                            </div>
                            <div className='p-6 lg:p-8 rounded-3xl bg-white/5 border border-white/10'>
                                <div className='font-[font2] text-[#D3FD50] text-4xl lg:text-5xl mb-2'>3400+</div>
                                <div className='font-[font1] text-white/60 text-sm uppercase tracking-wider'>{t('why.stats.advertisers')}</div>
                            </div>
                            <div className='p-6 lg:p-8 rounded-3xl bg-[#D3FD50]/10 border border-[#D3FD50]/30'>
                                <div className='font-[font2] text-[#D3FD50] text-4xl lg:text-5xl mb-2'>100%</div>
                                <div className='font-[font1] text-white/60 text-sm uppercase tracking-wider'>{t('why.stats.captive')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advantages Section */}
            <section className='py-20 lg:py-32 px-4 lg:px-12 bg-gradient-to-b from-black via-zinc-950 to-black'>
                <div className='max-w-7xl mx-auto'>
                    {/* Section Header */}
                    <div className='text-center mb-16 lg:mb-24'>
                        <span className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4 block'>
                            {t('why.advantagesTitle')}
                        </span>
                        <h2 className='font-[font2] text-white text-[8vw] lg:text-[4vw] leading-none uppercase'>
                            {t('nav.whyFillup')}
                        </h2>
                    </div>

                    {/* Advantages Grid */}
                    <div className='grid md:grid-cols-2 gap-6 lg:gap-8'>
                        {advantages.map((advantage, index) => (
                            <div
                                key={index}
                                className='group relative p-8 lg:p-10 rounded-3xl border border-white/10 hover:border-[#D3FD50]/50 bg-gradient-to-br from-white/5 to-transparent transition-all duration-500'
                            >
                                {/* Number */}
                                <span className='absolute top-8 right-8 font-[font2] text-white/10 text-6xl lg:text-7xl group-hover:text-[#D3FD50]/20 transition-colors duration-300'>
                                    {advantage.number}
                                </span>

                                {/* Icon */}
                                <div className='w-14 h-14 rounded-2xl bg-[#D3FD50]/10 flex items-center justify-center text-[#D3FD50] mb-6'>
                                    {advantage.icon}
                                </div>

                                {/* Content */}
                                <h3 className='font-[font2] text-white text-xl lg:text-2xl mb-2 group-hover:text-[#D3FD50] transition-colors duration-300'>
                                    {advantage.title}
                                </h3>
                                <p className='font-[font1] text-white/60 text-sm lg:text-base leading-relaxed'>
                                    {advantage.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className='py-20 lg:py-32 px-4 lg:px-12'>
                <div className='max-w-7xl mx-auto'>
                    {/* Section Header */}
                    <div className='text-center mb-16 lg:mb-24'>
                        <span className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4 block'>
                            {t('why.processTitle')}
                        </span>
                        <h2 className='font-[font2] text-white text-[8vw] lg:text-[3vw] leading-tight uppercase'>
                            {t('why.processTitle').split(' ')[0]}<br />
                            <span className='text-white/30'>{t('why.processTitle').split(' ').slice(1).join(' ')}</span>
                        </h2>
                    </div>

                    {/* Process Steps */}
                    <div className='relative'>
                        {/* Connection Line */}
                        <div className='hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D3FD50]/30 to-transparent' />

                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8'>
                            {Array.isArray(process) && process.map((step, index) => (
                                <div key={index} className='relative text-center group'>
                                    {/* Step Number */}
                                    <div className='w-16 h-16 mx-auto mb-6 rounded-full bg-black border-2 border-[#D3FD50]/50 flex items-center justify-center relative z-10 group-hover:bg-[#D3FD50]/10 group-hover:border-[#D3FD50] transition-all duration-300'>
                                        <span className='font-[font2] text-[#D3FD50] text-xl'>{step.step}</span>
                                    </div>

                                    {/* Content */}
                                    <h4 className='font-[font2] text-white text-lg mb-2 group-hover:text-[#D3FD50] transition-colors duration-300'>
                                        {step.title}
                                    </h4>
                                    <p className='font-[font1] text-white/50 text-sm'>
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-20 lg:py-32 px-4 lg:px-12 bg-gradient-to-t from-zinc-950 to-black'>
                <div className='max-w-4xl mx-auto text-center'>
                    <div className='p-12 lg:p-16 rounded-3xl border border-[#D3FD50]/30 bg-gradient-to-br from-[#D3FD50]/10 to-transparent'>
                        <h2 className='font-[font2] text-white text-[8vw] lg:text-[2.5vw] leading-tight uppercase mb-6'>
                            {t('why.cta.title')}<br />
                            <span className='text-[#D3FD50]'>{t('why.cta.titleHighlight')}</span>
                        </h2>
                        <p className='font-[font1] text-white/60 text-lg mb-8'>
                            {t('why.cta.desc')}
                        </p>
                        <Link
                            to='/contact'
                            className='inline-flex items-center gap-3 px-8 py-4 bg-[#D3FD50] text-black font-[font2] text-sm uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300'
                        >
                            {t('why.cta.btn')}
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    )
}

export default WhyFillup
