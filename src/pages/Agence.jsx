import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

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

    gsap.registerPlugin(ScrollTrigger)

    const imageDivRef = useRef(null)
    const imageRef = useRef(null)

    const imageArray = [
        Carl,
        Olivier,
        Lawrence,
        HugoJoseph,
        ChantalG,
        MyleneS,
        SophieA,
        Claire,
        Michele,
        MEL,
        CAMILLE,
        MAXIME,
        MEGGIE,
        Joel,
    ];

    useGSAP(function () {

        gsap.to(imageDivRef.current, {
            scrollTrigger: {
                trigger: imageDivRef.current,
                // markers: true,
                start: 'top 28%',
                end: 'top -70%',
                pin: true,
                pinSpacing: true,
                pinReparent: true,
                pinType: 'transform',
                scrub: 1, // smooth scrubbing with 1s easing
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate: (elem) => {
                    let imageIndex;
                    if (elem.progress < 1) {
                        imageIndex = Math.floor(elem.progress * imageArray.length)
                    } else {
                        imageIndex = imageArray.length - 1
                    }
                    imageRef.current.src = imageArray[imageIndex]
                }
            }
        })
    })

    return (
        <div className='parent'>
            <div id='page1' className='py-1 '>
                <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-96 -top-80 lg:left-[30vw] left-[30vw]'>
                    <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
                </div>
                <div className='relative font-[font2]'>
                    <div className='lg:mt-[55vh] mt-[30vh]'>
                        <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>SEVEN7Y <br />
                            TWO</h1>
                    </div>
                    <div className='lg:pl-[40%] lg:mt-20 mt-4 p-3'>
                        <p className='lg:text-6xl text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
                    </div>
                </div>
            </div>
            <div id='page2' className=" h-screen">

            </div>
        </div>
    )
}

export default Agence