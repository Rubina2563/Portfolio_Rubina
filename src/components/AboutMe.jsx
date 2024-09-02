// src/components/AboutMe.jsx
import React from 'react';

const AboutMe = () => {
  return (
    <section className="bg-gray-100 p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4 text-center">About Me</h2>
      <p className="text-gray-700">
        Hi, I'm Rubina Tazak, a passionate full-stack developer with a focus on creating interactive and responsive web applications. I have completed my full-stack web development certification from upGrad. I enjoy learning new technologies and applying them in my projects.
      </p>
      <ul className="mt-4 list-disc list-inside text-gray-700">
        <li>Achievement 1: Completed upGrad full-stack certification</li>
        <li>Achievement 2: Developed a successful e-commerce platform</li>
        <li>Certificate: Web Development Certification from upGrad</li>
      </ul>
    </section>
  );
};

export default AboutMe;