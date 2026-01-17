import React from 'react'
import Buton from '../compoents/Buton'
import banner from '../assets/banner.svg'

const Hero = () => {
  return (
    <div className='px-5 md:py-40 grid grid-cols-1 md:grid-cols-2  md:place-items-stretch  place-items-center py-20'>

      <div className='flex flex-col gap-10  my-15  '>
        <h1 className='text-4xl flex flex-col gap-2 md:text-5xl text-center md:text-left'><span className='block '>Sending Money is</span>
          <span className='block'>Easier than before</span></h1>

        <p className='md:w-100 px-10 md:px-0 md:text-2xl text-gray-500 text-center md:text-left '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed consectetur libero. Curabitur.</p>

        <div className='flex gap-6 justify-center md:justify-start'>
          <Buton text="Register" varient="p-2 bgb text-white px-5 border border-[#353434] font-bold" />
          <Buton text="learn more" varient="p-2 border px-5" />
        </div>
      </div>  

      <div className='h-fit'>
        <img src={banner} alt="" className=' h-full justify-self-end w-100' />
      </div>  
    </div>
  )
}

export default Hero