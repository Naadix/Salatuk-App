import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
const Layout = () => {
    return (
        <div className='bg-[#e7f0f9] min-h-screen flex flex-col overflow-x-hidden '>
                <Navbar />
            <div className='container flex-1 mx-auto px-4 md:px-10'>
                <main>
                    <Outlet />
                </main>
            </div>
                <Footer />
        </div>
    )
}

export default Layout