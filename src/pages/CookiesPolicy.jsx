import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useLanguage } from '../context/LanguageContext'
import PageHero from '../components/common/PageHero'
import FooterSection from '../components/home/FooterSection'

const CookiesPolicy = () => {
    const { t } = useLanguage()

    // Get cookies translation, fallback to empty object if not found
    const cookiesContent = t('solutionPages.legal.cookies', { returnObjects: true }) || {}
    const sections = cookiesContent.sections || []

    return (
        <div className='bg-black text-white min-h-screen'>
            <PageHero
                title={cookiesContent.title || 'Cookies Policy'}
                highlight={cookiesContent.highlight || ''}
                description={cookiesContent.description || 'How we use cookies.'}
                visual={
                    <div className='relative w-full h-full flex items-center justify-center'>
                        <div className='absolute inset-0 bg-gradient-to-br from-[#D3FD50]/20 via-transparent to-transparent blur-3xl' />
                        <DotLottieReact
                            src='https://lottie.host/dee509d5-3119-44e4-8c8c-b1beba2597aa/1B1sZXwtOS.lottie'
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
                        <h2 className='text-2xl font-[font2] text-white mb-4 uppercase'>Under Maintenance</h2>
                        <p>Usage policy content is being updated.</p>
                    </div>
                )}
            </section>

            <FooterSection />
        </div>
    )
}

export default CookiesPolicy
