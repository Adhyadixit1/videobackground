import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import PageHero from '../components/common/PageHero'
import FooterSection from '../components/home/FooterSection'

const CaseStudyDetail = () => {
    const { id } = useParams()
    const { t } = useLanguage()

    // Retrieve case study data based on ID
    // We assume the ID matches the key in translations (automobile, ameublement, immobilier, loisirs)
    const data = t(`caseStudies.details.${id}`, { returnObjects: true })

    if (!data || !data.title) {
        return <div className="min-h-screen bg-black text-white flex items-center justify-center">Case Study Not Found</div>
    }

    return (
        <div className='bg-black text-white min-h-screen font-[font1]'>
            <div className="pt-32 px-4 lg:px-12 max-w-7xl mx-auto">
                <Link to="/case-studies" className="text-[#D3FD50] hover:underline mb-8 block font-[font2] uppercase tracking-wider">
                    ← {t('common.back', 'Back')}
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
                    <div>
                        <span className="inline-block px-4 py-2 rounded-full border border-[#D3FD50] text-[#D3FD50] text-sm uppercase tracking-wider mb-6">
                            {data.sector}
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-[font2] uppercase leading-none mb-8 text-white">
                            {data.title}
                        </h1>
                        <p className="text-xl text-white/70 leading-relaxed mb-8">
                            {data.summary}
                        </p>

                        <div className="flex gap-4 mb-8">
                            {data.tags && data.tags.map((tag, i) => (
                                <span key={i} className="bg-white/10 px-3 py-1 rounded text-sm text-white/60">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden min-h-[400px]">
                        <img
                            src={data.image || "/WhatsApp Image 2025-12-25 at 10.13.14 AM (1).jpeg"}
                            alt={data.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-20 border-y border-white/10 py-12">
                    <div>
                        <h3 className="text-[#D3FD50] font-[font2] text-2xl uppercase mb-4">{t('caseStudies.challenge', 'Challenge')}</h3>
                        <p className="text-white/70 leading-relaxed">
                            {data.challenge}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-[#D3FD50] font-[font2] text-2xl uppercase mb-4">{t('caseStudies.solution', 'Solution')}</h3>
                        <p className="text-white/70 leading-relaxed">
                            {data.solution}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-[#D3FD50] font-[font2] text-2xl uppercase mb-4">{t('caseStudies.results', 'Results')}</h3>
                        <ul className="space-y-4">
                            {data.results && data.results.map((result, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="text-[#D3FD50] font-[font2] text-xl">0{i + 1}</span>
                                    <span className="text-white/80">{result}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                    {data.stats && data.stats.map((stat, i) => (
                        <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center hover:border-[#D3FD50]/50 transition-colors">
                            <div className="text-4xl lg:text-5xl font-[font2] text-white mb-2">{stat.value}</div>
                            <div className="text-[#D3FD50] uppercase text-sm tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>

            </div>
            <FooterSection />
        </div>
    )
}

export default CaseStudyDetail
