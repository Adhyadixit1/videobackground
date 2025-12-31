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
            id: 9,
            title: t('solutionPages.outdoorLCD43.title') || "Outdoor LCD 43inch",
            category: t('home.pinterest.categories.outdoorScreens'),
            size: 'tall',
            color: 'from-green-900/80 to-emerald-900/80',
            image: "https://sc04.alicdn.com/kf/Hbc4f05f302d444cb889ad42c3afc11f5X/229562533/Hbc4f05f302d444cb889ad42c3afc11f5X.jpeg",
            link: '/projects/outdoor-lcd-43',
            isSpecial: true
        },
        {
            id: 10,
            title: t('solutionPages.infraredTouch55.title') || "Infrared Touch 55inch",
            category: t('home.pinterest.categories.touchDisplays'),
            size: 'tall',
            color: 'from-cyan-900/80 to-blue-900/80',
            image: "/Fiche technique ecran intérieur_files/image001.png",
            link: '/projects/infrared-touch-55',
            isSpecial: true
        },
        {
            id: 11,
            title: t('solutionPages.outdoorWaterproofDisplay.title') || "Outdoor Waterproof Display",
            category: t('home.pinterest.categories.outdoorScreens'),
            size: 'tall',
            color: 'from-orange-900/80 to-red-900/80',
            image: "/3rdproduct/image002.jpg",
            link: '/projects/outdoor-waterproof-display',
            isSpecial: true
        },
        {
            id: 12,
            title: t('solutionPages.digitalMarketingServices.title') || "Digital Marketing Services",
            category: t('home.pinterest.categories.digitalServices'),
            size: 'tall',
            color: 'from-fuchsia-900/80 to-blue-900/80',
            image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80",
            link: '/solutions/digital-marketing-services',
            isSpecial: true
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

                    <div className='columns-1 sm:columns-2 lg:columns-4 gap-4 lg:gap-6 relative z-20'>
                        {portfolioProjects.map((project, index) => (
                            <Link
                                to={project.link || '/projects'}
                                key={project.id}
                                className={`
                                    break-inside-avoid mb-4 lg:mb-6 group cursor-pointer block
                                    aspect-[2/3]
                                `}
                            >
                                <div className={`
                                    relative h-full w-full rounded-2xl lg:rounded-3xl overflow-hidden
                                    border border-white/10 group-hover:border-[#D3FD50]/50
                                    transition-all duration-500 group-hover:scale-[1.02]
                                    ring-2 ring-[#D3FD50]/30 ring-offset-2 ring-offset-black
                                `}>
                                    {/* Background image - subtle and overlayed */}
                                    <div className='absolute inset-0'>
                                        {project.video ? (
                                            <video
                                                src={project.video}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                className={`w-full h-full object-cover 
                                                          group-hover:opacity-70 group-hover:scale-110
                                                          transition-all duration-700
                                                          opacity-80`}
                                            />
                                        ) : (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className={`w-full h-full object-cover 
                                                          group-hover:opacity-70 group-hover:scale-110
                                                          transition-all duration-700
                                                          opacity-80`}
                                            />
                                        )}
                                    </div>

                                    {/* Color gradient overlay - sits on top of image */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} 
                                                   mix-blend-multiply opacity-70`}></div>

                                    {/* Dark gradient overlay from bottom for text readability */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent 
                                                   opacity-60 group-hover:opacity-70 transition-opacity duration-500`}></div>

                                    {/* Special badge */}
                                    <div className='absolute top-4 right-4 px-4 py-2 bg-[#D3FD50] text-black text-xs font-[font1] font-bold rounded-full uppercase tracking-wider z-10 shadow-lg shadow-[#D3FD50]/50 animate-pulse'>
                                        ⭐ {t('projects.featuredBadge')}
                                    </div>

                                    {/* Floating shapes decoration */}
                                    <div className={`absolute top-8 right-8 border rounded-full 
                                                   group-hover:border-[#D3FD50]/50 group-hover:scale-110 transition-all duration-500
                                                   w-20 h-20 border-[#D3FD50]/40`}></div>
                                    <div className={`absolute top-20 right-12 rounded-full 
                                                   group-hover:bg-[#D3FD50]/30 transition-all duration-500
                                                   w-10 h-10 bg-[#D3FD50]/20`}></div>

                                    {/* Content */}
                                    <div className='absolute bottom-0 left-0 right-0 p-6 lg:p-8'>
                                        <span className={`inline-block px-3 py-1 backdrop-blur-md rounded-full 
                                                       text-xs font-[font1] tracking-wider uppercase mb-3
                                                       transition-all duration-300
                                                       bg-[#D3FD50]/20 text-[#D3FD50] group-hover:bg-[#D3FD50]/30`}>
                                            {project.category}
                                        </span>
                                        <h3 className={`font-[font2] leading-tight
                                                      group-hover:text-[#D3FD50] transition-colors duration-300
                                                      text-white text-2xl lg:text-3xl`}>
                                            {project.title}
                                        </h3>
                                    </div>

                                    {/* Hover arrow */}
                                    <div className={`absolute top-6 left-6 rounded-full bg-[#D3FD50] 
                                                   flex items-center justify-center opacity-0 scale-50
                                                   group-hover:opacity-100 group-hover:scale-100 transition-all duration-300
                                                   w-12 h-12`}>
                                        <svg className={`text-black w-5 h-5`} fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 17L17 7M17 7H7M17 7v10' />
                                        </svg>
                                    </div>
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
