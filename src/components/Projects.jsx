// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: 'AI Image Generator',
    description: 'Full-stack app using OpenAI API, React, and Node.js to generate unique images from text prompts.',
    tech: ['React', 'Node.js', 'OpenAI', 'Tailwind'],
    github: '#',
    live: '#',
    image: 'https://images.unsplash.com/photo-1545235617-7a424c1a60cc?w=600&h=400&fit=crop'
  },
  {
    title: 'EcoTrack Dashboard',
    description: 'Real-time carbon footprint tracker with interactive maps and analytics for businesses.',
    tech: ['Vue', 'D3.js', 'Firebase', 'Mapbox'],
    github: '#',
    live: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
  },
  {
    title: 'Portfolio 3.0',
    description: 'Modern portfolio with advanced animations, glassmorphism, and fully responsive design.',
    tech: ['React', 'Framer Motion', 'Tailwind'],
    github: '#',
    live: '#',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 bg-black/40 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center text-white"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: '5rem' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay: index * 0.15, duration: 0.5 }}
    whileHover={{ y: -10 }}
    className="glass-card overflow-hidden group"
  >
    <div className="relative overflow-hidden h-48">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <FaGithub size={20} />
        </a>
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <FiExternalLink size={20} />
        </a>
      </div>
    </div>
  </motion.div>
);

export default Projects;