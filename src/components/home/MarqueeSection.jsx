import React from 'react'

const companies = [
    { name: 'Esso', logo: 'https://fillupmedia.fr/wp-content/uploads/2023/01/esso.png' },
    { name: 'Intermarché', logo: 'https://fillupmedia.fr/wp-content/uploads/2022/12/intermarche.png' },
    { name: 'Carrefour', logo: 'https://fillupmedia.fr/wp-content/uploads/2022/12/carrefour.png' },
    { name: 'Total', logo: 'https://fillupmedia.fr/wp-content/uploads/2022/12/total.png' },
    { name: 'Leclerc', logo: 'https://fillupmedia.fr/wp-content/uploads/2022/12/leclerc.png' },
    { name: 'Magasins U', logo: 'https://fillupmedia.fr/wp-content/uploads/2023/01/magasins-u.png' }
]

const MarqueeSection = () => {
    return (
        <section className='bg-black relative z-10 py-8 lg:py-12 overflow-hidden border-y border-white/10'>
            {/* Main marquee container */}
            <div className='overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur max-w-7xl mx-auto'>
                <div className='flex items-center gap-8 sm:gap-10 min-w-max animate-marquee'>
                    {/* Duplicate companies array twice for seamless loop */}
                    {[...companies, ...companies].map((company, index) => (
                        <div
                            key={index}
                            className='flex items-center justify-center py-4 sm:py-6 px-3 sm:px-4 opacity-80 hover:opacity-100 transition-opacity duration-300'
                        >
                            <img
                                alt={company.name}
                                className='h-6 sm:h-8 w-auto object-contain'
                                src={company.logo}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Edge fade overlays */}
            <div className='absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none'></div>
            <div className='absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none'></div>
        </section>
    )
}

export default MarqueeSection
