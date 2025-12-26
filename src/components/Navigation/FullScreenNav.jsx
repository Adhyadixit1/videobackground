import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavbarContext } from '../../context/NavContext'
import { useLanguage } from '../../context/LanguageContext'

const FullScreenNav = () => {
    const { t } = useLanguage()
    const menuContainerRef = useRef(null)
    const [needsScroll, setNeedsScroll] = useState(false)
    const [navOpen, setNavOpen] = useContext(NavbarContext)
    const navigate = useNavigate()

    const menuItems = [
        { title: t('nav.solutions'), subtitle: t('nav.subtitles.solutions'), path: '/solutions' },
        { title: t('nav.whyFillup'), subtitle: t('nav.subtitles.whyFillup'), path: '/why-fillup' },
        { title: t('nav.aboutUs'), subtitle: t('nav.subtitles.aboutUs'), path: '/agence' },
        { title: t('nav.caseStudies'), subtitle: t('nav.subtitles.caseStudies'), path: '/case-studies' },
        { title: t('nav.resources'), subtitle: t('nav.subtitles.resources'), path: '/resources' },
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
        <div className='fixed inset-0 z-50 bg-black'>
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
                            <div className='flex items-center gap-4'>
                                <a href='#' className='w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#D3FD50] hover:bg-[#D3FD50]/10 transition-all duration-300 group'>
                                    <svg className='w-4 h-4 text-white group-hover:text-[#D3FD50]' fill='currentColor' viewBox='0 0 24 24'>
                                        <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
                                    </svg>
                                </a>
                                <a href='#' className='w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#D3FD50] hover:bg-[#D3FD50]/10 transition-all duration-300 group'>
                                    <svg className='w-4 h-4 text-white group-hover:text-[#D3FD50]' fill='currentColor' viewBox='0 0 24 24'>
                                        <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                                    </svg>
                                </a>
                                <a href='#' className='w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#D3FD50] hover:bg-[#D3FD50]/10 transition-all duration-300 group'>
                                    <svg className='w-4 h-4 text-white group-hover:text-[#D3FD50]' fill='currentColor' viewBox='0 0 24 24'>
                                        <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav