import React from 'react'
import { FaBootstrap } from 'react-icons/fa'
import { SiFlutter } from 'react-icons/si'
import {motion} from 'framer-motion'


import resume from '../assets/Pavithran Resume.pdf'

const About = () => {
  return (
    <div  className='container-fluid bg-light pt-5 d-flex flex-column align-items-center min-vh-100'>
      <motion.p animate={{ x: 0, scale: 1}} initial={{scale: 0}} transition= {{type: "spring", duration: 2}} className="text-center lead m-4">
        I'm a react frontend developer with 1+ years of experience in web development. I love creating responsive websites using ReactJS, JavaScript, HTML5, CSS3, Bootstrap, and Sass/Scss. 
        I enjoy creating website designs in Figma and converting UI designs into real websites. I've done multiple small projects to learn basics and now doing more complex projects. 
        {/* Apart form this, i'm learning flutter for my final year project (FYP) */}
      </motion.p>
      <motion.a href={resume} animate={{ x: 0, scale: 1}} initial={{scale: 0}} transition= {{type: "tween", duration: 2, delay: 1}} download className="btn btn-primary mt-5 custom-btn fw-bold">Download My Resume</motion.a>
      <h3 className='pt-5 pb-2 custom-color'>Languages and tools I use:</h3>

      <motion.p animate={{ x: 0, scale: 1}} initial={{scale: 0}} transition= {{type: "spring", delay: 2}} className='lead'>
        <img className='me-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
        <img className='m-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
        <img className='m-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="30" height="35"/>
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" width="35" height="35"/>
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="vscode" width="35" height="35"/>
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" width="35" height="35"/>
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="sass" width="35" height="35"/>
        <FaBootstrap className='m-2' style={{width:"35", height:"35", color: '#7a14f5'}}/>
        <img className='ms-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="figma" width="30" height="35"/>
      </motion.p>
    </div>
  )
}

export default About