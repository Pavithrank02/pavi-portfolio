import React, { useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom'
import SharedLayout from './components/SharedLayout';
import './App.css'

// Import `React.lazy` for other components
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Projects = React.lazy(() => import('./components/CurrenProjects'));
const Contact = React.lazy(() => import('./components/Contact'));
const MediumArticles = React.lazy(() => import('./components/MediumArticles'));
const Footer = React.lazy(() => import('./components/Footer'));

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function App() {
  useEffect(() => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      window.scrollTo({
        top: homeSection.offsetTop,
        behavior: 'smooth',
      });
    }
  }, []);

  return (

    <BrowserRouter>
      <div>
        <SharedLayout />
        <motion.div initial="hidden" animate="show" variants={containerVariants}>
          <div id="home" className="section">
            <Home />
          </div>
          <div id="about" className="section">
            <About />
          </div>
          <div id="project" className="section">
            <Projects />
          </div>
          <div id="contact" className="section">
            <Contact />
          </div>
          <div id="articles" className="section">
            <MediumArticles />
          </div>
          <div>
            <Footer />
          </div>
        </motion.div>
      </div>
    </BrowserRouter>
  );
}

export default App;
