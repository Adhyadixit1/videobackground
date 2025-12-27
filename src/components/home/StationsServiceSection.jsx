import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

const Icon = ({ type }) => {
    if (type === 'radar') {
        return (
            <svg viewBox='0 0 120 120' fill='none' className='w-20 h-20 text-black/80'>
                <circle cx='60' cy='60' r='52' stroke='currentColor' strokeWidth='2' className='radar-ring' />
                <circle cx='60' cy='60' r='36' stroke='currentColor' strokeWidth='2' className='radar-ring pulse-ring' />
                <circle cx='60' cy='60' r='20' stroke='currentColor' strokeWidth='2' className='radar-ring pulse-ring pulse-ring-delay' />
                <g className='radar-sweep'>
                    <path d='M60 60 L60 14 A46 46 0 0 1 104 60 Z' fill='currentColor' opacity='0.12' />
                </g>
                <path d='M60 60V18' stroke='currentColor' strokeWidth='3' strokeLinecap='round' className='radar-line' />
                <path d='M60 60L96 44' stroke='currentColor' strokeWidth='3' strokeLinecap='round' className='radar-line radar-line-offset' />
                <circle cx='92' cy='46' r='4' className='radar-blip' fill='currentColor' />
                <circle cx='68' cy='28' r='3' className='radar-blip radar-blip-delay' fill='currentColor' />
                <circle cx='60' cy='60' r='6' className='center-pulse' fill='currentColor' />
            </svg>
        )
    }

    if (type === 'map') {
        return (
            <svg viewBox='0 0 180 180' fill='none' className='w-20 h-20 text-black/80'>
                <ellipse cx='90' cy='110' rx='70' ry='32' stroke='#4dbdc6' strokeWidth='2' className='orbit-ring' />
                <ellipse cx='90' cy='95' rx='55' ry='26' stroke='#a4c87d' strokeWidth='1.5' className='orbit-ring orbit-ring-delay' />
                <ellipse cx='90' cy='80' rx='40' ry='18' stroke='#fcd434' strokeWidth='1' className='orbit-ring orbit-ring-delay2' />

                <circle cx='90' cy='70' r='26' fill='url(#coverGrad1)' className='sphere-pulse' />
                <ellipse cx='90' cy='70' rx='26' ry='9' stroke='#01122e' strokeWidth='1' opacity='0.3' />
                <path d='M64 70 Q90 52 116 70' stroke='#01122e' strokeWidth='1' opacity='0.3' />

                <g className='orbit-dots'>
                    <circle cx='40' cy='108' r='6' className='pin-bounce' fill='#fcd434' />
                    <circle cx='140' cy='108' r='6' className='pin-bounce pin-bounce-delay' fill='#4dbdc6' />
                    <circle cx='90' cy='128' r='5' className='pin-bounce pin-bounce-delay2' fill='#a4c87d' />
                </g>

                <g className='location-pins'>
                    <path d='M50 125 L50 115 L55 110 L50 105 L45 110 L50 115 Z' className='pin-bounce' fill='#fcd434' />
                    <path d='M130 120 L130 110 L135 105 L130 100 L125 105 L130 110 Z' className='pin-bounce pin-bounce-delay' fill='#4dbdc6' />
                    <path d='M90 140 L90 130 L95 125 L90 120 L85 125 L90 130 Z' className='pin-bounce pin-bounce-delay2' fill='#a4c87d' />
                </g>

                <defs>
                    <linearGradient id='coverGrad1' x1='0%' y1='0%' x2='100%' y2='100%'>
                        <stop offset='0%' stopColor='#4dbdc6' />
                        <stop offset='50%' stopColor='#a4c87d' />
                        <stop offset='100%' stopColor='#fcd434' />
                    </linearGradient>
                </defs>
            </svg>
        )
    }

    return (
        <svg viewBox='0 0 180 180' fill='none' className='w-20 h-20 text-black/80'>
            <circle cx='90' cy='90' r='70' stroke='currentColor' strokeWidth='1.5' className='attention-wave' opacity='0.3' />
            <circle cx='90' cy='90' r='55' stroke='currentColor' strokeWidth='1.5' className='attention-wave attention-wave-delay' opacity='0.5' />
            <circle cx='90' cy='90' r='40' stroke='currentColor' strokeWidth='1.5' className='attention-wave attention-wave-delay2' opacity='0.7' />

            <ellipse cx='90' cy='85' rx='45' ry='25' stroke='currentColor' strokeWidth='3' className='eye-blink' />
            <circle cx='90' cy='85' r='20' className='eyeball' fill='currentColor' opacity='0.15' />
            <circle cx='90' cy='85' r='13' className='pupil-look' fill='currentColor' />
            <circle cx='85' cy='80' r='4' fill='#fff' opacity='0.8' />
            <circle cx='96' cy='90' r='2.5' fill='#fff' opacity='0.4' />

            <g className='eye-rays' stroke='currentColor' strokeWidth='2' strokeLinecap='round'>
                <line x1='90' y1='52' x2='90' y2='40' />
                <line x1='60' y1='65' x2='52' y2='56' />
                <line x1='120' y1='65' x2='128' y2='56' />
            </g>

            <path d='M50 72 L50 60 L62 60' stroke='currentColor' strokeWidth='2' strokeLinecap='round' className='bracket-pulse' />
            <path d='M130 72 L130 60 L118 60' stroke='currentColor' strokeWidth='2' strokeLinecap='round' className='bracket-pulse bracket-pulse-delay' />
            <path d='M50 100 L50 112 L62 112' stroke='currentColor' strokeWidth='2' strokeLinecap='round' className='bracket-pulse bracket-pulse-delay2' />
            <path d='M130 100 L130 112 L118 112' stroke='currentColor' strokeWidth='2' strokeLinecap='round' className='bracket-pulse bracket-pulse-delay3' />

            <circle cx='140' cy='50' r='3' className='sparkle' fill='#fcd434' />
            <circle cx='42' cy='120' r='2.5' className='sparkle sparkle-delay' fill='#4dbdc6' />
            <circle cx='145' cy='125' r='2.5' className='sparkle sparkle-delay2' fill='#a4c87d' />
        </svg>
    )
}

const StationsServiceSection = () => {
    const { t } = useLanguage()

    const features = [
        {
            label: t('stations.notoriety'),
            description: t('stations.notorietyDesc'),
            accent: 'from-[#4dbdc6] via-[#a4c87d] to-[#fcd434]',
            icon: 'radar',
            link: '/solutions/info-displays'
        },
        {
            label: t('stations.coverage'),
            description: t('stations.coverageDesc'),
            accent: 'from-[#fcd434] via-[#d776ff] to-[#4dbdc6]',
            icon: 'map',
            link: '/solutions/gas-station-network'
        },
        {
            label: t('stations.captivating'),
            description: t('stations.captivatingDesc'),
            accent: 'from-[#d776ff] via-[#f9d976] to-[#d3fd50]',
            icon: 'eye',
            link: '/solutions/promotional-screen'
        }
    ]

    return (
        <section className='relative z-10 bg-[#050307] py-16 sm:py-24 lg:py-32 overflow-hidden'>


            <div className='relative z-10 max-w-6xl mx-auto px-5 sm:px-8'>
                <div className='text-center space-y-6'>
                    <p className='text-xs sm:text-sm tracking-[0.4em] uppercase text-white/50'>{t('stations.subtitle')}</p>
                    <h2 className='text-2xl sm:text-3xl lg:text-5xl font-[font2] text-white leading-tight'>
                        {t('stations.titlePart1')}{' '}
                        <span className='bg-gradient-to-r from-[#f9d976] via-[#b978ff] to-[#7ef9c0] bg-clip-text text-transparent'>
                            {t('stations.titlePart2')}
                        </span>
                    </h2>
                    <div className='flex items-center justify-center'>
                        <img
                            src='https://fillupmedia.fr/wp-content/uploads/2022/11/Bande-bleue.svg'
                            alt='liseré décoratif'
                            className='w-40 sm:w-60 opacity-70'
                        />
                    </div>
                </div>

                <div className='mt-12 grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 md:grid-cols-3 relative z-20'>
                    {features.map((feature) => (
                        <Link
                            to={feature.link}
                            key={feature.label}
                            className='relative p-8 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md flex flex-col gap-6 hover:border-[#d3fd50]/40 transition-all duration-300 group'
                        >
                            <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${feature.accent} flex items-center justify-center text-black shadow-[0_20px_40px_rgba(0,0,0,0.4)]`}>
                                <Icon type={feature.icon} />
                            </div>
                            <div className='space-y-3'>
                                <h3 className='text-2xl font-[font2] text-white'>{feature.label}</h3>
                                <p className='text-sm sm:text-base text-white/70 font-[font1] leading-relaxed'>
                                    {feature.description}
                                </p>
                            </div>
                            <div className='pt-4 mt-auto'>
                                <div className='h-px bg-gradient-to-r from-transparent via-white/20 to-transparent' />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className='mt-10 sm:mt-12 text-center text-white/60 text-sm sm:text-base font-[font1]'>
                    {t('stations.bottomText')}
                </div>
            </div>
        </section>
    )
}

export default StationsServiceSection
