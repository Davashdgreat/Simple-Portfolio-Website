import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const Projects: React.FC = () => {

   // Controls for Framer Motion animations
   const controls = useAnimation();

   // Observe when the heading enters the viewport
   const [ref, inView] = useInView({
     triggerOnce: true, // Trigger animation only once
     threshold: 0.1, // Trigger when 10% of the heading is visible
   });
 
   // Start the animation when the heading is in view
   React.useEffect(() => {
     if (inView) {
       controls.start('visible');
     }
   }, [controls, inView]);
 
   // Define animation variants
   const letterVariants = {
     hidden: { opacity: 0, y: 20 },
     visible: {
       opacity: 1,
       y: 0,
       transition: {
         type: 'spring',
         damping: 10,
         stiffness: 100,
       },
     },
   };
 
   const containerVariants = {
     visible: {
       transition: {
         staggerChildren: 0.1, // Stagger each letter's animation
       },
     },
   };

  const projects = [
    {
      title: 'Open School Field',
      description:
        'A web app for renting school football fields, allowing users to book fields, agents to manage listings, and schools to offer rental spaces, increasing the credibilty and accountability of primary and secondary institutions',
      techStack: 'React, TypeScript, Tailwind CSS',
      link: 'https://open-school-field1.vercel.app/', // GitHub link (replace with a live link)
    },
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio website built with React, TypeScript, and Tailwind CSS, showcasing my projects, technical skills, and professional experience in an interactive and visually appealing design.',
      techStack: 'React, TypeScript, Tailwind CSS',
      link: 'https://davashfolio1.vercel.app/', // GitHub link (replace with live link)
    },
    {
        title: 'Weather Forecast App',
        description:
          'A weather forecast app built with React and OpenWeather API, providing global weather conditions and detailed forecasts that can be shared via whatsapp in an intuitive interface.',
        techStack: 'HTML, CSS, Javascript, React, Tailwind CSS, Openweather API Integration',
        link: 'https://weather-app-delta-seven-75.vercel.app/', // GitHub link (replace with live link)
      },
    {
      title: 'Task Manager App',
      description:
        'A task management app to help organize personal tasks with features like adding, editing, and deleting tasks, built with Javascript.',
      techStack: 'HTML, CSS, JavaScript, Tailwind CSS',
      link: 'https://to-do-list-khaki-six-62.vercel.app/', // GitHub link (replace with live link)
    },
    {
        title: 'Quiz App',
        description:
          'A Simple quiz app, to know more about me, with strict controls and no bypassing!. Click below to see if you know alot about me!😂',
        techStack: 'HTML, CSS, JavaScript, Tailwind CSS',
        link: 'https://quiz-app-nine-jade.vercel.app/', // GitHub link (replace with live link)
      },
      {
        title: 'Snake Xenzia',
        description:
          'A Simple snake xenzia game, made functional for both web and mobile players, can you get the highest score?',
        techStack: 'HTML, CSS, JavaScript, Tailwind CSS',
        link: 'https://snake-xenzia-beige.vercel.app/', // GitHub link (replace with live link)
      }
    
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-20 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          ref={ref}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 dark:text-gray-100"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {'My Projects'.split('').map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h2>
        <p className="text-lg md:text-xl text-gray-900 mb-10 max-w-3xl mx-auto dark:text-gray-100">
          Here are a few projects I've worked on. Each project reflects my passion
          for developing user-friendly, dynamic web applications using modern technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105 group relative"
              >

              {/* Project content */}
                <div className="p-6 transition-colors duration-800 group-hover:bg-gradient-to-r group-hover:from-gray-400 group-hover:to-gray-600 rounded-lg cursor-pointer">

                  {/* Title */}
                    <h3 className="text-2xl font-semibold text-gray-900 transition-colors duration-500 group-hover:text-white mb-4">
                      {project.title}
                    </h3>

                  {/* Description */}
                    <p className="text-gray-700 transition-colors duration-500 group-hover:text-gray-200 mb-4">
                      {project.description}
                    </p>

                  {/* Tech Stack */}
                    <p className="text-sm text-gray-500 transition-colors duration-500 group-hover:text-gray-300 mb-6">
                      Tech Stack: {project.techStack}
                    </p>

                  {/* Link */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gray-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transition"
                    >
                      View Project
                    </a>

                </div>

            </div>

            
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
