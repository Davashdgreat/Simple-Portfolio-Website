import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import ThemeToggle from './themetoggle';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Side - Branding */}
        <div className="mb-4 md:mb-0">
          <a href="#" className="text-lg font-semibold">&copy; 2024 Davash</a>
        </div>

        {/* Right Side - Social Media Links */}
        <div className="flex space-x-6">
          <motion.a
            href="https://github.com/Davashdgreat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{ rotate: 360 }} // Add the rotation animation
            transition={{ duration: 0.5 }} // Control the speed of the animation
          >
            <FaGithub size={24} className="hover:text-gray-400" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ashaolu-david-1b4a091b6/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{ rotate: 360 }} // Add the rotation animation
            transition={{ duration: 0.5 }} // Control the speed of the animation
          >
            <FaLinkedin size={24} className="hover:text-gray-400" />
          </motion.a>
          <motion.a
            href="https://x.com/davash_i"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            whileHover={{ rotate: 360 }} // Add the rotation animation
            transition={{ duration: 0.5 }} // Control the speed of the animation
          >
            <FaTwitter size={24} className="hover:text-gray-400" />
          </motion.a>
          <motion.a
            href="mailto:ashaoludavid1@gmail.com"
            aria-label="Email"
            whileHover={{ rotate: 360 }} // Add the rotation animation
            transition={{ duration: 0.5 }} // Control the speed of the animation
          >
            <FaEnvelope size={24} className="hover:text-gray-400" />
          </motion.a>
        </div>

        <ThemeToggle/>

      </div>
    </footer>
  );
};

export default Footer;
