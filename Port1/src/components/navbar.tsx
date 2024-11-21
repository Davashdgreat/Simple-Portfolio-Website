import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent backdrop-blur-custom text-white fixed w-full z-10 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">
          <a href="#">Davash</a>
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="about" // Target section id
            smooth={true} // Enable smooth scroll
            offset={-60} // Adjust for fixed navbar height
            duration={500} // Duration of the scroll animation (ms)
            className="cursor-pointer hover:text-gray-300 font-bold"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            offset={-60}
            duration={500}
            className="cursor-pointer hover:text-gray-300 font-bold"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            offset={-60}
            duration={500}
            className="cursor-pointer hover:text-gray-300 font-bold"
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth={true}
            offset={-60}
            duration={500}
            className="cursor-pointer hover:text-gray-300 font-bold"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-16 right-0 bg-white text-gray-700 backdrop-blur-2xl w-full md:hidden flex flex-col items-center space-y-4 py-4">
            <Link
              to="about"
              smooth={true}
              offset={-60}
              duration={500}
              className="cursor-pointer hover:text-gray-300 font-bold"
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              offset={-60}
              duration={500}
              className="cursor-pointer hover:text-gray-300 font-bold"
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              offset={-60}
              duration={500}
              className="cursor-pointer hover:text-gray-300 font-bold"
            >
              Skills
            </Link>
            <Link
              to="contact"
              smooth={true}
              offset={-60}
              duration={500}
              className="cursor-pointer hover:text-gray-300 font-bold"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
