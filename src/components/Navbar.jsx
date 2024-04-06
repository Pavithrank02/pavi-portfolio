import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import '../App.css'
const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isMobileView, setIsMobileView] = useState(false); // State to track mobile view

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
    document.body.classList.toggle('light-mode', isDarkMode);
  };

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/');
  };

  // Function to check if screen size is in mobile view
  const checkMobileView = () => {
    if (window.innerWidth <= 968) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };

  // Check mobile view on component mount
  useEffect(() => {
    checkMobileView();
    window.addEventListener('resize', checkMobileView); // Event listener for window resize
    return () => {
      window.removeEventListener('resize', checkMobileView); // Cleanup event listener on component unmount
    };
  }, []);

  return (
    <nav className="fixed-top navbar navbar-expand-lg shadow-sm p-4">
      <div className="container-fluid d-sm-flex flex-column flex-lg-row justify-content-center justify-content-lg-between">
        {!isMobileView && (
          <div className="navbar-brand mb-4 mb-md-0 mb-lg-0" onClick={handleNavigation}>
            <img src={logo} alt="logo" width="30" height="auto" className="d-inline-block align-text-top cursor-pointer" />
            <span className="ms-2 fw-bold">paviportfolio</span>
          </div>
        )}
        <div onClick={toggleDarkMode} className="icon-container">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </div>

        <div className="d-flex flex-row">
          <motion.div whileHover={{ scale: 1.2 }}>
            <ScrollLink
              to="home"
              smooth={true}
              duration={1000}
              className="link me-5"
              spy={true}
              exact="true"
              hashSpy={true}
              activeClass="active-link"
            >
              Home
            </ScrollLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <ScrollLink
              to="about"
              smooth={true}
              duration={1000}
              className="link me-5"
              spy={true}
              exact="true"
              hashSpy={true}
              activeClass="active-link"
            >
              About
            </ScrollLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <ScrollLink
              to="project"
              smooth={true}
              duration={1000}
              className="link me-5"
              spy={true}
              exact="true"
              hashSpy={true}
              activeClass="active-link"
            >
              Projects
            </ScrollLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <ScrollLink
              to="articles"
              smooth={true}
              duration={1000}
              className="link me-5"
              spy={true}
              exact="true"
              hashSpy={true}
              activeClass="active-link"
            >
              Articles
            </ScrollLink>
          </motion.div>
        </div>

        {!isMobileView && (
          <motion.div whileHover={{ scale: 1.2, rotate: 360 }}>
            <NavLink to="/contact" className="link">
              <button className="mt-5 m-lg-0 btn custom-btn fw-bold">Contact me</button>
            </NavLink>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
