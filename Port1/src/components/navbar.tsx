import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="bg-transparent backdrop-blur-lg text-black fixed w-full shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer" onClick={() => scrollToSection('home')}>
          Davash
        </div>

        {/* Links for larger screens */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li className="cursor-pointer hover:text-gray-300" onClick={() => scrollToSection('about')}>
            About
          </li>
          <li className="cursor-pointer hover:text-gray-300" onClick={() => scrollToSection('projects')}>
            Projects
          </li>
          <li className="cursor-pointer hover:text-gray-300" onClick={() => scrollToSection('skills')}>
            Skills
          </li>
          <li className="cursor-pointer hover:text-gray-300" onClick={() => scrollToSection('contact')}>
            Contact
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
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
          <ul className="absolute top-16 right-0 bg-gray-800 w-full md:hidden flex flex-col items-center space-y-4 py-4">
            <li className="cursor-pointer hover:text-gray-300" onClick={() => scrollToSection('about')}>
              About
            </li>
            <li className="cursor-pointer hover:text-gray-300" onClick={() => scrollToSection('projects')}>
              Projects
            </li>
            <li className="cursor-pointer hover:text-gray-300" onClick={() => scrollToSection('skills')}>
              Skills
            </li>
            <li className="cursor-pointer hover:text-gray-300" onClick={() => scrollToSection('contact')}>
              Contact
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;