import React from 'react';
import Navbar from 'src/pages/Homepage/components/Navbar';
import ButtonLogin from 'src/pages/Homepage/components/ButtonLogin';
import Logo from './Logo';

function Header() {
  return (
    <div className='z-10 bg-gradient-to-r from-[#dae2f8] to-[#d6a4a4] sticky top-0 flex items-center p-2 border-b-2 border-black'>
      <Logo />
      <div className='flex items-center justify-end w-full gap-10'>
        <Navbar />
        <ButtonLogin />
      </div>
    </div>
  );
}

export default Header;
