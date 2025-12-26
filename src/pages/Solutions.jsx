import React from 'react'
import { Link } from 'react-router-dom'
import FooterSection from '../components/home/FooterSection'
import PageHero from '../components/common/PageHero'
import { useLanguage } from '../context/LanguageContext'
import SolutionsPortfolio from '../components/solutions/SolutionsPortfolio'

const Solutions = () => {
    const { t } = useLanguage()

    const services = [
        {
            icon: (
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
            ),
            title: t('solutions.screenDiff'),
            subtitle: '',
            description: t('solutions.screenDiffDesc'),
            features: t('solutions.f1', { returnObjects: true }) || []
        },
        {
            icon: (
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z' />
                </svg>
            ),
            title: t('solutions.socialSynergy'),
            subtitle: '',
            description: t('solutions.socialSynergyDesc'),
            features: t('solutions.f2', { returnObjects: true }) || []
        },
        {
            icon: (
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                </svg>
            ),
            title: t('solutions.analytics'),
            subtitle: '',
            description: t('solutions.analyticsDesc'),
            features: t('solutions.f3', { returnObjects: true }) || []
        }
    ]

    const stats = [
        { value: '2000+', label: t('solutions.statsLabel1'), sublabel: 'Active Screens' },
        { value: '15M', label: t('solutions.statsLabel2'), sublabel: 'Monthly Reach' },
        { value: '3400+', label: t('solutions.statsLabel3'), sublabel: 'Advertisers' },
        { value: '100%', label: t('solutions.statsLabel4'), sublabel: 'Captive Audience' }
    ]

    // Get translated campaign data from translations
    const campaignTags = t('solutions.campaignTags', { returnObjects: true }) || []
    const campaignHighlights = t('solutions.campaignHighlights', { returnObjects: true }) || []
    const audienceInsights = t('solutions.audienceInsights', { returnObjects: true }) || []
    const activationStack = t('solutions.activationStack', { returnObjects: true }) || []
    const campaignPackages = t('solutions.campaignPackages', { returnObjects: true }) || []
    const campaignDeliverables = t('solutions.campaignDeliverables', { returnObjects: true }) || []

    const heroVisual = (
        <div className='relative rounded-[32px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.35)] border border-white/10 w-[min(90vw,520px)]'>
            <video
                className='w-full h-full object-cover'
                src='https://video.gumlet.io/694cef8ab122cbf176482b8c/694e75f3f1ad267a0667aeeb/download.mp4'
                autoPlay
                muted
                loop
                playsInline
                preload='metadata'
                poster='https://dummyimage.com/500x420/000/fff'
            >
                Your browser does not support the video tag.
            </video>
            <div className='absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/40 via-transparent to-black/10' />
            <div className='absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-[font1] uppercase tracking-[0.3em] text-white/80'>
                <span>Live Installation</span>
                <span>Luxio Media</span>
            </div>
        </div>
    )

    return (
        <div className='bg-black text-white min-h-screen'>
            {/* Hero Section */}
            <PageHero
                title={t('solutions.heroTitle')}
                highlight={t('solutions.heroTitleHighlight')}
                description={t('solutions.heroDesc')}
                ctaText={t('solutions.heroScroll')}
                ctaLink="#stats"
                titleClassName='text-[8vw] lg:text-[3.6vw]'
                visual={heroVisual}
            />

            {/* Stats Section */}
            <section id="stats" className='relative z-10 py-20 lg:py-32 border-y border-white/10'>
                <div className='max-w-7xl mx-auto px-4 lg:px-12'>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
                        {stats.map((stat, index) => (
                            <div key={index} className='text-center group'>
                                <div className='font-[font2] text-[#D3FD50] text-4xl lg:text-6xl mb-2 group-hover:scale-110 transition-transform duration-300'>
                                    {stat.value}
                                </div>
                                <div className='font-[font1] text-white text-sm lg:text-base uppercase tracking-wider'>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className='relative py-20 lg:py-32 px-4 lg:px-12'>
                <div className='max-w-7xl mx-auto'>
                    {/* Section Header */}
                    <div className='mb-16 lg:mb-24'>
                        <span className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4 block'>
                            {t('solutions.offerTitle')}
                        </span>
                        <h2 className='font-[font2] text-white text-[8vw] lg:text-[4vw] leading-none uppercase'>
                            {t('solutions.offerSubtitle1')}
                        </h2>
                        <h2 className='font-[font2] text-white/20 text-[8vw] lg:text-[4vw] leading-none uppercase'>
                            {t('solutions.offerSubtitle2')}
                        </h2>
                    </div>

                    {/* Services Grid */}
                    <div className='grid lg:grid-cols-3 gap-6 lg:gap-8'>
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className='group relative p-8 lg:p-10 rounded-3xl border border-white/10 hover:border-[#D3FD50]/50 bg-gradient-to-br from-white/5 to-transparent transition-all duration-500 hover:scale-[1.02]'
                            >
                                {/* Icon */}
                                <div className='w-16 h-16 rounded-2xl bg-[#D3FD50]/10 flex items-center justify-center text-[#D3FD50] mb-6 group-hover:bg-[#D3FD50]/20 transition-colors duration-300'>
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className='font-[font2] text-white text-xl lg:text-2xl mb-2 group-hover:text-[#D3FD50] transition-colors duration-300'>
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className='font-[font1] text-white/60 text-sm lg:text-base mb-6 leading-relaxed'>
                                    {service.description}
                                </p>

                                {/* Features List */}
                                <ul className='space-y-3'>
                                    {Array.isArray(service.features) && service.features.map((feature, fIndex) => (
                                        <li key={fIndex} className='flex items-center gap-3 text-white/70 text-sm'>
                                            <span className='w-1.5 h-1.5 rounded-full bg-[#D3FD50]' />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Decorative corner */}
                                <div className='absolute top-0 right-0 w-24 h-24 border-t border-r border-white/10 rounded-tr-3xl group-hover:border-[#D3FD50]/30 transition-colors duration-300' />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Campaign Architecture Section */}
            <section className='relative py-20 lg:py-32 px-4 lg:px-12 bg-gradient-to-b from-black via-zinc-950 to-black'>
                <div className='max-w-7xl mx-auto'>
                    <div className='flex flex-col lg:flex-row justify-between items-start gap-8 mb-12'>
                        <div>
                            <p className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-3'>
                                {t('solutions.campaignNetworkLabel')}
                            </p>
                            <h2 className='font-[font2] text-white text-3xl lg:text-5xl leading-tight uppercase'>
                                {t('solutions.campaignTitle')}
                            </h2>
                        </div>
                        <div className='max-w-2xl text-white/70 font-[font1] text-base leading-relaxed'>
                            {t('solutions.campaignIntro')}
                        </div>
                    </div>

                    <div className='flex flex-wrap gap-3 mb-12'>
                        {Array.isArray(campaignTags) && campaignTags.map((tag, idx) => (
                            <span key={idx} className='px-4 py-2 text-xs font-[font1] uppercase tracking-widest border border-white/10 rounded-full text-white/70'>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className='grid lg:grid-cols-3 gap-6 mb-16'>
                        {Array.isArray(campaignHighlights) && campaignHighlights.map((item, idx) => (
                            <div key={idx} className='p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#D3FD50]/40 transition-all duration-300'>
                                <h3 className='font-[font2] text-white text-lg mb-3 uppercase'>{item.title}</h3>
                                <p className='font-[font1] text-white/70 text-sm leading-relaxed'>{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className='grid lg:grid-cols-2 gap-8 mb-16'>
                        <div className='p-6 rounded-3xl border border-white/10 bg-white/5'>
                            <h4 className='font-[font2] text-white text-xl uppercase mb-4'>
                                {t('solutions.audienceInsightsTitle')}
                            </h4>
                            <ul className='space-y-3'>
                                {Array.isArray(audienceInsights) && audienceInsights.map((insight, idx) => (
                                    <li key={idx} className='flex items-start gap-3 text-white/70 font-[font1] text-sm'>
                                        <span className='w-2 h-2 mt-2 rounded-full bg-[#D3FD50]' />
                                        <div>
                                            <p className='text-white font-[font2] text-sm uppercase tracking-wide'>{insight.title}</p>
                                            <p>{insight.value}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='p-6 rounded-3xl border border-white/10 bg-white/5'>
                            <h4 className='font-[font2] text-white text-xl uppercase mb-4'>
                                {t('solutions.activationStackTitle')}
                            </h4>
                            <ul className='space-y-3'>
                                {Array.isArray(activationStack) && activationStack.map((layer, idx) => (
                                    <li key={idx} className='flex items-start gap-3 text-white/70 font-[font1] text-sm'>
                                        <span className='w-2 h-2 mt-2 rounded-full bg-[#D3FD50]' />
                                        <div>
                                            <p className='text-white font-[font2] text-sm uppercase tracking-wide'>{layer.title}</p>
                                            <p>{layer.value}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className='mt-20'>
                        <div className='flex flex-col lg:flex-row items-start justify-between gap-6 mb-10'>
                            <div>
                                <p className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-3'>
                                    {t('solutions.mediaPlaybooksLabel')}
                                </p>
                                <h3 className='font-[font2] text-white text-3xl lg:text-4xl uppercase leading-tight'>
                                    {t('solutions.mediaPlaybooksTitle')}
                                </h3>
                            </div>
                            <p className='font-[font1] text-white/70 max-w-2xl text-base leading-relaxed'>
                                {t('solutions.mediaPlaybooksDesc')}
                            </p>
                        </div>

                        <div className='grid md:grid-cols-3 gap-6 mb-16'>
                            {Array.isArray(campaignPackages) && campaignPackages.map((pkg, idx) => (
                                <div key={idx} className='p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-[#D3FD50]/30 transition-colors duration-300'>
                                    <div className='text-[#D3FD50] font-[font1] text-xs tracking-[0.3em] uppercase mb-4'>{pkg.plan}</div>
                                    <p className='text-white font-[font2] text-xl uppercase mb-3'>{pkg.objective}</p>
                                    <ul className='text-white/60 font-[font1] text-sm space-y-2'>
                                        <li><span className='text-white/40 uppercase text-xs tracking-[0.2em]'>Channels</span><br />{pkg.channels}</li>
                                        <li><span className='text-white/40 uppercase text-xs tracking-[0.2em]'>Formats</span><br />{pkg.formats}</li>
                                        <li><span className='text-white/40 uppercase text-xs tracking-[0.2em]'>Reporting</span><br />{pkg.reporting}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className='grid md:grid-cols-2 gap-6'>
                            {Array.isArray(campaignDeliverables) && campaignDeliverables.map((block, idx) => (
                                <div key={idx} className='p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent'>
                                    <h4 className='font-[font2] text-white text-xl uppercase mb-5'>{block.title}</h4>
                                    <ul className='space-y-3 text-white/70 font-[font1] text-sm'>
                                        {Array.isArray(block.items) && block.items.map((item, itemIdx) => (
                                            <li key={itemIdx} className='flex items-center gap-3'>
                                                <span className='w-1.5 h-1.5 rounded-full bg-[#D3FD50]' />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* DOOH + Social Media Section */}
            <section className='relative py-20 lg:py-32 px-4 lg:px-12 bg-gradient-to-b from-zinc-950 to-black'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
                        {/* Left Content */}
                        <div>
                            <span className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4 block'>
                                {t('solutions.synergyTitle')}
                            </span>
                            <h2 className='font-[font2] text-white text-3xl lg:text-5xl leading-tight uppercase mb-6'>
                                {t('solutions.synergyHeader')}{' '}
                                <span className='text-[#D3FD50]'>{t('solutions.synergyHeaderHighlight')}</span>{' '}
                                {t('solutions.synergyHeaderEnd')}
                            </h2>
                            <p className='font-[font1] text-white/60 text-base lg:text-lg leading-relaxed mb-8'>
                                {t('solutions.synergyDesc')}
                            </p>
                            <Link
                                to='/contact'
                                className='inline-flex items-center gap-3 px-6 py-3 bg-[#D3FD50] text-black font-[font2] text-sm uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300'
                            >
                                {t('solutions.synergyBtn')}
                                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                </svg>
                            </Link>
                        </div>

                        {/* Right Visual */}
                        <div className='relative'>
                            <div className='aspect-square rounded-3xl bg-gradient-to-br from-[#D3FD50]/20 to-transparent border border-white/10 p-1 lg:p-2 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)]'>
                                <div className='relative w-full h-full rounded-[28px] lg:rounded-[36px] overflow-hidden'>
                                    <video
                                        className='w-full h-full object-cover'
                                        src='/From%20KlickPin%20CF%20Pin%20on%20Activation.mp4'
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload='auto'
                                        poster='https://i.pinimg.com/originals/7d/7a/7d/7d7a7d5cb4d5c7ccf6b344adcc781234.jpg'
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className='absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/30 via-transparent to-black/10' />
                                    <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                                        <div className='w-64 h-64 rounded-full border border-[#D3FD50]/20 animate-pulse' />
                                        <div className='absolute w-48 h-48 rounded-full border border-[#D3FD50]/30' />
                                        <div className='absolute w-32 h-32 rounded-full bg-[#D3FD50]/10 flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.35)]'>
                                            <svg className='w-12 h-12 text-[#D3FD50]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Portfolio Section */}
            <SolutionsPortfolio />

            {/* CTA Section */}
            <section className='relative py-20 lg:py-32 px-4 lg:px-12'>
                <div className='max-w-4xl mx-auto text-center'>
                    <h2 className='font-[font2] text-white text-[8vw] lg:text-[3vw] leading-tight uppercase mb-6'>
                        {t('solutions.ctaTitle')}<br />
                        <span className='text-[#D3FD50]'>{t('solutions.ctaTitleHighlight')}</span>
                    </h2>
                    <p className='font-[font1] text-white/60 text-lg mb-8'>
                        {t('solutions.ctaDesc')}
                    </p>
                    <div className='flex flex-wrap justify-center gap-4'>
                        <Link
                            to='/contact'
                            className='px-8 py-4 bg-[#D3FD50] text-black font-[font2] text-sm uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300'
                        >
                            {t('solutions.ctaBtn1')}
                        </Link>
                        <Link
                            to='/case-studies'
                            className='px-8 py-4 border border-white/30 text-white font-[font2] text-sm uppercase tracking-wider rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all duration-300'
                        >
                            {t('solutions.ctaBtn2')}
                        </Link>
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    )
}

export default Solutions
