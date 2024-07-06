import React from 'react';

const ImageCard = ({ imageUrl, title }) => {
    return (
        <div className="bg-white shadow-md rounded-md overflow-hidden border border-gray-300 m-2" style={{ width: '400px', height: '400px' }}>
            <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
            <div className="p-4">
                <p className="text-gray-700 text-center">{title}</p>
            </div>
        </div>
    );
};

export default ImageCard;
