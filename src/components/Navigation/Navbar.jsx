import { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavbarColorContext, NavbarContext } from '../../context/NavContext'
import LanguageSelector from '../common/LanguageSelector'

const Navbar = () => {

    const navGreenRef = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)
    const [navColor, setNavColor] = useContext(NavbarColorContext)
    const navigate = useNavigate()

    if (navOpen) return null

    return (
        <div className='z-[100] flex absolute top-0 w-full items-start justify-between'>
            <>
                <img
                    src='/luxio-vector-logo.png'
                    alt='Luxio Media'
                    className='hidden lg:block cursor-pointer lg:w-82 h-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]'
                    style={{ marginTop: '-98px', marginLeft: '20px' }}
                    onClick={() => navigate('/')}
                />
                <img
                    src='/luxio-vector-logo.png'
                    alt='Luxio Media'
                    className='block lg:hidden cursor-pointer w-32 h-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'
                    style={{ marginTop: '-26px', marginLeft: '16px' }}
                    onClick={() => navigate('/')}
                />
            </>

            <div className='flex items-center gap-6 absolute right-0 top-0 lg:relative'>
                <div className="mt-4 lg:mt-0 mr-4 lg:mr-0">
                    <LanguageSelector />
                </div>

                <div onClick={() => {
                    setNavOpen(true)
                }} onMouseEnter={() => {
                    navGreenRef.current.style.height = '100%'
                }}
                    onMouseLeave={() => {
                        navGreenRef.current.style.height = '0%'
                    }}
                    className='lg:h-16 h-10 bg-black relative lg:w-[16vw] w-24 cursor-pointer group overflow-hidden'>
                    <div ref={navGreenRef} className='bg-[#D3FD50] transition-all duration-300 absolute top-0 h-0 w-full ease-out'></div>
                    <div className='relative h-full lg:px-12 px-6 flex flex-col justify-center items-end lg:gap-1.5 gap-1 group-hover:gap-2 transition-all duration-300'>
                        <div className="lg:w-12 w-8 h-0.5 bg-white group-hover:bg-black transition-colors duration-300"></div>
                        <div className="lg:w-8 w-5 h-0.5 bg-white group-hover:bg-black transition-colors duration-300"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar