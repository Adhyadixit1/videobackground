import React from 'react'
import { Link } from 'react-router-dom'
import FooterSection from '../components/home/FooterSection'
import PageHero from '../components/common/PageHero'
import { useLanguage } from '../context/LanguageContext'

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

    const productTags = [
        'Outdoor', 'Waterproof', 'All-in-one Display', '32/43/49/55/65 inches', 'IP65 series', 'Maintenance-free', 'Sunlight Readable'
    ]

    const productHighlights = [
        {
            title: 'OD Series High-Brightness LCD',
            text: 'LCD backlight brightness ranges from 2000 to 5000 nits to guarantee best-in-class visibility even under direct sunlight.'
        },
        {
            title: 'Industrial Grade Panel',
            text: 'Wide temperature LCD panel with QWP technology prevents blackening and keeps content visible through polarized sunglasses.'
        },
        {
            title: 'Intelligent Brightness Control',
            text: 'Automatic brightness adjustment responds to ambient light to optimize legibility while saving energy.'
        },
        {
            title: 'IP65 Waterproof & Fan Design',
            text: 'Fully sealed chassis with integrated backlight, outdoor powder coating, and protection-grade IP65 keeps components safe year-round.'
        },
        {
            title: 'Ultra-thin Form Factor',
            text: 'Full lamination on the front glass plus narrow-border design supports both horizontal and vertical orientations.'
        }
    ]

    const specRows = [
        {
            model: 'OD320-T',
            size: `32"`,
            resolution: '1920×1080',
            brightness: '2500 nits',
            contrast: '1200:1',
            viewAngle: '178°/178°',
            dimensions: '763×457×95.5 mm',
            weight: '19 kg',
            power: '160 W'
        },
        {
            model: 'OD430-T',
            size: `43"`,
            resolution: '1920×1080',
            brightness: '2500 nits',
            contrast: '1200:1',
            viewAngle: '178°/178°',
            dimensions: '1014×602×95.5 mm',
            weight: '28 kg',
            power: '220 W'
        },
        {
            model: 'OD490-T',
            size: `49"`,
            resolution: '1920×1080',
            brightness: '2500 nits',
            contrast: '1200:1',
            viewAngle: '178°/178°',
            dimensions: '1147×677×95.5 mm',
            weight: '36 kg',
            power: '240 W'
        },
        {
            model: 'OD550-T',
            size: `55"`,
            resolution: '1920×1080',
            brightness: '2500 nits',
            contrast: '1200:1',
            viewAngle: '178°/178°',
            dimensions: '1282×753×95.5 mm',
            weight: '38 kg',
            power: '280 W'
        },
        {
            model: 'OD650-T',
            size: `65"`,
            resolution: '3840×2160',
            brightness: '2500 nits',
            contrast: '1200:1',
            viewAngle: '178°/178°',
            dimensions: '1500×875×95.5 mm',
            weight: '65 kg',
            power: '480 W'
        }
    ]

    const environmentalSpecs = [
        { title: 'Operating Temperature', value: '-20°C to 50°C' },
        { title: 'Operating Humidity', value: '10% – 85%' },
        { title: 'Ingress Protection', value: 'IP65 fully sealed with integrated backlight' },
        { title: 'Protective Glass', value: '5 mm ultra-clear glass, 3% haze' }
    ]

    const electronicsSpecs = [
        { title: 'Power Input', value: '180 – 264 V, 50/60 Hz' },
        { title: 'Mainboard', value: '8-core CPU A55, Android 12.0, 2 GB RAM + 16 GB storage' },
        { title: 'Interfaces', value: 'HDMI ×1 · USB ×2 · RJ45 ×1 · Wi-Fi ×1' },
        { title: 'Polarized Sunglasses Ready', value: 'QWP technology maintains perfect readability' }
    ]

    const smartScreenSections = [
        {
            title: 'Screen parameters',
            items: [
                { field: 'Size', value: '65"' },
                { field: 'Zoom', value: '6 – 16' },
                { field: 'Display area', value: '1428.5 × 803.5 mm' },
                { field: 'Overall size', value: '1504 × 879 × 100 mm' },
                { field: 'Resolution', value: '2K (1920 × 1080) or 4K (3840 × 2160)' },
                { field: 'Brightness', value: '350 cd/m²' },
                { field: 'Touch type', value: 'Infrared touch (customized)' },
                { field: 'Brands of displays', value: 'BOE' },
                { field: 'Contrast', value: '1200:1' },
                { field: 'Viewing angle', value: '89° (H) / 89° (V)' },
                { field: 'LCD life', value: '50,000 hours' },
                { field: 'Response time', value: '5 ms' }
            ]
        },
        {
            title: 'Hardware configuration',
            items: [
                { field: 'Motherboard', value: '3568' },
                { field: 'Memory', value: '4 GB RAM + 32 GB storage' },
                { field: 'System', value: 'Android 11.0' },
                { field: 'Network support', value: 'Wi-Fi and Ethernet' },
                { field: 'Interface', value: 'USB2, HDMI input, RJ45' },
                {
                    field: 'Video formats',
                    value: 'AVI, RM, RMVB, WMV, MKV, MOV, MP4, MP4V, MPEG, DIVX, XVID, DAT, VOB, MPG, FLV, ASF, TS, TP, 3GP'
                },
                {
                    field: 'Audio formats',
                    value: 'MP3, WMA, WAV, EAAC+, MP2, Vorbis (Ogg), AC3, FLAC, APE, BSAC'
                },
                { field: 'Image formats', value: 'BMP, PNG, GIF, JPEG' },
                { field: 'Text format', value: 'TXT' },
                { field: 'Timer switch', value: 'Network remote management' },
                { field: 'System upgrade', value: 'USB or Wi-Fi' },
                { field: 'Language', value: 'Chinese, English, multiple languages' }
            ]
        },
        {
            title: 'Speaker & power',
            items: [
                { field: 'Speaker', value: '2 × 5W (8Ω)' },
                { field: 'Input voltage', value: 'AC 110 V – 230 V' },
                { field: 'Frequency', value: '50 / 60 Hz' },
                { field: 'Rated power', value: '≤ 150 W' },
                { field: 'Operating temperature', value: '-20°C to +60°C' },
                { field: 'Working humidity', value: '20% – 80%' }
            ]
        },
        {
            title: 'Physical',
            items: [
                { field: 'Glass', value: 'Tempered safety glass' },
                { field: 'Material', value: 'Galvanized sheet' },
                { field: 'Packing', value: 'Carton packing' },
                { field: 'Package size', value: '1835 × 158 × 687 mm' },
                { field: 'Gross weight', value: '53 kg' },
                { field: 'Net weight', value: '46 kg' }
            ]
        },
        {
            title: 'Accessory pack',
            items: [
                { field: 'Included', value: 'Power cord, keys, remote control, antenna' }
            ]
        }
    ]

    const heroVisual = (
        <img
            decoding='async'
            width='500'
            height='429'
            src='https://fillupmedia.fr/wp-content/uploads/2023/01/ILLUSTRATION_HEADER_ANIMATION_5.gif'
            alt='ILLUSTRATION HEADER ANIMATION 5'
            title='ILLUSTRATION_HEADER_ANIMATION_5'
            className='wp-image-1612 w-[min(90vw,500px)] h-auto block'
        />
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
            <section id="stats" className='relative py-20 lg:py-32 border-y border-white/10'>
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

            {/* High Brightness Outdoor LCD Display */}
            <section className='relative py-20 lg:py-32 px-4 lg:px-12 bg-gradient-to-b from-black via-zinc-950 to-black'>
                <div className='max-w-7xl mx-auto'>
                    <div className='flex flex-col lg:flex-row justify-between items-start gap-8 mb-12'>
                        <div>
                            <p className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-3'>High Brightness Outdoor LCD</p>
                            <h2 className='font-[font2] text-white text-3xl lg:text-5xl leading-tight uppercase'>
                                Sunlight Readable OD Series
                            </h2>
                        </div>
                        <div className='max-w-2xl text-white/70 font-[font1] text-base leading-relaxed'>
                            Outdoor, waterproof, maintenance-free displays engineered for 32" to 65" deployments. The OD Series pairs industrial-grade panels with IP65 enclosures to deliver reliable, high-impact messaging in any environment.
                        </div>
                    </div>

                    <div className='flex flex-wrap gap-3 mb-12'>
                        {productTags.map((tag, idx) => (
                            <span key={idx} className='px-4 py-2 text-xs font-[font1] uppercase tracking-widest border border-white/10 rounded-full text-white/70'>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className='grid lg:grid-cols-3 gap-6 mb-16'>
                        {productHighlights.map((item, idx) => (
                            <div key={idx} className='p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#D3FD50]/40 transition-all duration-300'>
                                <h3 className='font-[font2] text-white text-lg mb-3 uppercase'>{item.title}</h3>
                                <p className='font-[font1] text-white/70 text-sm leading-relaxed'>{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className='grid lg:grid-cols-2 gap-8 mb-16'>
                        <div className='p-6 rounded-3xl border border-white/10 bg-white/5'>
                            <h4 className='font-[font2] text-white text-xl uppercase mb-4'>Environment & Mechanics</h4>
                            <ul className='space-y-3'>
                                {environmentalSpecs.map((spec, idx) => (
                                    <li key={idx} className='flex items-start gap-3 text-white/70 font-[font1] text-sm'>
                                        <span className='w-2 h-2 mt-2 rounded-full bg-[#D3FD50]' />
                                        <div>
                                            <p className='text-white font-[font2] text-sm uppercase tracking-wide'>{spec.title}</p>
                                            <p>{spec.value}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='p-6 rounded-3xl border border-white/10 bg-white/5'>
                            <h4 className='font-[font2] text-white text-xl uppercase mb-4'>Electronics & Interfaces</h4>
                            <ul className='space-y-3'>
                                {electronicsSpecs.map((spec, idx) => (
                                    <li key={idx} className='flex items-start gap-3 text-white/70 font-[font1] text-sm'>
                                        <span className='w-2 h-2 mt-2 rounded-full bg-[#D3FD50]' />
                                        <div>
                                            <p className='text-white font-[font2] text-sm uppercase tracking-wide'>{spec.title}</p>
                                            <p>{spec.value}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className='overflow-x-auto rounded-3xl border border-white/10'>
                        <table className='min-w-full text-left text-sm font-[font1] text-white/80'>
                            <thead className='bg-white/5 text-white uppercase tracking-widest text-xs'>
                                <tr>
                                    <th className='px-4 py-3'>Model</th>
                                    <th className='px-4 py-3'>Size</th>
                                    <th className='px-4 py-3'>Resolution</th>
                                    <th className='px-4 py-3'>Brightness</th>
                                    <th className='px-4 py-3'>Contrast</th>
                                    <th className='px-4 py-3'>Viewing Angle</th>
                                    <th className='px-4 py-3'>Dimensions</th>
                                    <th className='px-4 py-3'>Weight</th>
                                    <th className='px-4 py-3'>Max Power</th>
                                </tr>
                            </thead>
                            <tbody>
                                {specRows.map((row, idx) => (
                                    <tr key={row.model} className={idx % 2 === 0 ? 'bg-white/0' : 'bg-white/5'}>
                                        <td className='px-4 py-3 font-[font2] text-white'>{row.model}</td>
                                        <td className='px-4 py-3'>{row.size}</td>
                                        <td className='px-4 py-3'>{row.resolution}</td>
                                        <td className='px-4 py-3'>{row.brightness}</td>
                                        <td className='px-4 py-3'>{row.contrast}</td>
                                        <td className='px-4 py-3'>{row.viewAngle}</td>
                                        <td className='px-4 py-3 whitespace-nowrap'>{row.dimensions}</td>
                                        <td className='px-4 py-3'>{row.weight}</td>
                                        <td className='px-4 py-3'>{row.power}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className='mt-20'>
                        <div className='flex flex-col lg:flex-row items-start justify-between gap-6 mb-10'>
                            <div>
                                <p className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-3'>
                                    65" Interactive Smart Screen
                                </p>
                                <h3 className='font-[font2] text-white text-3xl lg:text-4xl uppercase leading-tight'>
                                    Deep-dive Specifications
                                </h3>
                            </div>
                            <p className='font-[font1] text-white/70 max-w-2xl text-base leading-relaxed'>
                                Detailed hardware, power, and physical specifications derived from the manufacturer data sheet ensure
                                our team can scope deployments, maintenance, and integrations with full confidence.
                            </p>
                        </div>

                        <div className='grid md:grid-cols-2 gap-6'>
                            {smartScreenSections.map(section => (
                                <div key={section.title} className='p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent'>
                                    <h4 className='font-[font2] text-white text-xl uppercase mb-5'>{section.title}</h4>
                                    <ul className='space-y-4'>
                                        {section.items.map(item => (
                                            <li key={item.field} className='flex flex-col gap-1'>
                                                <span className='text-white/60 text-xs font-[font1] uppercase tracking-[0.2em]'>
                                                    {item.field}
                                                </span>
                                                <span className='text-white font-[font2] text-base leading-snug'>
                                                    {item.value}
                                                </span>
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
                            <div className='aspect-square rounded-3xl bg-gradient-to-br from-[#D3FD50]/20 to-transparent border border-white/10 p-8 lg:p-12'>
                                {/* Decorative circles - retained purely visual */}
                                <div className='absolute inset-0 flex items-center justify-center'>
                                    <div className='w-64 h-64 rounded-full border border-[#D3FD50]/20 animate-pulse' />
                                    <div className='absolute w-48 h-48 rounded-full border border-[#D3FD50]/30' />
                                    <div className='absolute w-32 h-32 rounded-full bg-[#D3FD50]/10 flex items-center justify-center'>
                                        <svg className='w-12 h-12 text-[#D3FD50]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
