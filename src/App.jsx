import React, { Suspense, lazy } from 'react';
import { Route, Routes, Link } from 'react-router-dom'; 

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <div>
      <nav className='containet mx-auto flex justify-between bg-blue-300 py-10'>
        <Link className='p-3 px-7 rounded-md  hover:bg-blue-900 cursor-pointer' to="/">Home</Link>
        <Link className='p-3 px-7 rounded-md  hover:bg-blue-900 cursor-pointer' to="/about">About</Link>
        <Link className='p-3 px-7 rounded-md  hover:bg-blue-900 cursor-pointer' to="/contact">Contact</Link>    
      </nav>

      <Suspense fallback={<div className='font-bold text-center mt-5 mb-4'>Yuklanmoqda...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
