import React, { useEffect, useRef } from 'react'

const Video = () => {
    const videoRef = useRef(null)

    useEffect(() => {
        const videoEl = videoRef.current
        if (!videoEl) return

        const attemptPlay = () => {
            const playPromise = videoEl.play()
            if (playPromise && typeof playPromise.then === 'function') {
                playPromise.catch(() => {
                    const onFirstTouch = () => {
                        videoEl.play()
                        window.removeEventListener('touchstart', onFirstTouch)
                    }
                    window.addEventListener('touchstart', onFirstTouch, { once: true })
                })
            }
        }

        attemptPlay()
    }, [])

    return (
        <div className='h-full w-full'>
            <video
                ref={videoRef}
                className='h-full w-full object-cover'
                autoPlay
                loop
                muted
                playsInline
                preload='auto'
            >
                <source src='/IMG_1267.MP4' type='video/mp4' />
            </video>
        </div>
    )
}

export default Video