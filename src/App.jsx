import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx';
import ImageUpload from './components/ImageUpload.jsx';
import ImageGallery from './components/ImageGallery.jsx';
const App = () => {
  const [currentPage, setCurrentPage] = useState('gallery'); // 'gallery' or 'upload'

  const renderPage = () => {
    switch (currentPage) {
      case 'gallery':
        return <ImageGallery />;
      case 'upload':
        return <ImageUpload />;
      default:
        return <ImageGallery />;
    }
  };

  return (
    <div className="app-container">
      <Header
        onNavigateToGallery={() => setCurrentPage('gallery')}
        onNavigateToUpload={() => setCurrentPage('upload')}
      />

      {renderPage()}
    </div>
  );
};

export default App;