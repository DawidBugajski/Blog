import React from 'react';
import { POSTS_NUMBER } from 'src/utils/constans';

function SkeletonLoader() {
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
      {Array.from({ length: POSTS_NUMBER }).map((_, i) => (
        <div
          className='overflow-hidden gap-2 pt-2 md:pt-0 relative group shadow-2xl rounded-2xl my-2 flex md:flex-row flex-col-reverse items-start justify-center min-h-[400px] w-full md:gap-4 animate-pulse'
          key={i}
        >
          <div className='w-full h-full overflow-hidden bg-slate-700 md:w-1/2'></div>
          <div className='relative flex flex-col justify-center w-full h-full px-4 space-y-4 md:w-1/2'>
            <div className='h-6 rounded bg-slate-700'></div>
            <div className='w-3/4 h-4 rounded bg-slate-700'></div>
            <div className='w-3/4 h-1 rounded bg-slate-700'></div>
            <div className='w-1/2 h-4 rounded bg-slate-700'></div>
            <div className='flex items-center w-1/2 h-6 rounded bg-slate-700'>
              <span className='w-4 h-4 mr-2 rounded bg-slate-700'></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkeletonLoader;
