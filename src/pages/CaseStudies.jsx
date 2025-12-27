import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import FooterSection from '../components/home/FooterSection'
import PageHero from '../components/common/PageHero'
import LottieVisual from '../components/common/LottieVisual'
import { useLanguage } from '../context/LanguageContext'

const CaseStudies = () => {
    const { t } = useLanguage()
    const [activeFilter, setActiveFilter] = useState('all')

    const sectors = useMemo(() => [
        {
            id: 'automobile',
            title: t('caseStudies.sectors.automobile.title'),
            count: '1,743',
            subtitle: t('caseStudies.sectors.automobile.subtitle'),
            description: t('caseStudies.sectors.automobile.desc'),
            image: '/WhatsApp Image 2025-12-25 at 10.13.14 AM (1).jpeg',
            color: 'from-blue-600/20 to-cyan-600/20',
            clients: ['Peugeot', 'Citroën', 'BYmyCAR', '123 Pare-Brise']
        },
        {
            id: 'ameublement',
            title: t('caseStudies.sectors.ameublement.title'),
            count: '899',
            subtitle: t('caseStudies.sectors.ameublement.subtitle'),
            description: t('caseStudies.sectors.ameublement.desc'),
            image: '/WhatsApp Image 2025-12-25 at 10.13.15 AM.jpeg',
            color: 'from-amber-600/20 to-orange-600/20',
            clients: ['Leroy Merlin', 'Decathlon', 'But', 'Conforama']
        },
        {
            id: 'immobilier',
            title: t('caseStudies.sectors.immobilier.title'),
            count: '484',
            subtitle: t('caseStudies.sectors.immobilier.subtitle'),
            description: t('caseStudies.sectors.immobilier.desc'),
            image: '/WhatsApp Image 2025-12-25 at 10.13.16 AM.jpeg',
            color: 'from-emerald-600/20 to-teal-600/20',
            clients: ['Nexity', 'IAD', 'Century 21', 'Orpi']
        },
        {
            id: 'loisirs',
            title: t('caseStudies.sectors.loisirs.title'),
            count: '348',
            subtitle: t('caseStudies.sectors.loisirs.subtitle'),
            description: t('caseStudies.sectors.loisirs.desc'),
            image: '/WhatsApp Image 2025-12-25 at 10.13.17 AM.jpeg',
            color: 'from-purple-600/20 to-pink-600/20',
            clients: ['Center Parcs', 'Puy du Fou', 'Futuroscope', 'Disneyland']
        }
    ], [t])

    const featuredClients = [
        { name: 'Burger King', sector: 'Restauration' },
        { name: 'Orange', sector: 'Télécom' },
        { name: 'Decathlon', sector: 'Sport' },
        { name: 'Leroy Merlin', sector: 'Bricolage' },
        { name: 'Peugeot', sector: 'Automobile' },
        { name: 'Citroën', sector: 'Automobile' },
        { name: 'Nexity', sector: 'Immobilier' },
        { name: 'Gan', sector: 'Assurance' }
    ]

    const filteredSectors = activeFilter === 'all'
        ? sectors
        : sectors.filter(s => s.id === activeFilter)

    return (
        <div className='bg-[#050505] text-white min-h-screen'>
            {/* Hero Section */}
            <PageHero
                title={t('caseStudies.heroTitle')}
                highlight={t('caseStudies.heroTitleHighlight')}
                description={t('caseStudies.heroDesc')}
                ctaText={t('nav.contact')}
                ctaLink="#stats"
                visual={<LottieVisual url="https://assets9.lottiefiles.com/packages/lf20_jcikwtux.json" />}
            />

            {/* Stats Bar - Tight & Minimal */}
            <section id="stats" className='relative z-10 border-y border-white/5 bg-white/[0.02] backdrop-blur-md'>
                <div className='max-w-7xl mx-auto py-8 lg:py-12 px-6'>
                    <div className='flex flex-wrap justify-between items-center gap-8'>
                        <div className='flex flex-col'>
                            <span className='text-[#D3FD50] font-[font2] text-4xl lg:text-5xl mb-1'>3,400+</span>
                            <span className='text-white/40 font-[font1] text-[10px] tracking-[0.2em] uppercase'>{t('caseStudies.stats.advertisers')}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-[#D3FD50] font-[font2] text-4xl lg:text-5xl mb-1'>15+</span>
                            <span className='text-white/40 font-[font1] text-[10px] tracking-[0.2em] uppercase'>{t('caseStudies.stats.sectors')}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-[#D3FD50] font-[font2] text-4xl lg:text-5xl mb-1'>98%</span>
                            <span className='text-white/40 font-[font1] text-[10px] tracking-[0.2em] uppercase'>{t('caseStudies.stats.satisfaction')}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className='relative py-12 lg:py-20 px-6'>
                <div className='max-w-7xl mx-auto'>

                    {/* Filter Tabs - Modern & Slim */}
                    <div className='mb-12 lg:mb-16 flex flex-wrap justify-center gap-3'>
                        <button
                            onClick={() => setActiveFilter('all')}
                            className={`px-6 py-2 rounded-full font-[font2] text-[10px] uppercase tracking-[0.3em] transition-all duration-300 ${activeFilter === 'all'
                                ? 'bg-[#D3FD50] text-black shadow-[0_10px_20px_rgba(211,253,80,0.3)]'
                                : 'border border-white/10 text-white/40 hover:border-white/30 hover:text-white'
                                }`}
                        >
                            {t('caseStudies.filterAll')}
                        </button>
                        {sectors.map(sector => (
                            <button
                                key={sector.id}
                                onClick={() => setActiveFilter(sector.id)}
                                className={`px-6 py-2 rounded-full font-[font2] text-[10px] uppercase tracking-[0.3em] transition-all duration-300 ${activeFilter === sector.id
                                    ? 'bg-[#D3FD50] text-black shadow-[0_10px_20px_rgba(211,253,80,0.3)]'
                                    : 'border border-white/10 text-white/40 hover:border-white/30 hover:text-white'
                                    }`}
                            >
                                {sector.title}
                            </button>
                        ))}
                    </div>

                    {/* Sectors Grid - Premium Cards */}
                    <div className='grid lg:grid-cols-2 gap-8 lg:gap-10'>
                        {filteredSectors.map((sector) => (
                            <Link
                                to={`/case-studies/${sector.id}`}
                                key={sector.id}
                                className='group relative aspect-[16/10] lg:aspect-[16/9] rounded-[40px] overflow-hidden border border-white/10 hover:border-[#D3FD50]/50 transition-all duration-700 block'
                            >
                                {/* Background Image */}
                                <div className='absolute inset-0'>
                                    <img
                                        src={sector.image}
                                        alt={sector.title}
                                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]'
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} mix-blend-multiply opacity-60`} />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent' />
                                </div>

                                {/* Content */}
                                <div className='relative z-10 p-8 lg:p-12 h-full flex flex-col justify-between'>
                                    <div className='flex justify-between items-start'>
                                        <div className='space-y-1'>
                                            <span className='text-[#D3FD50] font-[font2] text-5xl lg:text-7xl block tracking-tighter'>
                                                {sector.count}
                                            </span>
                                            <span className='text-white/40 font-[font2] text-[10px] lg:text-xs uppercase tracking-[0.3em] block'>
                                                {sector.subtitle}
                                            </span>
                                        </div>
                                        <div className='w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-black/40 backdrop-blur-md group-hover:bg-[#D3FD50] group-hover:border-[#D3FD50] transition-all duration-500'>
                                            <svg className='w-6 h-6 text-white group-hover:text-black transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className='space-y-4'>
                                        <h3 className='font-[font2] text-white text-3xl lg:text-4xl uppercase tracking-tight group-hover:text-[#D3FD50] transition-colors duration-300'>
                                            {sector.title}
                                        </h3>
                                        <p className='font-[font1] text-white/50 text-sm lg:text-base leading-relaxed max-w-lg'>
                                            {sector.description}
                                        </p>
                                        <div className='flex flex-wrap gap-2 pt-2'>
                                            {sector.clients.map((client, cIndex) => (
                                                <span
                                                    key={cIndex}
                                                    className='px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/40 text-[10px] font-[font2] uppercase tracking-wider'
                                                >
                                                    {client}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Clients - Modern Grid */}
            <section className='relative py-12 lg:py-20 px-6 bg-[#080808]'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center mb-12 lg:mb-16'>
                        <span className='text-[#D3FD50] font-[font1] text-[10px] tracking-[0.4em] uppercase mb-4 block'>
                            {t('caseStudies.featuredHeader')}
                        </span>
                        <h2 className='font-[font2] text-white text-4xl lg:text-6xl uppercase tracking-tighter'>
                            {t('caseStudies.featuredTitle')}
                        </h2>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-4 border-l border-t border-white/5'>
                        {featuredClients.map((client, index) => (
                            <div
                                key={index}
                                className='group p-10 border-r border-b border-white/5 hover:bg-[#D3FD50]/5 transition-all duration-300 text-center'
                            >
                                <h4 className='font-[font2] text-white text-xl lg:text-2xl group-hover:text-[#D3FD50] transition-colors'>
                                    {client.name}
                                </h4>
                                <span className='font-[font1] text-white/20 text-[10px] uppercase tracking-widest block mt-2'>
                                    {client.sector}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA - Impactful */}
            <section className='relative py-12 lg:py-20 px-6'>
                <div className='max-w-4xl mx-auto text-center'>
                    <h2 className='font-[font2] text-white text-4xl lg:text-7xl leading-tight uppercase mb-8'>
                        {t('caseStudies.ctaTitle')}<br />
                        <span className='text-[#D3FD50]'>{t('caseStudies.ctaTitleHighlight')}</span>
                    </h2>
                    <Link
                        to='/contact'
                        className='px-12 py-5 bg-[#D3FD50] text-black font-[font2] text-sm uppercase tracking-[0.2em] rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_rgba(211,253,80,0.2)]'
                    >
                        {t('caseStudies.ctaBtn')}
                    </Link>
                </div>
            </section>

            <FooterSection />
        </div>
    )
}

export default CaseStudies
