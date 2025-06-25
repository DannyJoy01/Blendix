import React from 'react';
import { Link } from 'react-router-dom';
import BlendixLogo from '../../assets/icon/blendixLogo.jsx';

const Nav = () => {
  return (
    <div className='w-full h-[110px] flex justify-between items-center px-24 bg-nav_bg list-none font-inter text-nt_col fixed top-0 z-50'>
      <BlendixLogo />
      
      <ul className=' w-[20%] flex  gap-4 text-[17px] font-medium'>
        <li className='hover:text-dix_white'>
          <Link to="/">Home</Link>
        </li>
        <li className='hover:text-dix_white'>
          <Link to="/about">About</Link>
        </li>
        <li className='hover:text-dix_white'>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
