import React, { useEffect, useRef } from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import emailjs from '@emailjs/browser'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_q2pdlbq', 'template_smtu0zh', form.current, 'ksg1haAIjHq6UUtLL')
      .then(
        console.log(form.current),
        (response) => {
          console.log('Email successfully sent:', response);
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        (error) => {
          console.error('Failed to send the message:', error);
          alert('Failed to send the message, please try again');
        }
      );
  };


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

      <div className="container-fluid p-5">
        <div className="d-sm-flex align-items-center justify-content-center">
          <div>
            <form ref={form} onSubmit={sendEmail}>
              <ul style={{ listStyle: 'none' }} className='p-4'>
                <li className="m-3 shadow-sm">
                  <input className='form-control form-class' placeholder="Name" type="text" name="name" required />
                </li>
                <li className="m-3 shadow-sm">
                  <input
                    className='form-control form-class'
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li className='m-3 shadow-sm'>
                  <input
                    placeholder="Subject"
                    className='form-control form-class'
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li className='m-3 shadow-sm'>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                    className='form-control form-class'
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="btn btn-primary custom-btn fw-bold m-3 px-5" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
          <div>
            <Player
              src='https://assets10.lottiefiles.com/packages/lf20_u25cckyh.json'
              className="player d-md-none d-lg-block"
              loop
              autoplay
              style={{ maxHeight: '500px', maxWidth: '500px' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact