import React from 'react'
import koladFrame from "../image/koladframe.svg";
const KoladFrame = () => {
  return (
    <div className='w-full h-full'>
      <img src={koladFrame}
        alt="Kolad Frame"
        className='w-full h-full object-cover rounded-tl-xl md:rounded-bl-xl'
      />
    </div>
  )
}

export default KoladFrame;
