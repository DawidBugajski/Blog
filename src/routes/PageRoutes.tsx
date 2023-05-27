import React from 'react';
import { Route, Routes } from 'react-router';
import Homepage from 'src/pages/Homepage/Homepage';
import PostDetails from 'src/pages/PostDetails/PostDetails';

function PageRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/:slug' element={<PostDetails />} />
    </Routes>
  );
}

export default PageRoutes;
