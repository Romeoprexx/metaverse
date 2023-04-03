'use client';

import { TypingText, TitleText, InsightCard } from '../components'
import styles from '../styles';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { insights } from '../constants';


const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex flex-col mx-auto`}
    >
      <TypingText title={'| Insight'} textStyles="text-center"/>
      <TitleText title={'Insight about Metaverse'} textStyles="text-center"/>
      <div className="mt-[50px] gap-[30px] flex flex-col">
        {insights.map((insight, index) => (
          <InsightCard key={`insight-${index}`} {...insight} index={index + 1}/>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
