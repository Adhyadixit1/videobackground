import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavbarContext } from '../../context/NavContext'
import { useLanguage } from '../../context/LanguageContext'
import LanguageSelector from '../common/LanguageSelector'

const FullScreenNav = () => {
    const { t } = useLanguage()
    const menuContainerRef = useRef(null)
    const [needsScroll, setNeedsScroll] = useState(false)
    const [navOpen, setNavOpen] = useContext(NavbarContext)
    const navigate = useNavigate()

    const menuItems = [
        { title: t('nav.solutions'), subtitle: t('nav.subtitles.solutions'), path: '/solutions' },
        { title: t('nav.whyFillup'), subtitle: t('nav.subtitles.whyFillup'), path: '/why-luxio' },
        { title: t('nav.aboutUs'), subtitle: t('nav.subtitles.aboutUs'), path: '/agence' },
        { title: t('nav.careers'), subtitle: t('nav.subtitles.careers'), path: '/careers' },
        { title: t('nav.investors'), subtitle: t('nav.subtitles.investors'), path: '/investors' },
        { title: t('nav.contact'), subtitle: t('nav.subtitles.contact'), path: '/contact' },
    ]

    // Check if content overflows and needs scrolling
    useEffect(() => {
        const checkOverflow = () => {
            if (menuContainerRef.current) {
                const { scrollHeight, clientHeight } = menuContainerRef.current
                setNeedsScroll(scrollHeight > clientHeight)
            }
        }

        if (navOpen) {
            checkOverflow()
            window.addEventListener('resize', checkOverflow)
        }

        return () => window.removeEventListener('resize', checkOverflow)
    }, [navOpen])

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (navOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [navOpen])

    const handleNavigation = (path) => {
        navigate(path)
        setNavOpen(false)
    }

    if (!navOpen) return null

    return (
        <div className='fixed inset-0 z-[200] bg-black'>
            {/* Decorative background elements */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute top-1/4 -left-32 w-96 h-96 bg-[#D3FD50]/5 rounded-full blur-3xl'></div>
                <div className='absolute bottom-1/4 -right-32 w-96 h-96 bg-[#D3FD50]/5 rounded-full blur-3xl'></div>
                <div className='absolute top-0 left-0 w-full h-full' style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Header with logo and close button */}
            <div className='relative z-10 flex justify-between items-start p-4 lg:p-6'>
                {/* Logo */}
                <div
                    className='cursor-pointer'
                    onClick={() => handleNavigation('/')}
                >
                    <img
                        src='/luxio-vector-logo.png'
                        alt='Luxio Media'
                        className='h-12 lg:h-16 w-auto'
                    />
                </div>

                {/* Right Side Actions */}
                <div className='flex items-center gap-4 lg:gap-8'>
                    <LanguageSelector />

                    {/* Close Button - Clean X design */}
                    <button
                        onClick={() => setNavOpen(false)}
                        className='group relative w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full border border-white/20 hover:border-[#D3FD50] hover:bg-[#D3FD50]/10 transition-all duration-300'
                        aria-label='Close menu'
                    >
                        <div className='relative w-5 h-5 lg:w-6 lg:h-6'>
                            <span className='absolute top-1/2 left-0 w-full h-0.5 bg-white group-hover:bg-[#D3FD50] transform -translate-y-1/2 rotate-45 transition-colors duration-300'></span>
                            <span className='absolute top-1/2 left-0 w-full h-0.5 bg-white group-hover:bg-[#D3FD50] transform -translate-y-1/2 -rotate-45 transition-colors duration-300'></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Menu Content */}
            <div
                ref={menuContainerRef}
                className={`relative z-10 h-[calc(100vh-100px)] px-4 lg:px-12 ${needsScroll ? 'overflow-y-auto' : 'overflow-hidden'}`}
                style={{
                    scrollbarWidth: needsScroll ? 'thin' : 'none',
                    scrollbarColor: needsScroll ? '#D3FD50 #1a1a1a' : 'transparent transparent'
                }}
            >
                <div className='max-w-6xl mx-auto py-8 lg:py-12'>
                    {/* Section Title */}
                    <div className='mb-8 lg:mb-12'>
                        <span className='text-[#D3FD50] text-xs lg:text-sm font-medium tracking-widest uppercase'>
                            Navigation
                        </span>
                        <div className='mt-2 w-12 h-0.5 bg-gradient-to-r from-[#D3FD50] to-transparent'></div>
                    </div>

                    {/* Menu Items */}
                    <nav className='space-y-1'>
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleNavigation(item.path)}
                                className='group cursor-pointer relative py-3 lg:py-4 border-b border-white/5 hover:border-[#D3FD50]/30 transition-all duration-300'
                            >
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-baseline gap-3 lg:gap-6'>
                                        {/* Number indicator */}
                                        <span className='text-white/20 text-xs lg:text-sm font-mono'>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>

                                        {/* Main title */}
                                        <h2 className='font-[font2] text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl group-hover:text-[#D3FD50] transition-colors duration-300'>
                                            {item.title}
                                        </h2>

                                        {/* Subtitle - hidden on mobile */}
                                        <span className='hidden md:inline text-white/30 text-sm lg:text-base'>
                                            {item.subtitle}
                                        </span>
                                    </div>

                                    {/* Arrow indicator */}
                                    <div className='flex items-center gap-2'>
                                        <div className='w-0 group-hover:w-8 lg:group-hover:w-12 h-px bg-[#D3FD50] transition-all duration-300'></div>
                                        <svg
                                            className='w-4 h-4 lg:w-5 lg:h-5 text-white/30 group-hover:text-[#D3FD50] transform group-hover:translate-x-1 transition-all duration-300'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                        >
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                        </svg>
                                    </div>
                                </div>

                                {/* Hover background effect */}
                                <div className='absolute inset-0 bg-gradient-to-r from-[#D3FD50]/0 via-[#D3FD50]/5 to-[#D3FD50]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                            </div>
                        ))}
                    </nav>

                    {/* Footer info */}
                    <div className='mt-12 lg:mt-16 pt-8 border-t border-white/10'>
                        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6'>
                            {/* Contact info */}
                            <div className='space-y-2'>
                                <p className='text-white/40 text-xs uppercase tracking-widest'>Contact</p>
                                <a href='mailto:contact@luxiomedia.lu' className='text-white hover:text-[#D3FD50] transition-colors text-sm lg:text-base'>
                                    contact@luxiomedia.lu
                                </a>
                            </div>

                            {/* Social links */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav