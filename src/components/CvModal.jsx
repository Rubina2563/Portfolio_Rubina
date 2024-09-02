// src/components/CvModal.jsx

import React, { useEffect, useState } from 'react';
import { convertPdfToImage } from '../utils/pdfToImage'; // Import the utility function

const CvModal = ({ isOpen, onClose, pdfPath }) => {
  const [cvImages, setCvImages] = useState([]);

  useEffect(() => {
    const loadCvImages = async () => {
      try {
        const response = await fetch(pdfPath);
        const pdfBuffer = await response.arrayBuffer();
        const images = await convertPdfToImage(pdfBuffer);
        setCvImages(images);
      } catch (error) {
        console.error('Error loading CV:', error);
      }
    };

    if (isOpen) {
      loadCvImages();
    }
  }, [isOpen, pdfPath]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 overflow-y-auto">
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl p-4 relative overflow-hidden"
        style={{ animation: 'slideIng 0.5s forwards', maxHeight: '90vh' }}
      >
        <button
          className="absolute top-2 right-2 text-2xl text-gray-700 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold text-center mb-4">My CV</h2>

        {/* Scrollable content container */}
        <div className="overflow-auto" style={{ maxHeight: '80vh' }}>
          {cvImages.map((img, index) => (
            <div
              key={index}
              className="flex justify-center items-start overflow-auto"
              style={{ maxHeight: '100%', padding: '10px 0' }}
            >
              <img
                src={img}
                alt={`CV page ${index + 1}`}
                className="object-contain"
                style={{
                  maxHeight: 'auto',
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '100%',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CvModal;
