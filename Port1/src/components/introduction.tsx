import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Intro: React.FC = () => {
    const [multxt] = useTypewriter({
        words: [' Ashaolu David', ' A Frontend Developer', ' A Database Administrator']
    })

  return (
    <section
      id="home"
      className="bg-gray-100 min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10"
    >
      {/* Left Side - Brief Info */}
      <div className="flex-1 text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          I'm 
          <span className="text-blue-500">{multxt}</span>
          <Cursor  cursorStyle='<'/> 👋
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-lg">
          I’m a passionate developer with experience in React, TypeScript, and
          building dynamic web applications. I love creating clean, user-friendly
          interfaces and bringing ideas to life through code.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
      </div>

      {/* Right Side - Profile Picture */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <img
          src="/src/assets/images/ME.jpg"
          alt="Your Name"
          className="w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default Intro;
