import React from 'react';
import { motion } from 'framer-motion';

import './Header.scss';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1]}}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app_flex'>
            <div style={{ marginLeft: 20 }}>
              <h1 className='head-text'>Hello</h1>
              <p className='p-text'>I am <b>Ana</b></p>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Computer Engineering Student</p>
            <p className='p-text'>Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1]}}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.profile} alt='profile_img' />
        <motion.img
          whileInView={{ scale: [0, 1]}}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.c, images.python, images.react].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle' />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');