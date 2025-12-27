import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import FooterSection from '../components/home/FooterSection'
import PageHero from '../components/common/PageHero'
import { useLanguage } from '../context/LanguageContext'

const WhyFillup = () => {
    const { t, language } = useLanguage()

    const advantages = useMemo(() => [
        {
            number: '01',
            title: t('why.adv1Title'),
            description: t('why.adv1Desc'),
            icon: '🎯'
        },
        {
            number: '02',
            title: t('why.adv2Title'),
            description: t('why.adv2Desc'),
            icon: '📍'
        },
        {
            number: '03',
            title: t('why.adv3Title'),
            description: t('why.adv3Desc'),
            icon: '⚡'
        },
        {
            number: '04',
            title: t('why.adv4Title'),
            description: t('why.adv4Desc'),
            icon: '👥'
        }
    ], [t])

    const processSteps = t('why.processSteps', { returnObjects: true }) || []

    const portfolioProjects = useMemo(() => [
        {
            id: 1,
            title: t('solutionPages.lcdScreens.title'),
            category: t('home.pinterest.categories.digitalDisplays'),
            size: 'tall',
            color: 'from-purple-600/20 to-pink-600/20',
            video: 'https://video.gumlet.io/694cef8ab122cbf176482b8c/694e4270e086c47a823f4aa7/download.mp4',
            link: '/solutions/lcd-screens'
        },
        {
            id: 4,
            title: t('solutionPages.stationServiceDisplay.title'),
            category: t('home.pinterest.categories.stationScreens'),
            size: 'normal',
            color: 'from-orange-600/20 to-red-600/20',
            image: '/WhatsApp Image 2025-12-25 at 10.13.16 AM.jpeg',
            link: '/solutions/station-service-display'
        },
        {
            id: 6,
            title: t('solutionPages.ledWalls.title'),
            category: t('home.pinterest.categories.videoWalls'),
            size: 'wide',
            color: 'from-teal-600/20 to-emerald-600/20',
            image: '/WhatsApp Image 2025-12-25 at 10.13.17 AM.jpeg',
            link: '/solutions/led-walls'
        },
        {
            id: 2,
            title: t('solutionPages.digitalPump.title'),
            category: t('home.pinterest.categories.pumpDisplays'),
            size: 'tall',
            color: 'from-blue-600/20 to-cyan-600/20',
            image: '/WhatsApp Image 2025-12-25 at 10.13.14 AM (2).jpeg',
            link: '/solutions/digital-pump'
        }
    ], [t])

    return (
        <div className='bg-[#050505] text-white min-h-screen overflow-x-hidden'>
            {/* Hero Section */}
            <PageHero
                title={t('why.heroTitle')}
                highlight={t('why.heroTitleHighlight')}
                description={t('why.heroDesc')}
                ctaText={t('nav.solutions')}
                ctaLink="#advantages"
                visual={
                    <div className='grid grid-cols-2 gap-1 w-full max-w-lg mx-auto bg-white/5 p-1 rounded-[40px] border border-white/5'>
                        <div className='p-8 rounded-[36px] bg-black border border-white/5 group hover:bg-[#D3FD50]/5 transition-colors'>
                            <div className='font-[font2] text-[#D3FD50] text-4xl mb-2'>2000+</div>
                            <div className='font-[font2] text-white/30 text-[10px] uppercase tracking-widest'>{t('why.stats.screens')}</div>
                        </div>
                        <div className='p-8 rounded-[36px] bg-black border border-white/5 group hover:bg-[#D3FD50]/5 transition-colors'>
                            <div className='font-[font2] text-[#D3FD50] text-4xl mb-2'>15M+</div>
                            <div className='font-[font2] text-white/30 text-[10px] uppercase tracking-widest'>{t('why.stats.contacts')}</div>
                        </div>
                        <div className='p-8 rounded-[36px] bg-black border border-white/5 group hover:bg-[#D3FD50]/5 transition-colors'>
                            <div className='font-[font2] text-[#D3FD50] text-4xl mb-2'>3400+</div>
                            <div className='font-[font2] text-white/30 text-[10px] uppercase tracking-widest'>{t('why.stats.advertisers')}</div>
                        </div>
                        <div className='p-8 rounded-[36px] bg-[#D3FD50]/10 border border-[#D3FD50]/30 group hover:bg-[#D3FD50]/20 transition-colors'>
                            <div className='font-[font2] text-[#D3FD50] text-4xl mb-2'>100%</div>
                            <div className='font-[font2] text-white/30 text-[10px] uppercase tracking-widest'>{t('why.stats.captive')}</div>
                        </div>
                    </div>
                }
            />

            {/* Advantages Grid - Premium Tiles */}
            <section id="advantages" className='relative py-12 lg:py-20 px-6'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center mb-12 lg:mb-16'>
                        <span className='text-[#D3FD50] font-[font1] text-[10px] tracking-[0.4em] uppercase mb-4 block'>
                            {t('why.advantagesTitle')}
                        </span>
                        <h2 className='font-[font2] text-white text-4xl lg:text-7xl uppercase tracking-tighter'>
                            {t('nav.whyFillup')}
                        </h2>
                    </div>

                    <div className='grid md:grid-cols-2 gap-1'>
                        {advantages.map((item, index) => (
                            <div key={index} className='group relative p-12 bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all duration-500'>
                                <span className='absolute top-10 right-10 font-[font2] text-white/5 text-8xl lg:text-9xl group-hover:text-[#D3FD50]/10 transition-colors'>
                                    {item.number}
                                </span>
                                <div className='text-4xl mb-8'>{item.icon}</div>
                                <h3 className='font-[font2] text-2xl lg:text-3xl uppercase tracking-tight mb-4 group-hover:text-[#D3FD50] transition-colors'>
                                    {item.title}
                                </h3>
                                <p className='text-white/40 font-[font1] text-lg leading-relaxed max-w-sm'>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Flow - Modern Minimalist */}
            <section className='relative py-12 lg:py-20 px-6 bg-[#080808]'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center mb-12 lg:mb-16'>
                        <span className='text-[#D3FD50] font-[font1] text-[10px] tracking-[0.4em] uppercase mb-4 block'>
                            {t('why.processTitle')}
                        </span>
                        <h2 className='font-[font2] text-white text-4xl lg:text-6xl uppercase tracking-tighter max-w-3xl mx-auto'>
                            {t('why.processTitle')}
                        </h2>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-1'>
                        {Array.isArray(processSteps) && processSteps.map((step, index) => (
                            <div key={index} className='p-10 bg-white/[0.02] border border-white/5 text-center group'>
                                <div className='w-12 h-12 mx-auto mb-8 rounded-full border border-white/10 flex items-center justify-center font-[font2] text-[#D3FD50] text-xl group-hover:bg-[#D3FD50] group-hover:text-black transition-all'>
                                    {step.step}
                                </div>
                                <h4 className='font-[font2] text-lg uppercase mb-4 tracking-wide'>{step.title}</h4>
                                <p className='text-white/30 font-[font1] text-xs leading-relaxed'>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section - Split Creative Layout */}
            <section className='relative py-12 lg:py-20 px-6'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid lg:grid-cols-2 gap-1 lg:gap-20 items-center'>
                        <div className='space-y-12'>
                            <div>
                                <span className='text-[#D3FD50] font-[font1] text-[10px] tracking-[0.4em] uppercase mb-4 block'>
                                    {t('why.values.subtitle')}
                                </span>
                                <h2 className='font-[font2] text-4xl lg:text-7xl leading-none text-white uppercase tracking-tighter mb-10'>
                                    {t('why.values.title')}
                                </h2>
                                <p className='text-white/40 font-[font1] text-xl lg:text-2xl leading-relaxed italic max-w-xl'>
                                    {language === 'fr'
                                        ? '"Notre mission est d\'unir la technologie et l\'audience pour créer des moments de communication inoubliables."'
                                        : '"Our mission is to unite technology and audience to create unforgettable communication moments."'}
                                </p>
                            </div>

                            <div className='space-y-6'>
                                {t('why.values.list', { returnObjects: true })?.map((value, idx) => (
                                    <div key={idx} className='flex items-center gap-6 group cursor-default border-b border-white/5 py-4'>
                                        <div className='w-1.5 h-1.5 rounded-full bg-[#D3FD50] group-hover:scale-[3] transition-transform duration-500' />
                                        <span className='font-[font2] text-white text-2xl lg:text-4xl uppercase tracking-tighter group-hover:text-[#D3FD50] transition-colors'>{value.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-1'>
                            {t('why.values.list', { returnObjects: true })?.map((value, idx) => (
                                <div key={idx} className='p-10 bg-white/[0.03] border border-white/5 hover:bg-[#D3FD50]/5 transition-all duration-500'>
                                    <h3 className='font-[font2] text-[#D3FD50] text-xl mb-6 uppercase tracking-wider'>{value.title}</h3>
                                    <p className='text-white/40 font-[font1] text-sm leading-relaxed'>{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table - Clean UX */}
            <section className='relative py-12 lg:py-20 px-6 bg-[#080808]'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center mb-12 lg:mb-16'>
                        <span className='text-[#D3FD50] font-[font1] text-[10px] tracking-[0.4em] uppercase mb-4 block'>
                            {t('why.comparison.title')}
                        </span>
                        <h2 className='font-[font2] text-white text-4xl lg:text-6xl uppercase tracking-tighter'>
                            {t('why.comparison.us')} vs {t('why.comparison.them')}
                        </h2>
                    </div>

                    <div className='rounded-[40px] overflow-hidden border border-white/5 bg-black'>
                        <table className='w-full text-left'>
                            <thead>
                                <tr className='border-b border-white/5'>
                                    <th className='p-8 font-[font2] text-white/20 text-[10px] uppercase tracking-[0.3em]'>Feature</th>
                                    <th className='p-8 font-[font2] text-[#D3FD50] text-xl uppercase tracking-widest bg-[#D3FD50]/5'>{t('why.comparison.us')}</th>
                                    <th className='p-8 font-[font2] text-white/20 text-[10px] uppercase tracking-[0.3em]'>{t('why.comparison.them')}</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-white/[0.03]'>
                                {t('why.comparison.rows', { returnObjects: true })?.map((row, index) => (
                                    <tr key={index} className='group hover:bg-white/[0.02] transition-colors'>
                                        <td className='p-8 font-[font1] text-white/60 font-medium'>{row.feature}</td>
                                        <td className='p-8 font-[font1] text-white bg-[#D3FD50]/5 border-x border-[#D3FD50]/10'>
                                            <div className='flex items-center gap-4'>
                                                <div className='w-5 h-5 rounded-full bg-[#D3FD50]/20 flex items-center justify-center text-[#D3FD50]'>
                                                    <svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M5 13l4 4L19 7' /></svg>
                                                </div>
                                                {row.us}
                                            </div>
                                        </td>
                                        <td className='p-8 font-[font1] text-white/20'>{row.them}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Portfolio Grid - Masonry Visual */}
            <section className='relative py-12 lg:py-20 px-6'>
                <div className='max-w-7xl mx-auto'>
                    <div className='flex flex-col md:flex-row justify-between items-end gap-10 mb-12 lg:mb-16'>
                        <div className='max-w-xl'>
                            <span className='text-[#D3FD50] font-[font1] text-[10px] tracking-[0.4em] uppercase mb-4 block'>
                                {t('why.portfolio.subtitle')}
                            </span>
                            <h2 className='font-[font2] text-4xl lg:text-7xl uppercase tracking-tighter leading-none'>
                                {t('why.portfolio.title')}
                            </h2>
                        </div>
                        <Link to='/projects' className='px-10 py-4 border border-white/20 text-white font-[font2] text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-white hover:text-black transition-all'>
                            {t('projects.cta')}
                        </Link>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1'>
                        {portfolioProjects.map((project) => (
                            <Link
                                to={project.link}
                                key={project.id}
                                className={`group relative rounded-[40px] overflow-hidden block ${project.size === 'tall' ? 'aspect-[2/3]' : project.size === 'wide' ? 'aspect-[16/9]' : 'aspect-square'}`}
                            >
                                <div className='absolute inset-0'>
                                    {project.video ? (
                                        <video src={project.video} autoPlay muted loop playsInline className='w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-40' />
                                    ) : (
                                        <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-40' />
                                    )}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-multiply opacity-60`} />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent' />
                                </div>
                                <div className='absolute bottom-0 left-0 p-10 w-full'>
                                    <span className='text-[#D3FD50] text-[10px] font-[font2] uppercase tracking-[0.3em] mb-2 block'>{project.category}</span>
                                    <h3 className='text-white font-[font2] text-2xl uppercase tracking-tight group-hover:text-[#D3FD50] transition-colors'>{project.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className='relative py-12 lg:py-20 px-6'>
                <div className='max-w-4xl mx-auto text-center'>
                    <div className='p-12 lg:p-24 rounded-[60px] bg-white/[0.02] border border-white/5 relative overflow-hidden'>
                        <div className='absolute -top-24 -right-24 w-96 h-96 bg-[#D3FD50]/5 blur-[100px] rounded-full' />

                        <h2 className='font-[font2] text-4xl lg:text-7xl uppercase tracking-tighter mb-8 leading-none'>
                            {t('why.cta.title')}<br />
                            <span className='text-[#D3FD50]'>{t('why.cta.titleHighlight')}</span>
                        </h2>
                        <p className='text-white/40 font-[font1] text-lg lg:text-xl mb-12 max-w-xl mx-auto'>
                            {t('why.cta.desc')}
                        </p>
                        <Link
                            to='/contact'
                            className='inline-flex items-center gap-4 px-12 py-5 bg-[#D3FD50] text-black font-[font2] text-[10px] uppercase tracking-[0.4em] rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_rgba(211,253,80,0.2)]'
                        >
                            {t('why.cta.btn')}
                        </Link>
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    )
}

export default WhyFillup
