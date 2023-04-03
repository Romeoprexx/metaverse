'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, zoomIn, fadeIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex lg:flex-row flex-col mx-auto gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col sm:p-8 p-4 gradient-05 border-[1px] border-[#6a6a6a] rounded-[32px] relative"
      >
       <div className='feedback-gradient'/>
       <div>
        <h4 className='font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white'>Samantha</h4>
        <p className='font-normal mt-[8px] sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white'>Founder | Metaverses</p>
       </div>
       <p className='font-normal mt-[24px] sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white'>“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</p>
      </motion.div>
      <motion.div
       variants={fadeIn('left', 'tween', 0.2, 1)}
       className='relative flex-1 flex items-center justify-center'
      >
         <img src="/planet-09.png" alt="planet" className='w-full lg:h-[610px] h-auto min-h-[210px] rounded-[40px] object-cover'/>
         <motion.div
          variants={zoomIn( 0.4, 1)}
          className='lg:block hidden absolute -left-[10%] top-[3%]'
         >
           <img src="/stamp.png" alt="stamp" className='w-[155px] object-contain h-[155px]'/>
         </motion.div>
      </motion.div>
    </motion.div>

  </section>
);

export default Feedback;
