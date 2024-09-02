// src/components/Project.jsx
import React from 'react';
import { projects } from '../data'; // Adjust the import path according to your project structure

const Project = () => {
  return (
    <section id="projects" className="py-10  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"> {/* Updated background color */}
      <h2 className="text-4xl font-bold text-center text-white mb-10">Projects</h2>
      <div className="container mx-auto px-5 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={project.screenshot}
              alt={project.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-white mb-3">{project.name}</h3>
              <p className="text-gray-300 mb-5">{project.description}</p>
              <div className="flex justify-between">
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                >
                  GitHub Link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
