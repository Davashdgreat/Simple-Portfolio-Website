import './App.css'
import Navbar from './components/navbar'
import Intro from './components/introduction'
import About from './components/about'
import Projects from './components/projects'
import Skills from './components/skills'
import Contact from './components/contact'
import Footer from './components/footer'
import { useEffect, useState } from 'react'

function App() {
  
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Show the "Scroll to Top" button when scrolling down
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true); // Show button when scrolled more than 300px
    } else {
      setShowScrollToTop(false); // Hide button when at the top
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => window.removeEventListener('scroll', handleScroll); // Clean up on component unmount
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll'
    });
  };

  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contact />      
      <Footer />    
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-gray-500 text-white p-4 rounded-full shadow-lg hover:bg-gray-400 transition duration-300 font-extrabold"
        >
              ↑
        </button>
      )} 
    </>
  )
}

export default App
