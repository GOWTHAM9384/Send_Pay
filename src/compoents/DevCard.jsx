import React from 'react'

const DevCard = ({ img }) => {
  return (
    <>
      <div className='w-80 bg-white rounded-2xl p-5 '>

        <div>
          <p className='italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo. Nulla varius vitae.</p>
        </div>

        <div className='flex mt-5 gap-3'>
          <img src={img} alt="" className='w-15' />
          <div className='flex flex-col '>
            <span className='text-2xl'>Dev opter</span>
            <span className='text-gray-500'>Designer</span>
          </div>
        </div>

      </div>
    </>
  )
}

export default DevCard