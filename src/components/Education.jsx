// src/components/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { GiGraduateCap } from 'react-icons/gi';

const education = [
  {
    degree: 'Deploma in Information Technology',
    institution: 'Mechinagar Polytechnic Institute',
    period: '2020 - 2024',
    description: 'Specialized in Computer, Networking and Web Technologies. Graduated with distinction.'
  },
  {
    degree: 'SLC in Management',
    institution: 'Kakarvitta Secondary School',
    period: '2012',
    description: 'Relevant coursework: Data Structures, Web Development, Database Design, Algorithms.'
  },
  {
    degree: '+2 in Management',
    institution: 'Kakarvitta Secondary School',
    period: '2012 - 2014',
    description: 'Relevant coursework: Data Structures, Web Development, Database Design, Algorithms.'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-28 bg-black/40 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center text-white"
        >
          <span className="gradient-text">Education</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: '5rem' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6"
            >
              <GiGraduateCap size={32} className="text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-1 text-white">{edu.degree}</h3>
              <p className="text-purple-400 mb-2">{edu.institution}</p>
              <p className="text-sm text-gray-400 mb-3">{edu.period}</p>
              <p className="text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;