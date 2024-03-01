import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { motion } from 'framer-motion'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar = () => {
  const handletheme = () => {

  }
  return (
    <nav className="bg-light navbar navbar-expand-lg shadow-sm p-4 ">
      <div className="container-fluid d-sm-flex flex-column flex-lg-row justify-content-center justify-content-lg-between ">
        <div className="navbar-brand mb-4 mb-md-0 mb-lg-0">
          <img src={logo} alt="logo" width="30" height="auto" className="d-inline-block align-text-top" />
          <span className="ms-2 fw-bold">paviportfolio</span>
          <FontAwesomeIcon icon="fa-solid fa-moon" />
        </div>

        <div className="">
          <NavLink to='/' className="link me-5">Home</NavLink>
          <NavLink to='/about' className="link me-5">About</NavLink>
          <NavLink to='/projects' className="link">Projects</NavLink>
        </div>

        <motion.div whileHover={{ scale: 1.2, rotate: 360 }}>
          <NavLink to='/contact' className="link">
            <button className='mt-5 m-lg-0 btn btn-primary custom-btn fw-bold'>Contact me</button>
          </NavLink>
        </motion.div>

      </div>
    </nav>
  )
}

export default Navbar