import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className='flex items-center justify-between'>
        <button
          className='p-1 border-[1px] border-black rounded-lg md:hidden'
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
          <ul className='fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-4 bg-blue-100'>
            <li>
              <a href='#' className='text-black hover:text-red-600'>
                Homepage
              </a>
            </li>
            <li>
              <a href='#' className='text-black hover:text-red-600'>
                About me
              </a>
            </li>
            <li>
              <a href='#' className='text-black hover:text-red-600'>
                Inspirations
              </a>
            </li>
            <li>
              <a href='#' className='text-black hover:text-red-600'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}

      <ul className='items-center hidden gap-4 mt-4 md:flex md:mt-0'>
        <li>
          <a href='#' className='text-black hover:text-red-600'>
            Homepage
          </a>
        </li>
        <li>
          <a href='#' className='text-black hover:text-red-600'>
            About me
          </a>
        </li>
        <li>
          <a href='#' className='text-black hover:text-red-600'>
            Inspirations
          </a>
        </li>
        <li>
          <a href='#' className='text-black hover:text-red-600'>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
