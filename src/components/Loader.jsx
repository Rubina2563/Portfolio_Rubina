// src/components/Loader.jsx
import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-purple-600"></div>
    </div>
  );
};

export default Loader;