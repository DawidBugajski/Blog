import React from 'react';
import axios from 'axios';
import BlogPost from './BlogPost';
import { useQuery } from '@tanstack/react-query';
import { API_BASE_URL, POSTS_NUMBER } from 'src/utils/constans';

function BlogPosts() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: () =>
      axios
        .get(`${API_BASE_URL}posts`, {
          params: {
            perPage: POSTS_NUMBER,
          },
        })
        .then((res) => res.data.data),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div className='py-2'>
      <BlogPost data={data} />
    </div>
  );
}

export default BlogPosts;
