"use client";

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
const Navbar = ({isDarkMode, setIsDarkMode}) => {


  const [isScroll, setIsScroll] = useState(false)
  const sidemenuRef = useRef();

  const openMenu = () =>{
    sidemenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () =>{
    sidemenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      if (scrollY > 50){
          setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    })
  }, [])

  return (
    <>

    <div className='fixed top-0 right-0 w-11/12  -z-40 translate-y-[-80%] dark:hidden'>
      <Image src={assets.header_bg_color} alt='' className='w-full' />
    </div>
    <nav className={`w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? 
    " bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-black dark:shadow-white/20 " : ""} `}>
        <a href="#top">
        <Image src={assets.sai} alt="" className=' rounded-full w-32 cursor-pointer mr-14 mb-4'/>
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
         ${isScroll ? "": "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
            <li><a className='font-Ovo cursor-pointer' href="#top">Home</a></li>
            <li><a className='font-Ovo'  href="#about">About me</a></li>
            <li><a className='font-Ovo' href="#services">Services</a></li>
            <li><a className='font-Ovo' href="#work">My work</a></li>
            <li><a className='font-Ovo' href="#contact">Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>

          <button onClick = {() => setIsDarkMode(prev => !prev)}  >
            <Image src={isDarkMode ? assets.sun_icon: assets.moon_icon} alt="" className='w-6'/>
          </button>

          <a href="#contact" className= 'hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 cursor-pointer  font-serif'>
            Contact 
            <Image src={assets.arrow_icon} alt="" className='w-3'/></a>

            <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className='w-6'/>
          </button>

        </div>

        {/* {mobile-menu} */}


        <ul ref={sidemenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0
        bottom-o w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>

          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'/>
          </div>
            <li><a className='font-Ovo'onClick={closeMenu}href="#top">Home</a></li>
            <li><a className='font-Ovo'onClick={closeMenu} href="#about">About me</a></li>
            <li><a className='font-Ovo'onClick={closeMenu} href="#services">Services</a></li>
            <li><a className='font-Ovo'onClick={closeMenu} href="#work">My work</a></li>
            <li><a className='font-Ovo'onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
    </nav>
    </>
    
  )
}

export default Navbar
