import React, { useState } from 'react'
import logo from "../assets/logo.svg"
import Buton from './Buton'
import navimage from '../assets/nav.png'

const Navbar = () => {

  const [isTrue, setisTrue] = useState(false)
  return (
    <>
      <div className='w-full shadow-2xl fixed top-0 bg-white'>
        <nav className='p-5 flex justify-between items-center md:mx-30  '>
          <div className='flex gap-2 items-center'>
            <img src={logo} alt="" className='w-10 ' />
            <h1 className='blue text-2xl '>SendPay</h1>
          </div>
    
          <div className='list-none font-bold md:flex gap-5 hidden'>
            <li>send money</li>
            <li>receive money</li>
            <li>language</li>
          </div>

          <div className=' md:hidden gap-5 hover:cursor-pointer ' onClick={() => setisTrue(!isTrue)}>
            <img src={navimage} alt="" className='w-10' />
          </div>

          <div className='md:flex gap-4 items-center hidden'>
            <span>How it works</span>
            <div className='flex gap-2'>
              <Buton text="Sign in" varient="p-2 border px-3 cursor-pointer" />
              <Buton text="Register" varient="p-2 bgb text-white px-3 font-bold cursor-pointer boder border-blue" />
            </div>
          </div>
        </nav>

        {isTrue && (
          <div className='flex flex-col list-none gap-2 text-center py-10  w-full  md:hidden bg-black/80 text-white  '>
            <li className='font-bold p-2 cursor-pointer hover:underline'>send money</li>
            <li className='font-bold p-2 cursor-pointer hover:underline'>receive money</li>
            <li className='font-bold p-2 cursor-pointer hover:underline'>language</li>
            <li className='font-bold p-2 cursor-pointer hover:underline'>How its works</li>
            <div className='flex justify-center gap-4'>
              <Buton text="Sign in" varient="cursor-pointer p-2 border px-3" />
              <Buton text="Register" varient="cursor-pointer p-2 bgb text-white px-3 font-bold" />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar