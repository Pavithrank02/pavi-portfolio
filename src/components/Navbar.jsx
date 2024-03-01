import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {


  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/');
  };

  return (
    <nav className="fixed-top navbar navbar-expand-lg shadow-sm p-4">
      <div className="container-fluid d-sm-flex flex-column flex-lg-row justify-content-center justify-content-lg-between">
        <div className="navbar-brand mb-4 mb-md-0 mb-lg-0" onClick={handleNavigation}>
          <img src={logo} alt="logo" width="30" height="auto" className="d-inline-block align-text-top cursor:pointer" />
          <span className="ms-2 fw-bold">paviportfolio</span>
          <FontAwesomeIcon icon="fa-solid fa-moon" />
        </div>

        <div onClick={toggleDarkMode} className="icon-container">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </div>

        <div className="">
          <NavLink to="/" className="link me-5">
            Home
          </NavLink>
          <NavLink to="/about" className="link me-5">
            About
          </NavLink>
          <NavLink to="/projects" className="link">
            Projects
          </NavLink>
        </div>

        <motion.div whileHover={{ scale: 1.2, rotate: 360 }}>
          <NavLink to="/contact" className="link">
            <button className="mt-5 m-lg-0 btn custom-btn fw-bold">Contact me</button>
          </NavLink>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
