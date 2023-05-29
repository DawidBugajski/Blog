import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import {
  setCloseModal,
  selectOpenLoginModal,
  setLoggedIn,
} from 'src/redux/slices/loginSlice';
import { API_BASE_URL } from 'src/utils/constans';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';

function LoginModal() {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(selectOpenLoginModal);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleCloseModal = () => {
    dispatch(setCloseModal());
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}login`, {
        email,
        password,
      });
      if (response.data.token) {
        dispatch(setLoggedIn(response.data));
        handleCloseModal();
      }
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setError((error as any).message);
      setTimeout(() => setError(null), 2000);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center px-6 text-center sm:p-0'>
      <div
        onClick={handleCloseModal}
        className='absolute inset-0 bg-black opacity-75'
      ></div>
      <div className='relative z-10 p-[2px] bg-blue-500 rounded-lg w-full'>
        <div className='md:min-h-[350px] md:w-[500px] flex flex-col gap-2 p-8 font-mono text-lg text-white bg-black rounded-lg '>
          <h2 className='mb-4 text-xl font-bold text-center'>Login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor='email' className='block mb-2'>
              Email
              <input
                type='email'
                id='email'
                className='block w-full p-2 text-black border rounded outline-none'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor='password' className='block mb-4'>
              Password
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='block w-full p-2 text-black border rounded outline-none'
                required
              />
            </label>
            <button className='w-full py-2 mt-4 text-white transition-all duration-150 bg-blue-500 rounded hover:bg-blue-600'>
              Login
            </button>
            <button
              onClick={handleCloseModal}
              className='absolute flex items-center justify-center p-2 font-bold text-black transition-colors duration-150 transform bg-red-600 rounded-full hover:bg-red-900 top-4 right-4'
            >
              <FaTimes className='w-5 h-5 text-white' />
            </button>
          </form>
          {error && <span className='mt-3 -mb-3 text-red-500'>{error}</span>}
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
