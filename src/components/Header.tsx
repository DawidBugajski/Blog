import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import {
  setOpenModal,
  selectIsLoggedIn,
  setLoggedOut,
} from 'src/redux/slices/loginSlice';

import Navbar from 'src/pages/Homepage/includes/Navbar';
import Button from './Button';
import Logo from './Logo';

function Header() {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const dispatch = useAppDispatch();

  const handleLoginClick = () =>
    isLoggedIn ? dispatch(setLoggedOut()) : dispatch(setOpenModal());

  return (
    <div className='sticky top-0 z-10 flex items-center p-2 border-b-2 border-black bg-gradient-to-b from-sky-400 to-sky-200'>
      <Logo />
      <div className='flex items-center justify-center w-full md:justify-end md:gap-10'>
        <Navbar />
        <Button
          onClick={handleLoginClick}
          className='px-3 py-2 ml-6 mr-auto text-sm font-bold text-white transition-all duration-150 rounded-lg outline-none md:text-base md:mr-0 -order-1 md:order-1 hover:text-sky-800 bg-sky-800 hover:bg-white'
        >
          {isLoggedIn ? 'Log out' : 'Login'}
        </Button>
      </div>
    </div>
  );
}

export default Header;
