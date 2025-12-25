import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {
    const currentPath = useLocation().pathname
    const stairParentRef = useRef(null)
    const pageRef = useRef(null)
    const stairsRef = useRef([])

    // Set initial state immediately to prevent flash
    useLayoutEffect(() => {
        if (stairParentRef.current) {
            stairParentRef.current.style.display = 'block'
        }
        stairsRef.current.forEach(stair => {
            if (stair) {
                gsap.set(stair, { scaleY: 0, transformOrigin: 'top' })
            }
        })
    }, [])

    useGSAP(() => {
        // Kill any existing animations for smooth transitions
        gsap.killTweensOf(stairsRef.current)
        gsap.killTweensOf(pageRef.current)

        const tl = gsap.timeline({
            defaults: {
                ease: 'power2.inOut',
                force3D: true, // Force GPU acceleration
            }
        })

        // Show parent container
        tl.set(stairParentRef.current, { display: 'block' })

        // Animate stairs in using scaleY (GPU-accelerated) instead of height
        tl.to(stairsRef.current, {
            scaleY: 1,
            duration: 0.4,
            stagger: {
                amount: 0.15,
                from: 'end'
            }
        })

        // Animate stairs out using translateY (GPU-accelerated)
        tl.to(stairsRef.current, {
            yPercent: 100,
            duration: 0.35,
            stagger: {
                amount: 0.15,
                from: 'end'
            }
        })

        // Hide parent and reset stairs
        tl.set(stairParentRef.current, { display: 'none' })
        tl.set(stairsRef.current, { yPercent: 0, scaleY: 0 })

        // Fade in page content (no scale - much more performant)
        gsap.fromTo(pageRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.4,
                delay: 0.6,
                ease: 'power2.out',
                force3D: true
            }
        )

        return () => {
            tl.kill()
        }
    }, [currentPath])

    return (
        <div>
            <div
                ref={stairParentRef}
                className='h-screen w-full fixed z-20 top-0 pointer-events-none'
                style={{ willChange: 'contents' }}
            >
                <div className='h-full w-full flex'>
                    {[0, 1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            ref={(el) => (stairsRef.current[i] = el)}
                            className='h-full w-1/5 bg-black'
                            style={{
                                willChange: 'transform',
                                transformOrigin: 'top',
                                transform: 'scaleY(0)'
                            }}
                        />
                    ))}
                </div>
            </div>
            <div ref={pageRef} style={{ willChange: 'opacity' }}>
                {props.children}
            </div>
        </div>
    )
}

export default Stairs