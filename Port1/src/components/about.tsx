import React, {useState} from 'react';
import { HiChevronRight, HiChevronDown } from 'react-icons/hi';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {

  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  // Function to toggle the accordion
  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const variants = {
    open: { height: 'auto', opacity: 1 },
    closed: { height: 0, opacity: 0 },
  };

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

  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-none dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center ">
        {/* Animate the heading */}
        <motion.h2
          ref={ref}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 dark:text-gray-100 "
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {'About Me'.split('').map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h2>

        <p className="text-lg md:text-xl text-gray-800 mb-8 max-w-3xl mx-auto dark:text-gray-100">
          I am a passionate developer with a focus on building dynamic and
          user-friendly web applications. I specialize in React, TypeScript, and
          creating clean, intuitive interfaces. I have worked on a variety of
          projects, both individually and as part of a team, and I am constantly
          improving my skills to stay up to date with the latest technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Skills</h3>

            {/* Frontend Accordion */}
            <div className="space-y-2">
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
              <motion.ul
                initial="closed"
                animate={activeAccordion === 'frontend' ? 'open' : 'closed'}
                variants={variants}
                transition={{ duration: 0.4 }}
                className="pl-6 space-y-2 text-gray-900 text-left list-disc overflow-hidden dark:text-gray-100"
              >
                <li>React & TypeScript</li>
                <li>HTML, CSS, and Tailwind CSS</li>
                <li>JavaScript (ES6+)</li>
                <li>Responsive Design & Development</li>
                <li>State Management (Redux, Context API)</li>
              </motion.ul>
            </div>

            {/* Backend Accordion */}
            <div className="space-y-2">
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
              <motion.ul
                initial="closed"
                animate={activeAccordion === 'backend' ? 'open' : 'closed'}
                variants={variants}
                transition={{ duration: 0.4 }}
                className="pl-6 space-y-2 text-gray-900 text-left list-disc overflow-hidden dark:text-gray-100"
              >
                <li>PHP</li>
                <li>MySQL</li>
                <li>API Integration</li>
                <li>Authentication & Authorization (JWT, OAuth)</li>
              </motion.ul>
            </div>

            {/* Database Administration Accordion */}
            <div className="space-y-2">
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
              <motion.ul
                initial="closed"
                animate={activeAccordion === 'database' ? 'open' : 'closed'}
                variants={variants}
                transition={{ duration: 0.4 }}
                className="pl-6 space-y-2 text-gray-900 text-left list-disc overflow-hidden dark:text-gray-100"
              >
                <li>MySQL</li>
                <li>XAMPP</li>
                <li>Microsoft Office</li>
                <li>Documentation with Notion</li>
              </motion.ul>
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Experience</h3>
            <div className="space-y-4 text-left">
              <div className="border-l-4 border-gray-500 pl-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Frontend Developer at AFT Solutions
                </h4>
                <p className="text-lg text-gray-900 dark:text-gray-100">
                  <p className="font-bold">October 2024 – December 2024 :</p>
                  Developed responsive user interfaces using React, TypeScript,
                  and Tailwind CSS, improving application performance and user
                  experience.
                </p>
              </div>
              <div className="border-l-4 border-gray-500 pl-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Intern at Oyo State Road Traffic Management Authority (OYRTMA)
                </h4>
                <p className="text-lg text-gray-900 dark:text-gray-100">
                  <p className="font-bold">December 2023 – October 2024 :</p>
                  Managed a recruitment database, organized candidate information,
                  and ensured efficient data handling for better decision-making.
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
