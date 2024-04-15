import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import SocialMedia from '../SocialMediaLinks/SocialMedia';

const HomeInfos = () => {
  return (
    <div className='flex flex-col justify-center items-center md:items-start gap-4 md:w-[600px] lg:w-[700px]'>
        <motion.p 
            variants={fadeIn('up',0.3)}  
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: true, amount:0.7}}
            className='text-base md:text-lg font-normal text-center md:text-start'>
                Hi There, I'm
        </motion.p>
        <motion.h2 
            variants={fadeIn('up',0.4)}  
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: true, amount:0.7}}
            className='gradiant text-transparent bg-clip-text text-2xl md:text-[40px] hover:bg-gradient-to-l font-semibold'>
                Hala Al Keddeh
        </motion.h2>
        <motion.div
            variants={fadeIn('up',0.5)}  
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: true, amount:0.7}}
            className='text-center md:text-start'>
                <TypeAnimation sequence={[
                    'A Front-End Developer',
                    2000,
                    'A Web Designer',
                    2000,
                    'An Engineer',
                    2000,
                ]}
                speed={40}
                className='font-semibold text-[28px] md:text-5xl'
                wrapper='span'
                repeat={Infinity}
                />
        </motion.div>
        <motion.p 
            variants={fadeIn('up',0.6)}  
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: true, amount:0.7}}
            className='text-base md:text-lg font-normal text-center md:text-start max-w-[500px] md:max-w-none'>
                Welcome to my Portfolio, Explore my works and let's create something extraordinary together.
        </motion.p>
        <motion.div
            variants={fadeIn('up',0.7)}  
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: true, amount:0.7}}>
                <SocialMedia/>
        </motion.div>
    </div>
  )
}

export default HomeInfos