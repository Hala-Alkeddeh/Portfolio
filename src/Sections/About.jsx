import AboutImg from '/AboutImg.png'
import { motion } from 'framer-motion';
import { fadeIn } from './../variants';
import AboutMeInfos from '../Components/AboutMeInfos/AboutMeInfos';

const About = () => {
  return (
    <section id='About' className='w-full flex flex-col justify-center items-center gap-3   p-6  md:p-14 min-h-[calc(100vh-80px)] '>
      <motion.h2 
        variants={fadeIn('up',0.2)}  
        initial='hidden' 
        whileInView={'show'} 
        viewport={{once: true, amount:0.4}}
        className='title'>
            About Me
      </motion.h2>
      <div className='w-full flex flex-col gap-4 md:flex-row justify-center md:justify-between items-center overflow-hidden '>
      <motion.div
            variants={fadeIn('right',0.3)}  
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: true, amount:0.4}}>
              <img src={AboutImg} alt="حلا القدة" className='max-w-full w-[290px] md:w-[40vw] md:min-w-[420px] md:max-w-[600px] dark:drop-shadow-white drop-shadow-xl ' />
        </motion.div>
        <motion.div
            variants={fadeIn('left',0.3)}  
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: true, amount:0.4}}>
              <AboutMeInfos/>
        </motion.div>
      </div>
    </section>
  )
}

export default About