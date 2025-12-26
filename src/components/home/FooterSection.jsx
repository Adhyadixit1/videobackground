import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

const FooterSection = () => {
    const { t } = useLanguage()

    const tagline = 'Your partner in digital signage across Europe. Premium screens for maximum visibility and impact.'

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Agency', path: '/agence' },
        { name: 'Contact', path: '/contact' }
    ]

    const servicesList = [
        { name: 'Screen Diffusion', path: '/solutions#screen-diffusion' },
        { name: 'Digital Ads', path: '/solutions#digital-ads' },
        { name: 'Video Production', path: '/solutions#video-production' },
        { name: 'Screen Installation', path: '/solutions#screen-installation' }
    ]

    return (
        <footer className='relative z-20 bg-[#0a0a0a] border-t border-white/10'>
            {/* Main footer content */}
            <div className='px-6 lg:px-20 py-16 lg:py-24'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8'>
                    {/* Logo and tagline */}
                    <div className='lg:col-span-4'>
                        <img src='/luxio-vector-logo.png' alt='Luxio Media' className='w-64 lg:w-96 h-auto mb-6 lg:-mt-20' />
                        <p className='font-[font1] text-gray-400 text-sm lg:text-base leading-relaxed max-w-sm'>
                            {tagline}
                        </p>

                        {/* Social links */}
                        <div className='flex gap-4 mt-8'>
                            {['Instagram', 'LinkedIn', 'Twitter', 'Behance'].map((social, index) => (
                                <a
                                    key={index}
                                    href='#'
                                    className='w-10 h-10 rounded-full border border-gray-600 
                                              flex items-center justify-center
                                              hover:border-[#D3FD50] hover:bg-[#D3FD50]/10
                                              transition-all duration-300 group'
                                >
                                    <span className='font-[font1] text-gray-400 text-xs 
                                                    group-hover:text-[#D3FD50] transition-colors'>
                                        {social.charAt(0)}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation links */}
                    <div className='lg:col-span-2'>
                        <h4 className='font-[font2] text-white text-sm uppercase tracking-wider mb-6'>
                            Navigation
                        </h4>
                        <ul className='space-y-3'>
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.path}
                                        className='font-[font1] text-gray-400 text-sm hover:text-[#D3FD50] 
                                                  transition-colors duration-300'
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services links */}
                    <div className='lg:col-span-2'>
                        <h4 className='font-[font2] text-white text-sm uppercase tracking-wider mb-6'>
                            {t('footer.servicesTitle')}
                        </h4>
                        <ul className='space-y-3'>
                            {servicesList.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.path}
                                        className='font-[font1] text-gray-400 text-sm hover:text-[#D3FD50] 
                                                  transition-colors duration-300'
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div className='lg:col-span-4'>
                        <h4 className='font-[font2] text-white text-sm uppercase tracking-wider mb-6'>
                            {t('footer.contactTitle')}
                        </h4>
                        <div className='space-y-4'>
                            <a
                                href='mailto:contact@luxiomedia.lu'
                                className='block font-[font1] text-gray-400 text-sm hover:text-[#D3FD50] 
                                          transition-colors duration-300'
                            >
                                contact@luxiomedia.lu
                            </a>
                            <p className='font-[font1] text-gray-400 text-sm'>
                                +352 661 16 77 25
                            </p>
                            <p className='font-[font1] text-gray-400 text-sm leading-relaxed'>
                                26 Bd Royal Level 5,<br />
                                2449 Ville-Haute Luxembourg
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className='border-t border-white/10 px-6 lg:px-20 py-6'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-4'>
                    <p className='font-[font1] text-gray-500 text-xs'>
                        © 2024 Luxio Media. All rights reserved.
                    </p>
                    <div className='flex gap-6'>
                        {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item, index) => (
                            <a
                                key={index}
                                href='#'
                                className='font-[font1] text-gray-500 text-xs hover:text-[#D3FD50] 
                                          transition-colors duration-300'
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection
