import React from 'react';
import { Route, Routes } from 'react-router';
import Homepage from 'src/pages/Homepage/Homepage';
import PostDetails from 'src/pages/PostDetails/PostDetails';
import Error from 'src/components/Error';

function PageRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/:slug' element={<PostDetails />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default PageRoutes;
