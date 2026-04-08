// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-28 bg-black/40 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={inView ? { opacity: 1, width: '5rem' } : {}}
          transition={{ delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ delay: 0.3 }}
>
            <h3 className="text-2xl font-bold mb-6">Let's work together</h3>
            <p className="text-gray-300 mb-8">
              I'm always excited to collaborate on interesting projects. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <ContactInfo icon={<FiMail size={20} />} text="sthapawan333@gmail.com" />
              <ContactInfo icon={<FiPhone size={20} />} text="+977-9824080705" />
              <ContactInfo icon={<FiMapPin size={20} />} text="Mechinagar-06, Jhapa, Nepal" />
            </div>
          </motion.div>

          
<motion.form
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 transition"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 transition resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold flex items-center justify-center gap-2"
            >
              Send Message <FiSend size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center gap-4 text-gray-300">
    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
      {icon}
    </div>
    <span>{text}</span>
  </div>
);

export default Contact;