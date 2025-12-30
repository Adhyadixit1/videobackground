import React from 'react'
import { Link } from 'react-router-dom'
import FooterSection from '../components/home/FooterSection'
import PageHero from '../components/common/PageHero'
import { useLanguage } from '../context/LanguageContext'
import SolutionsPortfolio from '../components/solutions/SolutionsPortfolio'

const Solutions = () => {
    const { t } = useLanguage()

    // Data Mapping from Translation Keys
    const stats = [
        { value: '2000+', label: t('solutions.statsLabel1'), sublabel: 'Active Screens' },
        { value: '15M', label: t('solutions.statsLabel2'), sublabel: 'Monthly Reach' },
        { value: '3400+', label: t('solutions.statsLabel3'), sublabel: 'Advertisers' },
        { value: '100%', label: t('solutions.statsLabel4'), sublabel: 'Captive Audience' }
    ]

    const services = [
        {
            icon: '📺',
            title: t('solutions.screenDiff'),
            description: t('solutions.screenDiffDesc'),
            features: t('solutions.f1', { returnObjects: true }) || [],
            image: '/WhatsApp Image 2025-12-25 at 10.13.14 AM (1).jpeg'
        },
        {
            icon: '📱',
            title: t('solutions.socialSynergy'),
            description: t('solutions.socialSynergyDesc'),
            features: t('solutions.f2', { returnObjects: true }) || [],
            image: '/WhatsApp Image 2025-12-25 at 10.13.17 AM.jpeg'
        },
        {
            icon: '📊',
            title: t('solutions.analytics'),
            description: t('solutions.analyticsDesc'),
            features: t('solutions.f3', { returnObjects: true }) || [],
            image: '/WhatsApp Image 2025-12-25 at 10.13.16 AM.jpeg'
        }
    ]

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
        <div className='bg-[#050505] text-white min-h-screen overflow-x-hidden'>
            {/* Hero Section */}
            <PageHero
                title={t('solutions.heroTitle')}
                highlight={t('solutions.heroTitleHighlight')}
                description={t('solutions.heroDesc')}
                ctaText={t('solutions.heroScroll')}
                ctaLink="#complete-solution"
                titleClassName='text-[8vw] lg:text-[3.6vw]'
                visual={heroVisual}
            />

            {/* Stats Bar - Tight & Modern */}
            <section className='relative z-10 border-y border-white/5 bg-white/[0.02] backdrop-blur-md'>
                <div className='max-w-7xl mx-auto py-10 lg:py-16 px-6'>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                        {stats.map((stat, index) => (
                            <div key={index} className='flex flex-col items-center lg:items-start'>
                                <span className='text-[#D3FD50] font-[font2] text-4xl lg:text-6xl mb-1 stroke-text'>
                                    {stat.value}
                                </span>
                                <span className='text-white/40 font-[font1] text-[10px] lg:text-xs tracking-[0.2em] uppercase'>
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Complete Solution - Interactive Cards */}
            <section id="complete-solution" className='relative py-12 lg:py-20 px-6'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center mb-10 lg:mb-14'>
                        <span className='inline-block px-4 py-1.5 rounded-full border border-[#D3FD50]/30 text-[#D3FD50] text-[10px] font-[font2] tracking-[0.3em] uppercase mb-6'>
                            {t('solutions.offerTitle')}
                        </span>
                        <h2 className='font-[font2] text-white text-4xl lg:text-7xl leading-none uppercase mb-4'>
                            {t('solutions.offerSubtitle1')} <span className='text-white/20'>{t('solutions.offerSubtitle2')}</span>
                        </h2>
                    </div>

                    <div className='grid lg:grid-cols-3 gap-8'>
                        {services.map((service, index) => (
                            <div key={index} className='group relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 hover:border-[#D3FD50]/50 transition-all duration-500'>
                                <img src={service.image} className='absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700' alt='' />
                                <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90' />
                                <div className='absolute inset-0 p-10 flex flex-col justify-end'>
                                    <div className='w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-3xl mb-6 group-hover:bg-[#D3FD50] group-hover:text-black transition-all duration-300'>
                                        {service.icon}
                                    </div>
                                    <h3 className='font-[font2] text-2xl mb-4 uppercase tracking-tight group-hover:text-[#D3FD50] transition-colors'>
                                        {service.title}
                                    </h3>
                                    <p className='text-white/60 font-[font1] text-sm leading-relaxed mb-6 line-clamp-2'>
                                        {service.description}
                                    </p>
                                    <ul className='space-y-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500'>
                                        {service.features.map((f, i) => (
                                            <li key={i} className='flex items-center gap-2 text-xs text-white/80'>
                                                <div className='w-1 h-1 rounded-full bg-[#D3FD50]' />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Campaign Architecture - Split Grid Design */}
            <section className='relative py-12 lg:py-20 px-6 bg-[#080808]'>
                <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none' />
                <div className='max-w-7xl mx-auto'>
                    <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-12lg:mb-16'>
                        <div>
                            <span className='text-[#D3FD50] font-[font1] text-xs tracking-[0.4em] uppercase mb-4 block'>
                                {t('solutions.campaignNetworkLabel')}
                            </span>
                            <h2 className='font-[font2] text-4xl lg:text-7xl leading-[0.9] text-white uppercase mb-8'>
                                {t('solutions.campaignTitle')}
                            </h2>
                            <p className='text-white/60 font-[font1] text-lg leading-relaxed max-w-xl'>
                                {t('solutions.campaignIntro')}
                            </p>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            {t('solutions.campaignTags', { returnObjects: true })?.map((tag, idx) => (
                                <div key={idx} className='px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-center font-[font2] text-[10px] uppercase tracking-widest hover:border-[#D3FD50]/40 transition-colors'>
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-5 gap-1'>
                        {campaignHighlights.map((item, idx) => (
                            <div key={idx} className='p-8 bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors relative group h-full flex flex-col'>
                                <div className='text-[#D3FD50] font-[font2] text-sm mb-6 opacity-40 group-hover:opacity-100'>0{idx + 1}</div>
                                <h3 className='font-[font2] text-lg mb-4 uppercase leading-tight'>{item.title}</h3>
                                <p className='text-white/40 font-[font1] text-xs leading-relaxed mt-auto'>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Audience Insights - Visual Dashboard Style */}
            <section className='relative py-12 lg:py-20 px-6'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid lg:grid-cols-2 gap-12 lg:gap-24 items-center'>
                        <div className='order-2 lg:order-1'>
                            <div className='relative rounded-[40px] overflow-hidden border border-white/10'>
                                <img src='/WhatsApp Image 2025-12-25 at 10.13.15 AM.jpeg' className='w-full h-full object-cover lg:h-[600px] opacity-70' alt='' />
                                <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40' />
                                <div className='absolute bottom-10 left-10 p-8 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 max-w-[80%]'>
                                    <div className='text-[#D3FD50] font-[font2] text-4xl mb-1'>4m 12s</div>
                                    <div className='text-white/40 text-[10px] tracking-[0.2em] uppercase font-[font2]'>Average Dwell Time</div>
                                </div>
                            </div>
                        </div>
                        <div className='order-1 lg:order-2 space-y-12'>
                            <div>
                                <h2 className='font-[font2] text-4xl lg:text-7xl uppercase leading-none mb-8'>
                                    {t('solutions.audienceInsightsTitle')}
                                </h2>
                                <div className='h-1 w-20 bg-[#D3FD50]' />
                            </div>
                            <div className='grid gap-8'>
                                {audienceInsights.map((insight, idx) => (
                                    <div key={idx} className='group flex items-start gap-6 p-6 rounded-3xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all'>
                                        <div className='w-2 h-2 rounded-full bg-[#D3FD50] mt-1.5' />
                                        <div>
                                            <h4 className='font-[font2] text-lg uppercase mb-2 group-hover:text-[#D3FD50] transition-colors'>{insight.title}</h4>
                                            <p className='text-white/50 font-[font1] text-sm leading-relaxed'>{insight.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Activation Stack - Layered Design */}
            <section className='relative py-12 lg:py-20 px-6 bg-[#080808]'>
                <div className='max-w-5xl mx-auto'>
                    <div className='text-center mb-10 lg:mb-14'>
                        <h2 className='font-[font2] text-4xl lg:text-6xl uppercase mb-4'>{t('solutions.activationStackTitle')}</h2>
                        <div className='w-24 h-px bg-white/20 mx-auto' />
                    </div>
                    <div className='relative'>
                        <div className='absolute left-1/2 top-0 bottom-0 w-px bg-white/10 lg:block hidden' />
                        <div className='space-y-8'>
                            {activationStack.map((layer, idx) => (
                                <div key={idx} className='relative grid lg:grid-cols-2 gap-10 items-center'>
                                    <div className={`${idx % 2 === 0 ? 'lg:text-right' : 'lg:order-2'} space-y-2`}>
                                        <h3 className='font-[font2] text-2xl text-white uppercase'>{layer.title}</h3>
                                        <p className='text-white/40 font-[font1] text-sm'>{layer.value}</p>
                                    </div>
                                    <div className={`flex ${idx % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end lg:order-1'}`}>
                                        <div className='w-12 h-12 rounded-full bg-[#D3FD50] border-4 border-black z-10 hidden lg:flex items-center justify-center font-[font2] text-black'>
                                            {idx + 1}
                                        </div>
                                        <div className='lg:hidden flex items-center gap-4'>
                                            <div className='w-8 h-8 rounded-full bg-[#D3FD50] flex items-center justify-center text-black font-[font2] text-xs'>
                                                {idx + 1}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Media Playbooks - Premium Feature Cards */}
            <section className='relative py-12 lg:py-20 px-6'>
                <div className='max-w-7xl mx-auto'>
                    <div className='flex flex-col lg:flex-row justify-between items-end gap-10 mb-10 lg:mb-14'>
                        <div className='max-w-2xl'>
                            <span className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4 block'>
                                {t('solutions.mediaPlaybooksLabel')}
                            </span>
                            <h2 className='font-[font2] text-5xl lg:text-8xl leading-none text-white uppercase mb-6'>
                                {t('solutions.mediaPlaybooksTitle')}
                            </h2>
                            <p className='text-white/50 font-[font1] text-lg'>
                                {t('solutions.mediaPlaybooksDesc')}
                            </p>
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-3 gap-8'>
                        {campaignPackages.map((pkg, idx) => (
                            <div key={idx} className='group p-10 rounded-[40px] bg-white/[0.03] border border-white/10 hover:border-[#D3FD50]/30 transition-all duration-500 overflow-hidden relative'>
                                <div className='absolute -right-10 -top-10 w-40 h-40 bg-[#D3FD50]/5 rounded-full blur-[40px] group-hover:bg-[#D3FD50]/15 transition-all' />
                                <div className='text-[#D3FD50] font-[font2] text-xs tracking-[0.4em] uppercase mb-10'>{pkg.plan}</div>
                                <h3 className='font-[font2] text-3xl mb-12 uppercase leading-tight'>{pkg.objective}</h3>

                                <div className='space-y-8 relative z-10'>
                                    <div>
                                        <div className='text-[10px] uppercase tracking-widest text-white/30 mb-2'>Channels</div>
                                        <div className='text-sm text-white/80 font-[font1]'>{pkg.channels}</div>
                                    </div>
                                    <div>
                                        <div className='text-[10px] uppercase tracking-widest text-white/30 mb-2'>Formats</div>
                                        <div className='text-sm text-white/80 font-[font1]'>{pkg.formats}</div>
                                    </div>
                                    <div className='pt-8 border-t border-white/5'>
                                        <div className='text-[10px] uppercase tracking-widest text-[#D3FD50]/60 mb-2'>Reporting</div>
                                        <div className='text-sm text-white/60 font-[font1] italic'>{pkg.reporting}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deliverables / Process - Grid Layout */}
            <section className='relative py-12 lg:py-20 px-6 border-t border-white/5'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid lg:grid-cols-4 gap-8'>
                        {campaignDeliverables.map((block, idx) => (
                            <div key={idx} className='space-y-8 p-4'>
                                <h4 className='font-[font2] text-xl text-[#D3FD50] uppercase tracking-wide'>{block.title}</h4>
                                <ul className='space-y-4 font-[font1]'>
                                    {block.items.map((item, idy) => (
                                        <li key={idy} className='flex gap-4 text-sm text-white/50 group hover:text-white transition-colors'>
                                            <span className='text-[10px] opacity-20'>0{idy + 1}</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SolutionsPortfolio />

            {/* Final CTA */}
            <section className='relative py-12 lg:py-20 px-6'>
                <div className='max-w-4xl mx-auto text-center'>
                    <div className='relative inline-block mb-12'>
                        <div className='absolute -inset-4 bg-[#D3FD50]/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity' />
                        <h2 className='font-[font2] text-4xl lg:text-7xl leading-tight text-white uppercase relative z-10'>
                            {t('solutions.ctaTitle')}<br />
                            <span className='text-[#D3FD50]'>{t('solutions.ctaTitleHighlight')}</span>
                        </h2>
                    </div>
                    <div className='flex flex-wrap justify-center gap-6'>
                        <Link
                            to='/contact'
                            className='px-12 py-5 bg-[#D3FD50] text-black font-[font2] text-sm uppercase tracking-[0.2em] rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_rgba(211,253,80,0.2)]'
                        >
                            {t('solutions.ctaBtn1')}
                        </Link>
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    )
}

export default Solutions
