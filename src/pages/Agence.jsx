import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import PageHero from '../components/common/PageHero'
import FooterSection from '../components/home/FooterSection'

const Agence = () => {
    const { t } = useLanguage()

    return (
        <div className='bg-black text-white min-h-screen'>
            {/* Using PageHero for a premium look, pulling from translations */}
            <PageHero
                title={t('agency.heroTitle')}
                highlight={t('agency.heroTitleHighlight')}
                description={t('agency.heroHeaderDesc') || "Excellence in digital signage based in the heart of Luxembourg."}
                visual={
                    <div className='relative w-full h-full min-h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border border-white/10 group'>
                        <img
                            src="/WhatsApp Image 2025-12-25 at 1.38.14 PM.jpeg"
                            alt="Luxio Media Agency"
                            className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                    </div>
                }
            />

            <section className="py-24 px-4 lg:px-12 bg-black relative z-10">
                {/* Subtle background element */}
                <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-[#D3FD50]/5 blur-[150px] pointer-events-none'></div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className='mb-16 text-center'>
                        <span className='text-[#D3FD50] font-[font1] text-sm tracking-[0.5em] uppercase mb-4 block'>
                            {t('agency.heroTitle')}
                        </span>
                        <h2 className='font-[font2] text-white text-[10vw] lg:text-[5vw] leading-none uppercase'>
                            {t('agency.heroTitleHighlight')}
                        </h2>
                    </div>

                    <div className="font-[font1] text-white/90 text-xl lg:text-2xl leading-[1.8] space-y-12">
                        {/* Splitting the text by double newlines for proper paragraph spacing */}
                        {t('agency.aboutUs').split('\n\n').map((paragraph, index) => (
                            <p key={index} className={index === 0 ? "text-2xl lg:text-3xl font-medium text-white" : ""}>
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Final closing block */}
                    <div className='mt-24 p-12 rounded-3xl border border-[#D3FD50]/20 bg-gradient-to-br from-[#D3FD50]/5 to-transparent text-center'>
                        <h3 className='font-[font2] text-white text-2xl lg:text-4xl uppercase mb-6'>
                            Luxio Media
                        </h3>
                        <p className='font-[font1] text-[#D3FD50] text-lg lg:text-xl'>
                            {t('agency.tagline') || "Alliance of technology, visual impact, and bespoke support."}
                        </p>
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    )
}

export default Agence
