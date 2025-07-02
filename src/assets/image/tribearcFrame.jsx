import React from 'react'
import tribearcFrame from '../../assets/image/tribearc_frame.svg'
const TribearcFrame = () => {
  return (
    <div className='w-[50%] border h-[420px]  md:w-[70%] md:h-[700px]' >
      <img src={tribearcFrame} alt="Tribe Arc Frame" className='w-[600px] max-w-[450px] h-auto rounded-tl-xl rounded-bl-xl md:mw-[600px] '/>
    </div>
  )
}

export default TribearcFrame;
