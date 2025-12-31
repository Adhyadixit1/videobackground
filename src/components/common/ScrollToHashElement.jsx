import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToHashElement = () => {
    const { hash } = useLocation()

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '')
            const element = document.getElementById(id)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            } else {
                // If element is not found immediately (e.g. loading), retry after short delay
                setTimeout(() => {
                    const el = document.getElementById(id)
                    if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                }, 100)
            }
        }
    }, [hash])

    return null
}

export default ScrollToHashElement
