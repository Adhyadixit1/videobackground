import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import PageHero from '../components/common/PageHero'
import FooterSection from '../components/home/FooterSection'
import { useLanguage } from '../context/LanguageContext'

const Projects = () => {
    const { t } = useLanguage()

    const projects = [{
        image1: '/luxio-vector-logo.png',
        image2: '/luxio-vector-logo.png'
    }, {
        image1: '/luxio-vector-logo.png',
        image2: '/luxio-vector-logo.png'
    }, {
        image1: '/luxio-vector-logo.png',
        image2: '/luxio-vector-logo.png'
    }]

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(function () {
        gsap.from('.hero', {
            height: '100px',
            stagger: {
                amount: 0.4
            },
            scrollTrigger: {
                trigger: '.lol',
                start: 'top 80%',
                end: 'top -50%',
                scrub: true
            }
        })
    })

    return (
        <div className='bg-black text-white min-h-screen'>
            <PageHero
                title={t('projects.heroTitle')}
                highlight={t('projects.heroTitleHighlight')}
                description={t('projects.heroDesc')}
                ctaText={t('projects.cta')}
                ctaLink="#gallery"
            />

            <div id="gallery" className='lg:p-4 p-2 lol'>
                {projects.map(function (elem, idx) {
                    return <div key={idx} className='hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
                        <ProjectCard image1={elem.image1} image2={elem.image2} />
                    </div>
                })}
            </div>

            <FooterSection />
        </div>
    )
}

export default Projects