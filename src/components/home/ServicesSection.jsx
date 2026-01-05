import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

const ServicesSection = () => {
    const { t } = useLanguage()

    const services = [
        {
            number: '01',
            title: t('services.s1Title'),
            description: t('services.s1Desc'),
            icon: '◇',
            image: '/WhatsApp Image 2025-12-25 at 10.13.14 AM (1).jpeg',
            link: '/solutions/website-creation'
        },
        {
            number: '02',
            title: t('services.s2Title'),
            description: t('services.s2Desc'),
            icon: '○',
            image: '/WhatsApp Image 2025-12-25 at 10.13.16 AM.jpeg',
            link: '/solutions/community-management'
        },
        {
            number: '03',
            title: t('services.s3Title'),
            description: t('services.s3Desc'),
            icon: '△',
            image: '/WhatsApp Image 2025-12-25 at 10.13.17 AM.jpeg',
            link: '/solutions/outdoor-display'
        },
        {
            number: '04',
            title: t('services.s4Title'),
            description: t('services.s4Desc'),
            icon: '□',
            image: '/WhatsApp Image 2025-12-25 at 10.13.20 AM.jpeg',
            link: '/solutions/video-creation'
        }
    ]

    return (
        <section className='bg-black relative z-10 overflow-hidden py-12 lg:py-20'>
            {/* Background gradient orbs */}
            <div className='absolute top-20 left-10 w-96 h-96 bg-[#D3FD50]/10 rounded-full blur-[120px] pointer-events-none'></div>
            <div className='absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none'></div>

            <div className='relative z-10 px-6 lg:px-20'>
                {/* Section header */}
                <div className='mb-12'>
                    <p className='text-[#D3FD50] font-[font1] text-sm lg:text-base tracking-[0.3em] uppercase mb-4'>{t('services.headerTiny')}</p>
                    <h2 className='font-[font2] text-white text-[10vw] lg:text-[6vw] leading-none uppercase'>
                        {t('services.headerBig')}
                    </h2>
                </div>

                {/* Services grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-20'>
                    {services.map((service, index) => (
                        <Link
                            to={service.link}
                            key={index}
                            className='group relative p-8 lg:p-12 rounded-3xl overflow-hidden
                                       hover:border-[#D3FD50]/50 transition-all duration-500 cursor-pointer'
                        >
                            {/* Background image - subtle */}
                            <div className='absolute inset-0'>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className='w-full h-full object-cover opacity-20 
                                              group-hover:opacity-30 group-hover:scale-105
                                              transition-all duration-700'
                                />
                            </div>

                            {/* Dark overlay */}
                            <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/90'></div>

                            {/* Border */}
                            <div className='absolute inset-0 rounded-3xl border border-white/10 
                                           group-hover:border-[#D3FD50]/50 transition-all duration-500'></div>

                            {/* Hover glow effect */}
                            <div className='absolute inset-0 rounded-3xl bg-[#D3FD50]/5 opacity-0 
                                           group-hover:opacity-100 transition-opacity duration-500'></div>

                            <div className='relative z-10'>
                                <div className='flex items-start justify-between mb-8'>
                                    <span className='text-[#D3FD50] font-[font1] text-sm tracking-wider'>
                                        {service.number}
                                    </span>
                                    <span className='text-white/30 text-3xl group-hover:text-[#D3FD50] 
                                                    transition-colors duration-300'>
                                        {service.icon}
                                    </span>
                                </div>

                                <h3 className='font-[font2] text-white text-2xl lg:text-4xl mb-4 
                                              group-hover:text-[#D3FD50] transition-colors duration-300'>
                                    {service.title}
                                </h3>

                                <p className='font-[font1] text-white/60 text-sm lg:text-base leading-relaxed'>
                                    {service.description}
                                </p>

                                {/* Arrow indicator */}
                                <div className='mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 
                                               translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300'>
                                    <span className='text-[#D3FD50] text-sm font-[font1]'>{t('services.explore')}</span>
                                    <svg className='w-4 h-4 text-[#D3FD50]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
