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
import { FaTrash, FaEdit, FaArrowRight } from 'react-icons/fa';

function BlogPost({ data }: BlogPostProps) {
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [isDeleteWarningVisible, setDeleteWarningVisible] = useState<{
    visible: boolean;
    postId: string | null;
  }>({ visible: false, postId: null });

  const handleClick = (post: Post) => {
    navigate(`/${post.slug}`, { state: { post } });
  };

  const queryClient = useQueryClient();
  const deletePostMutation = useMutation(
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
    setDeleteWarningVisible({ visible: true, postId: id });
  };

  const handleConfirmDeletePost = (id: string) => {
    deletePostMutation.mutate(id);
    setDeleteWarningVisible({ visible: false, postId: null });
  };

  const handleCancelDeletePost = () => {
    setDeleteWarningVisible({ visible: false, postId: null });
  };

  const handleStartEditing = (post: Post) => {
    setEditingPost(post);
  };

  return (
    <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 '>
      {data.map((post: Post, i: number) => {
        const { id, image, title, excerpt, user } = post;
        const { firstName, lastName } = user;
        const imageUrl = getPlaceholderImage(image || '');
        const postClassName = i < 5 ? 'bg-[#EBF0F5] ' : '';

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
            className={`overflow-hidden gap-2 pt-2 lg:pt-0 relative group shadow-2xl rounded-2xl my-2 flex lg:flex-row flex-col-reverse items-start justify-center ${postClassName} min-h-[400px] w-full xl:gap-4 bg-white`}
            key={id}
          >
            <div className='w-full h-full overflow-hidden lg:w-1/2'>
              <img
                src={imageUrl}
                alt={title}
                className='object-cover w-full h-full transition-all duration-300 rounded-tl-2xl rounded-bl-2xl group-hover:scale-110 group-hover:blur-sm'
              />
            </div>
            <div className='relative flex flex-col justify-center w-full h-full px-4 lg:px-2 xl:px-4 lg:w-1/2'>
              {postClassName && (
                <span className='absolute px-2 py-1 text-sm text-white rounded-full cursor-default lg:text-lg bg-gradient-to-r from-blue-500 to to-blue-900 right-2 top-2'>
                  new!
                </span>
              )}
              <strong className='mb-2 text-lg line-clamp'>{title}</strong>
              <p className='text-sm'>{excerpt}</p>
              <hr className='w-3/4 my-3 border-black' />
              <div className='flex mb-2'>
                <p className='text-sm'>Autor:&nbsp;</p>
                <span className='text-sm font-bold'>{`${firstName} ${lastName}`}</span>
              </div>
              <Button
                onClick={() => handleClick(post)}
                className='inline-flex items-center w-1/2 gap-2 py-1 transition-all duration-150 rounded-xl hover:cursor-pointer hover:gap-6 hover:underline hov2er:underline-offset-'
              >
                <span>Read more</span>
                <FaArrowRight className='w-4 h-4' />
              </Button>
              {isLoggedIn && (
                <div className='flex gap-4 my-3'>
                  <Button
                    className='w-10 p-3 text-white bg-gray-400 rounded-full right-16 lg:absolute bottom-4 hover:bg-gray-700'
                    onClick={() => handleStartEditing(post)}
                  >
                    <FaEdit />
                  </Button>
                  <Button
                    className='w-10 p-3 text-white transition-colors duration-150 bg-gray-400 rounded-full lg:absolute right-4 bottom-4 hover:bg-gray-700'
                    onClick={() => handleDeletePost(id)}
                  >
                    <FaTrash />
                  </Button>
                </div>
              )}
              {isLoggedIn &&
                isDeleteWarningVisible.visible &&
                isDeleteWarningVisible.postId === id && (
                  <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50'>
                    <div className='w-10/12 p-8 bg-white rounded h-[95%] sm:h-full'>
                      <h2 className='mb-4 text-lg'>
                        Are you sure you want to delete this post?
                      </h2>
                      <Button
                        onClick={handleCancelDeletePost}
                        className='w-full p-2 text-white transition-colors duration-150 bg-gray-600 rounded hover:bg-gray-700'
                      >
                        No
                      </Button>
                      <Button
                        onClick={() => handleConfirmDeletePost(id)}
                        className='w-full p-2 mt-3 text-white transition-colors duration-150 bg-red-600 rounded sm:mt-5 hover:bg-red-700'
                      >
                        Yes
                      </Button>
                    </div>
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
