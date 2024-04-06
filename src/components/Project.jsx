import React, { useEffect } from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../App.css'
function Project({ id, image, name, stack, live, source, desc }) {
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
        <motion.div ref={ref} initial="hidden" variants={variants} animate={controls} transition={{ type: "tween", duration: 2 }}>
            <div className=" mb-5 " style={{ maxWidth: '900px' }}>
                <div className="g-0 d-flex flex-column flex-lg-row align-items-center sm-align-items-center">
                    <div className="">
                        <img src={image} className="img-fluid rounded-start project-img" alt={name} />
                    </div>
                    <div className="">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text text-align-justify">{desc}</p>
                            <div className="mt-3 align-text-bottom">
                                <p className="card-text">{stack}</p>
                                <p className="card-text d-flex gap-4">
                                    <a href={live} target="_blank" rel="noreferrer" className='link'>
                                        Live Site <BiLinkExternal style={{ color: 'hsl(205, 72%, 37%)' }} />
                                    </a>
                                    <a href={source} target="_blank" rel="noreferrer" className='link'>
                                        Source Code <AiOutlineGithub style={{ color: 'hsl(205, 72%, 37%)' }} />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

    )
}

export default Project