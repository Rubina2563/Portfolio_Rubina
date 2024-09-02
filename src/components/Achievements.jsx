// src/components/Achievements.js

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { certificates } from '../data'; // Import your certificates data
import { convertPdfToImage } from '../utils/pdfToImage'; // Import the updated utility function
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Achievements = () => {
  const [certificateImages, setCertificateImages] = useState({});

  const loadCertificateImages = async () => {
    const imagesMap = {};
    for (const certificate of certificates) {
      try {
        const response = await fetch(certificate.pdf);
        const pdfBuffer = await response.arrayBuffer();
        const images = await convertPdfToImage(pdfBuffer);
        imagesMap[certificate.title] = images;
      } catch (error) {
        console.error('Error loading certificate:', error);
      }
    }
    setCertificateImages(imagesMap);
  };

  useEffect(() => {
    loadCertificateImages();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="achievements-section py-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Achievements and Certificates
      </h2>
      <Slider {...sliderSettings}>
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="certificate-slide px-4 flex justify-center items-center"
          >
            <div className="bg-white rounded-lg p-4 shadow-lg w-full max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-center">
                {certificate.title}
              </h3>
              <div className="relative w-full h-80 flex justify-center items-center bg-gray-200 rounded overflow-hidden">
                {certificateImages[certificate.title] &&
                  certificateImages[certificate.title].map((img, idx) => (
                    <img
                      src={img}
                      alt={`Certificate page ${idx + 1}`}
                      className="object-contain max-w-full max-h-full"
                      key={idx}
                    />
                  ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Achievements;
