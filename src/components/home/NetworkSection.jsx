import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

const partnerLogos = [
    { name: 'Esso', src: 'https://fillupmedia.fr/wp-content/uploads/2023/01/esso.png' },
    { name: 'Intermarché', src: 'https://fillupmedia.fr/wp-content/uploads/2022/12/intermarche.png' },
    { name: 'Carrefour', src: 'https://fillupmedia.fr/wp-content/uploads/2022/12/carrefour.png' },
    { name: 'Total', src: 'https://fillupmedia.fr/wp-content/uploads/2022/12/total.png' },
    { name: 'Leclerc', src: 'https://fillupmedia.fr/wp-content/uploads/2022/12/leclerc.png' },
    { name: 'Magasins U', src: 'https://fillupmedia.fr/wp-content/uploads/2023/01/magasins-u.png' }
]

const NetworkSection = () => {
    const { t } = useLanguage()
    const logos = [...partnerLogos, ...partnerLogos]

    return (
        <section id='network' className='relative z-10 bg-black py-12 lg:py-20 overflow-hidden'>
            <div className='absolute inset-0 pointer-events-none'>
                <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-[#0b0315] to-[#020305] opacity-95'></div>
                <div className='absolute -top-40 -left-20 w-[420px] h-[420px] bg-[#D3FD50]/15 blur-[140px]'></div>
                <div className='absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/20 blur-[260px]'></div>
                <div className='absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-[#de96ff]/30 to-transparent'></div>
            </div>

            <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 items-center'>
                    {/* Content */}
                    <div className='lg:w-3/5 w-full space-y-6 sm:space-y-8 text-center lg:text-left'>
                        <div className='space-y-4'>
                            <p className='text-xs sm:text-sm uppercase tracking-[0.4em] text-white/50'>{t('network.subtitle')}</p>
                            <h2 className='text-2xl sm:text-3xl lg:text-5xl font-[font2] leading-tight text-white'>
                                {t('network.titlePart1')}<br />
                                <span className='bg-gradient-to-r from-[#f9d976] via-[#d776ff] to-[#f9d976] bg-clip-text text-transparent'>
                                    {t('network.titlePart2')}
                                </span>
                            </h2>
                            <div className='mx-auto lg:mx-0 w-28 sm:w-40 h-1 bg-gradient-to-r from-[#f9d976] to-transparent'></div>
                        </div>

                        <div className='space-y-4 text-white/70 font-[font1] text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0'>
                            <p>
                                {t('network.desc1')}
                            </p>
                            <p>
                                {t('network.desc2')}
                            </p>
                        </div>

                        <div className='pt-2 flex flex-col sm:flex-row items-center sm:justify-start gap-4 z-20 relative'>
                            <Link
                                to='/solutions'
                                className='w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#f9d976] via-[#d776ff] to-[#f9d976] text-black font-[font2] text-xs sm:text-sm uppercase tracking-[0.4em] hover:opacity-90 transition-opacity duration-300'
                            >
                                {t('network.cta')}
                                <svg className='w-4 h-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                                    <path d='M5 12h14' strokeLinecap='round' strokeLinejoin='round' />
                                    <path d='M13 5l7 7-7 7' strokeLinecap='round' strokeLinejoin='round' />
                                </svg>
                            </Link>
                        </div>

                        <div className='overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur'>
                            <div className='flex items-center gap-8 sm:gap-10 min-w-max animate-marquee'>
                                {logos.map((logo, idx) => (
                                    <div key={`${logo.name}-${idx}`} className='flex items-center justify-center py-4 sm:py-6 px-3 sm:px-4 opacity-80'>
                                        <img src={logo.src} alt={logo.name} className='h-6 sm:h-8 w-auto object-contain' />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Visual */}
                    <div className='relative rounded-[24px] sm:rounded-[32px] border border-[#D3FD50]/30 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.6)] bg-black/40 w-full max-w-md mx-auto'>
                        <div className='absolute inset-0 pointer-events-none'>
                            <div className='absolute -top-10 -right-10 w-32 sm:w-40 h-32 sm:h-40 bg-[#D3FD50]/20 blur-[60px]'></div>
                            <div className='absolute bottom-0 left-0 w-48 sm:w-56 h-48 sm:h-56 bg-purple-500/20 blur-[100px]'></div>
                            <div className='absolute inset-0 border border-white/10 rounded-[24px] sm:rounded-[32px] mix-blend-screen'></div>
                        </div>
                        <video
                            className='w-full h-full object-cover'
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster='https://video.gumlet.io/694cef8ab122cbf176482b8c/694f895eb122cbf1766b1074/download.mp4'
                        >
                            <source src='https://video.gumlet.io/694cef8ab122cbf176482b8c/694f895eb122cbf1766b1074/download.mp4' type='video/mp4' />
                        </video>
                        <div className='absolute inset-0 rounded-[24px] sm:rounded-[32px] border border-[#D3FD50]/40 mix-blend-screen pointer-events-none'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NetworkSection
