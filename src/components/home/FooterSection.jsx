import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

const FooterSection = () => {
    const { t } = useLanguage()
    const footer = t('footer', { returnObjects: true }) || {}

    const {
        contactCTA = 'Contact us',
        companyName = 'Luxio Media',
        tagline = 'Your partner in digital signage across Europe. Premium screens for maximum visibility and impact.',
        navTitle = 'Navigation',
        navItems = [],
        servicesTitle = 'Services',
        servicesList = [],
        contactTitle = 'Contact',
        contactDetails = {},
        legal = {}
    } = footer

    const safeNavItems = navItems.length ? navItems : [
        { label: 'Home', path: '/' },
        { label: 'Why Luxio Media', path: '/why-luxio' },
        { label: 'Solutions', path: '/solutions' },
        { label: 'Contact', path: '/contact' }
    ]

    const safeServices = servicesList.length ? servicesList : [
        { label: 'Screen Diffusion', path: '/solutions#screen-diffusion' },
        { label: 'Digital Ads', path: '/solutions#digital-ads' },
        { label: 'Video Production', path: '/solutions#video-production' },
        { label: 'Screen Installation', path: '/solutions#screen-installation' }
    ]

    return (
        <footer className='relative z-20 bg-[#0a0a0a] border-t border-white/10'>
            {/* Main footer content */}
            <div className='px-6 lg:px-20 py-16 lg:py-24'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8'>
                    {/* Contact + tagline */}
                    <div className='lg:col-span-4 space-y-6'>
                        <div>
                            <p className='font-[font1] text-sm uppercase tracking-[0.3em] text-[#D3FD50] mb-3'>{contactCTA}</p>
                            <img src='/luxio-vector-logo.png' alt={companyName} className='w-64 lg:w-80 h-auto mb-4 lg:-mt-10' />
                            <p className='font-[font1] text-white text-lg'>{companyName}</p>
                        </div>
                        <p className='font-[font1] text-gray-400 text-sm lg:text-base leading-relaxed max-w-sm'>
                            {tagline}
                        </p>

                        {/* Social links */}

                    </div>

                    {/* Navigation links */}
                    <div className='lg:col-span-2'>
                        <h4 className='font-[font2] text-white text-sm uppercase tracking-wider mb-6'>
                            {navTitle}
                        </h4>
                        <ul className='space-y-3'>
                            {safeNavItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.path}
                                        className='font-[font1] text-gray-400 text-sm hover:text-[#D3FD50] 
                                                  transition-colors duration-300'
                                    >
                                        {item.label || item.name}
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
                            {safeServices.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.path}
                                        className='font-[font1] text-gray-400 text-sm hover:text-[#D3FD50] 
                                                  transition-colors duration-300'
                                    >
                                        {item.label || item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div className='lg:col-span-4'>
                        <h4 className='font-[font2] text-white text-sm uppercase tracking-wider mb-6'>
                            {contactTitle}
                        </h4>
                        <div className='space-y-4'>
                            {contactDetails.email && (
                                <a
                                    href={`mailto:${contactDetails.email}`}
                                    className='block font-[font1] text-gray-400 text-sm hover:text-[#D3FD50] 
                                              transition-colors duration-300'
                                >
                                    {contactDetails.email}
                                </a>
                            )}
                            {contactDetails.phone && (
                                <a
                                    href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}
                                    className='block font-[font1] text-gray-400 text-sm hover:text-[#D3FD50] 
                                              transition-colors duration-300'
                                >
                                    {contactDetails.phone}
                                </a>
                            )}
                            {contactDetails.whatsapp && (
                                <a
                                    href={`https://wa.me/${contactDetails.whatsapp.replace(/[^0-9]/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='block font-[font1] text-gray-400 text-sm hover:text-[#D3FD50] 
                                              transition-colors duration-300'
                                >
                                    WhatsApp: {contactDetails.whatsapp}
                                </a>
                            )}
                            {contactDetails.addressLines && (
                                <p className='font-[font1] text-gray-400 text-sm leading-relaxed'>
                                    {contactDetails.addressLines.map((line, idx) => (
                                        <span key={idx}>
                                            {line}<br />
                                        </span>
                                    ))}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className='border-t border-white/10 px-6 lg:px-20 py-6'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-4'>
                    <p className='font-[font1] text-gray-500 text-xs text-center lg:text-left'>
                        {legal.rights || ' 2024 Luxio Media. All rights reserved.'}
                    </p>
                    <div className='flex gap-6'>
                        <Link
                            to='/privacy'
                            className='font-[font1] text-gray-500 text-xs hover:text-[#D3FD50] 
                                      transition-colors duration-300'
                        >
                            {legal.privacy || 'Privacy Policy'}
                        </Link>
                        <Link
                            to='/terms'
                            className='font-[font1] text-gray-500 text-xs hover:text-[#D3FD50] 
                                      transition-colors duration-300'
                        >
                            {legal.terms || 'Terms of Service'}
                        </Link>
                        <a
                            href='#'
                            className='font-[font1] text-gray-500 text-xs hover:text-[#D3FD50] 
                                      transition-colors duration-300'
                        >
                            {legal.cookies || 'Cookies'}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection
