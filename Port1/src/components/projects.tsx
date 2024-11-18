import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Open School Field',
      description:
        'A web app for renting school football fields, allowing users to book fields, agents to manage listings, and schools to offer rental spaces.',
      techStack: 'React, TypeScript, Tailwind CSS, Node.js, MySQL',
      link: 'https://github.com/Davashdgreat/schoolfieldrental-ui', // GitHub link (replace with a live link)
    },
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio website showcasing my work, skills, and experience, built with React, TypeScript, and Tailwind CSS.',
      techStack: 'React, TypeScript, Tailwind CSS',
      link: 'https://github.com/Davashdgreat/portfolio', // GitHub link (replace with live link)
    },
    {
        title: 'Weather Forecast App',
        description:
          'A Weather forecast app to help gain access to weather conditions and details all over the world, built with React and Openweather API.',
        techStack: 'React, Firebase, Tailwind CSS, API Integration',
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
    <section id="projects" className="py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-6">
          My Projects
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Here are a few projects I've worked on. Each project reflects my passion
          for developing user-friendly, dynamic web applications using modern technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500 mb-6">Tech Stack: {project.techStack}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition"
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
