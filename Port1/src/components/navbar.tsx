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
    <nav className="bg-transparent backdrop-blur-custom  text-white fixed w-full z-10 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer" onClick={() => scrollToSection('home')}>
          Davash
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-8">
          <span className="cursor-pointer hover:text-gray-300 font-bold" onClick={() => scrollToSection('about')}>
            About
          </span>
          <span className="cursor-pointer hover:text-gray-300 font-bold" onClick={() => scrollToSection('projects')}>
            Projects
          </span>
          <span className="cursor-pointer hover:text-gray-300 font-bold" onClick={() => scrollToSection('skills')}>
            Skills
          </span>
          <span className="cursor-pointer hover:text-gray-300 font-bold" onClick={() => scrollToSection('contact')}>
            Contact
          </span>
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
        <div
            className="absolute top-16 right-0 bg-transparent backdrop-blur-2xl w-full md:hidden flex flex-col items-center space-y-4 py-4
            opacity-0, translate-y-[-20px], transition-all duration-700 ease-in-out
            opacity-100 translate-y-0"
        >
            <span className="cursor-pointer hover:text-gray-300 font-bold" onClick={() => scrollToSection('about')}>
            About
            </span>
            <span className="cursor-pointer hover:text-gray-300 font-bold" onClick={() => scrollToSection('projects')}>
            Projects
            </span>
            <span className="cursor-pointer hover:text-gray-300 font-bold" onClick={() => scrollToSection('skills')}>
            Skills
            </span>
            <span className="cursor-pointer hover:text-gray-300 font-bold" onClick={() => scrollToSection('contact')}>
            Contact
            </span>
        </div>
        )}


      </div>
    </nav>
  );
};

export default Navbar;
