import React, { useEffect, useState } from 'react';
import { getPlaceholderImage } from 'src/utils/helpers/getPlaceholderImage';

import { useLocation } from 'react-router-dom';
import { Post } from 'src/types/postTypes';

function PostDetails() {
  const location = useLocation();
  const [currentPost, setCurrentPost] = useState<Post | null>(null);

  useEffect(() => {
    if (location?.state?.post) {
      setCurrentPost(location.state.post);
    }
  }, [location]);

  if (!currentPost) {
    return <div className='text-4xl'>No post selected</div>;
  }

  console.log(currentPost);

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
