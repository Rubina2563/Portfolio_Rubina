// src/components/HeroSection.jsx
import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '@dotlottie/player-component'; // Import Lottie Player for animations

const HeroSection = () => {
  // Array of lines to be displayed
  const lines = [
    'I am a React Developer.',
    'And a Full Stack MERN Developer.',
    'Passionate about coding and learning new technologies.',
  ];

  const [currentLine, setCurrentLine] = useState(0); // To track the current line
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // To track the current word index
  const [showLine, setShowLine] = useState([]); // Array to hold the visible words of the current line

  useEffect(() => {
    // Function to handle word-by-word animation
    const interval = setInterval(() => {
      // Check if the current word index is less than the total words in the current line
      if (currentWordIndex < lines[currentLine].split(' ').length) {
        // Add the next word to the visible line array
        setShowLine((prev) => [...prev, lines[currentLine].split(' ')[currentWordIndex]]);
        setCurrentWordIndex((prev) => prev + 1);
      } else {
        // Reset to the next line after the current line finishes
        clearInterval(interval); // Clear interval to avoid rapid switching
        setTimeout(() => {
          setShowLine([]); // Clear the current line's words
          setCurrentWordIndex(0); // Reset word index
          setCurrentLine((prev) => (prev + 1) % lines.length); // Loop back to the first line after the last line
        }, 1000); // Pause for 1 second before switching to the next line
      }
    }, 200); // Speed of each word appearing (faster than before)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentWordIndex, currentLine, lines]);

  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-between p-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      {/* Left Part - Animated Lines and Buttons */}
      <div className="flex-1 text-white space-y-5">
        <div className="text-4xl font-bold">
          {/* Render each word separately */}
          {showLine.map((word, index) => (
            <span key={index} className="inline-block animate-word mx-1">
              {word}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-5 mt-5">
         <button
  className="bg-white text-purple-500 px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-2xl transition transform hover:scale-105"
  onClick={() => {
    const link = document.createElement('a');
    link.href = '/uploads/Rubina-Tazak-FlowCV-Resume-20240831.pdf'; // Path to your CV file
    link.download = 'Rubina-Tazak-FlowCV-Resume.pdf'; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  Download CV
</button>
          <a
            href="https://linkedin.com" // Replace with your LinkedIn link
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com" // Replace with your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-gray-800"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Right Part - Lottie Animation */}
      <div className="flex-1 flex justify-center items-center">
        <dotlottie-player
          src="https://assets7.lottiefiles.com/packages/lf20_tno6cg2w.json" // Replace with your Lottie animation URL
          background="transparent"
          speed="1"
          style={{ width: '300px', height: '300px' }}
          loop
          autoplay
        ></dotlottie-player>
      </div>
    </section>
  );
};

export default HeroSection;
