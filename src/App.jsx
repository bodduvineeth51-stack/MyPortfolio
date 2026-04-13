import React from 'react'
import Navbar from './Navbar/Navbar';
import Hero from './HeroSection/Hero';
import About from './WhoAmiSection/index';
import Projects from './Projects/index';
import Contact from './Footer/index'; 
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      
    </div>
  )
}

export default App
