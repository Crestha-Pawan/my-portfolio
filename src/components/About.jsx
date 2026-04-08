// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiGlobe, FiZap, FiHeart } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4 text-center">
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12" />

          <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience crafting beautiful,
              performant web applications. I thrive at the intersection of design and technology,
              creating seamless digital experiences that leave lasting impressions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <FeatureCard
              icon={<FiCode size={32} />}
              title="Clean Code"
              description="Write maintainable, scalable, and well-documented solutions"
              inView={inView}
              delay={0.1}
            />
            <FeatureCard
              icon={<FiZap size={32} />}
              title="Fast Performance"
              description="Optimize for speed and smooth user interactions"
              inView={inView}
              delay={0.2}
            />
            <FeatureCard
              icon={<FiGlobe size={32} />}
              title="Responsive Design"
              description="Pixel-perfect experiences on any device"
              inView={inView}
              delay={0.3}
            />
            <FeatureCard
              icon={<FiHeart size={32} />}
              title="User Focused"
              description="Intuitive interfaces that users love to interact with"
              inView={inView}
              delay={0.4}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, inView, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
    className="glass-card p-6 text-center group"
  >
    <div className="text-purple-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </motion.div>
);

export default About;