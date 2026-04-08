// src/components/Footer.jsx
import React from 'react';
import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 text-center text-gray-400 text-sm">
      <div className="container mx-auto px-6">
        <p className="flex items-center justify-center gap-1">
          Designed & built with <FiHeart size={14} className="text-red-400" /> by Pawan Shrestha
        </p>
        <p className="mt-2">© 2025 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;