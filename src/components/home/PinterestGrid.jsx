import React from 'react'

const projects = [
    {
        id: 1,
        title: 'Station Service Display',
        category: 'LCD Screens',
        size: 'tall',
        color: 'from-purple-900/80 to-pink-900/80',
        image: '/WhatsApp Image 2025-12-25 at 10.13.14 AM (1).jpeg'
    },
    {
        id: 2,
        title: 'Pompe Digital',
        category: 'Digital Totems',
        size: 'normal',
        color: 'from-blue-900/80 to-cyan-900/80',
        image: '/WhatsApp Image 2025-12-25 at 10.13.14 AM (2).jpeg'
    },
    {
        id: 3,
        title: 'Gas Station Network',
        category: 'Outdoor Screens',
        size: 'wide',
        color: 'from-[#D3FD50]/40 to-green-900/80',
        image: '/WhatsApp Image 2025-12-25 at 10.13.15 AM.jpeg'
    },
    {
        id: 4,
        title: 'Affichage Extérieur',
        category: 'LED Walls',
        size: 'tall',
        color: 'from-orange-900/80 to-red-900/80',
        image: '/WhatsApp Image 2025-12-25 at 10.13.16 AM.jpeg'
    },
    {
        id: 5,
        title: 'Écran Promotionnel',
        category: 'Video Walls',
        size: 'normal',
        color: 'from-indigo-900/80 to-purple-900/80',
        image: '/WhatsApp Image 2025-12-25 at 10.13.16 AM (1).jpeg'
    },
    {
        id: 6,
        title: 'Réseau Station',
        category: 'Menu Boards',
        size: 'normal',
        color: 'from-teal-900/80 to-emerald-900/80',
        image: '/WhatsApp Image 2025-12-25 at 10.13.17 AM.jpeg'
    },
    {
        id: 7,
        title: 'Publicité Carburant',
        category: 'Info Displays',
        size: 'wide',
        color: 'from-pink-900/80 to-rose-900/80',
        image: '/WhatsApp Image 2025-12-25 at 10.13.18 AM (1).jpeg'
    },
    {
        id: 8,
        title: 'Écran Digital',
        category: 'Interactive Kiosk',
        size: 'normal',
        color: 'from-amber-900/80 to-yellow-900/80',
        image: '/WhatsApp Image 2025-12-25 at 10.13.20 AM.jpeg'
    },
]

const PinterestGrid = () => {
    return (
        <section className='min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black relative z-10 py-20 lg:py-32 px-4 lg:px-12'>
            {/* Section header */}
            <div className='text-center mb-16 lg:mb-24'>
                <p className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4'>Our Installations</p>
                <h2 className='font-[font2] text-white text-[12vw] lg:text-[7vw] leading-none uppercase'>
                    Featured
                </h2>
                <h2 className='font-[font2] text-white/20 text-[12vw] lg:text-[7vw] leading-none uppercase -mt-2 lg:-mt-4'>
                    Screens
                </h2>
            </div>

            {/* Pinterest-style masonry grid */}
            <div className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 lg:gap-6'>
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`
                            break-inside-avoid mb-4 lg:mb-6 group cursor-pointer
                            ${project.size === 'tall' ? 'h-[400px] lg:h-[500px]' : ''}
                            ${project.size === 'wide' ? 'h-[250px] lg:h-[300px]' : ''}
                            ${project.size === 'normal' ? 'h-[280px] lg:h-[350px]' : ''}
                        `}
                    >
                        <div className={`
                            relative h-full w-full rounded-2xl lg:rounded-3xl overflow-hidden
                            border border-white/10 group-hover:border-[#D3FD50]/50
                            transition-all duration-500 group-hover:scale-[1.02]
                        `}>
                            {/* Background image - subtle and overlayed */}
                            <div className='absolute inset-0'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover opacity-60 
                                              group-hover:opacity-70 group-hover:scale-110
                                              transition-all duration-700'
                                />
                            </div>

                            {/* Color gradient overlay - sits on top of image */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} 
                                           mix-blend-multiply opacity-90`}></div>

                            {/* Dark gradient overlay from bottom for text readability */}
                            <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent 
                                           opacity-80 group-hover:opacity-70 transition-opacity duration-500'></div>

                            {/* Floating shapes decoration */}
                            <div className='absolute top-8 right-8 w-16 h-16 border border-white/20 rounded-full 
                                           group-hover:border-[#D3FD50]/50 group-hover:scale-110 transition-all duration-500'></div>
                            <div className='absolute top-20 right-12 w-8 h-8 bg-white/10 rounded-full 
                                           group-hover:bg-[#D3FD50]/30 transition-all duration-500'></div>

                            {/* Content */}
                            <div className='absolute bottom-0 left-0 right-0 p-6 lg:p-8'>
                                <span className='inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full 
                                               text-white/80 text-xs font-[font1] tracking-wider uppercase mb-3
                                               group-hover:bg-[#D3FD50]/20 group-hover:text-[#D3FD50] transition-all duration-300'>
                                    {project.category}
                                </span>
                                <h3 className='font-[font2] text-white text-xl lg:text-2xl leading-tight
                                              group-hover:text-[#D3FD50] transition-colors duration-300'>
                                    {project.title}
                                </h3>
                            </div>

                            {/* Hover arrow */}
                            <div className='absolute top-6 left-6 w-10 h-10 rounded-full bg-[#D3FD50] 
                                           flex items-center justify-center opacity-0 scale-50
                                           group-hover:opacity-100 group-hover:scale-100 transition-all duration-300'>
                                <svg className='w-4 h-4 text-black' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 17L17 7M17 7H7M17 7v10' />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View all button */}
            <div className='flex justify-center mt-16'>
                <button className='group flex items-center gap-4 px-8 py-4 border-2 border-white/30 rounded-full
                                  hover:border-[#D3FD50] hover:bg-[#D3FD50]/10 transition-all duration-300'>
                    <span className='font-[font2] text-white text-lg uppercase group-hover:text-[#D3FD50] transition-colors'>
                        View All Screens
                    </span>
                    <div className='w-8 h-8 rounded-full bg-[#D3FD50] flex items-center justify-center
                                   group-hover:translate-x-1 transition-transform duration-300'>
                        <svg className='w-4 h-4 text-black' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                        </svg>
                    </div>
                </button>
            </div>
        </section>
    )
}

export default PinterestGrid
