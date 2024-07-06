import React from 'react';

const Header = ({ onNavigateToGallery, onNavigateToUpload }) => {
  return (
    <header>
      <h1>My Image App</h1>
      <nav>
        <button onClick={onNavigateToGallery}>Gallery</button>
        <button onClick={onNavigateToUpload}>Upload</button>
      </nav>
    </header>
  );
};

export default Header;
