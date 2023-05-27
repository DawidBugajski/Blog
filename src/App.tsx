import React from 'react';
import PageRoutes from './routes/PageRoutes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <PageRoutes />
      <Footer />
    </div>
  );
}

export default App;
