import React from 'react';
import { FaBootstrap, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

import resume from '../assets/PavithranKResume.pdf';

const About = () => {
  return (
    <div className='container-fluid pt-5 d-flex flex-column align-items-center min-vh-100'>
      <motion.p animate={{ x: 0, scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ type: "spring", duration: 2 }}
        className="text-center lead m-4"
        style={{ maxWidth: '50vw' }}>
        I'm a React frontend developer with 1+ years of experience in web development. I love creating responsive websites using ReactJS, JavaScript, HTML5, CSS3, Bootstrap, and Sass/Scss.
        I enjoy creating website designs in Figma and converting UI designs into real websites. I've done multiple small projects to learn basics and now doing more complex projects.
      </motion.p>
      <motion.a href={resume} animate={{ x: 0, scale: 1 }} initial={{ scale: 0 }} transition={{ type: "tween", duration: 2, delay: 1 }} download className="btn btn-primary mt-5 custom-btn fw-bold">Download My Resume</motion.a>
      <h3 className='pt-5 pb-2'>Languages and tools I use:</h3>

      <motion.p animate={{ x: 0, scale: 1 }} initial={{ scale: 0 }} transition={{ type: "spring", delay: 2 }} className='lead'>
        <img className='me-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" />
        <img className='m-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
        <img className='m-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="30" height="35" />
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" width="35" height="35" />
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="vscode" width="35" height="35" />
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" width="35" height="35" />
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="sass" width="35" height="35" />
        <FaBootstrap className='m-2' style={{ width: "35", height: "35", color: '#7a14f5' }} />
        <img className='ms-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="figma" width="30" height="35" />
      </motion.p>

      {/* Social media icons motion div */}
      <h3 className='pt-5 '>Connect Me:</h3>
      <motion.div animate={{ x: 0, scale: 1 }} initial={{ scale: 0 }} transition={{ type: "spring", delay: 2 }} className="d-flex justify-content-center">
        <motion.a href="https://www.linkedin.com/in/pavithrank12/" target="_blank" rel="noopener noreferrer" className="me-3">
          <FaLinkedin size={32} />
        </motion.a>
        <motion.a animate={{ x: 0, scale: 1 }} initial={{ scale: 0 }} transition={{ type: "spring", delay: 2 }} href="https://github.com/Pavithrank02" target="_blank" rel="noopener noreferrer">
          <FaGithub size={32} />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default About;
