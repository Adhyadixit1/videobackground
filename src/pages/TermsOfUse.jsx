import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import PageHero from '../components/common/PageHero'
import FooterSection from '../components/home/FooterSection'

const TermsOfUse = () => {
    const { t } = useLanguage()

    return (
        <div className='bg-black text-white min-h-screen'>
            <PageHero
                title="Terms of"
                highlight="Use"
                description="The rules and regulations for using Luxio Media's website and services."
            />

            <section className='py-20 px-4 lg:px-12 max-w-4xl mx-auto font-[font1] leading-relaxed text-white/80 space-y-8'>
                <div>
                    <h2 className='text-2xl font-[font2] text-white mb-4 uppercase'>1. Acceptance of Terms</h2>
                    <p>
                        By accessing this website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                    </p>
                </div>

                <div>
                    <h2 className='text-2xl font-[font2] text-white mb-4 uppercase'>2. Intellectual Property</h2>
                    <p>
                        All content on this website, including text, graphics, logos, images, and software, is the property of Luxio Media or its content suppliers and is protected by international copyright laws.
                    </p>
                </div>

                <div>
                    <h2 className='text-2xl font-[font2] text-white mb-4 uppercase'>3. Use License</h2>
                    <p>
                        Permission is granted to temporarily download one copy of the materials on Luxio Media's website for personal, non-commercial transitory viewing only.
                    </p>
                </div>

                <div>
                    <h2 className='text-2xl font-[font2] text-white mb-4 uppercase'>4. Limitations</h2>
                    <p>
                        In no event shall Luxio Media or its suppliers be liable for any damages arising out of the use or inability to use the materials on Luxio Media's website.
                    </p>
                </div>

                <div>
                    <h2 className='text-2xl font-[font2] text-white mb-4 uppercase'>5. Governing Law</h2>
                    <p>
                        These terms and conditions are governed by and construed in accordance with the laws of Luxembourg, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                    </p>
                </div>

                <div>
                    <h2 className='text-2xl font-[font2] text-white mb-4 uppercase'>6. Contact</h2>
                    <p>
                        For any questions regarding these terms, please reach out to us:
                        <br /><br />
                        <strong>Luxio Media</strong><br />
                        26 Bd Royal Level 5,<br />
                        2449 Ville-Haute Luxembourg<br />
                        Email: contact@luxiomedia.lu<br />
                        Phone: +352 661 16 77 25
                    </p>
                </div>
            </section>

            <FooterSection />
        </div>
    )
}

export default TermsOfUse
