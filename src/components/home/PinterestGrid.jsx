import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

const PinterestGrid = () => {
    const { t } = useLanguage()

    const projects = useMemo(() => {
        const staticData = [
            {
                id: 9,
                solutionKey: 'outdoorLCD43',
                categoryKey: 'outdoorScreens',
                size: 'tall',
                color: 'from-green-900/80 to-emerald-900/80',
                image: 'https://sc04.alicdn.com/kf/Hbc4f05f302d444cb889ad42c3afc11f5X/229562533/Hbc4f05f302d444cb889ad42c3afc11f5X.jpeg',
                link: '/projects/outdoor-lcd-43',
                isSpecial: true
            },
            {
                id: 10,
                solutionKey: 'infraredTouch55',
                categoryKey: 'touchDisplays',
                size: 'wide',
                color: 'from-cyan-900/80 to-blue-900/80',
                image: '/Fiche technique ecran intérieur_files/image001.png',
                link: '/projects/infrared-touch-55',
                isSpecial: true
            },
            {
                id: 11,
                solutionKey: 'outdoorWaterproofDisplay',
                categoryKey: 'outdoorScreens',
                size: 'normal',
                color: 'from-orange-900/80 to-red-900/80',
                image: '/3rdproduct/image002.jpg',
                link: '/projects/outdoor-waterproof-display',
                isSpecial: true
            },
            {
                id: 12,
                solutionKey: 'digitalMarketingServices',
                categoryKey: 'digitalServices',
                size: 'wide',
                color: 'from-fuchsia-900/80 to-blue-900/80',
                image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80',
                link: '/solutions/digital-marketing-services',
                isSpecial: true
            },
            {
                id: 1,
                solutionKey: 'lcdScreens',
                categoryKey: 'digitalDisplays',
                size: 'tall',
                color: 'from-purple-900/80 to-pink-900/80',
                video: 'https://video.gumlet.io/694cef8ab122cbf176482b8c/694e4270e086c47a823f4aa7/download.mp4',
                link: '/solutions/lcd-screens'
            },
            {
                id: 2,
                solutionKey: 'digitalPump',
                categoryKey: 'pumpDisplays',
                size: 'normal',
                color: 'from-blue-900/80 to-cyan-900/80',
                image: '/WhatsApp Image 2025-12-25 at 10.13.14 AM (2).jpeg',
                link: '/solutions/digital-pump'
            },
            {
                id: 3,
                solutionKey: 'outdoorDisplay',
                categoryKey: 'outdoorScreens',
                size: 'wide',
                color: 'from-[#D3FD50]/40 to-green-900/80',
                image: '/WhatsApp Image 2025-12-25 at 10.13.15 AM.jpeg',
                link: '/solutions/outdoor-display'
            },
            {
                id: 4,
                solutionKey: 'stationServiceDisplay',
                categoryKey: 'stationScreens',
                size: 'tall',
                color: 'from-orange-900/80 to-red-900/80',
                image: '/WhatsApp Image 2025-12-25 at 10.13.16 AM.jpeg',
                link: '/solutions/station-service-display'
            },
            {
                id: 5,
                solutionKey: 'digitalTotems',
                categoryKey: 'freestandingDisplays',
                size: 'normal',
                color: 'from-indigo-900/80 to-purple-900/80',
                image: '/WhatsApp Image 2025-12-25 at 10.13.16 AM (1).jpeg',
                link: '/solutions/digital-totems'
            },
            {
                id: 6,
                solutionKey: 'ledWalls',
                categoryKey: 'videoWalls',
                size: 'normal',
                color: 'from-teal-900/80 to-emerald-900/80',
                image: '/WhatsApp Image 2025-12-25 at 10.13.17 AM.jpeg',
                link: '/solutions/led-walls'
            },
            {
                id: 7,
                solutionKey: 'interactiveKiosk',
                categoryKey: 'touchDisplays',
                size: 'wide',
                color: 'from-pink-900/80 to-rose-900/80',
                image: '/WhatsApp Image 2025-12-25 at 10.13.18 AM (1).jpeg',
                link: '/solutions/interactive-kiosk'
            },
            {
                id: 8,
                solutionKey: 'menuBoards',
                categoryKey: 'digitalMenus',
                size: 'normal',
                color: 'from-amber-900/80 to-yellow-900/80',
                image: '/WhatsApp Image 2025-12-25 at 10.13.20 AM.jpeg',
                link: '/solutions/menu-boards'
            },
        ]

        return staticData.map(item => ({
            ...item,
            title: t(`solutionPages.${item.solutionKey}.title`),
            category: t(`home.pinterest.categories.${item.categoryKey}`)
        }))
    }, [t])

    return (
        <section id='pinterest-grid' className='bg-gradient-to-b from-black via-zinc-950 to-black relative z-10 py-12 lg:py-20 px-4 lg:px-12'>
            {/* Section header */}
            <div className='text-center mb-10 lg:mb-14'>
                <p className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4'>
                    {t('home.pinterest.subtitle')}
                </p>
                <h2 className='font-[font2] text-white text-[12vw] lg:text-[7vw] leading-none uppercase'>
                    {t('home.pinterest.title1')}
                </h2>
                <h2 className='font-[font2] text-white/20 text-[12vw] lg:text-[7vw] leading-none uppercase -mt-2 lg:-mt-4'>
                    {t('home.pinterest.title2')}
                </h2>
            </div>

            {/* Pinterest-style masonry grid */}
            <div className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 lg:gap-6 relative z-20'>
                {projects.map((project, index) => (
                    <Link
                        to={project.link || '/projects'}
                        key={project.id}
                        className={`
                            break-inside-avoid mb-4 lg:mb-6 group cursor-pointer block
                            ${project.size === 'tall' ? 'h-[400px] lg:h-[500px]' : ''}
                            ${project.size === 'wide' ? 'h-[250px] lg:h-[300px]' : ''}
                            ${project.size === 'normal' ? 'h-[280px] lg:h-[350px]' : ''}
                        `}
                    >
                        <div className={`
                            relative h-full w-full rounded-2xl lg:rounded-3xl overflow-hidden
                            border border-white/10 group-hover:border-[#D3FD50]/50
                            transition-all duration-500 group-hover:scale-[1.02]
                            ${project.isSpecial ? 'ring-2 ring-[#D3FD50]/30 ring-offset-2 ring-offset-black' : ''}
                        `}>
                            {/* Background image - subtle and overlayed */}
                            <div className='absolute inset-0'>
                                {project.video ? (
                                    <video
                                        src={project.video}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className={`w-full h-full object-cover 
                                                  group-hover:opacity-70 group-hover:scale-110
                                                  transition-all duration-700
                                                  ${project.isSpecial ? 'opacity-80' : 'opacity-60'}`}
                                    />
                                ) : (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={`w-full h-full object-cover 
                                                  group-hover:opacity-70 group-hover:scale-110
                                                  transition-all duration-700
                                                  ${project.isSpecial ? 'opacity-80' : 'opacity-60'}`}
                                    />
                                )}
                            </div>

                            {/* Color gradient overlay - sits on top of image */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} 
                                           mix-blend-multiply ${project.isSpecial ? 'opacity-70' : 'opacity-90'}`}></div>

                            {/* Dark gradient overlay from bottom for text readability */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent 
                                           ${project.isSpecial ? 'opacity-60' : 'opacity-80'} group-hover:opacity-70 transition-opacity duration-500`}></div>

                            {/* Special badge */}
                            {project.isSpecial && (
                                <div className='absolute top-4 right-4 px-4 py-2 bg-[#D3FD50] text-black text-xs font-[font1] font-bold rounded-full uppercase tracking-wider z-10 shadow-lg shadow-[#D3FD50]/50 animate-pulse'>
                                    ⭐ Featured
                                </div>
                            )}

                            {/* Floating shapes decoration */}
                            <div className={`absolute top-8 right-8 border rounded-full 
                                           group-hover:border-[#D3FD50]/50 group-hover:scale-110 transition-all duration-500
                                           ${project.isSpecial ? 'w-20 h-20 border-[#D3FD50]/40' : 'w-16 h-16 border-white/20'}`}></div>
                            <div className={`absolute top-20 right-12 rounded-full 
                                           group-hover:bg-[#D3FD50]/30 transition-all duration-500
                                           ${project.isSpecial ? 'w-10 h-10 bg-[#D3FD50]/20' : 'w-8 h-8 bg-white/10'}`}></div>

                            {/* Content */}
                            <div className='absolute bottom-0 left-0 right-0 p-6 lg:p-8'>
                                <span className={`inline-block px-3 py-1 backdrop-blur-md rounded-full 
                                               text-xs font-[font1] tracking-wider uppercase mb-3
                                               transition-all duration-300
                                               ${project.isSpecial 
                                                 ? 'bg-[#D3FD50]/20 text-[#D3FD50] group-hover:bg-[#D3FD50]/30' 
                                                 : 'bg-white/10 text-white/80 group-hover:bg-[#D3FD50]/20 group-hover:text-[#D3FD50]'}`}>
                                    {project.category}
                                </span>
                                <h3 className={`font-[font2] leading-tight
                                              group-hover:text-[#D3FD50] transition-colors duration-300
                                              ${project.isSpecial ? 'text-white text-2xl lg:text-3xl' : 'text-white text-xl lg:text-2xl'}`}>
                                    {project.title}
                                </h3>
                            </div>

                            {/* Hover arrow */}
                            <div className={`absolute top-6 left-6 rounded-full bg-[#D3FD50] 
                                           flex items-center justify-center opacity-0 scale-50
                                           group-hover:opacity-100 group-hover:scale-100 transition-all duration-300
                                           ${project.isSpecial ? 'w-12 h-12' : 'w-10 h-10'}`}>
                                <svg className={`text-black ${project.isSpecial ? 'w-5 h-5' : 'w-4 h-4'}`} fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 17L17 7M17 7H7M17 7v10' />
                                </svg>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* View all button */}
            <div className='flex justify-center mt-10 relative z-20'>
                <Link to='/projects' className='group flex items-center gap-4 px-8 py-4 border-2 border-white/30 rounded-full
                                   hover:border-[#D3FD50] hover:bg-[#D3FD50]/10 transition-all duration-300'>
                    <span className='font-[font2] text-white text-lg uppercase group-hover:text-[#D3FD50] transition-colors'>
                        {t('home.pinterest.viewAll')}
                    </span>
                    <div className='w-8 h-8 rounded-full bg-[#D3FD50] flex items-center justify-center
                                   group-hover:translate-x-1 transition-transform duration-300'>
                        <svg className='w-4 h-4 text-black' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                        </svg>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default PinterestGrid
