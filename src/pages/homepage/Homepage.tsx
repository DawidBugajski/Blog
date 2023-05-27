import React from 'react';
import BlogPosts from './components/BlogPosts';

function Homepage() {
  return (
    <div className='container py-12 mx-auto'>
      <h1 className='text-3xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1>
      <p className='mb-2'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas sequi
        veritatis sit? Iure eaque voluptatem deleniti! Similique tempora
        laudantium illo velit ducimus temporibus ullam nihil voluptatibus
        libero. Est, in quas.
      </p>
      <BlogPosts />
    </div>
  );
}

export default Homepage;
