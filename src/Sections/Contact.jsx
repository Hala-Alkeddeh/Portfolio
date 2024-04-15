import { motion } from 'framer-motion';
import { fadeIn } from './../variants';
import ContactImg from '/ContactImg.png';
import ContactForm from '../Components/ContactForm/ContactForm';

const Contact = () => {
    return (
        <section id='Contact' className='w-full flex flex-col justify-center items-center gap-7 p-6 md:p-14 min-h-screen mb-20 '>
            <motion.h2 
                variants={fadeIn('up',0.2)}  
                initial='hidden' 
                whileInView={'show'} 
                viewport={{once: true, amount:0.4}}
                className='title self-start'>
                    Contact Me
            </motion.h2>
            <div className='flex justify-between md:flex-row flex-col items-center gap-6 w-full'>
            <motion.div 
                variants={fadeIn('up',0.4)}  
                initial='hidden' 
                whileInView={'show'} 
                viewport={{once: true, amount:0.4}}>
                    <ContactForm/>
            </motion.div>
            <motion.div 
                variants={fadeIn('up',0.3)}  
                initial='hidden' 
                whileInView={'show'} 
                viewport={{once: true, amount:0.4}}>
                    <img src={ContactImg} alt="حلا القدة" className=' hidden md:block max-w-full w-[290px] md:w-[30vw] md:min-w-[420px] md:max-w-[600px] dark:drop-shadow-white drop-shadow-xl ' />
            </motion.div>
            </div>
        <div>
        </div>
        </section>
    )
}

export default Contact