import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to={'/'}>
      <div className='flex text-4xl logo'>
        <span>Lorem</span>
        <span className='border-b-2 border-red-700'>Ipsum</span>
      </div>
    </Link>
  );
}

export default Logo;
