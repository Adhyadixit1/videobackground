import React, { useState, useMemo, useRef, useEffect } from 'react'
import FooterSection from '../components/home/FooterSection'
import PageHero from '../components/common/PageHero'
import LottieVisual from '../components/common/LottieVisual'
import { useLanguage } from '../context/LanguageContext'

const Contact = () => {
    const { t } = useLanguage()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        countryCode: '+352',
        phone: '',
        sector: '',
        message: ''
    })

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)

    const countryCodes = [
        { code: '+352', country: 'LU', flag: '🇱🇺', name: 'Luxembourg' },
        { code: '+33', country: 'FR', flag: '🇫🇷', name: 'France' },
        { code: '+49', country: 'DE', flag: '🇩🇪', name: 'Germany' },
        { code: '+32', country: 'BE', flag: '🇧🇪', name: 'Belgium' },
        { code: '+41', country: 'CH', flag: '🇨🇭', name: 'Switzerland' },
        { code: '+44', country: 'GB', flag: '🇬🇧', name: 'United Kingdom' },
        { code: '+1', country: 'US', flag: '🇺🇸', name: 'United States' },
        { code: '+31', country: 'NL', flag: '🇳🇱', name: 'Netherlands' },
        { code: '+39', country: 'IT', flag: '🇮🇹', name: 'Italy' },
        { code: '+34', country: 'ES', flag: '🇪🇸', name: 'Spain' },
        { code: '+351', country: 'PT', flag: '🇵🇹', name: 'Portugal' },
    ]

    const selectedCountry = countryCodes.find(c => c.code === formData.countryCode) || countryCodes[0]

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleCountrySelect = (code) => {
        setFormData({ ...formData, countryCode: code })
        setIsDropdownOpen(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        alert(t('contact.success'))
    }

    const contactInfo = useMemo(() => [
        {
            icon: '✉️',
            label: t('contact.formEmail'),
            value: 'contact@luxiomedia.lu',
            link: 'mailto:contact@luxiomedia.lu'
        },
        {
            icon: '📞',
            label: t('contact.formPhone'),
            value: '+352 661 16 77 25',
            link: 'tel:+352661167725'
        },
        {
            icon: '📍',
            label: t('contact.address'),
            value: '26 Bd Royal, L-2449 Luxembourg',
            link: '#'
        }
    ], [t])

    const sectors = t('contact.sectorsList', { returnObjects: true }) || []

    return (
        <div className='bg-[#050505] text-white min-h-screen overflow-x-hidden'>
            {/* Hero Section */}
            <PageHero
                title={t('contact.heroTitle')}
                highlight={t('contact.heroTitleHighlight')}
                description={t('contact.intro')}
                ctaText={t('contact.formTitle')}
                ctaLink="#contact-form"
                visual={<LottieVisual url="https://assets10.lottiefiles.com/packages/lf20_u25cckyh.json" />}
            />

            {/* Contact Content - High Contrast Redesign */}
            <section id="contact-form" className='relative py-12 lg:py-20 px-6'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid lg:grid-cols-2 gap-12 lg:gap-24'>

                        {/* Left Side - Visual Info */}
                        <div className='space-y-12 lg:sticky lg:top-32 h-fit'>
                            <div>
                                <h2 className='font-[font2] text-4xl lg:text-7xl uppercase tracking-tighter leading-none mb-8'>
                                    {t('contact.desc', { returnObjects: true })?.toString().replace(/local.*$/, '')}<br />
                                    <span className='text-[#D3FD50]'>{t('contact.desc')?.split(' ').slice(-2).join(' ')}</span>
                                </h2>
                                <p className='font-[font1] text-white/40 text-lg lg:text-xl leading-relaxed max-w-lg'>
                                    Nous sommes basés au cœur du centre financier de l'Europe pour propulser votre visibilité régionale.
                                </p>
                            </div>

                            <div className='grid gap-1'>
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.link}
                                        className='group flex items-center gap-6 p-8 bg-white/[0.02] border border-white/5 hover:bg-[#D3FD50]/5 hover:border-[#D3FD50]/30 transition-all duration-500'
                                    >
                                        <div className='text-3xl grayscale group-hover:grayscale-0 transition-all'>{info.icon}</div>
                                        <div>
                                            <span className='text-white/20 text-[10px] uppercase tracking-[0.4em] block mb-1'>
                                                {info.label}
                                            </span>
                                            <span className='font-[font2] text-white uppercase tracking-tight text-lg group-hover:text-[#D3FD50] transition-colors'>
                                                {info.value}
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className='flex gap-1'>
                                {['linkedin', 'instagram', 'facebook'].map((social) => (
                                    <a
                                        key={social}
                                        href='#'
                                        className='flex-1 py-4 border border-white/5 bg-white/[0.01] text-center font-[font2] text-[10px] uppercase tracking-[0.3em] text-white/20 hover:text-[#D3FD50] hover:bg-[#D3FD50]/5 transition-all'
                                    >
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Premium Form */}
                        <div className='relative'>
                            <div className='p-8 lg:p-16 rounded-[40px] border border-white/5 bg-white/[0.02] backdrop-blur-xl shadow-2xl relative overflow-hidden'>
                                <div className='absolute -top-32 -right-32 w-64 h-64 bg-[#D3FD50]/5 rounded-full blur-[80px]' />

                                <h3 className='font-[font2] text-2xl lg:text-3xl uppercase mb-10 tracking-tight'>
                                    {t('contact.formTitle')}
                                </h3>

                                <form onSubmit={handleSubmit} className='space-y-8'>
                                    <div className='grid md:grid-cols-2 gap-8'>
                                        <div className='space-y-2'>
                                            <label className='text-white/20 text-[10px] font-[font2] uppercase tracking-[0.3em] ml-1'>{t('contact.formName')}</label>
                                            <input
                                                type='text'
                                                name='name'
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:border-[#D3FD50] focus:outline-none transition-all'
                                                placeholder={t('contact.placeholders.name')}
                                            />
                                        </div>
                                        <div className='space-y-2'>
                                            <label className='text-white/20 text-[10px] font-[font2] uppercase tracking-[0.3em] ml-1'>{t('contact.formEmail')}</label>
                                            <input
                                                type='email'
                                                name='email'
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:border-[#D3FD50] focus:outline-none transition-all'
                                                placeholder={t('contact.placeholders.email')}
                                            />
                                        </div>
                                    </div>

                                    <div className='grid md:grid-cols-2 gap-8'>
                                        <div className='space-y-2'>
                                            <label className='text-white/20 text-[10px] font-[font2] uppercase tracking-[0.3em] ml-1'>{t('contact.formCompany')}</label>
                                            <input
                                                type='text'
                                                name='company'
                                                value={formData.company}
                                                onChange={handleChange}
                                                className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:border-[#D3FD50] focus:outline-none transition-all'
                                                placeholder={t('contact.placeholders.company')}
                                            />
                                        </div>
                                        <div className='space-y-2'>
                                            <label className='text-white/20 text-[10px] font-[font2] uppercase tracking-[0.3em] ml-1'>{t('contact.formPhone')}</label>
                                            <div className='flex gap-3 relative'>
                                                <div ref={dropdownRef} className='relative w-28 shrink-0'>
                                                    <button
                                                        type='button'
                                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                        className='w-full h-full flex items-center justify-between px-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white hover:border-[#D3FD50]/50 transition-all'
                                                    >
                                                        <span className='flex items-center gap-2'>
                                                            <span>{selectedCountry.flag}</span>
                                                            <span className='text-xs font-bold'>{selectedCountry.code}</span>
                                                        </span>
                                                        <svg className={`w-3 h-3 text-[#D3FD50] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                                                        </svg>
                                                    </button>
                                                    {isDropdownOpen && (
                                                        <div className='absolute bottom-full left-0 mb-4 w-64 max-h-64 overflow-y-auto bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl z-50 p-2'>
                                                            {countryCodes.map((c) => (
                                                                <button
                                                                    key={c.code}
                                                                    type='button'
                                                                    onClick={() => handleCountrySelect(c.code)}
                                                                    className='w-full flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-[#D3FD50]/10 text-left transition-all group'
                                                                >
                                                                    <span className='text-xl'>{c.flag}</span>
                                                                    <span className='text-xs font-bold text-white group-hover:text-[#D3FD50]'>{c.code}</span>
                                                                    <span className='text-[10px] text-white/40'>{c.name}</span>
                                                                </button>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                                <input
                                                    type='tel'
                                                    name='phone'
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className='flex-1 min-w-0 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:border-[#D3FD50] focus:outline-none transition-all'
                                                    placeholder={t('contact.placeholders.phone')}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='space-y-2'>
                                        <label className='text-white/20 text-[10px] font-[font2] uppercase tracking-[0.3em] ml-1'>{t('contact.formSector')}</label>
                                        <select
                                            name='sector'
                                            value={formData.sector}
                                            onChange={handleChange}
                                            className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-[#D3FD50] focus:outline-none transition-all appearance-none cursor-pointer'
                                            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23D3FD50\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.5rem center', backgroundSize: '1rem' }}
                                        >
                                            <option value='' className='bg-black'>{t('contact.placeholders.sector')}</option>
                                            {Array.isArray(sectors) && sectors.map((sector) => (
                                                <option key={sector} value={sector} className='bg-black'>{sector}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className='space-y-2'>
                                        <label className='text-white/20 text-[10px] font-[font2] uppercase tracking-[0.3em] ml-1'>{t('contact.formMessage')}</label>
                                        <textarea
                                            name='message'
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:border-[#D3FD50] focus:outline-none transition-all resize-none'
                                            placeholder={t('contact.placeholders.message')}
                                        />
                                    </div>

                                    <button
                                        type='submit'
                                        className='w-full py-6 bg-[#D3FD50] text-black font-[font2] text-xs uppercase tracking-[0.4em] rounded-full hover:bg-white hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_40px_rgba(211,253,80,0.2)]'
                                    >
                                        {t('contact.submit')}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    )
}

export default Contact
