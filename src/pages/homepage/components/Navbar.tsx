import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => setIsOpen(false);
  return (
    <div>
      <div className='flex items-center justify-between'>
        <button
          className='p-2 border-[1px] border-black rounded-lg md:hidden'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <div className='fixed top-0 left-0 z-20 w-screen h-screen bg-black bg-opacity-50'>
          <button className='fixed top-0 right-0 z-40 m-4 text-2xl text-black'>
            <FaTimes onClick={() => setIsOpen(false)} />
          </button>
          <ul className='fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-4 bg-gradient-to-b from-sky-400 to-sky-200'>
            <li>
              <Link
                onClick={handleCloseMenu}
                to={'/'}
                className='font-bold transition-all duration-150 rounded-lg text-text-sky-800 hover:bg-sky-800 hover:text-white hover:px-3 hover:py-2'
              >
                Homepage
              </Link>
            </li>
            <li>
              <Link
                onClick={handleCloseMenu}
                to={'/about'}
                className='font-bold transition-all duration-150 rounded-lg text-text-sky-800 hover:bg-sky-800 hover:text-white hover:px-3 hover:py-2'
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                onClick={handleCloseMenu}
                to={'/inspirations'}
                className='font-bold transition-all duration-150 rounded-lg text-text-sky-800 hover:bg-sky-800 hover:text-white hover:px-3 hover:py-2'
              >
                Inspirations
              </Link>
            </li>
            <li>
              <Link
                onClick={handleCloseMenu}
                to={'/contact'}
                className='font-bold transition-all duration-150 rounded-lg text-text-sky-800 hover:bg-sky-800 hover:text-white hover:px-3 hover:py-2'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
      <ul className='items-center hidden gap-4 mt-4 md:flex md:mt-0'>
        <li>
          <Link
            to={'/'}
            className='font-bold transition-all duration-150 rounded-lg text-text-sky-800 hover:bg-sky-800 hover:text-white hover:px-3 hover:py-2'
          >
            Homepage
          </Link>
        </li>
        <li>
          <Link
            to={'/about'}
            className='font-bold transition-all duration-150 rounded-lg text-text-sky-800 hover:bg-sky-800 hover:text-white hover:px-3 hover:py-2'
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            to={'/inspirations'}
            className='font-bold transition-all duration-150 rounded-lg text-text-sky-800 hover:bg-sky-800 hover:text-white hover:px-3 hover:py-2'
          >
            Inspirations
          </Link>
        </li>
        <li>
          <Link
            to={'/contact'}
            className='font-bold transition-all duration-150 rounded-lg text-text-sky-800 hover:bg-sky-800 hover:text-white hover:px-3 hover:py-2'
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
