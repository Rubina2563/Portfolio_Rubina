// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import CvModal from './CvModal'; // Import the CvModal component
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Navbar = () => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  useEffect(() => {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
      item.style.animation = `slideIn 0.5s forwards ${index * 0.2}s`;
    });
  }, []);

  const openCvModal = () => {
    setIsCvModalOpen(true);
  };

  const closeCvModal = () => {
    setIsCvModalOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-gradient-to-r from-gray-700 via-gray-800 to-black text-white py-4 shadow-lg z-50 flex items-center justify-between px-8">
        <div className="text-3xl font-bold shiny-text">Rubina Tazak</div>
        <ul className="flex items-center space-x-4">
          {/* Map over the navigation items */}
          {['Home', 'Achievements', 'Projects', 'CV', 'Contact'].map((section) => (
            <li
              key={section}
              className="nav-item transform transition-transform duration-500 flex items-center"
              style={{ opacity: 0 }}
            >
              {section === 'CV' ? (
                // Keep the CV button functionality intact
                <button className="simple-hover-button" onClick={openCvModal}>
                  {section}
                </button>
              ) : (
                // Use Link component for smooth scroll functionality
                <Link
                  to={section.toLowerCase().replace(' ', '')} // Match the section IDs
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="simple-hover-button cursor-pointer"
                >
                  {section}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Render CV Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={closeCvModal}
        pdfPath="/uploads/Rubina-Tazak-FlowCV-Resume-20240831.pdf" // Replace with your actual CV PDF path
      />
    </>
  );
};

export default Navbar;
