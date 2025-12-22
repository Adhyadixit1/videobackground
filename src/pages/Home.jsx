import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import ServicesSection from '../components/home/ServicesSection'
import PinterestGrid from '../components/home/PinterestGrid'
import StatsSection from '../components/home/StatsSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import MarqueeSection from '../components/home/MarqueeSection'
import ContactCTA from '../components/home/ContactCTA'
import FooterSection from '../components/home/FooterSection'

const Home = () => {
    return (
        <div className='text-white'>
            {/* Hero Section with Video Background */}
            <div className='h-screen w-screen fixed'>
                <Video />
            </div>
            <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
                <HomeHeroText />
                <HomeBottomText />
            </div>

            {/* Services Section */}
            <ServicesSection />

            {/* Client Marquee */}
            <MarqueeSection />

            {/* Pinterest-style Projects Grid */}
            <PinterestGrid />

            {/* Stats Section */}
            <StatsSection />

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