'use client';

import { TypingText, TitleText, NewFeatures} from '../components'
import styles from '../styles';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { newFeatures } from '../constants';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} flex lg:flex-row flex-col gap-8 mx-auto`}
    >
      <motion.div
       variants={fadeIn('right', 'tween', 0.2, 1)}
       className='flex-[0.75] flex justify-center flex-col'
      >
        <TypingText title={"| What's New?"} />
        <TitleText title={<>What's new about Metaverses?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between">
          {newFeatures.map((feature) => (
            <NewFeatures 
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img 
          src='/whats-new.png'
          alt='whats-new'
          className='w-[90%] object-contain h-[90%]'
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
