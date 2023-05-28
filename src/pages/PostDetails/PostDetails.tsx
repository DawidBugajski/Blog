import React, { useEffect, useState } from 'react';

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
    return <div>No post selected</div>;
  }

  const { title } = currentPost;
  return (
    <div>
      <h1>{currentPost ? title : 'Loading...'}</h1>
    </div>
  );
}

export default PostDetails;
