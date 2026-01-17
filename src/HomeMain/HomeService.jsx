import React from 'react'
import Card from '../compoents/Card'
import service1 from '../assets/service1.svg'
import service2 from '../assets/service2.svg'
import service3 from '../assets/service3.svg'
import service4 from '../assets/service4.svg'

const HomeService = () => {
  return (
    <>
      <div className='py-10 md:py-20'>
        <div className='text-center'>
          <h2 className='text-4xl font-semibold'>We are giving Services</h2>
          <p className='text-gray-500 my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 place-items-center mt-10 gap-5'>
          <Card property={'flex gap-2'} img={service1 } varient={'text-start varient={"w-full md:w-[100]"}'}/>
          <Card property={'flex gap-2'} img={service2 } varient={'text-start varient={"w-full md:w-[100]"}'}/>
          <Card property={'flex gap-2'} img={service3 } varient={'text-start varient={"w-full md:w-[100]"}'}/>
          <Card property={'flex gap-2'} img={service4 } varient={'text-start varient={"w-full md:w-[100]"}'}/>

        </div>
      </div>
    </>
  )
}

export default HomeService