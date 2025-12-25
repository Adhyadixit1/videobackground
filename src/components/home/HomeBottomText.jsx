import React from 'react'

const HomeBottomText = () => {

    return (
        <div className='font-[font2] flex flex-col items-center justify-center gap-6'>
            {/* Scroll indicator */}
            <div className='flex flex-col items-center gap-3 animate-bounce'>
                <span className='font-[font1] text-sm tracking-[0.3em] uppercase text-white/60'>Scroll</span>
                <div className='w-px h-12 bg-gradient-to-b from-[#D3FD50] to-transparent'></div>
            </div>
        </div>
    )
}

export default HomeBottomText