import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

const HomeHeroText = () => {
    const { t } = useLanguage()

    return (
        <div className='h-full w-full flex items-end justify-center pb-16'>
            <div className='flex flex-col items-center gap-6'>
                <div className='flex flex-row flex-wrap justify-center items-center gap-2 px-4'>
                    <Link
                        to='/contact'
                        className='px-4 py-2 lg:px-10 lg:py-5 rounded-full bg-[#D3FD50] text-black font-[font2] text-[0.6rem] sm:text-xs lg:text-sm uppercase tracking-[0.3em] hover:bg-white transition-colors duration-300'
                    >
                        {t('home.heroBtn')}
                    </Link>
                    <a
                        href='#network'
                        className='px-4 py-2 lg:px-10 lg:py-5 rounded-full border border-white/40 text-white font-[font2] text-[0.6rem] sm:text-xs lg:text-sm uppercase tracking-[0.3em] hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors duration-300'
                    >
                        {t('home.heroBtnSecondary')}
                    </a>
                </div>

            </div>
        </div>
    )
}

export default HomeHeroText