import React from 'react'
import blendixPencil from '../../assets/icon/blendix_pencil.svg'
const BlendixPencil = () => {
  return (
    <div className='w-[90%] flex justify-end'>
      <img src={blendixPencil} alt="Blendix Pencil" className='hidden md:block w-[145px]' />
    </div>
  )
}

export default BlendixPencil;
