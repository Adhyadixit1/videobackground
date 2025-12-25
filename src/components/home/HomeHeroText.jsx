import React from 'react'
import { Link } from 'react-router-dom'

const HomeHeroText = () => {
    return (
        <div className='h-full w-full flex items-end justify-center pb-16'>
            <div className='flex flex-col items-center gap-6'>
                <div className='flex flex-row flex-wrap justify-center items-center gap-2 px-4'>
                    <Link
                        to='/contact'
                        className='px-4 py-2 rounded-full bg-[#D3FD50] text-black font-[font2] text-[0.6rem] sm:text-xs uppercase tracking-[0.3em] hover:bg-white transition-colors duration-300'
                    >
                        Start Today
                    </Link>
                    <a
                        href='#network'
                        className='px-4 py-2 rounded-full border border-white/40 text-white font-[font2] text-[0.6rem] sm:text-xs uppercase tracking-[0.3em] hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors duration-300'
                    >
                        Find a Screen
                    </a>
                </div>

            </div>
        </div>
    )
}

export default HomeHeroText