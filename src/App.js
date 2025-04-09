import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About';
import Disclaimer from './pages/Disclaimer.jsx';

const App = () => { 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </>
  )
}

export default App