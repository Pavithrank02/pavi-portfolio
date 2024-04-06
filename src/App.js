import SharedLayout from './components/SharedLayout';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/CurrenProjects'
import Contact from './components/Contact';
import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MediumArticles from './components/MediumArticles';
import './App.css'
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
        </motion.div>
      </div>
    </BrowserRouter>
  )


}

export default App;
