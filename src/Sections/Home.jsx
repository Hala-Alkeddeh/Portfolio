import React from 'react'
import HomeInfos from '../Components/HomeInfo/HomeInfos'
import HomeImg from '/HomeImg.png'
import { motion } from 'framer-motion';
import { fadeIn } from './../variants';

const Home = () => {
  return (
    <section id='Home' className='w-full h-screen flex flex-col  p-6  md:p-14'>
      {/* <div className='w-full hidden md:block h-20 md:h-24'>
      </div> */}
      <div className='flex h-full w-full justify-center md:justify-between items-center  '>
      <HomeInfos/>
      <motion.div
            variants={fadeIn('down',0.3)}  
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: true, amount:0.7}}>
              <img src={HomeImg} alt="حلا القدة" className='md:w-[45vw] lg:max-w-[42vw] md:min-w-[500px] md:max-w-[600px] hidden md:block dark:drop-shadow-white drop-shadow-xl' />
        </motion.div>
      </div>
    </section>
  )
}

export default Home  