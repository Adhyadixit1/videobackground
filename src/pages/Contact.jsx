import React, { useState } from 'react'
import FooterSection from '../components/home/FooterSection'

const Contact = () => {
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
        alert('Merci pour votre message ! Nous vous recontacterons rapidement.')
    }

    const contactInfo = [
        {
            icon: (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
            ),
            label: 'Email',
            value: 'contact@fillupmedia.fr',
            link: 'mailto:contact@fillupmedia.fr'
        },
        {
            icon: (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                </svg>
            ),
            label: 'Téléphone',
            value: '+33 1 XX XX XX XX',
            link: 'tel:+33100000000'
        },
        {
            icon: (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
            ),
            label: 'Adresse',
            value: 'Paris, France',
            link: '#'
        }
    ]

    const sectors = [
        'Automobile',
        'Ameublement',
        'Immobilier',
        'Loisirs',
        'Restauration',
        'Commerce',
        'Services',
        'Autre'
    ]

    return (
        <div className='bg-black text-white min-h-screen'>
            {/* Hero Section */}
            <section className='relative min-h-[50vh] flex items-center overflow-hidden'>
                {/* Background */}
                <div className='absolute inset-0'>
                    <div className='absolute top-1/4 -left-32 w-96 h-96 bg-[#D3FD50]/10 rounded-full blur-3xl' />
                    <div className='absolute bottom-1/4 -right-32 w-96 h-96 bg-[#D3FD50]/5 rounded-full blur-3xl' />
                    <div className='absolute inset-0' style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className='relative z-10 text-center w-full px-4 lg:px-12 pt-32'>
                    <span className='inline-block px-4 py-2 rounded-full border border-[#D3FD50]/30 text-[#D3FD50] text-xs font-[font1] uppercase tracking-[0.3em] mb-8'>
                        Contact
                    </span>
                    <h1 className='font-[font2] text-[10vw] lg:text-[5vw] leading-[0.9] uppercase'>
                        Parlons de votre<br />
                        <span className='text-[#D3FD50]'>projet</span>
                    </h1>
                </div>
            </section>

            {/* Contact Content */}
            <section className='py-20 lg:py-32 px-4 lg:px-12'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid lg:grid-cols-2 gap-12 lg:gap-20'>
                        {/* Left Side - Info */}
                        <div>
                            <h2 className='font-[font2] text-white text-2xl lg:text-3xl uppercase mb-6'>
                                Développez votre<br />
                                <span className='text-[#D3FD50]'>visibilité locale</span>
                            </h2>
                            <p className='font-[font1] text-white/60 text-base lg:text-lg leading-relaxed mb-12'>
                                Notre équipe est à votre disposition pour vous accompagner dans la mise en place de votre campagne d'affichage digital. Contactez-nous pour une étude personnalisée.
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
                                    Suivez-nous
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
                                Envoyez-nous un message
                            </h3>

                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div className='grid md:grid-cols-2 gap-6'>
                                    <div>
                                        <label className='text-white/60 text-sm block mb-2'>Nom complet *</label>
                                        <input
                                            type='text'
                                            name='name'
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300'
                                            placeholder='Votre nom'
                                        />
                                    </div>
                                    <div>
                                        <label className='text-white/60 text-sm block mb-2'>Email *</label>
                                        <input
                                            type='email'
                                            name='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300'
                                            placeholder='email@exemple.com'
                                        />
                                    </div>
                                </div>

                                <div className='grid md:grid-cols-2 gap-6'>
                                    <div>
                                        <label className='text-white/60 text-sm block mb-2'>Entreprise</label>
                                        <input
                                            type='text'
                                            name='company'
                                            value={formData.company}
                                            onChange={handleChange}
                                            className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300'
                                            placeholder='Nom de votre entreprise'
                                        />
                                    </div>
                                    <div>
                                        <label className='text-white/60 text-sm block mb-2'>Téléphone</label>
                                        <input
                                            type='tel'
                                            name='phone'
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300'
                                            placeholder='+33 X XX XX XX XX'
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className='text-white/60 text-sm block mb-2'>Secteur d'activité</label>
                                    <select
                                        name='sector'
                                        value={formData.sector}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#D3FD50] focus:outline-none transition-colors duration-300'
                                    >
                                        <option value='' className='bg-black'>Sélectionnez votre secteur</option>
                                        {sectors.map((sector) => (
                                            <option key={sector} value={sector} className='bg-black'>{sector}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className='text-white/60 text-sm block mb-2'>Votre message *</label>
                                    <textarea
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300 resize-none'
                                        placeholder='Décrivez votre projet...'
                                    />
                                </div>

                                <button
                                    type='submit'
                                    className='w-full py-4 bg-[#D3FD50] text-black font-[font2] text-sm uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3'
                                >
                                    Envoyer le message
                                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    )
}

export default Contact
