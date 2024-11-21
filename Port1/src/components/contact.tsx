import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [inViewLeft, setInViewLeft] = useState(false);
  const [inViewRight, setInViewRight] = useState(false);
  const [message, setMessage] = useState('');

  // Intersection observer callback
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === leftRef.current) {
          setInViewLeft(true);
        }
        if (entry.target === rightRef.current) {
          setInViewRight(true);
        }
      }
    });
  };

  // Setup Intersection Observer on mount
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // 50% of the element should be in the viewport
    });

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    // Cleanup observer on unmount
    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_hd6mfda', // Replace with your EmailJS service ID
          'template_wo3t1qc', // Replace with your EmailJS template ID
          formRef.current,
          'LzX7n4AsTWFXjbquP'   // Replace with your EmailJS public key
        )
        .then(
          (result) => {
            console.log(result.text);
            setMessage('Your message has been sent successfully!');
          },
          (error) => {
            console.log(error.text);
            setMessage('Failed to send your message. Please try again later.');
          }
        );
      formRef.current.reset();
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side - Socials */}
        <motion.div
          ref={leftRef}
          className="space-y-8 m-auto"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: inViewLeft ? 0 : -200, opacity: inViewLeft ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <h2 className="text-3xl font-bold text-gray-200">
            Reach out to me on my socials
          </h2>
          <div className="flex justify-center space-x-6 animate-bounce">
            <a href="https://github.com/Davashdgreat" target="_blank" rel="noopener noreferrer">
              <FaGithub size={32} className="text-gray-200 hover:text-gray-400" />
            </a>
            <a href="https://www.linkedin.com/in/ashaolu-david-1b4a091b6/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={32} className="text-gray-200 hover:text-gray-400" />
            </a>
            <a href="https://x.com/davash_i" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={32} className="text-gray-200 hover:text-gray-400" />
            </a>
            <a href="mailto:ashaoludavid1@gmail.com">
              <FaEnvelope size={32} className="text-gray-200 hover:text-gray-400" />
            </a>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          ref={rightRef}
          className="bg-white shadow-lg rounded-lg p-8"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: inViewRight ? 0 : 200, opacity: inViewRight ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Me</h3>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
            {message && (
              <p className="text-center text-green-600 mt-4">{message}</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
