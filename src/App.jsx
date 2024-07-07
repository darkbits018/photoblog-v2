import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx';
import ImageUpload from './components/ImageUpload.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';




const App = () => {



  return (
    <div className="app-container">
      <Router>
        <div className="text-center">
          <header className="bg-black text-white p-4">
            <h1 className="text-3xl">The Tobi Gallery</h1>
          </header>
          <Routes>
            <Route exact path='/' element={<ImageGallery />} />
            <Route path='/upload' element={<ImageUpload />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;