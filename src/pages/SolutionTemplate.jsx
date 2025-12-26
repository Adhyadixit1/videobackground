import React from 'react'
import Navbar from '../components/Navigation/Navbar'
import FullScreenNav from '../components/Navigation/FullScreenNav'
import { Link } from 'react-router-dom'

const SolutionTemplate = ({ title, video, image, description, features }) => {
    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <FullScreenNav />
            <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
                <Link to="/solutions" className="text-[#D3FD50] hover:underline mb-8 inline-block font-[font1] uppercase tracking-wider text-sm">← Back to Solutions</Link>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Content Side */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-[font2] text-white leading-tight">
                            {title}
                        </h1>
                        <p className="text-white/60 font-[font1] text-lg leading-relaxed max-w-xl">
                            {description || `Discover our premium ${title.toLowerCase()} solutions designed to engage audiences and maximize impact.`}
                        </p>

                        {features && features.length > 0 && (
                            <div className="pt-4">
                                <h3 className="text-[#D3FD50] font-[font2] text-lg uppercase tracking-wider mb-4">Key Features</h3>
                                <ul className="space-y-3">
                                    {features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-white/70 font-[font1]">
                                            <span className="w-2 h-2 rounded-full bg-[#D3FD50] mt-2 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="pt-8">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[#D3FD50] text-black font-[font2] text-sm uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300"
                            >
                                Request a Quote
                                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Media Side - Styled like Project Gallery Cards */}
                    <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
                        <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 shadow-2xl group hover:border-[#D3FD50]/50 transition-all duration-500">
                            <div className="aspect-[9/16] relative overflow-hidden bg-zinc-900">
                                {video ? (
                                    <video
                                        src={video}
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                ) : image ? (
                                    <img
                                        src={image}
                                        alt={title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 text-white/20 p-8 text-center">
                                        <div className="w-16 h-16 rounded-full border-2 border-current flex items-center justify-center">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <p className="font-[font1] text-sm">Visual for {title}</p>
                                    </div>
                                )}

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                        </div>
                        {/* Decorative shadow/blur effect behind the card */}
                        <div className="absolute -inset-4 bg-[#D3FD50]/5 blur-3xl -z-10 rounded-full opacity-50 pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SolutionTemplate
