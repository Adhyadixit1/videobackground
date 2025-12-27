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
        <div className='bg-[#050505] text-white min-h-screen overflow-x-hidden'>
            {/* Hero Section */}
            <PageHero
                title={t('investors.heroTitle')}
                highlight={t('investors.heroTitleHighlight')}
                description={t('investors.heroDesc')}
                ctaText={t('investors.cta')}
                ctaLink="#anchor"
                visual={<LottieVisual url="https://assets2.lottiefiles.com/packages/lf20_t9gkkhz4.json" />}
            />

            {/* Strategic Anchor Section - High Tech Feel */}
            <section id="anchor" className='relative py-12 lg:py-20 px-6 overflow-hidden'>
                <div className='absolute -top-40 -left-40 w-96 h-96 bg-[#D3FD50]/5 blur-[120px] rounded-full' />
                <div className='max-w-7xl mx-auto'>
                    <div className='grid lg:grid-cols-2 gap-16 items-center'>
                        <div className='relative z-10'>
                            <span className='text-[#D3FD50] font-[font1] text-[10px] tracking-[0.4em] uppercase mb-4 block'>
                                Strategic Positioning
                            </span>
                            <h2 className='font-[font2] text-4xl lg:text-7xl leading-none text-white uppercase tracking-tighter mb-8'>
                                {t('investors.anchor.title')}
                            </h2>
                            <div className='space-y-6 text-white/40 font-[font1] text-lg leading-relaxed max-w-xl'>
                                <p>{t('investors.anchor.content1')}</p>
                                <p>{t('investors.anchor.content2')}</p>
                            </div>
                        </div>
                        <div className='relative aspect-square rounded-[40px] border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden flex items-center justify-center p-12'>
                            <DotLottieVisual src="https://lottie.host/866fa7cd-b789-4c45-8810-4546625dc9b1/akhqTKyDA4.lottie" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Market Section - Clean Split */}
            <section className='relative py-12 lg:py-20 px-6 bg-[#080808]'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid lg:grid-cols-2 gap-1 gap-y-16'>
                        <div className='p-12 border border-white/5'>
                            <h2 className='font-[font2] text-3xl lg:text-5xl uppercase mb-8 tracking-tight'>
                                {t('investors.market.title')}
                            </h2>
                            <p className='text-white/40 text-base mb-10 leading-relaxed font-[font1]'>
                                {t('investors.market.desc')}
                            </p>
                            <div className='grid gap-3'>
                                {getList('investors.market.features').map((feature, i) => (
                                    <div key={i} className='flex items-center gap-4 py-3 border-b border-white/5'>
                                        <div className='w-1.5 h-1.5 rounded-full bg-[#D3FD50]' />
                                        <span className='text-[10px] uppercase font-[font2] tracking-[0.3em] text-white/60'>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='p-12 bg-white/[0.02] border border-white/5 relative'>
                            <div className='absolute top-0 right-0 p-8'>
                                <div className='w-12 h-12 rounded-full border border-[#D3FD50]/50 flex items-center justify-center text-[#D3FD50] text-sm font-[font2]'>
                                    01
                                </div>
                            </div>
                            <h3 className='font-[font2] text-2xl uppercase mb-10 text-[#D3FD50] tracking-wide'>{t('investors.mission.title')}</h3>
                            <p className='text-white/60 mb-10 font-[font1] text-lg leading-relaxed'>{t('investors.mission.desc')}</p>
                            <div className='space-y-8'>
                                {getList('investors.mission.items').map((item, i) => (
                                    <div key={i} className='flex gap-6'>
                                        <span className='text-white/20 font-[font2] text-xl'>0{i + 1}</span>
                                        <p className='text-sm text-white/40 leading-relaxed font-[font1]'>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Model & Traction - Clean Tiles */}
            <section className='relative py-12 lg:py-20 px-6'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center mb-12 lg:mb-16'>
                        <span className='text-[#D3FD50] font-[font1] text-[10px] tracking-[0.4em] uppercase mb-4 block'>
                            Execution Framework
                        </span>
                        <h2 className='font-[font2] text-4xl lg:text-7xl uppercase tracking-tighter'>
                            {t('investors.model.title')}
                        </h2>
                    </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-1'>
                        {getList('investors.model.leviers').map((levier, i) => (
                            <div key={i} className='p-10 bg-white/[0.02] border border-white/5 hover:bg-[#D3FD50]/5 transition-all duration-500 group'>
                                <div className='w-8 h-8 rounded bg-white/5 flex items-center justify-center text-[#D3FD50] mb-8 group-hover:scale-110 transition-transform'>
                                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' />
                                    </svg>
                                </div>
                                <p className='text-[10px] font-[font2] uppercase tracking-[0.3em] leading-loose text-white/40 group-hover:text-white transition-colors'>{levier}</p>
                            </div>
                        ))}
                    </div>

                    <div className='mt-12 flex flex-wrap justify-center gap-4'>
                        {getList('investors.model.benefits').map((benefit, i) => (
                            <div key={i} className='px-6 py-2 rounded-full border border-white/10 bg-white/5'>
                                <span className='text-[9px] font-[font2] uppercase tracking-[0.4em] text-white/40'>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Invest Now - Impact Highlight */}
            <section className='relative py-12 lg:py-20 px-6'>
                <div className='max-w-6xl mx-auto'>
                    <div className='bg-[#D3FD50] rounded-[60px] p-12 lg:p-24 text-black relative overflow-hidden'>
                        <div className='absolute -bottom-20 -right-20 w-96 h-96 bg-black/5 rounded-full' />

                        <div className='relative z-10'>
                            <h2 className='font-[font2] text-4xl lg:text-7xl uppercase leading-none tracking-tighter mb-16'>
                                {t('investors.whyNow.title')}
                            </h2>

                            <div className='grid md:grid-cols-2 gap-16'>
                                <div className='space-y-8'>
                                    {getList('investors.whyNow.points').map((point, i) => (
                                        <div key={i} className='flex items-start gap-6 group'>
                                            <div className='w-8 h-8 rounded-full border border-black/10 flex items-center justify-center font-bold text-xs'>0{i + 1}</div>
                                            <p className='text-2xl font-[font2] uppercase leading-tight tracking-tight group-hover:px-2 transition-all'>{point}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className='bg-black/5 backdrop-blur-md p-10 lg:p-12 rounded-[40px] space-y-8 border border-black/5'>
                                    <p className='font-[font2] uppercase tracking-[0.3em] text-[10px] opacity-40'>Projections & Ambitions</p>
                                    <div className='space-y-6'>
                                        {getList('investors.whyNow.ambitions').map((ambition, i) => (
                                            <div key={i} className='flex items-start gap-4'>
                                                <div className='mt-1.5 w-1.5 h-1.5 rotate-45 bg-black' />
                                                <p className='text-sm font-[font1] leading-relaxed opacity-80'>{ambition}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Relations Contact - Premium Minimal */}
            <section className='relative py-12 lg:py-20 px-6 border-t border-white/5'>
                <div className='max-w-4xl mx-auto text-center'>
                    <span className='text-[#D3FD50] font-[font1] text-[10px] tracking-[0.4em] uppercase mb-6 block'>
                        {t('investors.relations.title')}
                    </span>
                    <p className='text-white/40 text-lg lg:text-2xl mb-16 font-[font1] max-w-2xl mx-auto leading-relaxed'>
                        {t('investors.relations.desc')}
                    </p>

                    <div className='grid md:grid-cols-3 gap-12 mb-16'>
                        <div className='space-y-4'>
                            <span className='text-[10px] font-[font2] uppercase tracking-[0.4em] text-white/20'>Direct Channel</span>
                            <a href={`mailto:${t('investors.relations.email')}`} className='block text-xl font-[font2] text-white hover:text-[#D3FD50] transition-colors'>
                                {t('investors.relations.email')}
                            </a>
                        </div>
                        <div className='space-y-4'>
                            <span className='text-[10px] font-[font2] uppercase tracking-[0.4em] text-white/20'>Operational Desk</span>
                            <p className='text-xl font-[font2] text-white'>{t('investors.relations.phone')}</p>
                        </div>
                        <div className='space-y-4'>
                            <span className='text-[10px] font-[font2] uppercase tracking-[0.4em] text-white/20'>HQ Region</span>
                            <p className='text-xl font-[font2] text-white uppercase tracking-tight'>Luxembourg – EU</p>
                        </div>
                    </div>

                    <Link to="/contact" className='group px-12 py-5 bg-white text-black rounded-full font-[font2] text-[10px] uppercase tracking-[0.3em] hover:bg-[#D3FD50] transition-all duration-300 shadow-2xl'>
                        Schedule Strategic Briefing
                    </Link>
                </div>
            </section>

            <FooterSection />
        </div>
    )
}

export default Investors
