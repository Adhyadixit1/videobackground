import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navigation/Navbar'
import FullScreenNav from '../components/Navigation/FullScreenNav'
import FooterSection from '../components/home/FooterSection'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const ProjectTemplate = ({
    solutionKey,
    video,
    image
}) => {
    const { t } = useLanguage()

    // Get translations for this solution
    const solution = t(`solutionPages.${solutionKey}`, { returnObjects: true }) || {}
    const common = t('solutionPages.common', { returnObjects: true }) || {}

    const {
        title = solutionKey,
        description = '',
        features = [],
        stats = [],
        benefits = [],
        specs = [],
        useCases = [],
        faqs = [],
        relatedSolutions = [],
        gallery = [],
        detailedSpecs = []
    } = solution

    const [activeSlide, setActiveSlide] = useState(0)
    const [lastInteraction, setLastInteraction] = useState(0)
    const [activeTab, setActiveTab] = useState(0)

    useEffect(() => {
        if (!gallery || gallery.length === 0) return

        const totalSlides = gallery.length + (detailedSpecs?.length || 1)
        const interval = setInterval(() => {
            const now = Date.now()
            if (now - lastInteraction >= 20000) {
                setActiveSlide((prev) => (prev + 1) % totalSlides)
            }
        }, 10000)

        return () => clearInterval(interval)
    }, [gallery, lastInteraction])

    const handleManualChange = (index) => {
        setActiveSlide(index)
        setLastInteraction(Date.now())
    }

    const isWideHero = solutionKey === 'outdoorWaterproofDisplay'

    const renderFeatureList = (wrapperClasses = '') => {
        if (!features || features.length === 0) return null
        return (
            <div className={wrapperClasses}>
                <h3 className="text-[#D3FD50] font-[font2] text-lg uppercase tracking-wider mb-4">
                    {common.keyFeatures || 'Key Features'}
                </h3>
                <ul className="space-y-3">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-white/70 font-[font1]">
                            <span className="w-2 h-2 rounded-full bg-[#D3FD50] mt-2 flex-shrink-0" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <FullScreenNav />

            {/* Hero Section */}
            <section className="pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4">
                    <Link to="/projects" className="text-[#D3FD50] hover:underline inline-block font-[font1] uppercase tracking-wider text-sm">
                        ← Back to Projects
                    </Link>
                </div>

                {isWideHero ? (
                    <>
                        <div className="max-w-7xl mx-auto px-4 mt-8">
                            <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                                <div className="relative w-full aspect-[16/9] bg-zinc-900">
                                    {image ? (
                                        <img
                                            src={image}
                                            alt={title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : video ? (
                                        <video
                                            src={video}
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 text-white/20 p-8 text-center">
                                            <div className="w-16 h-16 rounded-full border-2 border-current flex items-center justify-center">
                                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <p className="font-[font1] text-sm">{title}</p>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/90 via-black/50 to-transparent" />
                                    <div className="absolute inset-0 flex flex-col justify-center gap-8 p-6 lg:p-12">
                                        <div className="space-y-4 max-w-3xl">
                                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-[font2] text-white leading-tight">
                                                {title}
                                            </h1>
                                            <p className="text-white/70 font-[font1] text-lg leading-relaxed">
                                                {description}
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap gap-4">
                                            <Link
                                                to="/contact"
                                                className="inline-flex items-center gap-3 px-8 py-4 bg-[#D3FD50] text-black font-[font2] text-sm uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300"
                                            >
                                                {common.requestQuote || 'Request a Quote'}
                                                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                                </svg>
                                            </Link>
                                        </div>
                                        {features && features.length > 0 && (
                                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
                                                {features.slice(0, 6).map((feature, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-sm text-white/80 font-[font1]"
                                                    >
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {renderFeatureList('max-w-7xl mx-auto px-4 mt-12')}
                    </>
                ) : (
                    <div className="max-w-7xl mx-auto px-4 mt-8">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                            {/* Content Side */}
                            <div className="space-y-6">
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-[font2] text-white leading-tight">
                                    {title}
                                </h1>
                                <p className="text-white/60 font-[font1] text-lg leading-relaxed max-w-xl">
                                    {description}
                                </p>

                                {renderFeatureList('pt-4')}

                                <div className="pt-8 flex flex-wrap gap-4">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#D3FD50] text-black font-[font2] text-sm uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300"
                                    >
                                        {common.requestQuote || 'Request a Quote'}
                                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            {/* Media Side */}
                            <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
                                <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 shadow-2xl group hover:border-[#D3FD50]/50 transition-all duration-500">
                                    <div className="aspect-[9/16] relative overflow-hidden bg-zinc-900">
                                        {video ? (
                                            <video
                                                src={video}
                                                className="w-full h-full object-cover"
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                            />
                                        ) : image ? (
                                            <img
                                                src={image}
                                                alt={title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 text-white/20 p-8 text-center">
                                                <div className="w-16 h-16 rounded-full border-2 border-current flex items-center justify-center">
                                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <p className="font-[font1] text-sm">{title}</p>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Stats Section */}
            {stats && stats.length > 0 && (
                <section className="py-16 border-y border-white/10">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="text-center">
                                    <div className="text-4xl lg:text-5xl font-[font2] text-[#D3FD50] mb-2">{stat.value}</div>
                                    <div className="text-white/60 font-[font1] text-sm uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Benefits Section */}
            {benefits && benefits.length > 0 && (
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4 block">
                                {common.whyChoose || 'Why Choose'}
                            </span>
                            <h2 className="font-[font2] text-white text-3xl lg:text-5xl uppercase">{title}</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-[#D3FD50]/50 transition-colors duration-300 group">
                                    <div className="w-14 h-14 rounded-2xl bg-[#D3FD50]/10 flex items-center justify-center text-[#D3FD50] mb-6 group-hover:bg-[#D3FD50]/20 transition-colors">
                                        <span className="text-2xl font-[font2]">{String(idx + 1).padStart(2, '0')}</span>
                                    </div>
                                    <h3 className="font-[font2] text-white text-xl mb-3 group-hover:text-[#D3FD50] transition-colors">{benefit.title}</h3>
                                    <p className="text-white/60 font-[font1] text-sm leading-relaxed">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Technical Specifications - Concise Grid */}
            {specs && specs.length > 0 && (
                <section className="py-20 px-4 bg-zinc-950">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4 block">
                                {common.specifications || 'Specifications'}
                            </span>
                            <h2 className="font-[font2] text-white text-3xl lg:text-5xl uppercase">
                                {common.technicalSpecs || 'Paramètres Techniques'}
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {specs.map((spec, idx) => (
                                <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-[#D3FD50]/30 transition-colors">
                                    <div className="text-[#D3FD50] font-[font2] text-2xl mb-1">{spec.value}</div>
                                    <div className="text-white/60 font-[font1] text-sm">{spec.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {gallery && gallery.length > 0 && (
                <section className="py-20 px-4 bg-gradient-to-b from-black to-zinc-950 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20 lg:mb-24 relative z-30">
                            <span className="text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4 block">
                                {common.productGallery || 'Product Gallery'}
                            </span>
                            <h2 className="font-[font2] text-white text-3xl lg:text-5xl uppercase">{title}</h2>
                        </div>

                        <div className="relative h-[650px] lg:h-[700px] mt-16">
                            {/* Slides */}
                            <div className="relative w-full h-full">
                                {[...gallery, ...(detailedSpecs?.length > 0 ? detailedSpecs.map((spec, i) => ({ isSpecSlide: true, specData: spec, specIdx: i })) : [{ isSpecSlide: true }])].map((img, idx) => (
                                    <div
                                        key={idx}
                                        className={`absolute inset-0 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 transition-all duration-700 ease-in-out ${idx === activeSlide
                                            ? 'opacity-100 translate-y-0 z-10'
                                            : 'opacity-0 translate-y-8 z-0 pointer-events-none'
                                            }`}
                                    >
                                        {img.isSpecSlide ? (
                                            <div className="w-full h-full flex flex-col items-center justify-center space-y-8 z-10">
                                                <div className="text-center space-y-4">
                                                    <h3 className="font-[font2] text-[#D3FD50] text-3xl lg:text-5xl uppercase tracking-widest drop-shadow-[0_0_10px_rgba(211,253,80,0.3)]">
                                                        {common.technicalSpecs || 'Technical Data'}
                                                    </h3>
                                                    <p className="text-white/40 font-[font1] uppercase tracking-[0.3em] text-sm italic">
                                                        {title} - Detailed Overview
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
                                                    {(img.specData?.items || specs).slice(0, 8).map((spec, sidx) => (
                                                        <div key={sidx} className="p-4 rounded-xl border border-[#D3FD50]/10 bg-[#D3FD50]/5 backdrop-blur-md">
                                                            <div className="text-[#D3FD50] font-[font2] text-lg mb-1">{spec.value}</div>
                                                            <div className="text-white/40 font-[font1] text-[9px] uppercase tracking-wider">{spec.label}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <button
                                                    onClick={() => {
                                                        if (img.specData) setActiveTab(img.specIdx)
                                                        document.getElementById('detailed-specs-tabs')?.scrollIntoView({ behavior: 'smooth' })
                                                    }}
                                                    className="px-8 py-3 rounded-full border border-[#D3FD50]/30 text-[#D3FD50] font-[font2] text-xs uppercase tracking-widest hover:bg-[#D3FD50] hover:text-black transition-all duration-300"
                                                >
                                                    View All Parameters
                                                </button>
                                            </div>
                                        ) : (
                                            <>
                                                {/* Background Number */}
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.03] font-[font2] text-[250px] lg:text-[450px] select-none leading-none z-0 pointer-events-none">
                                                    {String(idx + 1).padStart(2, '0')}
                                                </div>

                                                {/* Image Section */}
                                                <div className="flex-1 w-full flex justify-center items-center z-10">
                                                    <div className="relative group">
                                                        <div className="absolute -inset-4 bg-[#D3FD50]/5 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                        <div className="relative p-2 rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm shadow-2xl">
                                                            <img
                                                                src={img.src}
                                                                alt={img.alt}
                                                                className="max-w-full h-auto max-h-[350px] lg:max-h-[500px] object-contain rounded-xl"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Text Section */}
                                                <div className="flex-1 w-full relative z-10">
                                                    <div className="space-y-6">
                                                        <h3 className="font-[font2] text-white text-3xl lg:text-6xl leading-tight border-b border-[#D3FD50]/20 pb-8 tracking-tight">
                                                            {img.title || img.alt}
                                                        </h3>
                                                        {img.description && (
                                                            <p className="text-white/60 font-[font1] text-lg lg:text-xl leading-relaxed border-l-4 border-[#D3FD50] pl-8 max-w-[600px]">
                                                                {img.description}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Controls */}
                            <div className="absolute -bottom-12 lg:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
                                <button
                                    onClick={() => handleManualChange((activeSlide - 1 + gallery.length + (detailedSpecs?.length || 1)) % (gallery.length + (detailedSpecs?.length || 1)))}
                                    className="p-3 rounded-full border border-white/10 bg-black/50 hover:bg-[#D3FD50] hover:text-black hover:border-transparent text-white transition-all duration-300 backdrop-blur-sm"
                                    aria-label="Previous slide"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin='round' strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <div className="flex gap-2">
                                    {[...gallery, ...(detailedSpecs?.length > 0 ? detailedSpecs : [{}])].map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleManualChange(idx)}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeSlide ? 'w-8 bg-[#D3FD50]' : 'w-2 bg-white/20 hover:bg-white/40'
                                                }`}
                                            aria-label={`Go to slide ${idx + 1}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={() => handleManualChange((activeSlide + 1) % (gallery.length + (detailedSpecs?.length || 1)))}
                                    className="p-3 rounded-full border border-white/10 bg-black/50 hover:bg-[#D3FD50] hover:text-black hover:border-transparent text-white transition-all duration-300 backdrop-blur-sm"
                                    aria-label="Next slide"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin='round' strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Detailed Specs Tabs - Below Slider */}
                        {detailedSpecs && detailedSpecs.length > 0 && (
                            <div id="detailed-specs-tabs" className="mt-40 pt-20 border-t border-white/5">
                                <div className="text-center mb-16">
                                    <h2 className="font-[font2] text-white text-2xl lg:text-4xl uppercase tracking-widest mb-4">
                                        {common.technicalParameters || 'Technical Parameters'}
                                    </h2>
                                    <div className="w-24 h-1 bg-[#D3FD50] mx-auto shadow-[0_0_10px_#D3FD50]" />
                                </div>

                                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
                                    {detailedSpecs.map((cat, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveTab(idx)}
                                            className={`px-6 py-3 font-[font2] text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all duration-500 relative rounded-xl border ${activeTab === idx
                                                ? 'text-[#D3FD50] border-[#D3FD50] bg-[#D3FD50]/5 shadow-[0_0_20px_rgba(211,253,80,0.1)]'
                                                : 'text-white/30 border-white/5 hover:border-white/20 hover:text-white/60'
                                                }`}
                                        >
                                            {cat.category}
                                            {activeTab === idx && (
                                                <div className="absolute inset-0 rounded-xl bg-[#D3FD50]/5 animate-pulse" />
                                            )}
                                        </button>
                                    ))}
                                </div>

                                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-6xl mx-auto">
                                    {detailedSpecs[activeTab]?.items.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex justify-between items-center py-4 border-b border-white/5 group hover:border-[#D3FD50]/30 transition-all duration-300 px-4 rounded-lg hover:bg-white/[0.01]"
                                        >
                                            <span className="text-white/40 font-[font1] text-[10px] uppercase tracking-widest group-hover:text-white/60 transition-colors">
                                                {item.label}
                                            </span>
                                            <span className="text-white font-[font1] text-sm font-medium tracking-tight group-hover:text-[#D3FD50] transition-all duration-300">
                                                {item.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Use Cases */}
            {useCases && useCases.length > 0 && (
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4 block">
                                {common.applications || 'Applications'}
                            </span>
                            <h2 className="font-[font2] text-white text-3xl lg:text-5xl uppercase">
                                {common.useCases || 'Use Cases'}
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {useCases.map((useCase, idx) => (
                                <div key={idx} className="flex gap-6 p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-[#D3FD50]/30 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-[#D3FD50] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-[font2] text-white text-lg mb-2">{useCase.title}</h3>
                                        <p className="text-white/60 font-[font1] text-sm leading-relaxed">{useCase.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ Section */}
            {faqs && faqs.length > 0 && (
                <section className="py-20 px-4 bg-gradient-to-b from-black to-zinc-950">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4 block">
                                {common.support || 'Support'}
                            </span>
                            <h2 className="font-[font2] text-white text-3xl lg:text-5xl uppercase">
                                {common.faq || 'Frequently Asked Questions'}
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-white/5">
                                    <h3 className="font-[font2] text-white text-lg mb-3">{faq.question}</h3>
                                    <p className="text-white/60 font-[font1] text-sm leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Related Solutions */}
            {relatedSolutions && relatedSolutions.length > 0 && (
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4 block">
                                {common.exploreMore || 'Explore More'}
                            </span>
                            <h2 className="font-[font2] text-white text-3xl lg:text-5xl uppercase">
                                {common.relatedSolutions || 'Related Solutions'}
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {relatedSolutions.map((solution, idx) => (
                                <Link
                                    key={idx}
                                    to={solution.link}
                                    className="group p-6 rounded-3xl border border-white/10 bg-white/5 hover:border-[#D3FD50]/50 transition-all duration-300"
                                >
                                    <h3 className="font-[font2] text-white text-xl mb-2 group-hover:text-[#D3FD50] transition-colors">{solution.title}</h3>
                                    <p className="text-white/60 font-[font1] text-sm mb-4">{solution.description}</p>
                                    <span className="text-[#D3FD50] font-[font1] text-sm uppercase tracking-wider inline-flex items-center gap-2">
                                        {common.learnMore || 'Learn More'}
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-[font2] text-white text-3xl lg:text-5xl uppercase mb-6">
                        {common.readyToStart || 'Ready to Get Started with'} <span className="text-[#D3FD50]">{title}</span>?
                    </h2>
                    <p className="text-white/60 font-[font1] text-lg mb-8 max-w-2xl mx-auto">
                        {common.ctaDescription || 'Contact our team today to discuss your project requirements and get a customized solution tailored to your needs.'}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-[#D3FD50] text-black font-[font2] text-sm uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300"
                        >
                            {common.contactUs || 'Contact Us'}
                        </Link>
                        <a
                            href="tel:+352661167725"
                            className="px-8 py-4 border border-white/30 text-white font-[font2] text-sm uppercase tracking-wider rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all duration-300"
                        >
                            {common.callUs || 'Call'} +352 123 456 789
                        </a>
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    )
}

export default ProjectTemplate
