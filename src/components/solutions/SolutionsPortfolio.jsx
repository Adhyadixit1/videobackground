import React, { useMemo } from 'react'
import { useLanguage } from '../../context/LanguageContext'

const SolutionsPortfolio = () => {
    const { t } = useLanguage()

    // List of images from public folder
    const allImages = [
        '/WhatsApp Image 2025-12-25 at 10.13.14 AM (1).jpeg',
        '/WhatsApp Image 2025-12-25 at 10.13.14 AM (2).jpeg',
        '/WhatsApp Image 2025-12-25 at 10.13.14 AM.jpeg',
        '/WhatsApp Image 2025-12-25 at 10.13.15 AM (1).jpeg',
        '/WhatsApp Image 2025-12-25 at 10.13.15 AM (2).jpeg',
        '/WhatsApp Image 2025-12-25 at 10.13.15 AM (3).jpeg',
        '/WhatsApp Image 2025-12-25 at 10.13.15 AM.jpeg',
        '/WhatsApp Image 2025-12-25 at 10.13.16 AM (1).jpeg',
        '/WhatsApp Image 2025-12-25 at 10.13.16 AM (2).jpeg',
        '/WhatsApp Image 2025-12-25 at 10.13.16 AM.jpeg',
        '/WhatsApp Image 2025-12-25 at 10.13.17 AM (1).jpeg',
        '/WhatsApp Image 2025-12-25 at 10.13.17 AM (2).jpeg',
        '/WhatsApp Image 2025-12-25 at 10.13.17 AM (3).jpeg',
        '/WhatsApp Image 2025-12-25 at 10.13.17 AM.jpeg',
        '/WhatsApp Image 2025-12-25 at 1.38.14 PM.jpeg',
        '/WhatsApp Image 2025-12-25 at 10.13.18 AM (1).jpeg',
        '/WhatsApp Image 2025-12-25 at 10.13.18 AM.jpeg',
        '/WhatsApp Image 2025-12-25 at 10.13.19 AM (1).jpeg',
        '/WhatsApp Image 2025-12-25 at 10.13.19 AM (2).jpeg',
        '/WhatsApp Image 2025-12-25 at 10.13.19 AM.jpeg',
        '/WhatsApp Image 2025-12-25 at 10.13.20 AM (1).jpeg',
        '/WhatsApp Image 2025-12-25 at 10.13.20 AM (2).jpeg',
        '/WhatsApp Image 2025-12-25 at 10.13.20 AM (3).jpeg',
        '/WhatsApp Image 2025-12-25 at 10.13.20 AM.jpeg',
    ]

    // Randomize images function
    const shuffledImages = useMemo(() => {
        return [...allImages].sort(() => 0.5 - Math.random())
    }, [])

    return (
        <section className='relative py-20 lg:py-32 px-4 lg:px-12 bg-black'>
            <div className='max-w-[1400px] mx-auto'>
                <div className='text-center mb-16 lg:mb-24'>
                    <p className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4'>
                        {t('solutions.portfolioLabel')}
                    </p>
                    <h2 className='font-[font2] text-white text-[8vw] lg:text-[4vw] leading-none uppercase'>
                        {t('solutions.portfolioTitle')}
                    </h2>
                </div>

                <div className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4'>
                    {shuffledImages.map((src, index) => (
                        <div key={index} className='break-inside-avoid relative group rounded-2xl overflow-hidden bg-zinc-900'>
                            <img
                                src={src}
                                alt={`Portfolio ${index}`}
                                className='w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105'
                                loading='lazy'
                            />
                            {/* Overlay */}
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                            {/* Border effect */}
                            <div className='absolute inset-0 border border-white/5 rounded-2xl pointer-events-none group-hover:border-[#D3FD50]/30 transition-colors duration-300' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SolutionsPortfolio
