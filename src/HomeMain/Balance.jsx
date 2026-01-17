import React from 'react'
import Buton from '../compoents/Buton'
import balance from "../assets/balance.svg"
// import circle from "../assets/circle.png"

const Balance = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 py-5 md:py-30 place-items-center md:place-items-stretch p-5' >

      <div className=''>
        <img src={balance} alt="" />
      </div>

      <div className='py-25 flex flex-col gap-6'>
        <h2 className='text-3xl'><span className='block'>Real-time Currency</span> <span className='block'>balance check</span></h2>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed.</p>
        <div>
          <Buton text={"Read more"}  varient={"blue font-bold border p-1 cursor-pointer border-[blue]"}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Balance