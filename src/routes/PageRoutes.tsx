import React from 'react';
import { Route, Routes } from 'react-router';
import Homepage from 'src/pages/Homepage';
import AboutMe from 'src/pages/AboutMe';
import Contact from 'src/pages/Contact';
import PostDetails from 'src/pages/PostDetails';
import Error from 'src/components/Error';
import Inspirations from 'src/pages/Inspirations';

function PageRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<AboutMe />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/inspirations' element={<Inspirations />} />
      <Route path='/:slug' element={<PostDetails />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default PageRoutes;
