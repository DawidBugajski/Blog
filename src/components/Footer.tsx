import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='mt-auto bg-black'>
      <p className='relative flex items-center justify-end py-3 pr-4 text-xs text-white cursor-auto'>
        ©Copyright by&nbsp;
        <Link to='https://github.com/DawidBugajski' target='_blank'>
          <strong className='transition-all duration-150 hover:text-main-red'>
            Dawid Bugajski
          </strong>
        </Link>
      </p>
    </div>
  );
}

export default Footer;
