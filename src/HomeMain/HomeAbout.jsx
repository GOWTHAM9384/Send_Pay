import React from 'react'
import Buton from '../compoents/Buton'
import DevCard from '../compoents/DevCard'
import dev1 from '../assets/dev1.svg'
import dev2 from '../assets/dev2.svg'
import dev3 from '../assets/dev3.png'
import arrow from '../assets/arrow.svg'

const HomeAbout = () => {
  return (
    <>
      <div className='bgb '>

        <div className='md:mx-10  items-center gap-10 md:p-10 flex flex-wrap justify-center p-5'>
          <div className='p-10 text-white w-50'>
            <p className=' italic leading-10  text-2xl'>People
              Are
              Saying
              About Us</p>
            <div className='flex gap-2 items-center mt-3 w-fit'>
              <Buton text={"See all"} varient={"text-white underline font-bold text-2xl hover:text-green-500 w-full"} />
              <img src={arrow} alt="" />
            </div>
          </div>

          <div className='flex gap-10 flex-wrap justify-center'>
            <DevCard img={dev1} varient={"w-fit md:w-80"}/>
            <DevCard img={dev2} varient={"w-fit md:w-80"}/>
            <DevCard img={dev3} varient={"w-fit md:w-80"}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeAbout