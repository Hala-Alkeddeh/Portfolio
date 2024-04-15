import { motion } from 'framer-motion';
import { fadeIn } from './../variants';
import ProjectsCards from '../Components/ProjectsCards/ProjectsCards';

const Portfolio = () => {
    return (
        <section id='Portfolio' className='w-full flex flex-col justify-center items-center gap-5 md:gap-7 p-6 md:p-14 min-h-[700px] '>
            <motion.h2 
                variants={fadeIn('up',0.2)}  
                initial='hidden' 
                whileInView={'show'} 
                viewport={{once: true, amount:0.4}}
                className='title'>
                    Portfolio
            </motion.h2>
            <motion.p 
                variants={fadeIn('up',0.3)}  
                initial='hidden' 
                whileInView={'show'} 
                viewport={{once: true, amount:0.4}}
                className='text-base md:text-lg font-normal text-center md:text-start max-w-[500px] md:max-w-none' >
                    Here are a few Projects i've worked on recently. 
            </motion.p>
            <motion.div 
                variants={fadeIn('up',0.4)}  
                initial='hidden' 
                whileInView={'show'} 
                viewport={{once: true, amount:0.4}}
                className='flex items-center w-full justify-center'>
                    <ProjectsCards/>
            </motion.div>
        <div>
        </div>
        </section>
    )
}

export default Portfolio