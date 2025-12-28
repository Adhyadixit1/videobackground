import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import ServicesSection from '../components/home/ServicesSection'
import PinterestGrid from '../components/home/PinterestGrid'
import StatsSection from '../components/home/StatsSection'
import NetworkSection from '../components/home/NetworkSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import MarqueeSection from '../components/home/MarqueeSection'
import ContactCTA from '../components/home/ContactCTA'
import FooterSection from '../components/home/FooterSection'
import StationsServiceSection from '../components/home/StationsServiceSection'

import Seo from '../components/common/Seo'

const Home = ({ seo }) => {
    // Default SEO data if not provided
    const defaultSeo = {
        title: "Digital Signage Solutions Across Europe",
        description: "Luxio Media is a digital signage media agency offering premium screens across Europe. We provide maximum visibility and impact for your brand.",
        keywords: "digital signage, media agency, advertising screens, Luxio Media, screen advertising"
    };

    const finalSeo = seo || defaultSeo;

    return (
        <div className='text-white'>
            <Seo {...finalSeo} />

            {/* Hero Section with Video Background - contained within hero bounds */}
            <section className='relative h-screen w-full overflow-hidden'>
                {/* Video container - absolute within the hero section, not fixed */}
                <div className='absolute inset-0 z-0'>
                    <Video />
                </div>
                {/* Content overlay */}
                <div className='relative z-10 h-full w-full pb-5 flex flex-col justify-between'>
                    <HomeHeroText />
                    <HomeBottomText />
                </div>
            </section>

            {/* Services Section */}
            <ServicesSection />

            {/* Client Marquee */}
            <MarqueeSection />



            {/* Pinterest-style Projects Grid */}
            <PinterestGrid />

            {/* Stats Section */}
            <StatsSection />

            {/* Network */}
            <NetworkSection />

            {/* Testimonials */}
            <TestimonialsSection />

            {/* Contact CTA */}
            <ContactCTA />

            {/* Footer */}
            <FooterSection />

        </div>
    )
}

export default Home