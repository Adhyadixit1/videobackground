import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/common/PageHero'
import FooterSection from '../components/home/FooterSection'
import { useLanguage } from '../context/LanguageContext'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Projects = () => {
    const { t, language } = useLanguage()

    const projects = useMemo(() => {
        const staticData = [
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
            {
                id: 9,
                solutionKey: 'outdoorLCD43',
                categoryKey: 'outdoorScreens',
                size: 'tall',
                color: 'from-green-900/80 to-emerald-900/80',
                image: '/Picture1.jpg',
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
        ]

        return staticData.map(item => ({
            ...item,
            title: t(`solutionPages.${item.solutionKey}.title`),
            category: t(`home.pinterest.categories.${item.categoryKey}`)
        }))
    }, [t])

    return (
        <div className='bg-black text-white min-h-screen'>
            <PageHero
                title={t('projects.heroTitle')}
                highlight={t('projects.heroTitleHighlight')}
                description={t('projects.heroDesc')}
                ctaText={t('projects.cta')}
                ctaLink="#gallery"
                visual={
                    <div className='relative w-full h-full flex items-center justify-center'>
                        <div className='absolute inset-0 bg-gradient-to-tr from-[#D3FD50]/10 via-transparent to-transparent blur-3xl' />
                        <DotLottieReact
                            src="https://lottie.host/a11ca1f2-9df1-4565-977a-281e36304a06/Xm2M6ywewp.lottie"
                            loop
                            autoplay
                            className='w-full h-full max-w-[480px]'
                        />
                    </div>
                }
            />

            <section id="gallery" className='py-20 lg:py-32 px-4 lg:px-12'>
                <div className='max-w-[1400px] mx-auto'>
                    <div className='mb-16 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8'>
                        <div>
                            <h2 className='text-3xl lg:text-5xl font-[font2] uppercase mb-4'>
                                {language === 'fr' ? (
                                    <>Nos Récentes <span className='text-[#D3FD50]'>Installations</span></>
                                ) : language === 'de' ? (
                                    <>Unsere neuesten <span className='text-[#D3FD50]'>Installationen</span></>
                                ) : (
                                    <>Our Recent <span className='text-[#D3FD50]'>Installations</span></>
                                )}
                            </h2>
                            <p className='text-white/60 font-[font1] max-w-xl'>
                                {language === 'fr'
                                    ? "Découvrez comment nos solutions digitales transforment les espaces et engagent les audiences à travers l'Europe."
                                    : language === 'de'
                                        ? "Entdecken Sie, wie unsere digitalen Lösungen Räume transformieren und Zielgruppen in ganz Europa begeistern."
                                        : "Explore how our digital solutions transform spaces and engage audiences across Europe."}
                            </p>
                        </div>
                    </div>

                    <div className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 lg:gap-6'>
                        {projects.map((project) => (
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
                                    {/* Background image/video */}
                                    <div className='absolute inset-0'>
                                        {project.video ? (
                                            <video
                                                src={project.video}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                className='w-full h-full object-cover opacity-60 
                                                          group-hover:opacity-70 group-hover:scale-110
                                                          transition-all duration-700'
                                            />
                                        ) : (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className='w-full h-full object-cover opacity-60 
                                                          group-hover:opacity-70 group-hover:scale-110
                                                          transition-all duration-700'
                                            />
                                        )}
                                    </div>

                                    {/* Color gradient overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} 
                                                   mix-blend-multiply opacity-90`}></div>

                                    {/* Dark gradient overlay */}
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent 
                                                   opacity-80 group-hover:opacity-70 transition-opacity duration-500'></div>

                                    {/* Decorative circles */}
                                    <div className='absolute top-8 right-8 w-16 h-16 border border-white/20 rounded-full 
                                                   group-hover:border-[#D3FD50]/50 group-hover:scale-110 transition-all duration-500'></div>
                                    <div className='absolute top-20 right-12 w-8 h-8 bg-white/10 rounded-full 
                                                   group-hover:bg-[#D3FD50]/30 transition-all duration-500'></div>

                                    {/* Featured badge */}
                                    {project.isSpecial && (
                                        <div className='absolute top-4 right-4 px-4 py-2 bg-[#D3FD50] text-black text-xs font-[font1] font-bold rounded-full uppercase tracking-wider z-10 shadow-lg shadow-[#D3FD50]/40'>
                                            ⭐ Featured
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div className='absolute bottom-0 left-0 right-0 p-6 lg:p-8'>
                                        <span className={`
                                            inline-block px-3 py-1 backdrop-blur-md rounded-full text-xs font-[font1] tracking-wider uppercase mb-3
                                            transition-all duration-300
                                            ${project.isSpecial
                                                ? 'bg-[#D3FD50]/20 text-[#D3FD50]'
                                                : 'bg-white/10 text-white/80 group-hover:bg-[#D3FD50]/20 group-hover:text-[#D3FD50]'}
                                        `}>
                                            {project.category}
                                        </span>
                                        <h3 className={`font-[font2] text-white leading-tight uppercase group-hover:text-[#D3FD50] transition-colors duration-300
                                                       ${project.isSpecial ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'}`}>
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