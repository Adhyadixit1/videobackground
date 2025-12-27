import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import PageHero from '../components/common/PageHero'
import FooterSection from '../components/home/FooterSection'

const Agence = () => {
    const { t } = useLanguage()

    return (
        <div className='bg-[#050505] text-white min-h-screen overflow-x-hidden'>
            {/* Hero Section - Immersive Content Overlay */}
            <PageHero
                title={t('agency.heroTitle')}
                highlight={t('agency.heroTitleHighlight')}
                description={t('agency.heroHeaderDesc') || "Excellence in digital signage based in the heart of Luxembourg."}
                visual={
                    <div className='relative w-full h-full min-h-[400px] lg:min-h-[600px] rounded-[40px] overflow-hidden border border-white/5 group shadow-2xl'>
                        <img
                            src="/WhatsApp Image 2025-12-25 at 1.38.14 PM.jpeg"
                            alt="Luxio Media Agency"
                            className='w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent' />
                    </div>
                }
            />

            {/* About Section - Editorial Style */}
            <section className="relative py-12 lg:py-20 px-6">
                <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/5 blur-[150px] pointer-events-none' />

                <div className="max-w-5xl mx-auto">
                    <div className='grid lg:grid-cols-12 gap-12 lg:gap-20'>
                        {/* Sidebar / Label */}
                        <div className='lg:col-span-4'>
                            <div className='sticky top-32 space-y-4'>
                                <span className='text-[#D3FD50] font-[font1] text-[10px] tracking-[0.5em] uppercase block'>
                                    {t('agency.heroTitle')}
                                </span>
                                <div className='w-12 h-px bg-white/20' />
                                <p className='text-white/40 font-[font2] text-xs uppercase tracking-[0.2em] leading-relaxed'>
                                    {t('agency.tagline') || "Alliance technology, visual impact & support."}
                                </p>
                            </div>
                        </div>

                        {/* Main Body Text */}
                        <div className='lg:col-span-8'>
                            <div className="font-[font1] text-white/60 text-lg lg:text-xl leading-[1.8] space-y-12">
                                {t('agency.aboutUs').split('\n\n').map((paragraph, index) => (
                                    <p key={index} className={index === 0 ? "text-2xl lg:text-4xl font-[font2] text-white uppercase tracking-tight leading-tight" : ""}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {/* Stats Highlight */}
                            <div className='mt-16 grid grid-cols-2 gap-8 py-12 border-y border-white/5'>
                                <div>
                                    <span className='font-[font2] text-4xl text-[#D3FD50] block'>2000+</span>
                                    <span className='text-[10px] font-[font1] uppercase tracking-[0.3em] text-white/30'>Digital Screens</span>
                                </div>
                                <div>
                                    <span className='font-[font2] text-4xl text-white block'>100%</span>
                                    <span className='text-[10px] font-[font1] uppercase tracking-[0.3em] text-white/30'>Captive Audience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values / Vision Section - Premium Block */}
            <section className='relative py-12 lg:py-20 px-6 bg-[#080808]'>
                <div className='max-w-6xl mx-auto'>
                    <div className='relative p-12 lg:p-24 rounded-[60px] bg-white/[0.02] border border-white/5 overflow-hidden text-center'>
                        <div className='absolute inset-0 bg-gradient-to-br from-[#D3FD50]/5 via-transparent to-transparent' />

                        <div className='relative z-10 space-y-12'>
                            <h3 className='font-[font2] text-4xl lg:text-7xl uppercase tracking-tighter'>
                                Luxio Media
                            </h3>
                            <div className='max-w-2xl mx-auto'>
                                <p className='font-[font2] text-[#D3FD50] text-xl lg:text-2xl uppercase tracking-wide leading-relaxed'>
                                    {t('agency.tagline') || "Alliance of technology, visual impact, and bespoke support."}
                                </p>
                            </div>
                            <div className='pt-8'>
                                <div className='inline-flex items-center gap-4 px-10 py-4 border border-white/20 text-white font-[font2] text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-white hover:text-black transition-all cursor-pointer'>
                                    Learn More About Us
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    )
}

export default Agence
