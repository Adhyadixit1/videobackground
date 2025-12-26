import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import FooterSection from '../components/home/FooterSection'
import PageHero from '../components/common/PageHero'
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
            <PageHero
                title={t('why.heroTitle')}
                highlight={t('why.heroTitleHighlight')}
                description={t('why.heroDesc')}
                ctaText={t('nav.solutions')}
                ctaLink="#advantages"
                visual={
                    <div className='grid grid-cols-2 gap-4 w-full max-w-lg mx-auto'>
                        <div className='p-6 lg:p-8 rounded-3xl bg-white/5 border border-white/10 animate-[pulse_4s_ease-in-out_infinite]'>
                            <div className='font-[font2] text-[#D3FD50] text-3xl lg:text-4xl mb-2'>2000+</div>
                            <div className='font-[font1] text-white/60 text-xs uppercase tracking-wider'>{t('why.stats.screens')}</div>
                        </div>
                        <div className='p-6 lg:p-8 rounded-3xl bg-white/5 border border-white/10 animate-[pulse_4s_ease-in-out_infinite] delay-700' style={{ animationDelay: '0.7s' }}>
                            <div className='font-[font2] text-[#D3FD50] text-3xl lg:text-4xl mb-2'>15M</div>
                            <div className='font-[font1] text-white/60 text-xs uppercase tracking-wider'>{t('why.stats.contacts')}</div>
                        </div>
                        <div className='p-6 lg:p-8 rounded-3xl bg-white/5 border border-white/10 animate-[pulse_4s_ease-in-out_infinite] delay-1000' style={{ animationDelay: '1.4s' }}>
                            <div className='font-[font2] text-[#D3FD50] text-3xl lg:text-4xl mb-2'>3400+</div>
                            <div className='font-[font1] text-white/60 text-xs uppercase tracking-wider'>{t('why.stats.advertisers')}</div>
                        </div>
                        <div className='p-6 lg:p-8 rounded-3xl bg-[#D3FD50]/10 border border-[#D3FD50]/30 animate-[pulse_4s_ease-in-out_infinite] delay-1500' style={{ animationDelay: '2.1s' }}>
                            <div className='font-[font2] text-[#D3FD50] text-3xl lg:text-4xl mb-2'>100%</div>
                            <div className='font-[font1] text-white/60 text-xs uppercase tracking-wider'>{t('why.stats.captive')}</div>
                        </div>
                    </div>
                }
            />

            {/* Advantages Section */}
            <section id="advantages" className='py-20 lg:py-32 px-4 lg:px-12 bg-gradient-to-b from-black via-zinc-950 to-black'>
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

            {/* Comparison Section */}
            <section className='py-20 lg:py-32 px-4 lg:px-12 bg-zinc-950'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center mb-16 lg:mb-24'>
                        <span className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4 block'>
                            {t('why.comparison.title')}
                        </span>
                        <h2 className='font-[font2] text-white text-[6vw] lg:text-[3vw] leading-none uppercase'>
                            {t('why.comparison.us')} vs {t('why.comparison.them')}
                        </h2>
                    </div>

                    <div className='overflow-x-auto'>
                        <table className='w-full text-left border-collapse'>
                            <thead>
                                <tr>
                                    <th className='p-6 font-[font2] text-white/50 text-sm uppercase tracking-wider border-b border-white/10'>Feature</th>
                                    <th className='p-6 font-[font2] text-[#D3FD50] text-xl uppercase tracking-wider border-b border-[#D3FD50]/30 bg-[#D3FD50]/5'>{t('why.comparison.us')}</th>
                                    <th className='p-6 font-[font2] text-white/50 text-sm uppercase tracking-wider border-b border-white/10'>{t('why.comparison.them')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {t('why.comparison.rows', { returnObjects: true })?.map((row, index) => (
                                    <tr key={index} className='border-b border-white/5 hover:bg-white/5 transition-colors'>
                                        <td className='p-6 font-[font1] text-white font-medium'>{row.feature}</td>
                                        <td className='p-6 font-[font1] text-white bg-[#D3FD50]/5 border-x border-[#D3FD50]/10'>
                                            <div className='flex items-center gap-3'>
                                                <div className='w-6 h-6 rounded-full bg-[#D3FD50] flex items-center justify-center text-black'>
                                                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' /></svg>
                                                </div>
                                                {row.us}
                                            </div>
                                        </td>
                                        <td className='p-6 font-[font1] text-white/50'>{row.them}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Features Deep Dive */}
            <section className='py-20 lg:py-32 px-4 lg:px-12'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center mb-16 lg:mb-24'>
                        <h2 className='font-[font2] text-white text-[6vw] lg:text-[3vw] leading-none uppercase'>
                            {t('why.features.title')}
                        </h2>
                    </div>

                    <div className='grid md:grid-cols-2 gap-12 lg:gap-20'>
                        {t('why.features.list', { returnObjects: true })?.map((item, index) => (
                            <div key={index} className='flex gap-6 group'>
                                <div className='w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:border-[#D3FD50] group-hover:bg-[#D3FD50] group-hover:text-black transition-all duration-300'>
                                    <span className='font-[font2]'>{index + 1}</span>
                                </div>
                                <div>
                                    <h3 className='font-[font2] text-white text-xl lg:text-2xl mb-4 group-hover:text-[#D3FD50] transition-colors'>
                                        {item.title}
                                    </h3>
                                    <p className='font-[font1] text-white/60 leading-relaxed text-justify'>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
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
