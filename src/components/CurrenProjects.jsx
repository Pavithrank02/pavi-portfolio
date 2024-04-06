import React, { useEffect } from 'react'
import data from '../data.js'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import InprogressProjects from './InprogressProjects.js'
import Project from './Project.jsx'

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('show');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };
  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className="section">
      <div className="p-5">
        {/* <InprogressProjects /> */}
        {/* <h2 className='custom-font pb-5 text-center'>Completed: </h2> */}
        {data.ProjectsData.map((project) => {
          return (
            <div className="row">
              <div className="col-12 d-flex justify-content-center" key={project.id}>
                <Project
                  id={project.id}
                  image={project.img}
                  name={project.name}
                  stack={project.stack}
                  live={project.live}
                  source={project.source}
                  desc={project.description}
                />
              </div>
            </div>

          )
        })}
      </div>
    </motion.div>
  )
}

export default Projects