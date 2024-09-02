// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Projects from '../components/Projects';
import CV from '../components/CV';
import Contact from '../components/Contact';
import Loader from '../components/Loader';
import Achievements from '../components/Achievements'; // Correct import

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulates loading time
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="achievements" className="mt-20">
        <Achievements />
      </section>
       <section id="projects" className="mt-20">
        <Projects />
      </section>
      <CV />
       <section id="contact" className="mt-20">
        <Contact />
      </section>
      
    </div>
  );
};

export default Home;
