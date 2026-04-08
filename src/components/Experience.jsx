// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase } from 'react-icons/fi';

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: 'Leading frontend development for enterprise SaaS products, mentoring junior devs, and implementing design systems.'
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Agency Co.',
    period: '2020 - 2022',
    description: 'Built responsive web applications for clients across e-commerce, healthcare, and fintech sectors.'
  },
  {
    title: 'Junior Web Developer',
    company: 'Startup Hub',
    period: '2018 - 2020',
    description: 'Developed and maintained client websites, collaborated with design team, and optimized performance.'
  }
];

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="experience" className="py-28 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={inView ? { opacity: 1, width: '5rem' } : {}}
          transition={{ delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"
        />

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500" />
          
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} index={idx} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

{experiences.map((exp, idx) => {
    const isEven = idx % 2 === 0;
  
  return (
    <motion.div
  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`relative flex flex-col md:flex-row gap-6 mb-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-6 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
        <FiBriefcase size={14} className="text-white" />
      </div>
      
      <div className="flex-1 md:w-1/2 pl-12 md:pl-0">
        <div className={`glass-card p-6 ${isEven ? 'md:mr-6' : 'md:ml-6'}`}>
        <h3 className="text-white font-bold mb-1">{exp.title}</h3>
        <p className="text-purple-400 mb-2">{exp.company}</p>
        <p className="text-gray-300 mb-3">{exp.period}</p>
        <p className="text-gray-200">{exp.description}</p>
        </div>
      </div>
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
})};

export default Experience;