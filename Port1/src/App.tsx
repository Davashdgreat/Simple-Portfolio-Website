// import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Intro from './components/introduction'
import About from './components/about'
import Projects from './components/projects'
import Skills from './components/skills'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contact />      
      <Footer />      
    </>
  )
}

export default App
