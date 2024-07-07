import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from './firebaseConfig'; // Ensure firestore is correctly imported
import ImageCard from './ImageCard'; // Import the ImageCard component
import ImageModal from './ImageModal.jsx'; // Import the ImageModal component
import 'tailwindcss/tailwind.css';
import './ImageGallery.css'

const ImageGallery = () => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            const imageCollection = collection(firestore, 'images');
            const querySnapshot = await getDocs(imageCollection);
            const imageData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setImages(imageData);
        };

        fetchImages();
    }, []);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className='gal-body'>
            <div className="grid grid-cols-4 gap-4 p-4">
                {images.map((image) => (
                    <div key={image.id} onClick={() => handleImageClick(image)}>
                        <ImageCard imageUrl={image.imageUrl} title={image.title} />
                    </div>
                ))}
            </div>
            {selectedImage && (
                <ImageModal
                    imageUrl={selectedImage.imageUrl}
                    title={selectedImage.title}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default ImageGallery;
