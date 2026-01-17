import React from 'react'
import Hero from './Hero'
import CardSection from './CardSection'
import Balance from './Balance'
import HomeService from './HomeService'
import HomeAbout from './HomeAbout'

const HomeDeatil = () => {
  return (
    <>

      <div className=' md:mx-30 '>
        <Hero />
        <CardSection />
        <Balance />
        <HomeService />
      </div>

      <div className=''>
        <HomeAbout />
      </div>

    </>
  )
}

export default HomeDeatil