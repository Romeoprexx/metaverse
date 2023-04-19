/* eslint-disable */
'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import { footerVariants } from '../utils/motion';
import styles from '../styles';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial='hidden'
    whileInView={'show'}
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient"/>
    <div className={`${styles.innerWidth} flex flex-col mx-auto gap-8`}>
      <div className="flex justify-between flex-wrap items-center gap-5">
        <h4 className='font-bold md:text-[64px] text-[44px] text-white' >Enter the Metaverse</h4>
        <button type='button' className='flex items-center h-fit py-4 px-6 bg-[#25618b] gap-[12px] rounded-[32px]'>
          <img src="/headset.svg" alt="headset" className='w-[24px] object-contain h-[24px]'/>
          <span className="font-normal text-[16px] text-white uppercase"> enter metaverse</span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className='mb-[50px] h-[2px] bg-white opacity-10'/>
        <div className="flex justify-between flex-wrap items-center gap-4">
           <h4 className='text-[24px] text-white font-extrabold'>Metaverses</h4>
           <p className="font-normal opacity-50 text-white text-[14px]">
             Copyright © 2021 - 2022 Metaversus. All rights reserved.
           </p>
           <div className="flex gap-5">
             {socials.map((social) => (
               <img key={social.name} src={social.url} alt={social.name} className='cursor-pointer object-contain w-[24px] h-[24px]'/>
             ))}
           </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
