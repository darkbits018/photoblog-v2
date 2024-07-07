import React from 'react';
import './ImageModal.css'; // Make sure to create this CSS file for the styles

const ImageModal = ({ imageUrl, title, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>&times;</button>
                <img src={imageUrl} alt={title} className="modal-image" />
                <p className="modal-title">{title}</p>
            </div>
        </div>
    );
};

export default ImageModal;
