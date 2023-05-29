import React from 'react';
import axios, { AxiosError } from 'axios';
import BlogPost from './BlogPost';
import { useQuery } from '@tanstack/react-query';
import { API_BASE_URL, POSTS_NUMBER } from 'src/utils/constans';
import SkeletonLoader from 'src/components/SkeletonLoader';

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

  const axiosError = error as AxiosError;

  return (
    <div className='py-2'>
      {isLoading && <SkeletonLoader />}
      {axiosError && (
        <div className='flex flex-col items-center justify-center mt-8'>
          <h2>Something went wrong</h2>
          <p>Error Message: {axiosError.message}</p>
          <p>Status Code: {axiosError.response?.status}</p>
        </div>
      )}
      {data && <BlogPost data={data} />}
    </div>
  );
}

export default BlogPosts;
