import React from 'react'
import { Link } from 'react-router-dom'

const FooterSection = () => {
    return (
        <footer className='relative z-20 bg-[#0a0a0a] border-t border-white/10'>
            {/* Main footer content */}
            <div className='px-6 lg:px-20 py-16 lg:py-24'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8'>
                    {/* Logo and tagline */}
                    <div className='lg:col-span-4'>
                        <svg className='w-24 lg:w-32 mb-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                            <path fill="#D3FD50" fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                        </svg>
                        <p className='font-[font1] text-gray-400 text-sm lg:text-base leading-relaxed max-w-sm'>
                            The spark for all things creative. Building brands that transcend
                            trends and create lasting impact.
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
                            {['Home', 'Projects', 'Agence', 'Contact'].map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className='font-[font1] text-gray-400 text-sm hover:text-[#D3FD50] 
                                                  transition-colors duration-300'
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services links */}
                    <div className='lg:col-span-2'>
                        <h4 className='font-[font2] text-white text-sm uppercase tracking-wider mb-6'>
                            Services
                        </h4>
                        <ul className='space-y-3'>
                            {['Brand Strategy', 'Digital Design', 'Creative Direction', 'Motion & Film'].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href='#'
                                        className='font-[font1] text-gray-400 text-sm hover:text-[#D3FD50] 
                                                  transition-colors duration-300'
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div className='lg:col-span-4'>
                        <h4 className='font-[font2] text-white text-sm uppercase tracking-wider mb-6'>
                            Get In Touch
                        </h4>
                        <div className='space-y-4'>
                            <a
                                href='mailto:hello@k72.agency'
                                className='block font-[font1] text-gray-400 text-sm hover:text-[#D3FD50] 
                                          transition-colors duration-300'
                            >
                                hello@k72.agency
                            </a>
                            <p className='font-[font1] text-gray-400 text-sm'>
                                +33 1 23 45 67 89
                            </p>
                            <p className='font-[font1] text-gray-400 text-sm leading-relaxed'>
                                72 Avenue des Champs-Élysées<br />
                                75008 Paris, France
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className='border-t border-white/10 px-6 lg:px-20 py-6'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-4'>
                    <p className='font-[font1] text-gray-500 text-xs'>
                        © 2024 K72 Agency. All rights reserved.
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
