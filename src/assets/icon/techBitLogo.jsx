import React from 'react'
import techBitLogo1 from "../icon/techbit-logo1.svg";
import techBitLogo2 from "../icon/techbit-logo2.svg";

const TechBitLogo = () => {
  return (
    <div className='flex '>
      <img src={techBitLogo1} alt="TechBit Logo 1" />
      <img src={techBitLogo2} alt="TechBit Logo 2" />
    </div>
  )
}

export default TechBitLogo
