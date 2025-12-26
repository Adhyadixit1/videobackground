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
                poster='https://dummyimage.com/1920x1080/000/fff'
            >
                <source media='(max-width: 768px)' src='https://video.gumlet.io/694cef8ab122cbf176482b8c/694e6f33e086c47a824231e3/download.mp4' type='video/mp4' />
                <source src='https://video.gumlet.io/694cef8ab122cbf176482b8c/694e6f18b122cbf1765c30d8/download.mp4' type='video/mp4' />
            </video>
        </div>
    )
}

export default Video