import React from 'react';
import PageRoutes from './routes/PageRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginModal from './pages/Homepage/components/LoginModal';
import { selectOpenLoginModal } from 'src/redux/slices/loginSlice';
import { useAppSelector } from 'src/redux/hooks';

function App() {
  const isOpen = useAppSelector(selectOpenLoginModal);
  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      <Header />
      <PageRoutes />
      {isOpen && <LoginModal />}
      <Footer />
    </div>
  );
}

export default App;
