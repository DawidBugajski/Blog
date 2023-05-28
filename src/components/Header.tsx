import React from 'react';
import Navbar from 'src/pages/Homepage/components/Navbar';
import ButtonLogin from 'src/pages/Homepage/components/ButtonLogin';
import Logo from './Logo';

function Header() {
  return (
    <div className='sticky top-0 z-10 flex items-center p-2 border-b-2 border-black bg-gradient-to-b from-sky-400 to-sky-200'>
      <Logo />
      <div className='flex items-center justify-end w-full gap-10'>
        <Navbar />
        <ButtonLogin />
      </div>
    </div>
  );
}

export default Header;
