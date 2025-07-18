import React from 'react'
import backgroundImage from '../assets/homeimg.webp'
//import heroimg from '../assets/heroimg.png'
import {slideUpVariants, zoomInVariants} from './animation'
import { motion } from 'framer-motion'


const Hero = () => {
  return (
    <div id='hero' className='bg-black w-full lg:h-[700px] h-fit 
      m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between 
      items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center' 
      style={{ backgroundImage: `url(${backgroundImage})` }}>
        <motion.div
        initial={'hidden'}
        whileInView={'visible'}
        variants={slideUpVariants}
        className='lg:w-[60%] w-full flex flex-col justify-center items-start
        lg:gap-8 gap-4'
        >
          <motion.h1
          variants={zoomInVariants}
          className='text-yellw lg:text-[60px] text-2xl'>
            WE ARE BUILDERS
          </motion.h1>

          <motion.h1>
            We Build Your Dreams
          </motion.h1>
        </motion.div>
    </div>
  )
}

export default Hero
