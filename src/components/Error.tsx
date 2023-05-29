import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center justify-center h-[70vh]'>
      <h1 className='font-bold text-blue-600 text-9xl'>404</h1>
      <h2 className='mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl'>
        <span className='text-red-500'>Oops!</span> Page not found
      </h2>
      <p className='mb-8 text-center text-gray-500 md:text-lg'>
        The page you’re looking for doesn’t exist.
      </p>
      <Button
        onClick={() => navigate('/')}
        className='px-6 py-2 text-sm font-semibold text-blue-800 transition-colors duration-200 bg-blue-100 hover:text-blue-100 hover:bg-blue-800'
      >
        Go home
      </Button>
    </div>
  );
}

export default Error;
