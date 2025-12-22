import React from 'react'

const clients = [
    'GOOGLE', 'SPOTIFY', 'NETFLIX', 'AIRBNB', 'TESLA', 'APPLE', 'META', 'AMAZON'
]

const MarqueeSection = () => {
    return (
        <section className='bg-black relative z-10 py-16 lg:py-24 overflow-hidden border-y border-white/10'>
            {/* First marquee - left to right */}
            <div className='relative mb-8'>
                <div className='flex gap-16 animate-marquee whitespace-nowrap'>
                    {[...clients, ...clients, ...clients].map((client, index) => (
                        <div
                            key={index}
                            className='flex items-center gap-8'
                        >
                            <span className='font-[font2] text-white/20 text-4xl lg:text-6xl uppercase
                                           hover:text-[#D3FD50] transition-colors duration-300 cursor-default'>
                                {client}
                            </span>
                            <span className='text-[#D3FD50] text-2xl'>✦</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Second marquee - right to left (reversed) */}
            <div className='relative'>
                <div className='flex gap-16 animate-marquee-reverse whitespace-nowrap'>
                    {[...clients, ...clients, ...clients].reverse().map((client, index) => (
                        <div
                            key={index}
                            className='flex items-center gap-8'
                        >
                            <span className='font-[font2] text-[#D3FD50]/30 text-4xl lg:text-6xl uppercase
                                           hover:text-white transition-colors duration-300 cursor-default'>
                                {client}
                            </span>
                            <span className='text-white/30 text-2xl'>◆</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Center overlay gradient */}
            <div className='absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none'></div>
            <div className='absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none'></div>
        </section>
    )
}

export default MarqueeSection
