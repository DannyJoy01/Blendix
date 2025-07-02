import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlendixLogo from '../../assets/icon/blendixLogo.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-full h-[110px] flex justify-between items-center px-6 md:px-24 bg-nav_bg text-nt_col fixed top-0 z-50'>
      <BlendixLogo />

      {/* Desktop Menu */}
      <ul className='hidden md:flex gap-6 text-[17px] font-medium'>
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

      {/* Hamburger Icon (Mobile Only) */}
      <div className='md:hidden text-2xl cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className='absolute top-[110px] left-0 w-full bg-nav_bg flex flex-col items-center gap-6 py-6 text-[17px] font-medium md:hidden z-40'>
          <li className='hover:text-dix_white'>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li className='hover:text-dix_white'>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          </li>
          <li className='hover:text-dix_white'>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
