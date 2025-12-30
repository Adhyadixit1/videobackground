import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useLanguage } from '../context/LanguageContext'
import PageHero from '../components/common/PageHero'
import FooterSection from '../components/home/FooterSection'

const TermsOfUse = () => {
    const { t } = useLanguage()

    // Get terms translation
    const termsContent = t('solutionPages.legal.terms', { returnObjects: true }) || {}
    const sections = termsContent.sections || []

    return (
        <div className='bg-black text-white min-h-screen'>
            <PageHero
                title={termsContent.title || 'Terms of'}
                highlight={termsContent.highlight || 'Use'}
                description={termsContent.description || 'The rules and regulations for using Luxio Media\'s website and services.'}
                visual={
                    <div className='relative w-full h-full flex items-center justify-center'>
                        <div className='absolute inset-0 bg-gradient-to-br from-[#D3FD50]/20 via-transparent to-transparent blur-3xl' />
                        <DotLottieReact
                            src='https://lottie.host/9035f597-b086-4a7c-b28b-0a5360312668/bhS3OLfHHT.lottie'
                            loop
                            autoplay
                            className='w-full h-full max-w-[420px]'
                        />
                    </div>
                }
            />

            <section className='py-20 px-4 lg:px-12 max-w-4xl mx-auto font-[font1] leading-relaxed text-white/80 space-y-8'>
                {sections.length > 0 ? (
                    sections.map((section, idx) => (
                        <div key={idx}>
                            <h2 className='text-2xl font-[font2] text-white mb-4 uppercase'>{section.title}</h2>
                            <p>{section.content}</p>
                        </div>
                    ))
                ) : (
                    <div>
                        <h2 className='text-2xl font-[font2] text-white mb-4 uppercase'>Terms of Use</h2>
                        <p>Loading terms of use...</p>
                    </div>
                )}
            </section>

            <FooterSection />
        </div>
    )
}

export default TermsOfUse
