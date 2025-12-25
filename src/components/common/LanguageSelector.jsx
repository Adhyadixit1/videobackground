import React, { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const LanguageSelector = () => {
    const { language, setLanguage } = useLanguage()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    const languages = [
        { code: 'fr', label: 'Français', flag: '🇫🇷' },
        { code: 'en', label: 'English', flag: '🇬🇧' },
        { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
    ]

    useGSAP(() => {
        if (isOpen) {
            gsap.fromTo(dropdownRef.current,
                { opacity: 0, y: -20, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'power2.out' }
            )
        }
    }, [isOpen])

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !event.target.closest('.lang-trigger')) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const activeLang = languages.find(l => l.code === language)

    return (
        <div className="relative z-50">
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lang-trigger flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:border-[#D3FD50]/50 transition-colors duration-300"
            >
                <span className="text-lg">{activeLang?.flag}</span>
                <span className="text-white font-[font1] uppercase text-xs tracking-wider hidden md:block">
                    {language}
                </span>
                <svg
                    className={`w-3 h-3 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown Popup */}
            {isOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute right-0 top-full mt-4 w-48 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                >
                    <div className="py-2">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code)
                                    setIsOpen(false)
                                }}
                                className={`w-full px-6 py-3 flex items-center gap-4 hover:bg-white/5 transition-colors duration-200 group ${language === lang.code ? 'bg-white/5' : ''}`}
                            >
                                <span className="text-xl">{lang.flag}</span>
                                <div className="text-left">
                                    <span className={`block text-sm font-[font1] font-medium ${language === lang.code ? 'text-[#D3FD50]' : 'text-white'}`}>
                                        {lang.label}
                                    </span>
                                </div>
                                {language === lang.code && (
                                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#D3FD50]" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default LanguageSelector
