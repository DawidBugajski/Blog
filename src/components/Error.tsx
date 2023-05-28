import React from 'react';

function Error() {
  return (
    <div className='min-h-screen flex-col error-container flex justify-center bg-[#151515] items-center gap-8'>
      <h1 className='text-8xl font-extrabold text-transparent lg:animate-bounce 2xl:text-[200px] bg-clip-text bg-gradient-to-r from-main-red to-main-dark-red'>
        Oops !
      </h1>
      <p className='text-2xl 2xl:text-3xl'>Something went wrong</p>
      {/* {message && (
        <p className='font-mono text-3xl font-bold uppercase 2lg:text-6xl'>
          {message}
        </p>
      )} */}
      <button className='text-xl px-5 py-1.5 2xl:text-2xl uppercase rounded-full bg-main-dark-red hover:text-main-dark-red hover:bg-main-gray transition-colors duration-150 border-transparent border-2 hover:border-main-dark-red'>
        {/* <Link to='/'>Go Home</Link> */}
      </button>
    </div>
  );
}

export default Error;

// const Error = ({ message }) => {
//   return (
//     <div className='min-h-screen flex-col error-container flex justify-center bg-[#151515] items-center gap-8'>
//       <h1 className='text-8xl font-extrabold text-transparent lg:animate-bounce 2xl:text-[200px] bg-clip-text bg-gradient-to-r from-main-red to-main-dark-red'>
//         Oops !
//       </h1>
//       <p className='text-2xl 2xl:text-3xl'>Something went wrong</p>
//       {message && (
//         <p className='font-mono text-3xl font-bold uppercase 2lg:text-6xl'>
//           {message}
//         </p>
//       )}
//       <button className='text-xl px-5 py-1.5 2xl:text-2xl uppercase rounded-full bg-main-dark-red hover:text-main-dark-red hover:bg-main-gray transition-colors duration-150 border-transparent border-2 hover:border-main-dark-red'>
//         <Link to='/'>Go Home</Link>
//       </button>
//     </div>
//   );
// };

// export default Error;
