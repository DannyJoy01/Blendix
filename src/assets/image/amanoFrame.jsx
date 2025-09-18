import React from 'react'
import amanoFrame from "../image/amanoFrame.svg"
const AmanoFrame = () => {
  return (
    <div className='w-full h-full'>
      <img src={amanoFrame}
        alt="Amano Frame"
        className='w-full h-full object-cover rounded-tl-xl md:rounded-bl-xl' />
    </div>
  )
}

export default AmanoFrame;
