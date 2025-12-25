import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import FooterSection from '../components/home/FooterSection'
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
            color: 'from-blue-900/80 to-cyan-900/80',
            clients: ['Peugeot', 'Citroën', 'BYmyCAR', '123 Pare-Brise']
        },
        {
            id: 'ameublement',
            title: t('caseStudies.sectors.ameublement.title'),
            count: '899',
            subtitle: t('caseStudies.sectors.ameublement.subtitle'),
            description: t('caseStudies.sectors.ameublement.desc'),
            image: '/WhatsApp Image 2025-12-25 at 10.13.15 AM.jpeg',
            color: 'from-amber-900/80 to-orange-900/80',
            clients: ['Leroy Merlin', 'Decathlon', 'But', 'Conforama']
        },
        {
            id: 'immobilier',
            title: t('caseStudies.sectors.immobilier.title'),
            count: '484',
            subtitle: t('caseStudies.sectors.immobilier.subtitle'),
            description: t('caseStudies.sectors.immobilier.desc'),
            image: '/WhatsApp Image 2025-12-25 at 10.13.16 AM.jpeg',
            color: 'from-emerald-900/80 to-teal-900/80',
            clients: ['Nexity', 'IAD', 'Century 21', 'Orpi']
        },
        {
            id: 'loisirs',
            title: t('caseStudies.sectors.loisirs.title'),
            count: '348',
            subtitle: t('caseStudies.sectors.loisirs.subtitle'),
            description: t('caseStudies.sectors.loisirs.desc'),
            image: '/WhatsApp Image 2025-12-25 at 10.13.17 AM.jpeg',
            color: 'from-purple-900/80 to-pink-900/80',
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
        <div className='bg-black text-white min-h-screen'>
            {/* Hero Section */}
            <section className='relative min-h-[70vh] flex items-center justify-center overflow-hidden'>
                {/* Background */}
                <div className='absolute inset-0'>
                    <div className='absolute top-1/4 -left-32 w-96 h-96 bg-[#D3FD50]/10 rounded-full blur-3xl' />
                    <div className='absolute bottom-1/4 -right-32 w-96 h-96 bg-[#D3FD50]/5 rounded-full blur-3xl' />
                    <div className='absolute inset-0' style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className='relative z-10 text-center px-4 lg:px-12 max-w-6xl mx-auto pt-32'>
                    <span className='inline-block px-4 py-2 rounded-full border border-[#D3FD50]/30 text-[#D3FD50] text-xs font-[font1] uppercase tracking-[0.3em] mb-8'>
                        {t('nav.caseStudies')}
                    </span>
                    <h1 className='font-[font2] text-[10vw] lg:text-[5vw] leading-[0.9] uppercase mb-6'>
                        {t('caseStudies.heroTitle')}<br />
                        <span className='text-[#D3FD50]'>{t('caseStudies.heroTitleHighlight')}</span>
                    </h1>
                    <p className='font-[font1] text-white/60 text-lg lg:text-xl max-w-2xl mx-auto mt-8'>
                        {t('caseStudies.heroDesc')}
                    </p>
                </div>
            </section>

            {/* Stats Bar */}
            <section className='relative py-12 border-y border-white/10 bg-gradient-to-r from-transparent via-[#D3FD50]/5 to-transparent'>
                <div className='max-w-7xl mx-auto px-4 lg:px-12'>
                    <div className='flex flex-wrap justify-center gap-8 lg:gap-16'>
                        <div className='text-center'>
                            <div className='font-[font2] text-[#D3FD50] text-3xl lg:text-4xl'>3,400+</div>
                            <div className='font-[font1] text-white/60 text-sm uppercase tracking-wider'>{t('caseStudies.stats.advertisers')}</div>
                        </div>
                        <div className='text-center'>
                            <div className='font-[font2] text-[#D3FD50] text-3xl lg:text-4xl'>15+</div>
                            <div className='font-[font1] text-white/60 text-sm uppercase tracking-wider'>{t('caseStudies.stats.sectors')}</div>
                        </div>
                        <div className='text-center'>
                            <div className='font-[font2] text-[#D3FD50] text-3xl lg:text-4xl'>98%</div>
                            <div className='font-[font1] text-white/60 text-sm uppercase tracking-wider'>{t('caseStudies.stats.satisfaction')}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className='py-12 px-4 lg:px-12'>
                <div className='max-w-7xl mx-auto'>
                    <div className='flex flex-wrap justify-center gap-3'>
                        <button
                            onClick={() => setActiveFilter('all')}
                            className={`px-6 py-3 rounded-full font-[font1] text-sm uppercase tracking-wider transition-all duration-300 ${activeFilter === 'all'
                                ? 'bg-[#D3FD50] text-black'
                                : 'border border-white/20 text-white/60 hover:border-[#D3FD50] hover:text-[#D3FD50]'
                                }`}
                        >
                            {t('caseStudies.filterAll')}
                        </button>
                        {sectors.map(sector => (
                            <button
                                key={sector.id}
                                onClick={() => setActiveFilter(sector.id)}
                                className={`px-6 py-3 rounded-full font-[font1] text-sm uppercase tracking-wider transition-all duration-300 ${activeFilter === sector.id
                                    ? 'bg-[#D3FD50] text-black'
                                    : 'border border-white/20 text-white/60 hover:border-[#D3FD50] hover:text-[#D3FD50]'
                                    }`}
                            >
                                {sector.title}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sectors Grid */}
            <section className='py-12 lg:py-20 px-4 lg:px-12'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid lg:grid-cols-2 gap-6 lg:gap-8'>
                        {filteredSectors.map((sector, index) => (
                            <div
                                key={sector.id}
                                className='group relative rounded-3xl overflow-hidden border border-white/10 hover:border-[#D3FD50]/50 transition-all duration-500'
                            >
                                {/* Background Image */}
                                <div className='absolute inset-0'>
                                    <img
                                        src={sector.image}
                                        alt={sector.title}
                                        className='w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700'
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} mix-blend-multiply opacity-80`} />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent' />
                                </div>

                                {/* Content */}
                                <div className='relative z-10 p-8 lg:p-12 min-h-[400px] flex flex-col justify-between'>
                                    {/* Top */}
                                    <div className='flex justify-between items-start'>
                                        <div>
                                            <span className='text-[#D3FD50] font-[font2] text-5xl lg:text-6xl'>
                                                {sector.count}
                                            </span>
                                            <span className='text-white/60 font-[font1] text-sm uppercase tracking-wider block mt-1'>
                                                {sector.subtitle}
                                            </span>
                                        </div>
                                        <div className='w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#D3FD50] group-hover:bg-[#D3FD50]/10 transition-all duration-300'>
                                            <svg className='w-5 h-5 text-white group-hover:text-[#D3FD50]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Bottom */}
                                    <div>
                                        <h3 className='font-[font2] text-white text-2xl lg:text-3xl uppercase mb-4 group-hover:text-[#D3FD50] transition-colors duration-300'>
                                            {sector.title}
                                        </h3>
                                        <p className='font-[font1] text-white/70 text-sm lg:text-base mb-6 leading-relaxed'>
                                            {sector.description}
                                        </p>
                                        <div className='flex flex-wrap gap-2'>
                                            {sector.clients.map((client, cIndex) => (
                                                <span
                                                    key={cIndex}
                                                    className='px-3 py-1 bg-white/10 rounded-full text-white/70 text-xs font-[font1]'
                                                >
                                                    {client}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Clients */}
            <section className='py-20 lg:py-32 px-4 lg:px-12 bg-gradient-to-b from-zinc-950 to-black'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center mb-16'>
                        <span className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4 block'>
                            {t('caseStudies.featuredHeader')}
                        </span>
                        <h2 className='font-[font2] text-white text-[8vw] lg:text-[3vw] uppercase'>
                            {t('caseStudies.featuredTitle')}
                        </h2>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6'>
                        {featuredClients.map((client, index) => (
                            <div
                                key={index}
                                className='group p-6 lg:p-8 rounded-2xl border border-white/10 hover:border-[#D3FD50]/50 bg-white/5 hover:bg-[#D3FD50]/5 transition-all duration-300 text-center'
                            >
                                <h4 className='font-[font2] text-white text-lg lg:text-xl group-hover:text-[#D3FD50] transition-colors duration-300'>
                                    {client.name}
                                </h4>
                                <span className='font-[font1] text-white/40 text-xs uppercase tracking-wider'>
                                    {client.sector}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className='py-20 lg:py-32 px-4 lg:px-12'>
                <div className='max-w-4xl mx-auto text-center'>
                    <h2 className='font-[font2] text-white text-[8vw] lg:text-[3vw] leading-tight uppercase mb-6'>
                        {t('caseStudies.ctaTitle')}<br />
                        <span className='text-[#D3FD50]'>{t('caseStudies.ctaTitleHighlight')}</span>
                    </h2>
                    <p className='font-[font1] text-white/60 text-lg mb-8'>
                        {t('caseStudies.ctaDesc')}
                    </p>
                    <Link
                        to='/contact'
                        className='inline-flex items-center gap-3 px-8 py-4 bg-[#D3FD50] text-black font-[font2] text-sm uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300'
                    >
                        {t('caseStudies.ctaBtn')}
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                        </svg>
                    </Link>
                </div>
            </section>

            <FooterSection />
        </div>
    )
}

export default CaseStudies
