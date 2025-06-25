import React from 'react'
import tribearcIcon from '../../assets/icon/arc_arrowfw.svg'
const ViewBtn = () => {
  return (
    <div  className='w-[270px] p-4 flex items-center justify-center rounded-full  border-dix_lightGreen border-2 hover:bg-dix_hoverGreen duration-500 hover:text-dix_hoverBlue'>
        <button className='flex  font-inter justify-center items-center text-base gap-3 '>View Live Project <img src={tribearcIcon} alt="View" className='w-[7px]' /></button>
    </div>
  )
}

export default ViewBtn;
