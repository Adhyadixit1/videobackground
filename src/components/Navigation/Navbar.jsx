import { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavbarColorContext, NavbarContext } from '../../context/NavContext'

const Navbar = () => {

    const navGreenRef = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)
    const [navColor, setNavColor] = useContext(NavbarColorContext)
    const navigate = useNavigate()

    return (
        <div className='z-4 flex fixed top-0 w-full items-start justify-between'>
            <>
                <img
                    src='/luxio-vector-logo.png'
                    alt='Luxio Media'
                    className='hidden lg:block cursor-pointer lg:w-82 h-auto'
                    style={{ marginTop: '-98px', marginLeft: '20px' }}
                    onClick={() => navigate('/')}
                />
                <img
                    src='/luxio-vector-logo.png'
                    alt='Luxio Media'
                    className='block lg:hidden cursor-pointer w-32 h-auto'
                    style={{ marginTop: '-30px', marginLeft: '16px' }}
                    onClick={() => navigate('/')}
                />
            </>

            <div onClick={() => {
                setNavOpen(true)
            }} onMouseEnter={() => {
                navGreenRef.current.style.height = '100%'
            }}
                onMouseLeave={() => {
                    navGreenRef.current.style.height = '0%'
                }}
                className='lg:h-16 h-10 bg-black relative lg:w-[16vw] w-48'>
                <div ref={navGreenRef} className='bg-[#D3FD50] transition-all absolute top-0 h-0 w-full'></div>
                <div className='relative h-full lg:px-12 px-8 flex flex-col justify-center items-end lg:gap-1.5 gap-0.5'>
                    <div className="lg:w-18 w-12 h-0.5 bg-white"></div>
                    <div className="lg:w-10 w-6 h-0.5 bg-white"></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar