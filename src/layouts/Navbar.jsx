import React from 'react'
import banner from '../assets/banner.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const navLinks = [
        {
            path: '/',
            name: 'مواقيت الصلاة '
        },
        {
            path: '/adhkar',
            name: 'الاذكار'
        }
    ]
    return (
        <header className='fixed top-0 h-20 w-full bg-white z-50  flex justify-center items-center backdrop-blur-lg shadow shadow-black/10 '>
            <div className='h-full w-full flex justify-between items-center  container mx-auto py-2  px-4 md:px-10 overflow-hidden '>
                {/* Logo */}
                <div className='h-full md:w-[128px] w-20  cursor-pointer flex-shrink overflow-hidden '>
                    <img src={banner} alt="logo" className='h-full w-full object-contain' />
                </div>
                {/* menu desktop */}
                <nav className='flex justify-center md:ml-0 ml-4 items-center gap-3 md:gap-10'>
                    {navLinks.map((link, index) => (
                        <NavLink key={index} to={link.path} className={({ isActive }) => `relative font-bold h-6 overflow-hidden group ${isActive ? 'text-blue-600 ' : 'text-black'}`}>
                            <span className='block group-hover:-translate-y-full transition-transform duration-500'>{link.name}</span>
                            <span className='block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-500'>{link.name}</span>
                        </NavLink>
                    ))}
                </nav>
            </div>

        </header>
    )
}

export default Navbar