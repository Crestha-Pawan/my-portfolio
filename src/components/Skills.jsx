// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillsData = [
  { name: 'React', level: 92, color: '#61DAFB' },
  { name: 'JavaScript/TypeScript', level: 88, color: '#F7DF1E' },
  { name: 'Node.js', level: 85, color: '#339933' },
  { name: 'Python', level: 80, color: '#3776AB' },
  { name: 'Tailwind CSS', level: 90, color: '#06B6D4' },
  { name: 'GraphQL', level: 78, color: '#E10098' },
];

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="skills" className="py-28 bg-black/40 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={inView ? { opacity: 1, width: '5rem' } : {}}
          transition={{ delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"
        />

        <div ref={ref} className="max-w-3xl mx-auto space-y-6">
        {skillsData.map((skill, index) => (
  <motion.div
    key={skill.name}
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
  >
    <div className="flex justify-between mb-2 text-white">
      <span className="font-medium">{skill.name}</span>
      <span>{skill.level}%</span>
    </div>
    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: skill.color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: index * 0.1 }}
      />
    </div>
  </motion.div>
))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-16">
          {['Git', 'Docker', 'AWS', 'Figma', 'MongoDB', 'PostgreSQL'].map((tool, i) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + i * 0.05 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ skill, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill.name}</span>
        <span className="text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
        />
      </div>
    </motion.div>
  );
};

export default Skills;