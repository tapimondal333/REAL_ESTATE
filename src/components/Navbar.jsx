import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [showmobilemenu, setShowmobilemenu] = useState(false)

    useEffect(() => {
        if (showmobilemenu) {
            document.body.style.overflow = 'hidden'
        }
        else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        };
    }, [showmobilemenu])

    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
                <img src={assets.logo}></img>
                <ul className='hidden md:flex gap-7 text-white'>
                    <a href='#header' className='cursor-pointer hover:text-gray-400'>Home</a>
                    <a href='#About' className='cursor-pointer hover:text-gray-400'>About</a>
                    <a href='#Projects' className='cursor-pointer hover:text-gray-400'>Projects</a>
                    <a href='#Testimonials' className='cursor-pointer hover:text-gray-400'>Testimonials</a>
                </ul>
                <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>
                <img src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' onClick={() => { setShowmobilemenu(true) }} alt="" />

            </div>
            {/* -------mobile_menu --------*/}

            <div className={`md:hidden ${showmobilemenu ? 'fixed w-full' : 'hidden'}  top-0 bottom-0 right-0 overflow-hidden bg-white`}>
                <div className='p-6 flex justify-end cursor-pointer'>
                    <img src={assets.cross_icon} onClick={() => { setShowmobilemenu(false) }} className='w-6' alt="" />
                </div>
                <ul className='  flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium transition-all'>
                    <a href='#header' className='px-4 py-2 rounded-full inline-block' onClick={() => { setShowmobilemenu(false) }}>Home</a>
                    <a href='#About' className='px-4 py-2 rounded-full inline-block' onClick={() => { setShowmobilemenu(false) }}>About</a>
                    <a href='#Projects' className='px-4 py-2 rounded-full inline-block' onClick={() => { setShowmobilemenu(false) }}>Projects</a>
                    <a href='#Testimonials' className='px-4 py-2 rounded-full inline-block' onClick={() => { setShowmobilemenu(false) }}>Testimonials</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar