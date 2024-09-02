// src/components/CV.jsx
import React, { useState } from 'react';

const CV = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="bg-gray-100 p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4 text-center">My CV</h2>
      <div className="flex justify-center space-x-4">
        <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Open CV
        </button>
        <a href="/path/to/cv.pdf" download className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
          Download CV
        </a>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h3 className="text-xl font-semibold mb-4">My CV</h3>
            <iframe src="/path/to/cv.pdf" title="CV" className="w-full h-64"></iframe>
            <button onClick={closeModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CV;