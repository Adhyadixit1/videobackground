import React from 'react'
import { Link } from 'react-router-dom'
import FooterSection from '../components/home/FooterSection'
import PageHero from '../components/common/PageHero'
import LottieVisual from '../components/common/LottieVisual'
import DotLottieVisual from '../components/common/DotLottieVisual'
import { useLanguage } from '../context/LanguageContext'

const Investors = () => {
    const { t } = useLanguage()

    // Helper to get array from translation (handles both missing and present cases)
    const getList = (key) => t(key, { returnObjects: true }) || []

    return (
        <div className='bg-black text-white min-h-screen'>
            {/* Hero Section */}
            <PageHero
                title={t('investors.heroTitle')}
                highlight={t('investors.heroTitleHighlight')}
                description={t('investors.heroDesc')}
                ctaText={t('investors.cta')}
                ctaLink="#anchor"
                visual={<LottieVisual url="https://assets2.lottiefiles.com/packages/lf20_t9gkkhz4.json" />}
            />

            {/* Strategic Anchor Section */}
            <section id="anchor" className='py-20 lg:py-32 px-4 lg:px-12 relative overflow-hidden'>
                <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#D3FD50]/5 to-transparent pointer-events-none' />
                <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center'>
                    <div className='relative z-10'>
                        <span className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4 block'>
                            Strategic Positioning
                        </span>
                        <h2 className='font-[font2] text-white text-[8vw] lg:text-[3vw] leading-tight uppercase mb-8'>
                            {t('investors.anchor.title')}
                        </h2>
                        <div className='space-y-6 text-white/70 font-[font1] text-lg leading-relaxed'>
                            <p>{t('investors.anchor.content1')}</p>
                            <p>{t('investors.anchor.content2')}</p>
                        </div>
                    </div>
                    <div className='relative aspect-square rounded-[40px] border border-white/10 bg-white/5 overflow-hidden flex items-center justify-center p-8'>
                        <DotLottieVisual src="https://lottie.host/866fa7cd-b789-4c45-8810-4546625dc9b1/akhqTKyDA4.lottie" />
                    </div>
                </div>
            </section>

            {/* Market Section */}
            <section className='py-20 lg:py-32 px-4 lg:px-12 bg-zinc-950'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid lg:grid-cols-2 gap-16'>
                        <div>
                            <h2 className='font-[font2] text-white text-[8vw] lg:text-[3vw] uppercase mb-8'>
                                {t('investors.market.title')}
                            </h2>
                            <p className='text-white/60 text-lg mb-10 leading-relaxed font-[font1]'>
                                {t('investors.market.desc')}
                            </p>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                {getList('investors.market.features').map((feature, i) => (
                                    <div key={i} className='flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10'>
                                        <div className='w-2 h-2 rounded-full bg-[#D3FD50]' />
                                        <span className='text-sm uppercase tracking-wide'>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='bg-gradient-to-br from-[#D3FD50]/10 to-transparent p-8 lg:p-12 rounded-[40px] border border-[#D3FD50]/20'>
                            <h3 className='font-[font2] text-white text-2xl uppercase mb-8'>{t('investors.mission.title')}</h3>
                            <p className='text-white/70 mb-8 font-[font1]'>{t('investors.mission.desc')}</p>
                            <div className='space-y-6'>
                                {getList('investors.mission.items').map((item, i) => (
                                    <div key={i} className='flex gap-4'>
                                        <span className='text-[#D3FD50] font-[font2] text-xl'>0{i + 1}</span>
                                        <p className='text-sm text-white/60 leading-relaxed'>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Model & Traction */}
            <section className='py-20 lg:py-32 px-4 lg:px-12'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center mb-20'>
                        <h2 className='font-[font2] text-white text-[8vw] lg:text-[3vw] uppercase mb-6'>
                            {t('investors.model.title')}
                        </h2>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {getList('investors.model.leviers').map((levier, i) => (
                            <div key={i} className='p-8 rounded-3xl border border-white/5 bg-white/5 hover:border-[#D3FD50]/30 transition-all duration-300'>
                                <div className='w-10 h-10 rounded-full bg-[#D3FD50]/10 flex items-center justify-center text-[#D3FD50] mb-6'>
                                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' />
                                    </svg>
                                </div>
                                <p className='text-sm uppercase tracking-wider leading-relaxed'>{levier}</p>
                            </div>
                        ))}
                    </div>
                    <div className='mt-12 flex flex-wrap justify-center gap-6'>
                        {getList('investors.model.benefits').map((benefit, i) => (
                            <div key={i} className='flex items-center gap-3 px-6 py-3 rounded-full border border-[#D3FD50]/20 bg-[#D3FD50]/5'>
                                <span className='text-[#D3FD50]'>●</span>
                                <span className='text-xs uppercase tracking-widest text-[#D3FD50]'>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Traction & Team */}
            <section className='py-20 lg:py-32 px-4 lg:px-12 bg-zinc-950 rounded-[60px] mx-4'>
                <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-20'>
                    <div>
                        <h2 className='font-[font2] text-white text-3xl lg:text-4xl uppercase mb-10'>{t('investors.traction.title')}</h2>
                        <div className='space-y-4'>
                            {getList('investors.traction.points').map((point, i) => (
                                <div key={i} className='flex items-center gap-4 p-6 rounded-2xl border border-white/5 bg-black/40'>
                                    <div className='w-12 h-px bg-[#D3FD50]' />
                                    <p className='text-white/80 font-[font1]'>{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className='font-[font2] text-white text-3xl lg:text-4xl uppercase mb-10'>{t('investors.team.title')}</h2>
                        <div className='space-y-4'>
                            {getList('investors.team.skills').map((skill, i) => (
                                <div key={i} className='flex items-center gap-4 p-6 rounded-2xl border border-white/5 bg-black/40'>
                                    <div className='w-2 h-2 rounded-full bg-[#D3FD50]' />
                                    <p className='text-white/80 font-[font1]'>{skill}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Invest Now Section */}
            <section className='py-20 lg:py-32 px-4 lg:px-12'>
                <div className='max-w-6xl mx-auto'>
                    <div className='bg-gradient-to-br from-[#D3FD50] to-[#9FE000] rounded-[50px] p-12 lg:p-20 text-black'>
                        <h2 className='font-[font2] text-[8vw] lg:text-[4vw] uppercase leading-none mb-12'>
                            {t('investors.whyNow.title')}
                        </h2>
                        <div className='grid md:grid-cols-2 gap-12'>
                            <div className='space-y-6'>
                                {getList('investors.whyNow.points').map((point, i) => (
                                    <div key={i} className='flex items-center gap-4'>
                                        <div className='w-6 h-6 rounded-full border border-black/20 flex items-center justify-center font-bold'>✓</div>
                                        <p className='text-xl font-[font2] uppercase'>{point}</p>
                                    </div>
                                ))}
                            </div>
                            <div className='bg-black/10 p-8 rounded-3xl space-y-4'>
                                <p className='font-bold uppercase tracking-widest text-sm mb-4'>Nos ambitions :</p>
                                {getList('investors.whyNow.ambitions').map((ambition, i) => (
                                    <div key={i} className='flex items-start gap-4'>
                                        <span className='text-black/40 leading-tight'>➡</span>
                                        <p className='text-sm leading-tight'>{ambition}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Investor Relations Contact */}
            <section className='py-20 lg:py-32 px-4 lg:px-12 border-t border-white/10'>
                <div className='max-w-4xl mx-auto text-center'>
                    <h2 className='font-[font2] text-white text-4xl lg:text-5xl uppercase mb-8'>
                        {t('investors.relations.title')}
                    </h2>
                    <p className='text-white/60 text-lg mb-12 font-[font1] max-w-2xl mx-auto leading-relaxed'>
                        {t('investors.relations.desc')}
                    </p>
                    <div className='flex flex-wrap justify-center gap-6 lg:gap-12'>
                        <div className='flex flex-col items-center gap-2'>
                            <span className='text-xs uppercase tracking-widest text-white/40'>Email</span>
                            <a href={`mailto:${t('investors.relations.email')}`} className='text-xl lg:text-2xl font-[font2] text-[#D3FD50] hover:text-white transition-colors'>
                                {t('investors.relations.email')}
                            </a>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <span className='text-xs uppercase tracking-widest text-white/40'>Phone</span>
                            <p className='text-xl lg:text-2xl font-[font2]'>{t('investors.relations.phone')}</p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <span className='text-xs uppercase tracking-widest text-white/40'>Base</span>
                            <p className='text-xl lg:text-2xl font-[font2] uppercase'>Luxembourg – Europe</p>
                        </div>
                    </div>
                    <div className='mt-16'>
                        <Link to="/contact" className='inline-flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-[font2] uppercase tracking-wider hover:bg-[#D3FD50] transition-all duration-300'>
                            Planifier un échange
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

export default Investors
