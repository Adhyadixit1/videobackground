import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

const ContactCTA = () => {
    const { t } = useLanguage()

    return (
        <section className='bg-black relative z-10 overflow-hidden flex items-center justify-center py-12 lg:py-20'>
            {/* Animated gradient background */}
            <div className='absolute inset-0'>
                <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#D3FD50]/10 via-transparent to-purple-900/20'></div>
                <div className='absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#D3FD50]/5 rounded-full blur-[200px]'></div>
            </div>

            {/* Grid pattern overlay */}
            <div className='absolute inset-0 opacity-[0.03]'
                style={{
                    backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }}>
            </div>

            {/* Decorative circles */}
            <div className='absolute top-20 left-20 w-64 h-64 border border-white/10 rounded-full'></div>
            <div className='absolute bottom-20 right-20 w-96 h-96 border border-[#D3FD50]/20 rounded-full'></div>
            <div className='absolute top-1/2 left-10 w-4 h-4 bg-[#D3FD50] rounded-full animate-pulse'></div>
            <div className='absolute top-1/3 right-1/4 w-2 h-2 bg-white/50 rounded-full'></div>

            <div className='relative z-10 text-center px-6'>
                {/* Subtitle */}
                <p className='font-[font1] text-[#D3FD50] tracking-[0.5em] uppercase text-sm mb-6'>
                    {t('home.cta.subtitle')}
                </p>

                {/* Main heading */}
                <h2 className='font-[font2] text-white text-[12vw] lg:text-[10vw] leading-none uppercase mb-2'>
                    {t('home.cta.title1')}
                </h2>
                <h2 className='font-[font2] text-transparent text-[12vw] lg:text-[10vw] leading-none uppercase mb-6
                              bg-clip-text bg-gradient-to-r from-[#D3FD50] via-[#B5FF00] to-[#D3FD50]
                              animate-gradient bg-[length:200%_auto]'>
                    {t('home.cta.title2')}
                </h2>

                <p className='font-[font1] text-white/60 text-base lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed'>
                    {t('home.cta.desc')}
                </p>

                {/* CTA Buttons */}
                <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
                    <Link
                        to='/contact'
                        className='group relative px-12 py-5 bg-[#D3FD50] rounded-full overflow-hidden'
                    >
                        <span className='relative z-10 font-[font2] text-black text-lg uppercase tracking-wider
                                        group-hover:text-white transition-colors duration-300'>
                            {t('home.cta.btnPrimary')}
                        </span>
                        <div className='absolute inset-0 bg-black transform translate-y-full 
                                       group-hover:translate-y-0 transition-transform duration-300'></div>
                    </Link>

                    <a
                        href='mailto:contact@luxiomedia.lu'
                        className='group flex items-center gap-3 px-8 py-5 border-2 border-white/30 rounded-full
                                  hover:border-[#D3FD50] transition-all duration-300'
                    >
                        <span className='font-[font2] text-white text-lg uppercase tracking-wider
                                        group-hover:text-[#D3FD50] transition-colors duration-300'>
                            {t('home.cta.btnSecondary')}
                        </span>
                        <svg className='w-5 h-5 text-white group-hover:text-[#D3FD50] 
                                       group-hover:translate-x-1 transition-all duration-300'
                            fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                        </svg>
                    </a>
                </div>

                {/* Email display */}
                <div className='mt-12 pt-12 border-t border-white/10'>
                    <p className='font-[font1] text-white/40 text-sm uppercase tracking-wider mb-4'>
                        {t('home.cta.orReach')}
                    </p>
                    <a
                        href='mailto:contact@luxiomedia.lu'
                        className='font-[font2] text-white text-2xl lg:text-4xl hover:text-[#D3FD50] 
                                  transition-colors duration-300'
                    >
                        contact@luxiomedia.lu
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ContactCTA
