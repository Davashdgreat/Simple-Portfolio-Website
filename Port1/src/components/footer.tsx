import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Side - Branding */}
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold">&copy; 2024 Davash</p>
        </div>

        {/* Right Side - Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/Davashdgreat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={24} className="hover:text-gray-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/ashaolu-david-1b4a091b6/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} className="hover:text-gray-400" />
          </a>
          <a
            href="https://x.com/davash_i"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter size={24} className="hover:text-gray-400" />
          </a>
          <a href="mailto:ashaoludavid1@gmail.com" aria-label="Email">
            <FaEnvelope size={24} className="hover:text-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
