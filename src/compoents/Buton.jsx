import React from 'react'

const Buton = ({text,varient,diabled=false}) => {
  return (
    <div>
      <button className={`${varient} ${diabled}`} >{text}</button>
    </div>
  )
}

export default Buton