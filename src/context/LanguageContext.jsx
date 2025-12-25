import React, { createContext, useState, useContext, useEffect } from 'react'
import { translations } from '../locales/translations'

const LanguageContext = createContext()

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }) => {
    // Default to French if no preference is saved
    const [language, setLanguage] = useState(() => {
        const savedLang = localStorage.getItem('language')
        return savedLang || 'fr'
    })

    useEffect(() => {
        localStorage.setItem('language', language)
        // Update document language attribute for accessibility/SEO
        document.documentElement.lang = language
    }, [language])

    // Helper function to get nested translation keys
    // Usage: t('nav.solutions')
    const t = (path) => {
        const keys = path.split('.')
        let current = translations[language]

        for (const key of keys) {
            if (current[key] === undefined) {
                console.warn(`Translation missing for key: ${path} in language: ${language}`)
                return path // Fallback to showing the key itself
            }
            current = current[key]
        }

        return current
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}
