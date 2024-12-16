// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import CvModal from './CvModal'; // Import the CvModal component
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Navbar = () => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <nav className="fixed top-0 w-full bg-gradient-to-r from-gray-700 via-gray-800 to-black text-white py-4 shadow-lg z-50">
        <div className="flex items-center justify-between px-8">
       <div className=" sm:text-xl md:text-2xl lg:text-3xl font-bold shiny-text">Rubina Tazak</div>




          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-xl"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            ☰
          </button>
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-4">
            {['Home', 'Achievements', 'Projects', 'CV', 'Contact'].map((section) => (
              <li
                key={section}
                className="nav-item transform transition-transform duration-500 flex items-center"
                style={{ opacity: 0 }}
              >
                {section === 'CV' ? (
                  <button className="simple-hover-button" onClick={openCvModal}>
                    {section}
                  </button>
                ) : (
                  <Link
                    to={section.toLowerCase().replace(' ', '')}
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
        </div>

        {/* Mobile Menu */}
       <div
  className={`fixed top-0 right-0 h-full bg-gray-800/90 text-white shadow-lg transform ${
    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
  } transition-transform duration-300 w-1/2 sm:w-1/3  z-50`}
>

          <button
            className="absolute top-4 left-4 text-l "
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ✖
          </button>
          <ul className="flex flex-col items-start space-y-4 mt-12 ml-6">
            {['Home', 'Achievements', 'Projects', 'CV', 'Contact'].map((section) => (
              <li key={section} className="nav-item">
                {section === 'CV' ? (
                  <button
                    className="simple-hover-button"
                    onClick={() => {
                      openCvModal();
                      setIsMobileMenuOpen(false); // Close menu
                    }}
                  >
                    {section}
                  </button>
                ) : (
                  <Link
                    to={section.toLowerCase().replace(' ', '')}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="simple-hover-button cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                  >
                    {section}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
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
