import React from 'react';
import { Route, Routes } from 'react-router';
import Counter from 'src/features/counter/Counter';
import Homepage from 'src/pages/Homepage/Homepage';
import PostDetails from 'src/pages/PostDetails/PostDetails';

function PageRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Counter />} />
      <Route path='/home' element={<Homepage />} />
      <Route path='/home/:slug' element={<PostDetails />} />
    </Routes>
  );
}

export default PageRoutes;
