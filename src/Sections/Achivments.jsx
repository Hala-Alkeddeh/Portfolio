import { motion } from 'framer-motion';
import { fadeIn } from './../variants';
import c1 from '/c1.jpg'
import c2 from '/c2.jpg'
import c3 from '/c3.jpg'
import c4 from '/c4.jpg'

const Achivments = () => {
  return (
    <section id='Achivements' className='w-full flex flex-col justify-center items-center gap-7 p-6 md:p-14  '>
    <motion.h2 
        variants={fadeIn('up',0.2)}  
        initial='hidden' 
        whileInView={'show'} 
        viewport={{once: true, amount:0.4}}
        className='title'>
            Achivements
    </motion.h2>
    <div className='flex flex-wrap w-full items-center justify-center gap-8'>
    <motion.div 
        variants={fadeIn('up',0.3)}  
        initial='hidden' 
        whileInView={'show'} 
        viewport={{once: true, amount:0.4}}>
            <img src={c1} alt="c1" className='max-w-[280px]' />
    </motion.div>
    <motion.div 
        variants={fadeIn('up',0.4)}  
        initial='hidden' 
        whileInView={'show'} 
        viewport={{once: true, amount:0.4}}>
            <img src={c2} alt="c2" className='max-w-[280px]' />
    </motion.div>
    <motion.div 
        variants={fadeIn('up',0.5)}  
        initial='hidden' 
        whileInView={'show'} 
        viewport={{once: true, amount:0.4}}>
            <img src={c3} alt="c3"  className='max-w-[280px]'/>
    </motion.div>
    <motion.div 
        variants={fadeIn('up',0.6)}  
        initial='hidden' 
        whileInView={'show'} 
        viewport={{once: true, amount:0.4}}>
            <img src={c4} alt="c4"  className='max-w-[280px]' />
    </motion.div>
    </div>
</section>
  )
}

export default Achivments