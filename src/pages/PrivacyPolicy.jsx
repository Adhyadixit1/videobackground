import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import PageHero from '../components/common/PageHero'
import FooterSection from '../components/home/FooterSection'

const PrivacyPolicy = () => {
    const { t } = useLanguage()

    return (
        <div className='bg-black text-white min-h-screen'>
            <PageHero
                title="Privacy"
                highlight="Policy"
                description="How we handle and protect your data."
            />

            <section className='py-20 px-4 lg:px-12 max-w-4xl mx-auto font-[font1] leading-relaxed text-white/80 space-y-8'>
                <div>
                    <h2 className='text-2xl font-[font2] text-white mb-4 uppercase'>1. Introduction</h2>
                    <p>
                        At Luxio Media, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.
                    </p>
                </div>

                <div>
                    <h2 className='text-2xl font-[font2] text-white mb-4 uppercase'>2. Information We Collect</h2>
                    <p>
                        We may collect personal information such as your name, email address, phone number, and company details when you contact us through our website. We also collect anonymous usage data through cookies to improve our services.
                    </p>
                </div>

                <div>
                    <h2 className='text-2xl font-[font2] text-white mb-4 uppercase'>3. Use of Information</h2>
                    <p>
                        Your information is used to:
                        <ul className='list-disc pl-6 mt-2 space-y-2'>
                            <li>Provide and improve our digital signage services.</li>
                            <li>Respond to your inquiries and support requests.</li>
                            <li>Send updates and promotional materials (only with your consent).</li>
                            <li>Analyze website traffic to optimize user experience.</li>
                        </ul>
                    </p>
                </div>

                <div>
                    <h2 className='text-2xl font-[font2] text-white mb-4 uppercase'>4. Data Protection</h2>
                    <p>
                        We implement strict security measures to protect your data from unauthorized access, alteration, or disclosure. Your information is stored on secure servers.
                    </p>
                </div>

                <div>
                    <h2 className='text-2xl font-[font2] text-white mb-4 uppercase'>5. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy
