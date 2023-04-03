'use client';

import { TypingText, TitleText} from '../components'
import styles from '../styles';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';


const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.25}}
    className={`${styles.innerWidth} flex flex-col mx-auto`}
  >
    <TypingText title={"| People around the World "}
      textStyles="text-center"
    />
    <TitleText 
      title={<>
       Track friends around you and invite them to play together in the same world
      </>}
    textStyles="text-center"/>
    <motion.div
      variants={fadeIn('up', 'tween', 0.3, 1)}
      className='relative mt-[68px] w-full flex h-[550px]'
    >
       <img src="/map.png" alt="maps" className='h-full w-full object-cover'/>
       <div className='bottom-20 right-20 absolute w-[70px] h-[70px] p-[6px] bg-[#5d6680] rounded-full'>
         <img src="/people-01.png" alt="people" className='w-full h-full' />
       </div>
       <div className='top-10 left-20 absolute w-[70px] h-[70px] p-[6px] bg-[#5d6680] rounded-full'>
         <img src="/people-02.png" alt="people" className='w-full h-full' />
       </div>
       <div className='top-1/2 left-[45%] absolute w-[70px] h-[70px] p-[6px] bg-[#5d6680] rounded-full'>
         <img src="/people-03.png" alt="people" className='w-full h-full' />
       </div>
    </motion.div>
  </motion.div> 
  </section>
);

export default World;
