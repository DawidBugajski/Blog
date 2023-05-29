import React, { useState } from 'react';
import Button from 'src/components/Button';
import EditPost from './EditPost';
import { useNavigate } from 'react-router-dom';
import { Post, BlogPostProps } from 'src/types/postTypes';
import { getPlaceholderImage } from 'src/utils/helpers/getPlaceholderImage';
import { useAppSelector } from 'src/redux/hooks';
import { selectIsLoggedIn } from 'src/redux/slices/loginSlice';
import { API_BASE_URL } from 'src/utils/constans';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function BlogPost({ data }: BlogPostProps) {
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const handleClick = (post: Post) => {
    navigate(`/${post.slug}`, { state: { post } });
  };

  const queryClient = useQueryClient();
  const mutation = useMutation(
    (id: string) => {
      const token = localStorage.getItem('token');
      return axios.delete(`${API_BASE_URL}post/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['blogPosts']);
      },
    }
  );

  const handleDeletePost = (id: string) => {
    mutation.mutate(id);
    console.log(`deleted post ${id}`);
  };

  const handleStartEditing = (post: Post) => {
    setEditingPost(post);
  };

  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
      {data.map((post: Post, i: number) => {
        const { id, image, title, excerpt, user } = post;
        const { firstName, lastName } = user;
        const imageUrl = getPlaceholderImage(image || '');
        const postClassName = i < 5 ? 'border-l-4 border-blue-500' : '';

        if (editingPost && post.id === editingPost.id) {
          return (
            <EditPost
              key={post.id}
              post={post}
              setEditingPost={setEditingPost}
            />
          );
        }

        return (
          <div
            className={`relative group shadow-2xl rounded-2xl my-2 flex md:flex-row flex-col-reverse items-start justify-center ${postClassName} min-h-[400px] w-full gap-4 bg-white overflow-auto`}
            key={id}
          >
            <div className='w-full h-full overflow-hidden md:w-1/2'>
              <img
                src={imageUrl}
                alt={title}
                className='object-cover w-full h-full transition-all duration-300 rounded-tl-2xl rounded-bl-2xl group-hover:scale-110 group-hover:blur-sm'
              />
            </div>
            <div className='relative flex flex-col justify-center w-full h-full px-4 md:w-1/2'>
              {postClassName && (
                <span className='absolute px-2 py-1 text-lg text-white rounded-full bg-gradient-to-r from-blue-500 to to-blue-900 right-2 top-2'>
                  new!
                </span>
              )}
              <strong className='mb-2 text-lg'>{title}</strong>
              <p className='text-sm'>{excerpt}</p>
              <hr className='my-3' />
              <div className='flex mb-2'>
                <p className='text-sm'>Autor:&nbsp;</p>
                <span className='text-sm font-bold'>{`${firstName} ${lastName}`}</span>
              </div>
              <Button
                onClick={() => handleClick(post)}
                className='rounded-xl border-[1px] border-red-800 hover:cursor-pointer py-1 w-1/2 hover:bg-red-800 hover:text-white transition-colors duration-150'
              >
                Read more
              </Button>
              {isLoggedIn && (
                <div className='flex mt-10'>
                  <Button
                    className='w-1/2 px-3 py-1 mr-auto text-white bg-green-600 rounded-lg hover:bg-green-700'
                    onClick={() => handleStartEditing(post)}
                  >
                    Edit
                  </Button>
                  <Button
                    className='w-1/2 px-3 py-1 text-white transition-colors duration-150 bg-red-800 rounded-lg hover:text-red-500 hover:bg-black'
                    onClick={() => handleDeletePost(id)}
                  >
                    Delete
                  </Button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BlogPost;
