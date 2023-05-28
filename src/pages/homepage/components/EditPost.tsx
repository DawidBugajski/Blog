import React, { useState } from 'react';
import { Post } from 'src/types/postTypes';
import { getPlaceholderImage } from 'src/utils/helpers/getPlaceholderImage';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { API_BASE_URL } from 'src/utils/constans';

type EditPostFormProps = {
  post: Post;
};

function EditPost({ post }: EditPostFormProps) {
  const [title, setTitle] = useState<string>(post.title);
  const [blogPost, setBlogPost] = useState<string>(post.blogPost);
  const [image, setImage] = useState<string>(
    getPlaceholderImage(post.image || '')
  );

  const queryClient = useQueryClient();

  const editPostMutation = useMutation(
    (editedPost: Post) => {
      const token = localStorage.getItem('token');
      return axios.put(`${API_BASE_URL}/posts/${editedPost.id}`, editedPost, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['blogPosts']);
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
    <div className='p-2 bg-purple-700'>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor='blogPost'>Post</label>
        <textarea
          id='blogPost'
          value={blogPost}
          onChange={(e) => setBlogPost(e.target.value)}
          required
        />

        <label htmlFor='image'>Image URL</label>
        <input
          id='image'
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default EditPost;
