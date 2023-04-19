/* eslint-disable */
'use client';

import styles from '../styles';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial='hidden'
    whileInView={'show'}
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="gradient-01 w-[50%] absolute insert-0"/>
    <div className={`${styles.innerWidth} flex justify-between gap-8 mx-auto `}>
      <img 
        src='/search.svg'
        alt='search'
        className='w-[24px] h-[24px] object-contain'
      />
      <h2 className='font-extrabold leading-[30px] text-[24px] text-white'>
        METAVERSES
      </h2>
      <img 
        src='/menu.svg'
        alt='menu'
        className='w-[24px] h-[24px] object-contain'
      />
    </div>
  </motion.nav>
);

export default Navbar;
