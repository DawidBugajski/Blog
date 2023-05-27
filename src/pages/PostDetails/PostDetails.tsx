import React from 'react';
import { useAppSelector } from 'src/redux/hooks';
import { selectSelectedPost } from 'src/redux/slices/postDetailsSlice';

function PostDetails() {
  const selectedPost = useAppSelector(selectSelectedPost);

  if (!selectedPost) {
    return <div>No post selected</div>;
  }

  return (
    <div>
      <h1>{selectedPost.title}</h1>
    </div>
  );
}

export default PostDetails;
