import React from 'react';
import { Route, Routes } from 'react-router';
import Counter from 'src/features/counter/Counter';
import Homepage from 'src/pages/homepage/homepage';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Counter />} />
      <Route path='/home' element={<Homepage />} />
    </Routes>
  );
};

export default PageRoutes;

{
  /* <Route path='/task/:taskId' element={<TaskDetails}/> */
}
