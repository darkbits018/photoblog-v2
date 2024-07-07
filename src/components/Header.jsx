import React from 'react';
import './Header.css'

const Header = ({ onNavigateToGallery, onNavigateToUpload }) => {
  return (
    <header  className="app-header">
      <h1>My Image App</h1>
      <nav>
      <ul className="nav-links">
          <li>
            <button className="btn-upload" onClick={onNavigateToGallery}>Gallery</button>
          </li>
          <li>
            <button className="btn-upload" onClick={onNavigateToUpload}>Upload</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
