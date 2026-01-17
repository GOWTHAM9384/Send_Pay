import React from 'react'
import Card from '../compoents/Card'
import card1 from '../assets/card1.svg'
import card2 from '../assets/card2.svg'
import card3 from '../assets/card3.svg'

const CardSection = () => {
  return (
    <>
      <div className=' py-10 md:py-20'>

        <div className='text-center'>
          <h3 className='text-4xl'>How it Works</h3>
          <p className='text-gray-500 text-center text-2xl mt-5 '><span className='block'>Lorem ipsum dolor sit amet, consectetur</span>
            <span className='block'>adipiscing elit. Donec porttitor.</span>
          </p>
        </div>

        <div className='mt-30 grid grid-cols-1 md:grid-cols-3'>
          <Card img={card1} content={'mt-5'}/>
          <Card img={card2} content={'mt-5'}/>
          <Card img={card3} content={'mt-5'}/>
        </div>
      </div>
    </>
  )
}

export default CardSection