import React from 'react'
import logo from '../assets/logo.svg'
import facebook from '../assets/facebook.svg'
import github from '../assets/github.svg'
import twitter from '../assets/twitter.svg'


const Footer = () => {
  return (
    <>
      <div className='w-full mx-auto flex  items-center  flex-wrap justify-center py-30'>
        <div className='md:mx-20 p-10 '>
          <div className='flex gap-2 items-center'>
            <img src={logo} alt="" className='w-10' />
            <h1 className='blue text-2xl'>SendPay</h1>
          </div>
          <p className='w-50 text-gray-500 mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo.</p>
        </div>


        <div className='flex gap-2 md:gap=4 flex-wrap justify-center '>

          <div className='flex flex-col gap-5 p-5 items-center'>
            <h3 className='text-gray-500 underline text-2xl'>Products</h3>
            <div className='list-none flex flex-col gap-10'>
              <li>Products</li>
              <li>Products</li>
              <li>Products</li>
            </div>
          </div>

          <div className='flex flex-col gap-5 p-5 items-center '>
            <h3 className='text-gray-500 underline  text-2xl'>About</h3>
            <div className='list-none flex flex-col gap-10'>
              <li>About</li>
              <li>About</li>
              <li>About</li>
            </div>
          </div>

          <div className='flex flex-col gap-5 p-5 items-center'>
            <h3 className='text-gray-500 underline  text-2xl'>Catlog</h3>
            <div className='list-none flex flex-col gap-10'>
              <li>catlog</li>
              <li>catlog</li>
              <li>catlog</li>
            </div>
          </div>

          <div className='flex flex-col gap-5 bgb  rounded-2xl p-3 mt-5 md:mt-0 items-center w-full md:w-fit'>
            <h3 className='text-white font-bold text-2xl '>Social Contacts</h3>
            <div className=' flex flex-col gap-2 text-white'>

              <div className='flex items-center justify-between' >
                <span className='text-2xl'>Facebook</span>
                <img src={facebook} alt="" />
              </div>
              <div className='flex  items-center justify-between' >
                <span className='text-2xl'>GitHub</span>
                <img src={github} alt="" />
              </div>
              <div className='flex  items-center justify-between' >
                <span className='text-2xl'>Twitter</span>
                <img src={twitter} alt="" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer