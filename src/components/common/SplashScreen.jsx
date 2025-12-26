import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const SplashScreen = ({ finishLoading }) => {
    const loadingBarRef = useRef(null)

    useGSAP(() => {
        // Initial pulse animation for the logo
        const tl = gsap.timeline()

        tl.fromTo('.logo-container',
            {
                scale: 0.8,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out"
            }
        )

        // Animate the loading bar
        gsap.fromTo(loadingBarRef.current,
            { x: '-100%' },
            { x: '0%', duration: 2, ease: 'power2.inOut' }
        )

        // Continuous breathing/pulsating effect
        gsap.to('.logo-backlight', {
            boxShadow: "0 0 150px 60px rgba(211, 253, 80, 0.4)",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        })

        // Exit animation
        const exitTimer = setTimeout(() => {
            gsap.to('.splash-screen', {
                opacity: 0,
                duration: 0.8,
                ease: "power2.inOut",
                onComplete: () => finishLoading()
            })
        }, 2200)

        return () => clearTimeout(exitTimer)
    }, [])

    return (
        <div className="splash-screen fixed inset-0 z-[100] bg-black flex items-center justify-center">
            {/* Ambient Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black z-0"></div>

            {/* Logo Container with Backlight */}
            <div className="logo-container relative z-10 p-10 rounded-full">
                {/* Backlight Glow effect */}
                <div className="logo-backlight absolute inset-0 rounded-full bg-[#D3FD50]/20 blur-3xl filter transition-all duration-1000"></div>

                {/* The Logo */}
                <img
                    src="/luxio-vector-logo.png"
                    alt="Loading..."
                    className="relative z-20 w-32 md:w-48 h-auto object-contain drop-shadow-2xl"
                />
            </div>

            {/* Loading Bar */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                    ref={loadingBarRef}
                    className="w-full h-full bg-[#D3FD50]"
                    style={{ transform: 'translateX(-100%)' }}
                ></div>
            </div>
        </div>
    )
}

export default SplashScreen

