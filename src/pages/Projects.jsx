import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/common/PageHero'
import FooterSection from '../components/home/FooterSection'
import { useLanguage } from '../context/LanguageContext'

const Projects = () => {
    const { t } = useLanguage()

    // Mimic the Pinterest Grid data but for a full page
    const projects = [
        {
            id: 1,
            title: 'TotalEnergies Station',
            category: 'Fuel Advertising',
            size: 'tall',
            image: '/WhatsApp Image 2025-12-25 at 10.13.14 AM (1).jpeg',
            link: '/solutions/fuel-advertising'
        },
        {
            id: 2,
            title: 'Shell EV Hub',
            category: 'Digital Pump',
            size: 'normal',
            image: '/WhatsApp Image 2025-12-25 at 10.13.14 AM (2).jpeg',
            link: '/solutions/digital-pump'
        },
        {
            id: 3,
            title: 'Carrefour Market',
            category: 'Outdoor Display',
            size: 'wide',
            image: '/WhatsApp Image 2025-12-25 at 10.13.15 AM.jpeg',
            link: '/solutions/outdoor-display'
        },
        {
            id: 4,
            title: 'Highwa Rest Stop',
            category: 'Station Service Display',
            size: 'tall',
            image: '/WhatsApp Image 2025-12-25 at 10.13.16 AM.jpeg',
            link: '/solutions/station-service-display'
        },
        {
            id: 5,
            title: 'City Center Kiosk',
            category: 'Digital Totems',
            size: 'normal',
            image: '/WhatsApp Image 2025-12-25 at 10.13.16 AM (1).jpeg',
            link: '/solutions/digital-totems'
        },
        {
            id: 6,
            title: 'LED Wall Installation',
            category: 'LED Walls',
            size: 'normal',
            image: '/WhatsApp Image 2025-12-25 at 10.13.17 AM.jpeg',
            link: '/solutions/led-walls'
        },
        {
            id: 7,
            title: 'Interactive Terminal',
            category: 'Interactive Kiosk',
            size: 'wide',
            image: '/WhatsApp Image 2025-12-25 at 10.13.18 AM (1).jpeg',
            link: '/solutions/interactive-kiosk'
        },
        {
            id: 8,
            title: 'Menu Board',
            category: 'Menu Boards',
            size: 'normal',
            image: '/WhatsApp Image 2025-12-25 at 10.13.20 AM.jpeg',
            link: '/solutions/menu-boards'
        },
    ]

    return (
        <div className='bg-black text-white min-h-screen'>
            <PageHero
                title={t('projects.heroTitle')}
                highlight="Gallery"
                description={t('projects.heroDesc')}
                ctaText={t('projects.cta')}
                ctaLink="#gallery"
            />

            <section id="gallery" className='py-20 px-4 lg:px-12'>
                <div className='max-w-7xl mx-auto'>
                    <div className='mb-12 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8'>
                        <div>
                            <h2 className='text-3xl lg:text-5xl font-[font2] uppercase mb-4'>Our Recent <span className='text-[#D3FD50]'>Installations</span></h2>
                            <p className='text-white/60 font-[font1] max-w-xl'>
                                Explore how our digital solutions transform spaces and engage audiences across Europe.
                            </p>
                        </div>
                        {/* Filter tags could go here */}
                    </div>

                    <div className='columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8'>
                        {projects.map((project) => (
                            <Link
                                key={project.id}
                                to={project.link}
                                className='break-inside-avoid block group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-[#D3FD50] transition-colors duration-300'
                            >
                                <div className='relative overflow-hidden'>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300' />

                                    <div className='absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300'>
                                        <span className='text-[#D3FD50] text-xs font-[font1] uppercase tracking-widest mb-2 block'>
                                            {project.category}
                                        </span>
                                        <h3 className='text-2xl font-[font2] text-white uppercase group-hover:text-[#D3FD50] transition-colors'>
                                            {project.title}
                                        </h3>
                                    </div>

                                    {/* Hover overlay icon */}
                                    <div className='absolute top-4 right-4 w-10 h-10 bg-[#D3FD50] rounded-full flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300'>
                                        <svg className='w-5 h-5 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    )
}

export default Projects