import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants } from './animation'
//import { slideUpVariants, ZoomInVariants } from './animation'


const About = () => {
  return (
    <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex 
    lg:flex-row flex-col justify-between items-start gap-[50px]' id='about'>
      <motion.div 
        initial={'hidden'}
        whileInView={'visible'}
        variants={{slideUpVariants}}
        className='lg:w-[50%] w-full flex flex-col justify-center items-start
        gap-5'>
        <motion.h1 
          variants={slideUpVariants}
          className='text-yellow-500 text-2xl'>
          WELCOME TO
        </motion.h1>
        <motion.h1 
          variants={slideUpVariants}
          className='text-white text-[40px] font-bold'>
          About Us
        </motion.h1>

      </motion.div>

    </div>
  )
}

export default About
