import React from 'react'
import backgroundImage from '../assets/homeimg.webp'
import heroimg from '../assets/heroimg.png'
import {slideUpVariants, ZoomInVariants} from './animation'
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
          variants={slideUpVariants}
          className='text-yellow-500 text-2xl'>
            WE ARE BUILDERS
          </motion.h1>

          <motion.h1 
            className='text-white text-[40px] font-bold'>
            We Build Your Dreams
          </motion.h1>
          <div className='w-[400px] h-[6px] bg-yellow-500'>
            <p className='text-white text-[20px] mt-1'>Building And Constructing Dreams Together</p>
          </div>

          <motion.div
            initial={'hidden'}
            whileInView={'visible'}
            variants={slideUpVariants}
            className='flex justify-center items-center gap-5'
        >
            <motion.button
              variants={ZoomInVariants}
              className='bg-yellow-500 hover:bg-white hover:text-black transition-all duration-300 
              px-4 py-1.5 rounded-lg text-white font-bold'
              >
                READ MORE
            </motion.button>
            <motion.button
              variants={ZoomInVariants}
              className='bg-white hover:border-yellow-500 
              hover:text-yellow-500 transition-all duration-300 border-2
              px-4 py-1.5 rounded-lg text-black font-bold'
              >
                CONTACT US
            </motion.button>
          </motion.div>

        </motion.div>
        <div className='w-[40%] flex flex-col justify-end items-end'>
          <motion.img 
            initial={'hidden'}
            whileInView={'visible'}
            variants={ZoomInVariants}
            src={heroimg}  
            alt='hero image' 
            className='lg:h-[400px] h-[300px] lg:mt-[290px]' />
        </div>
    </div>
  )
}

export default Hero
