import React from 'react'

const Card = ({ img ,varient,property,content}) => {
  return (
    <div className={`w-[100] p-5 ${property} text-center`}>
      <img src={img} alt="" className='mx-auto' />
      <div className={`${content} flex flex-col justify-center`}>
        <h3 className={`text-2xl font-bold text-center ${varient}`}>In-app transer</h3>
        <p className={` text-center  ${varient}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p</p>
      </div>
    </div>
  )
}

export default Card