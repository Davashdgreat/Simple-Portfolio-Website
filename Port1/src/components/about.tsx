import React, { useState } from 'react';
import { HiChevronRight, HiChevronDown } from 'react-icons/hi';

const About: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  // Function to toggle the accordion
  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 bg-none" 
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-6 motion-preset-bounce ">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          I am a passionate developer with a focus on building dynamic and
          user-friendly web applications. I specialize in React, TypeScript, and
          creating clean, intuitive interfaces. I have worked on a variety of
          projects, both individually and as part of a team, and I am constantly
          improving my skills to stay up to date with the latest technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-200">Skills</h3>

            {/* Frontend Accordion */}
            <div className="space-y-2 animate-pulse">
              <button
                onClick={() => toggleAccordion('frontend')}
                className="w-full text-left bg-gray-200 p-4 rounded-lg font-semibold text-gray-900 hover:bg-gray-300 flex justify-between items-center"
              >
                Frontend
                <span>
                  {activeAccordion === 'frontend' ? (
                    <HiChevronDown className="text-xl" />
                  ) : (
                    <HiChevronRight className="text-xl" />
                  )}
                </span>
              </button>
              {activeAccordion === 'frontend' && (
                <ul className="pl-6 space-y-2 text-gray-200 text-left list-disc">
                  <li>React & TypeScript</li>
                  <li>HTML, CSS, and Tailwind CSS</li>
                  <li>JavaScript (ES6+)</li>
                  <li>Responsive Design & Development</li>
                  <li>State Management (Redux, Context API)</li>
                </ul>
              )}
            </div>

            {/* Backend Accordion */}
            <div className="space-y-2 animate-pulse">
              <button
                onClick={() => toggleAccordion('backend')}
                className="w-full text-left bg-gray-200 p-4 rounded-lg font-semibold text-gray-900 hover:bg-gray-300 flex justify-between items-center"
              >
                Backend
                <span>
                  {activeAccordion === 'backend' ? (
                    <HiChevronDown className="text-xl" />
                  ) : (
                    <HiChevronRight className="text-xl" />
                  )}
                </span>
              </button>
              {activeAccordion === 'backend' && (
                <ul className="pl-6 space-y-2 text-gray-200 text-left list-disc">
                  <li>PHP</li>
                  <li>MySQL</li>     
                  <li>API Integration</li>             
                  <li>Authentication & Authorization (JWT, OAuth)</li>
                </ul>
              )}
            </div>

            {/* Database Administration Accordion */}
            <div className="space-y-2 animate-pulse">
              <button
                onClick={() => toggleAccordion('database')}
                className="w-full text-left bg-gray-200 p-4 rounded-lg font-semibold text-gray-900 hover:bg-gray-300 flex justify-between items-center"
              >
                Database Administration
                <span>
                  {activeAccordion === 'database' ? (
                    <HiChevronDown className="text-xl" />
                  ) : (
                    <HiChevronRight className="text-xl" />
                  )}
                </span>
              </button>
              {activeAccordion === 'database' && (
                <ul className="pl-6 space-y-2 text-gray-200 text-left list-disc">
                  <li>MySQL</li>
                  <li>XAMPP</li>
                  <li>Microsoft Office</li>
                  <li>Documentation with Notion</li>
                </ul>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">Experience</h3>
            <div className="space-y-4 text-left">
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="text-xl font-semibold text-gray-200">
                  Frontend Developer at AFT Solutions
                </h4>
                <p className="text-lg text-gray-300">
                  <p className='font-bold'>November 2024 – Present :</p> 
                  Developed responsive user interfaces
                  using React, TypeScript, and Tailwind CSS, improving application
                  performance and user experience.
                </p>
              </div>
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="text-xl font-semibold text-gray-200">
                  Intern at Oyo State Road Traffic Management Authority (OYRTMA)
                </h4>
                <p className="text-lg text-gray-300">
                  <p className='font-bold'>December 2023 – October 2024 :</p>
                  Managed a recruitment database, organized candidate information, and ensuring efficient data handling for better decision-making. By optimizing these systems, I supported the agency’s efforts in building a more organized and effective team, ultimately enhancing operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
