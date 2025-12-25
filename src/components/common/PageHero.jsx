import React from 'react'

const PageHero = ({
    title,
    highlight,
    description,
    ctaText = 'Our offers',
    ctaLink = '#contenu',
    visual,
    titleClassName = ''
}) => {
    const defaultTitleSize = 'text-[8vw] lg:text-[3.6vw]'
    const titleClasses = `font-[font2] text-white leading-[1.1] uppercase mb-8 ${titleClassName || defaultTitleSize}`

    return (
        <section className='relative bg-black pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-20 overflow-hidden'>
            <div className='absolute inset-0 pointer-events-none'>
                <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(211,253,80,0.08),_transparent_60%)]' />
                <div className='absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,_rgba(211,253,80,0.05),_transparent_60%)]' />
            </div>

            <div className='relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
                <div className='flex flex-col items-start'>
                    <h1 className={titleClasses}>
                        {title}{' '}
                        {highlight && (
                            <span className='inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#D3FD50] to-[#9FE000] decoration-clone'>
                                {highlight}
                            </span>
                        )}
                    </h1>

                    <div className='w-24 h-1.5 bg-gradient-to-r from-[#D3FD50] to-transparent rounded-full mb-8 opacity-80' />

                    <div className='font-[font1] text-white/70 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl'>
                        {description}
                    </div>

                    <a href={ctaLink} className='group relative inline-flex items-center gap-3 px-8 py-4 bg-[#D3FD50] text-black font-[font2] text-sm uppercase tracking-wider rounded-full hover:bg-white hover:scale-105 transition-all duration-300'>
                        {ctaText}
                        <svg className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                        </svg>
                    </a>
                </div>

                <div className='relative w-full h-[400px] lg:h-[500px] flex items-center justify-center'>
                    {visual ? visual : (
                        <div className='relative w-full h-full flex items-center justify-center transform perspective-1000'>
                            {/* Animated Circles/Network */}
                            <div className='absolute inset-0 flex items-center justify-center'>
                                <div className='w-[80%] aspect-square rounded-full border border-[#D3FD50]/20 animate-[spin_20s_linear_infinite]' />
                                <div className='absolute w-[60%] aspect-square rounded-full border border-[#D3FD50]/30 animate-[spin_15s_linear_infinite_reverse]' />
                                <div className='absolute w-[40%] aspect-square rounded-full border border-[#D3FD50]/40 animate-[spin_10s_linear_infinite]' />
                            </div>

                            {/* Floating Card 1 */}
                            <div className='absolute top-[15%] right-[5%] p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl animate-float shadow-[0_0_30px_rgba(211,253,80,0.1)] hover:border-[#D3FD50]/50 transition-colors duration-300'>
                                <div className='flex gap-3 mb-3'>
                                    <div className='w-3 h-3 rounded-full bg-[#D3FD50] animate-pulse' />
                                    <div className='w-3 h-3 rounded-full bg-white/20' />
                                </div>
                                <div className='w-32 h-2 bg-white/10 rounded-full mb-2' />
                                <div className='w-20 h-2 bg-white/10 rounded-full' />
                            </div>

                            {/* Floating Card 2 */}
                            <div className='absolute bottom-[15%] left-[5%] p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl animate-float shadow-[0_0_30px_rgba(211,253,80,0.1)] hover:border-[#D3FD50]/50 transition-colors duration-300' style={{ animationDelay: '2s' }}>
                                <div className='w-12 h-12 rounded-full border-2 border-[#D3FD50] flex items-center justify-center mb-3 text-[#D3FD50] font-[font2] text-xl'>
                                    +50%
                                </div>
                                <div className='w-24 h-2 bg-white/10 rounded-full' />
                            </div>

                            {/* Center Glow */}
                            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#D3FD50]/20 blur-[50px] animate-pulse' />
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Curve Divider - Using the style requested by user (ish) */}
            <div className='absolute bottom-0 left-0 right-0'>
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full text-black h-16 lg:h-24 opacity-80 block transform translate-y-1">
                    <path d="M0,100 C480,100 960,100 1440,100 L1440,0 C960,80 480,80 0,0 L0,100 Z" fill="currentColor" />
                </svg>
            </div>
        </section>
    )
}

export default PageHero
