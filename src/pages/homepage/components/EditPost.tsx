import React, { useState } from 'react';
import { Post } from 'src/types/postTypes';
import { getPlaceholderImage } from 'src/utils/helpers/getPlaceholderImage';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { API_BASE_URL } from 'src/utils/constans';
import { FaTimes } from 'react-icons/fa';

type EditPostFormProps = {
  post: Post;
  setEditingPost: (post: Post | null) => void;
};

function EditPost({ post, setEditingPost }: EditPostFormProps) {
  const [title, setTitle] = useState<string>(post.title);
  const [blogPost, setBlogPost] = useState<string>(post.blogPost);
  const [image, setImage] = useState<string>(
    getPlaceholderImage(post.image || '')
  );

  const queryClient = useQueryClient();

  const editPostMutation = useMutation(
    (editedPost: Post) => {
      const token = localStorage.getItem('token');
      return axios.put(`${API_BASE_URL}post/${editedPost.id}`, editedPost, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['blogPosts']);
        setEditingPost(null);
      },
      onError: (error) => {
        console.error('Failed to edit post:', error);
      },
    }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const editedPost = { ...post, title, blogPost, image };
    editPostMutation.mutate(editedPost);
  };

  return (
    <div className='relative rounded-lg p-8 my-2 bg-gradient-to-r from-blue-500 to to-blue-900 h-[400px]'>
      <form className='flex flex-col h-full' onSubmit={handleSubmit}>
        <label className='text-white' htmlFor='title'>
          Title
        </label>
        <input
          className='p-1 mb-1 rounded-lg'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label className='text-white ' htmlFor='blogPost'>
          Post
        </label>
        <textarea
          id='blogPost'
          value={blogPost}
          onChange={(e) => setBlogPost(e.target.value)}
          required
          className='p-1 mb-1 rounded-lg grow'
        />
        <label className='text-white' htmlFor='image'>
          Image URL
        </label>
        <input
          className='p-1 mb-1 rounded-lg'
          id='image'
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button
          className='w-1/2 px-3 py-1 mx-auto mt-2 text-white rounded-lg bg-neutral-800'
          type='submit'
        >
          Submit
        </button>
        <button
          onClick={() => setEditingPost(null)}
          className='absolute flex items-center justify-center p-2 font-bold text-black transition-colors duration-150 transform bg-red-600 rounded-full hover:bg-red-900 top-4 right-4'
        >
          <FaTimes className='w-3 h-3 text-white' />
        </button>
      </form>
    </div>
  );
}

export default EditPost;
