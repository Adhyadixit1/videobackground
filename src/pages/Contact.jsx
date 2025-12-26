import React, { useState, useMemo } from 'react'
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
        phone: '',
        sector: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
        alert(t('contact.success'))
    }

    const contactInfo = useMemo(() => [
        {
            icon: (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
            ),
            label: t('contact.formEmail'),
            value: 'contact@luxiomedia.lu',
            link: 'mailto:contact@luxiomedia.lu'
        },
        {
            icon: (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                </svg>
            ),
            label: t('contact.formPhone'),
            value: '+352 661 16 77 25',
            link: 'tel:+352661167725'
        },
        {
            icon: (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
            ),
            label: t('contact.address'),
            value: 'Paris, France',
            link: '#'
        }
    ], [t])

    const sectors = t('contact.sectorsList', { returnObjects: true }) || []

    return (
        <div className='bg-black text-white min-h-screen'>
            {/* Hero Section */}
            <PageHero
                title={t('contact.heroTitle')}
                highlight={t('contact.heroTitleHighlight')}
                description={t('contact.intro')}
                ctaText={t('contact.formTitle')}
                ctaLink="#contact-form"
                visual={<LottieVisual url="https://assets10.lottiefiles.com/packages/lf20_u25cckyh.json" />}
            />

            {/* Contact Content */}
            <section id="contact-form" className='py-20 lg:py-32 px-4 lg:px-12'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid lg:grid-cols-2 gap-12 lg:gap-20'>
                        {/* Left Side - Info */}
                        <div>
                            <h2 className='font-[font2] text-white text-2xl lg:text-3xl uppercase mb-6'>
                                {t('contact.desc', { returnObjects: true }).toString().replace(/local.*$/, '')}<br />
                                <span className='text-[#D3FD50]'>{t('contact.desc').split(' ').slice(-2).join(' ')}</span>
                            </h2>
                            <p className='font-[font1] text-white/60 text-base lg:text-lg leading-relaxed mb-12'>
                                {t('contact.intro')}
                            </p>

                            {/* Contact Info Cards */}
                            <div className='space-y-4 mb-12'>
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.link}
                                        className='group flex items-center gap-4 p-5 rounded-2xl border border-white/10 hover:border-[#D3FD50]/50 bg-white/5 hover:bg-[#D3FD50]/5 transition-all duration-300'
                                    >
                                        <div className='w-12 h-12 rounded-xl bg-[#D3FD50]/10 flex items-center justify-center text-[#D3FD50]'>
                                            {info.icon}
                                        </div>
                                        <div>
                                            <span className='text-white/40 text-xs uppercase tracking-wider block'>
                                                {info.label}
                                            </span>
                                            <span className='font-[font1] text-white group-hover:text-[#D3FD50] transition-colors duration-300'>
                                                {info.value}
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div>
                                <span className='text-white/40 text-xs uppercase tracking-wider mb-4 block'>
                                    {t('contact.followUs')}
                                </span>
                                <div className='flex gap-4'>
                                    {['linkedin', 'twitter', 'instagram'].map((social) => (
                                        <a
                                            key={social}
                                            href='#'
                                            className='w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#D3FD50] hover:bg-[#D3FD50]/10 transition-all duration-300 group'
                                        >
                                            <span className='text-white group-hover:text-[#D3FD50] capitalize text-xs'>
                                                {social[0].toUpperCase()}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className='p-8 lg:p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent'>
                            <h3 className='font-[font2] text-white text-xl lg:text-2xl uppercase mb-8'>
                                {t('contact.formTitle')}
                            </h3>

                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div className='grid md:grid-cols-2 gap-6'>
                                    <div>
                                        <label className='text-white/60 text-sm block mb-2'>{t('contact.formName')} *</label>
                                        <input
                                            type='text'
                                            name='name'
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300'
                                            placeholder={t('contact.placeholders.name')}
                                        />
                                    </div>
                                    <div>
                                        <label className='text-white/60 text-sm block mb-2'>{t('contact.formEmail')} *</label>
                                        <input
                                            type='email'
                                            name='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300'
                                            placeholder={t('contact.placeholders.email')}
                                        />
                                    </div>
                                </div>

                                <div className='grid md:grid-cols-2 gap-6'>
                                    <div>
                                        <label className='text-white/60 text-sm block mb-2'>{t('contact.formCompany')}</label>
                                        <input
                                            type='text'
                                            name='company'
                                            value={formData.company}
                                            onChange={handleChange}
                                            className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300'
                                            placeholder={t('contact.placeholders.company')}
                                        />
                                    </div>
                                    <div>
                                        <label className='text-white/60 text-sm block mb-2'>{t('contact.formPhone')}</label>
                                        <input
                                            type='tel'
                                            name='phone'
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300'
                                            placeholder={t('contact.placeholders.phone')}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className='text-white/60 text-sm block mb-2'>{t('contact.formSector')}</label>
                                    <select
                                        name='sector'
                                        value={formData.sector}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#D3FD50] focus:outline-none transition-colors duration-300'
                                    >
                                        <option value='' className='bg-black'>{t('contact.placeholders.sector')}</option>
                                        {Array.isArray(sectors) && sectors.map((sector) => (
                                            <option key={sector} value={sector} className='bg-black'>{sector}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className='text-white/60 text-sm block mb-2'>{t('contact.formMessage')} *</label>
                                    <textarea
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300 resize-none'
                                        placeholder={t('contact.placeholders.message')}
                                    />
                                </div>

                                <button
                                    type='submit'
                                    className='w-full py-4 bg-[#D3FD50] text-black font-[font2] text-sm uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3'
                                >
                                    {t('contact.submit')}
                                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section >

            <FooterSection />
        </div >
    )
}

export default Contact
