/* eslint-disable */
'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ title, subtitle, imgUrl, index}) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className='flex md:flex-row flex-col gap-4'
  >
    <img src={imgUrl} alt="planets" className='md:w-[270px] w-full h-[250px] object-cover rounded-[32px]'/>
    <div className="w-full flex items-center justify-between">
      <div className="flex-1 md:ml-[60px] flex flex-col max-w-[600px]">
        <h4 className='font-normal lg:text-[42px] text-[26px] text-white'>{title}</h4>
        <p className='mt-[16px] lg:text-[20px] text-[14px] font-normal text-secondary-white'>{subtitle}</p>
      </div>
      <div className='lg:flex hidden items-center justify-center rounded-full h-[100px] bg-transparent w-[100px] border-[1px] border-white'>
        <img src="/arrow.svg" alt="arrow" className='w-[40%] h-[40%]' />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
