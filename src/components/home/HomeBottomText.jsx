import React from 'react'

const HomeBottomText = () => {

    return (
        <div className='font-[font2] flex flex-col items-center justify-center gap-6'>
            {/* Agency description */}
            <p className='absolute lg:w-[17vw] w-64 lg:right-20 right-0 bottom-28 lg:bottom-72 font-[font1] lg:text-lg text-xs lg:leading-relaxed leading-tight'>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We're transparent, honest and say what we mean, and when we believe in something, we're all in.</p>

            {/* Scroll indicator */}
            <div className='flex flex-col items-center gap-3 animate-bounce'>
                <span className='font-[font1] text-sm tracking-[0.3em] uppercase text-white/60'>Scroll</span>
                <div className='w-px h-12 bg-gradient-to-b from-[#D3FD50] to-transparent'></div>
            </div>
        </div>
    )
}

export default HomeBottomText