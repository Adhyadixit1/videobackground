import React from 'react'

const testimonials = [
    {
        quote: "Luxio Media helped us multiply our visibility with their target audience. A responsive and professional team.",
        author: "Jean Dupont",
        role: "Marketing Director, Enterprise ABC",
        initial: "J",
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
    },
    {
        quote: "The quality of the screens and support in creating our content made all the difference for our campaign.",
        author: "Marie Lambert",
        role: "Communications Manager, City Hall",
        initial: "M",
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80'
    },
    {
        quote: "A trusted partner for our digital communication. Results are consistent with excellent ROI.",
        author: "Pierre Bernard",
        role: "CEO, Innovation Startup",
        initial: "P",
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80'
    }
]

const TestimonialsSection = () => {
    return (
        <section className='min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950 
                          relative z-10 overflow-hidden py-20 lg:py-32'>
            {/* Subtle background pattern */}
            <div className='absolute inset-0 opacity-[0.03]'
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}>
            </div>

            {/* Decorative elements */}
            <div className='absolute top-20 right-20 text-[20vw] font-[font2] text-white/[0.02] leading-none pointer-events-none'>
                "
            </div>
            <div className='absolute bottom-20 left-10 w-32 h-32 border border-[#D3FD50]/20 rounded-full'></div>
            <div className='absolute top-40 left-1/4 w-2 h-2 bg-[#D3FD50] rounded-full'></div>
            <div className='absolute bottom-60 right-1/3 w-3 h-3 bg-white/20 rounded-full'></div>

            <div className='relative z-10 px-6 lg:px-20'>
                {/* Section header */}
                <div className='mb-16 lg:mb-24'>
                    <p className='text-[#D3FD50] font-[font1] text-sm tracking-[0.3em] uppercase mb-4'>Testimonials</p>
                    <h2 className='font-[font2] text-white text-[10vw] lg:text-[5vw] leading-none uppercase'>
                        Client
                    </h2>
                    <h2 className='font-[font2] text-white/30 text-[10vw] lg:text-[5vw] leading-none uppercase'>
                        Stories
                    </h2>
                </div>

                {/* Testimonials grid */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8'>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className='group relative'
                        >
                            <div className='relative p-8 lg:p-10 rounded-3xl overflow-hidden
                                           hover:border-[#D3FD50]/30
                                           transition-all duration-500 h-full'>

                                {/* Subtle background image */}
                                <div className='absolute inset-0'>
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        className='w-full h-full object-cover opacity-10 
                                                  group-hover:opacity-15 blur-sm
                                                  transition-all duration-700'
                                    />
                                </div>

                                {/* Overlay */}
                                <div className='absolute inset-0 bg-gradient-to-br from-black/90 via-zinc-900/95 to-black/90'></div>

                                {/* Border */}
                                <div className='absolute inset-0 rounded-3xl border border-white/10 
                                               group-hover:border-[#D3FD50]/30 transition-all duration-500'></div>

                                {/* Quote mark */}
                                <div className='relative z-10 text-[#D3FD50] text-6xl font-[font2] leading-none mb-6 
                                               opacity-30 group-hover:opacity-100 transition-opacity duration-300'>
                                    "
                                </div>

                                {/* Quote text */}
                                <p className='relative z-10 font-[font1] text-white/80 text-base lg:text-lg leading-relaxed mb-8'>
                                    {testimonial.quote}
                                </p>

                                {/* Author info */}
                                <div className='relative z-10 flex items-center gap-4'>
                                    {/* Avatar */}
                                    <div className='w-12 h-12 rounded-full overflow-hidden border-2 border-[#D3FD50]/50'>
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.author}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>

                                    <div>
                                        <p className='font-[font2] text-white text-base'>
                                            {testimonial.author}
                                        </p>
                                        <p className='font-[font1] text-white/50 text-sm'>
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Decorative corner */}
                                <div className='absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-3xl'>
                                    <div className='absolute -top-10 -right-10 w-20 h-20 bg-[#D3FD50]/10 
                                                   rounded-full opacity-0 group-hover:opacity-100 
                                                   transition-opacity duration-500'></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection
