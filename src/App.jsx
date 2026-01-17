import React from 'react'
import Navbar from './compoents/Navbar'
import Home from './pages/Home'
import Footer from './compoents/Footer'

const App = () => {
  return (
    <>
      <div className=''>
        <div className=''>
          <Navbar />
        </div>


            <Home />
          


        <div className='w-full md:w-[90%] mx-auto'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App