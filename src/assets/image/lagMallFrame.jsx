import React from 'react'
import lagMallFrame from '../../assets/image/lagmal_frame.svg'
const LagMallFrame = () => {
  return (
    <div className='w-[55%] h-[260px]  md:w-[68.1%] h-[630px]'>
      <img src={lagMallFrame} alt="LagMall Frame" className=' max-w-[450px] h-auto rounded-tl-xl rounded-bl-xl'/>
    </div>
  )
}

export default LagMallFrame;