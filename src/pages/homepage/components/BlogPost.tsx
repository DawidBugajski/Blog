import React from 'react';
import Button from 'src/components/Button';
import { useNavigate } from 'react-router-dom';
import { Post, BlogPostProps } from 'src/types/postTypes';

function BlogPost({ data }: BlogPostProps) {
  const navigate = useNavigate();

  const handleClick = (post: Post) => {
    navigate(`/${post.slug}`, { state: { post } });
  };

  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
      {data.map((post: Post, i: number) => {
        const { id, image, title, excerpt, user } = post;
        const { firstName, lastName } = user;
        const imageUrl = image
          ? image
          : '/src/assets/images/placeholder-image.webp';
        const postClassName = i < 5 ? 'border-l-4 border-blue-500' : '';

        return (
          <div
            className={`relative group shadow-2xl rounded-2xl my-2 flex items-start justify-center ${postClassName} h-[400px] w-full gap-4 bg-white overflow-auto`}
            key={id}
          >
            <div className='w-1/2 h-full overflow-hidden'>
              <img
                src={imageUrl}
                alt={title}
                className='object-cover w-full h-full transition-all duration-300 rounded-tl-2xl rounded-bl-2xl group-hover:scale-110 group-hover:blur-sm'
              />
            </div>
            <div className='flex flex-col justify-center w-1/2 h-full px-4'>
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
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BlogPost;
