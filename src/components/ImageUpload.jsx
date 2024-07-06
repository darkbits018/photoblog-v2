import React, { useState } from 'react'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, firestore } from './firebaseConfig'; // Import storage and firestore from your Firebase config
import { collection, addDoc } from 'firebase/firestore';  // Import firestore functions



const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const [title, setTitle] = useState('');


    const handleImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onloadend = async () => {
                setPreviewUrl(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!selectedImage || !title) return;

        setUploading(true);
        const storageRef = ref(storage, `images/${selectedImage.name}`);
        try {
            // Upload image to Firebase Storage
            await uploadBytes(storageRef, selectedImage);
            const url = await getDownloadURL(storageRef);
            setImageUrl(url);
            console.log('Image uploaded successfully:', url);

            // Store image data in Firestore
            const docRef = await addDoc(collection(firestore, 'images'), {
                imageUrl: url,
                title: title
            });
            console.log('Image data stored in Firestore with ID:', docRef.id);
        } catch (error) {
            console.error('Error uploading image or storing data:', error.message);
        }
        setUploading(false);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="img">
                    Image:
                    <input type="file" name="img" accept="image/*" onChange={handleImageChange} />
                </label>
                {previewUrl && <img src={previewUrl} alt="preview" style={{ maxWidth: '200px', marginTop: '10px' }} />}
                <label htmlFor="title">
                    Title:
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <button type="submit" disabled={uploading}>{uploading ? 'Uploading...' : 'Upload Image'}</button>
            </form>
            {imageUrl && (
                <div>
                    <h2>Uploaded Image:</h2>
                    <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '200px', marginTop: '10px' }} />
                    <p><strong>Title:</strong> {title}</p>
                </div>
            )}
        </div>
    )
}

export default ImageUpload