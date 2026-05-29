import React, { useEffect } from 'react';
import AOS from 'aos';
import NavbarComponent from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Trainings from './components/Trainings';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className="App">
      <NavbarComponent />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Trainings />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;