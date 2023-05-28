import React from 'react';
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
          'Content-Type': 'application/json',
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['blogPosts']);
      },
      onError: (error) => {
        console.error('Failed to add new post:', error);
      },
    }
  );

  const handleAddPost = () => addPostMutation.mutate();

  return (
    <div className='container py-12 mx-auto'>
      <h1 className='text-3xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1>
      <p className='mb-2'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas sequi
        veritatis sit? Iure eaque voluptatem deleniti! Similique tempora
        laudantium illo velit ducimus temporibus ullam nihil voluptatibus
        libero. Est, in quas.
      </p>
      {isLoggedIn && (
        <Button
          onClick={handleAddPost}
          className='px-3 py-2 font-bold text-white transition-all duration-150 rounded-lg hover:bg-sky-900 bg-sky-600'
        >
          Add new post!
        </Button>
      )}
      <BlogPosts />
    </div>
  );
}

export default Homepage;
