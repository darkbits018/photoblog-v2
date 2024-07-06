import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from './firebaseConfig'; // Ensure firestore is correctly imported
import ImageCard from './ImageCard'; // Import the ImageCard component

const ImageGallery = () => {
    const [images, setImages] = useState([]);

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

    return (
        <div className="grid grid-cols-4 gap-2 p-4">
            {images.map((image) => (
                <div key={image.id} className="w-80">
                    <ImageCard imageUrl={image.imageUrl} title={image.title} />
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
