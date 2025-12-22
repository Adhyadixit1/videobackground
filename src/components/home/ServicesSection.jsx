import React from 'react'

const services = [
    {
        number: '01',
        title: 'Brand Strategy',
        description: 'Crafting unique brand identities that resonate with your audience and stand the test of time.',
        icon: '◇',
        image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80'
    },
    {
        number: '02',
        title: 'Digital Design',
        description: 'Creating immersive digital experiences through cutting-edge UI/UX design principles.',
        icon: '○',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80'
    },
    {
        number: '03',
        title: 'Creative Direction',
        description: 'Guiding visual narratives that captivate and inspire meaningful connections.',
        icon: '△',
        image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80'
    },
    {
        number: '04',
        title: 'Motion & Film',
        description: 'Bringing stories to life through dynamic motion graphics and cinematic production.',
        icon: '□',
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80'
    }
]

const ServicesSection = () => {
    return (
        <section className='min-h-screen bg-black relative z-10 overflow-hidden py-20 lg:py-32'>
            {/* Background gradient orbs */}
            <div className='absolute top-20 left-10 w-96 h-96 bg-[#D3FD50]/10 rounded-full blur-[120px]'></div>
            <div className='absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]'></div>

            <div className='relative z-10 px-6 lg:px-20'>
                {/* Section header */}
                <div className='mb-20'>
                    <p className='text-[#D3FD50] font-[font1] text-sm lg:text-base tracking-[0.3em] uppercase mb-4'>What We Do</p>
                    <h2 className='font-[font2] text-white text-[10vw] lg:text-[6vw] leading-none uppercase'>
                        Services
                    </h2>
                </div>

                {/* Services grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='group relative p-8 lg:p-12 rounded-3xl overflow-hidden
                                       hover:border-[#D3FD50]/50 transition-all duration-500 cursor-pointer'
                        >
                            {/* Background image - subtle */}
                            <div className='absolute inset-0'>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className='w-full h-full object-cover opacity-20 
                                              group-hover:opacity-30 group-hover:scale-105
                                              transition-all duration-700'
                                />
                            </div>

                            {/* Dark overlay */}
                            <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/90'></div>

                            {/* Border */}
                            <div className='absolute inset-0 rounded-3xl border border-white/10 
                                           group-hover:border-[#D3FD50]/50 transition-all duration-500'></div>

                            {/* Hover glow effect */}
                            <div className='absolute inset-0 rounded-3xl bg-[#D3FD50]/5 opacity-0 
                                           group-hover:opacity-100 transition-opacity duration-500'></div>

                            <div className='relative z-10'>
                                <div className='flex items-start justify-between mb-8'>
                                    <span className='text-[#D3FD50] font-[font1] text-sm tracking-wider'>
                                        {service.number}
                                    </span>
                                    <span className='text-white/30 text-3xl group-hover:text-[#D3FD50] 
                                                    transition-colors duration-300'>
                                        {service.icon}
                                    </span>
                                </div>

                                <h3 className='font-[font2] text-white text-2xl lg:text-4xl mb-4 
                                              group-hover:text-[#D3FD50] transition-colors duration-300'>
                                    {service.title}
                                </h3>

                                <p className='font-[font1] text-white/60 text-sm lg:text-base leading-relaxed'>
                                    {service.description}
                                </p>

                                {/* Arrow indicator */}
                                <div className='mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 
                                               translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300'>
                                    <span className='text-[#D3FD50] text-sm font-[font1]'>Explore</span>
                                    <svg className='w-4 h-4 text-[#D3FD50]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
