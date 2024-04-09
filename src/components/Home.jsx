import React, { useEffect, useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import { NavLink } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const controls = useAnimation();
  const [quote, setQuote] = useState("")
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true // Optional: Remove if you want the animation to trigger every time 50% is visible
  });
  const getSimilarMovies = async () => {
    try {
      const data = await fetch("https://favqs.com/api/qotd");
      if (!data.ok) {
        throw new Error('Failed to fetch data');
      }
      const json = await data.json();
      setQuote(json.quote);
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  useEffect(() => {
    getSimilarMovies();
  }, []);
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
      <section className="p-5 min-vh-100 mt-10">
        <div className='container-fluid'>
          <div className='d-sm-flex align-items-center justify-content-around md-flex'>
            <motion.div whileHover={{ scale: 1.5 }} className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start'>
              <h1 className=''>Hi, I'm Pavithran K</h1>
              <h1 className='fw-bold custom-font'>Frontend Developer.</h1>
              <p className='pt-5'>Frontend Development / ReactJS </p>
              <NavLink to='/projects'><button className='btn btn-primary custom-btn ps-5 pe-5 fw-bold mt-2'>My Work</button></NavLink>
            </motion.div>

            <motion.div drag whileDrag={{ scale: 1 }} dragConstraints={{ right: 10, left: 50 }}>
              <Player
                src='https://assets6.lottiefiles.com/packages/lf20_pwohahvd.json'
                className="player"
                loop
                autoplay
                style={{ maxHeight: '700px', maxWidth: '700px' }}
              />
            </motion.div>
          </div>
        </div>
        <div className='d-flex flex-column  text-center justify-content-center my-5'>
          <h2>"Quote of The Day" by {quote.author}</h2>
          <h5>{quote.body}</h5>

        </div>
      </section>
    </motion.div>
  )
}

export default Home