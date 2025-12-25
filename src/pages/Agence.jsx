import { useRef, useMemo } from 'react'
import { useLanguage } from '../context/LanguageContext'
import PageHero from '../components/common/PageHero'
import FooterSection from '../components/home/FooterSection'

import Carl from "../assets/teamMembers/Carl.jpg";
import Olivier from "../assets/teamMembers/Olivier.jpg";
import Lawrence from "../assets/teamMembers/Lawrence.jpg";
import HugoJoseph from "../assets/teamMembers/HugoJoseph.jpg";
import ChantalG from "../assets/teamMembers/ChantalG.jpg";
import MyleneS from "../assets/teamMembers/MyleneS.jpg";
import SophieA from "../assets/teamMembers/SophieA.jpg";
import Claire from "../assets/teamMembers/Claire.jpg";
import Michele from "../assets/teamMembers/Michele.jpg";
import MEL from "../assets/teamMembers/MEL.jpg";
import CAMILLE from "../assets/teamMembers/CAMILLE.jpg";
import MAXIME from "../assets/teamMembers/MAXIME.jpg";
import MEGGIE from "../assets/teamMembers/MEGGIE.jpg";
import Joel from "../assets/teamMembers/joel.jpg";

const Agence = () => {
    const { t } = useLanguage()

    const imageArray = useMemo(() => [
        Carl, Olivier, Lawrence, HugoJoseph, ChantalG, MyleneS, SophieA,
        Claire, Michele, MEL, CAMILLE, MAXIME, MEGGIE, Joel,
    ], []);

    return (
        <div className='bg-black text-white min-h-screen'>
            <PageHero
                title={t('agency.heroTitle')}
                highlight={t('agency.heroTitleHighlight')}
                description={t('agency.heroDesc')}
                ctaText={t('agency.cta')}
                ctaLink="#team"
                visual={
                    <div className='relative w-full h-full min-h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border border-white/10 group'>
                        <img
                            src={Carl}
                            alt="Seven7y Two Team"
                            className='w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />
                        <div className='absolute bottom-8 left-8'>
                            <p className='font-[font1] text-[#D3FD50] text-sm tracking-[0.3em] uppercase'>
                                {t('agency.heroTitleHighlight')}
                            </p>
                        </div>
                    </div>
                }
            />

            <div id='team' className="min-h-screen py-20 bg-zinc-950">
                <div className="container mx-auto px-4 lg:px-12">
                    <div className='text-center mb-16 lg:mb-24'>
                        <span className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4 block'>
                            Team
                        </span>
                        <h2 className="text-4xl lg:text-6xl text-white font-[font2] uppercase">
                            Meet the Team
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {imageArray.map((member, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[3/4]">
                                <img
                                    src={member}
                                    alt={`Team member ${index + 1}`}
                                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <FooterSection />
        </div>
    )
}

export default Agence