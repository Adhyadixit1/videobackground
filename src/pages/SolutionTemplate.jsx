import React from 'react'
import Navbar from '../components/Navigation/Navbar'
import FullScreenNav from '../components/Navigation/FullScreenNav'
import FooterSection from '../components/home/FooterSection'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const SolutionTemplate = ({
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
        relatedSolutions = []
    } = solution

    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <FullScreenNav />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
                <Link to="/solutions" className="text-[#D3FD50] hover:underline mb-8 inline-block font-[font1] uppercase tracking-wider text-sm">
                    {common.backToSolutions || '← Back to Solutions'}
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Content Side */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-[font2] text-white leading-tight">
                            {title}
                        </h1>
                        <p className="text-white/60 font-[font1] text-lg leading-relaxed max-w-xl">
                            {description}
                        </p>

                        {features && features.length > 0 && (
                            <div className="pt-4">
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
                        )}

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
                            <Link
                                to="/case-studies"
                                className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-[font2] text-sm uppercase tracking-wider rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all duration-300"
                            >
                                {common.viewCaseStudies || 'View Case Studies'}
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

            {/* Technical Specifications */}
            {specs && specs.length > 0 && (
                <section className="py-20 px-4 bg-gradient-to-b from-zinc-950 to-black">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4 block">
                                    {common.campaign || 'Campaign'}
                                </span>
                                <h2 className="font-[font2] text-white text-3xl lg:text-5xl uppercase mb-6">
                                    {common.specifications || 'Specifications'}
                                </h2>
                                <p className="text-white/60 font-[font1] text-lg leading-relaxed mb-8">
                                    {common.specsDescription || 'Everything you need to know about running campaigns on this format.'}
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {specs.map((spec, idx) => (
                                    <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-white/5">
                                        <div className="text-[#D3FD50] font-[font2] text-2xl mb-1">{spec.value}</div>
                                        <div className="text-white/60 font-[font1] text-sm">{spec.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
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
                            href="tel:+352123456789"
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

export default SolutionTemplate
