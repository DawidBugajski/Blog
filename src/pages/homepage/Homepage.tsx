import React, { useState } from 'react';
import BlogPosts from './components/BlogPosts';
import Button from 'src/components/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { API_BASE_URL } from 'src/utils/constans';
import { useAppSelector } from 'src/redux/hooks';
import { selectIsLoggedIn } from 'src/redux/slices/loginSlice';

function Homepage() {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const queryClient = useQueryClient();
  const [error, setError] = useState<string | null>(null);

  const addPostMutation = useMutation(
    () => {
      const token = localStorage.getItem('token');
      const newPost = {
        title: 'New Post',
        blogPost: 'This is a new post. Click to edit.',
        image: '',
      };
      return axios.post(`${API_BASE_URL}post`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    {
      onSuccess: () => {
        setError(null);
        queryClient.invalidateQueries(['blogPosts']);
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (error: any) => {
        setError(error?.message?.toString() || 'An unknown error occurred');
        setTimeout(() => setError(null), 2000); // reset error after 2 seconds
      },
    }
  );

  const handleAddPost = () => addPostMutation.mutate();

  return (
    <div className='container py-4 mx-auto md:py-12'>
      <h1 className='text-lg md:text-3xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1>
      <p className='mb-2 text-sm md:text-base'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas sequi
        veritatis sit? Iure eaque voluptatem deleniti! Similique tempora
        laudantium illo velit ducimus temporibus ullam nihil voluptatibus
        libero. Est, in quas.
      </p>
      {isLoggedIn && (
        <>
          <Button
            onClick={handleAddPost}
            className='px-3 py-2 font-bold text-white transition-all duration-150 rounded-lg hover:bg-sky-900 bg-sky-600'
          >
            Add new post!
          </Button>
          <span className='block mt-2 text-xs'>
            (The title and description must not be the same as any of the posts)
          </span>
        </>
      )}
      {error && <span className='text-lg font-bold text-red-700'>{error}</span>}
      <BlogPosts />
    </div>
  );
}

export default Homepage;
