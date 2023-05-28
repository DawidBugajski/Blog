import React, { useEffect, useState } from 'react';
import { getPlaceholderImage } from 'src/utils/helpers/getPlaceholderImage';
import { useLocation, useNavigate } from 'react-router-dom';
import { Post } from 'src/types/postTypes';
import Button from 'src/components/Button';

function PostDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPost, setCurrentPost] = useState<Post | null>(null);

  useEffect(() => {
    if (location?.state?.post) {
      setCurrentPost(location.state.post);
    }
  }, [location]);

  if (!currentPost) {
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

  const { title, image, blogPost } = currentPost;
  const imageUrl = getPlaceholderImage(image || '');

  return (
    currentPost && (
      <div className='container mx-auto'>
        <h1 className='py-4 pt-8 text-2xl italic font-semibold text-center text-slate-900'>
          {title}
        </h1>
        <img className='pb-4 mx-auto' src={imageUrl} alt={title} />
        <p className='pb-4'>{blogPost}</p>
      </div>
    )
  );
}

export default PostDetails;
