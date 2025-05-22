import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import '../App.css'; // CSS file for stylings

function Footer() {
  const date = new Date()
  console.log(date)
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3 className="footer__sectionTitle">Pages</h3>
          <ul className="footer__sectionLinks">
            <div className="d-flex flex-column">
              <motion.div whileHover={{ scale: 1.1, cursor: 'pointer' }}>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  hashSpy={true}
                >
                  Home
                </ScrollLink>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, cursor: 'pointer' }}>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  exact="true"
                  hashSpy={true}
                >
                  About
                </ScrollLink>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, cursor: 'pointer' }}>
                <ScrollLink
                  to="project"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  exact="true"
                  hashSpy={true}
                >
                  Projects
                </ScrollLink>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, cursor: 'pointer' }}>
                <ScrollLink
                  to="articles"
                  smooth={true}
                  duration={1000}
                  exact="true"
                >
                  Articles
                </ScrollLink>
              </motion.div>
            </div>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div className="footer__section">
          <h3 className="footer__sectionTitle">Connect with me via</h3>
          <ul className="footer__sectionLinks">
            <motion.a animate={{ x: 0, scale: 1 }} initial={{ scale: 0 }} transition={{ type: "spring", delay: 2 }} rel="noopener noreferrer">
              <BiLogoGmail size={32} />: pavithrank02@gmail.com
            </motion.a>
            <motion.a animate={{ x: 0, scale: 1 }} initial={{ scale: 0 }} transition={{ type: "spring", delay: 2 }} rel="noopener noreferrer">
              <FaWhatsapp size={32} />: 9790436040
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/pavithrank12/" target="_blank" rel="noopener noreferrer" className="me-3">
              <FaLinkedin size={32} />
            </motion.a>
            <motion.a animate={{ x: 0, scale: 1 }} initial={{ scale: 0 }} transition={{ type: "spring", delay: 2 }} href="https://github.com/Pavithrank02" target="_blank" rel="noopener noreferrer">
              <FaGithub size={32} />:
            </motion.a>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div className="footer__section">
          <h3 className="footer__sectionTitle">Services </h3>
          <ul className="footer__sectionLinks">
            <li>Frontend Development</li>
            <li>Mentor</li>
            <li>Career Guidance</li>
            {/* <li>Amazon Currency Converter</li> */}
            {/* Add more links as needed */}
          </ul>
        </div>
        {/* Add more sections as needed */}
      </div>
      <div className="footer__bottom">
        <div className="footer__logo">Pavithran K</div>
        <div className="footer__copyright">© {date.getFullYear()} </div>
      </div>
    </footer>
  );
}

export default Footer;
