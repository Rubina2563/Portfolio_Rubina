// src/components/Loading.jsx
import React from 'react';
import './Loading.css'; // Optional: for any additional styling

const Loading = () => {
  return (
    <div className="loading-container">
      <dotlottie-player
        src="https://lottie.host/f359f50e-b680-4724-8efe-5ab867b13139/EvLcmD3oVu.json"
        background="transparent"
        speed="1"
        style={{ width: '300px', height: '300px' }}
        loop
        autoplay
      ></dotlottie-player>
    </div>
  );
};

export default Loading;