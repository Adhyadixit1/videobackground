import React from 'react'

const stats = [
    { number: '150+', label: 'Projects Completed', suffix: '' },
    { number: '12', label: 'Years of Excellence', suffix: '+' },
    { number: '98', label: 'Client Satisfaction', suffix: '%' },
    { number: '25', label: 'Industry Awards', suffix: '+' },
]

const StatsSection = () => {
    return (
        <section className='relative z-10 overflow-hidden bg-black py-20 lg:py-32'>
            {/* Animated lines background */}
            <div className='absolute inset-0'>
                <div className='absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent'></div>
                <div className='absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent'></div>
                <div className='absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent'></div>
            </div>

            {/* Glowing orb */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                           w-[600px] h-[600px] bg-[#D3FD50]/5 rounded-full blur-[200px]'></div>

            <div className='relative z-10 px-6 lg:px-20'>
                {/* Header */}
                <div className='text-center mb-16 lg:mb-24'>
                    <h2 className='font-[font2] text-white text-[14vw] lg:text-[8vw] leading-none uppercase'>
                        Impact
                    </h2>
                    <p className='font-[font1] text-white/60 text-sm lg:text-lg max-w-xl mx-auto mt-6 leading-relaxed'>
                        Numbers that tell our story of dedication, creativity, and transformative results
                    </p>
                </div>

                {/* Stats grid */}
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className='group relative text-center py-12 lg:py-16'
                        >
                            {/* Hover background */}
                            <div className='absolute inset-0 bg-gradient-to-b from-[#D3FD50]/5 to-transparent 
                                           rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                            <div className='relative'>
                                {/* Number */}
                                <div className='font-[font2] text-[#D3FD50] text-5xl lg:text-7xl xl:text-8xl 
                                               leading-none mb-4 group-hover:scale-110 transition-transform duration-500'>
                                    {stat.number}
                                </div>

                                {/* Decorative line */}
                                <div className='w-12 h-px bg-white/20 mx-auto mb-4 
                                               group-hover:w-20 group-hover:bg-[#D3FD50] transition-all duration-500'></div>

                                {/* Label */}
                                <p className='font-[font1] text-white/60 text-sm lg:text-base uppercase tracking-wider'>
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StatsSection
