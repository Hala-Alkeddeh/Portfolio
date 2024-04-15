import { motion } from 'framer-motion';
import { fadeIn } from './../variants';
import SkillsCarousel from '../Components/SkillsCarousel/SkillsCarousel';
import LanguagesSkill from '../Components/LanguagesSkill/LanguagesSkill';
import SoftSkills from '../Components/SoftSkills/SoftSkills';
import ExtraSkills from '../Components/ExtraSkills/ExtraSkills';

const Services = () => {
    return (
        <section id='Skills' className='w-full flex flex-col justify-evenly items-center gap-7 p-6 md:p-14 md:gap-[50px] ] '>
            <motion.h2 
                variants={fadeIn('up',0.2)}  
                initial='hidden' 
                whileInView={'show'} 
                viewport={{once: true, amount:0.4}}
                className='title'>
                    My Skills
            </motion.h2>
            <motion.div 
                variants={fadeIn('down',0.3)}  
                initial='hidden' 
                whileInView={'show'} 
                viewport={{once: true, amount:0.4}}
                className='w-full'>
                    <SkillsCarousel/>
            </motion.div>
            <motion.div 
                variants={fadeIn('down',0.4)}  
                initial='hidden' 
                whileInView={'show'} 
                viewport={{once: true, amount:0.4}}
                className='w-full'>
                    <ExtraSkills/>
            </motion.div>
        </section>
    )
}

export default Services