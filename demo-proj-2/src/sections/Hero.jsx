import React from 'react'
import backgroundImage from '../assets/homeimg.webp'
import heroimg from '../assets/heroimg.png'
import {slideUpVariants, ZoomInVariants} from './animation'
import { motion } from 'framer-motion'



const Hero = () => {
  return (
    <div id='hero' className='bg-black w-full lg:h-[700px] h-fit 
      m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between 
      items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center
      bg-no-repeat sm:bg-top' 
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
          </div>
          <p className='text-white text-[20px] mt-1'>Building And Constructing 
            Dreams Together</p>

          <motion.div
            initial={'hidden'}
            whileInView={'visible'}
            variants={slideUpVariants}
            className='flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4 sm:gap-5 w-full'
          >
            <motion.button
              variants={ZoomInVariants}
              className='bg-yellow-500 hover:bg-white hover:text-black transition-all duration-300 
              px-6 py-2 rounded-lg text-white font-bold w-full sm:w-auto'
              >
                READ MORE
            </motion.button>
            <motion.button
              variants={ZoomInVariants}
              className='bg-white hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300 
              border-2 px-6 py-2 rounded-lg text-black font-bold w-full sm:w-auto'

              >
                CONTACT US
            </motion.button>
          </motion.div>

        </motion.div>
        <div className='w-full lg:w-[50%] flex justify-center lg:justify-end'>
          <motion.img 
            initial={'hidden'}
            whileInView={'visible'}
            variants={ZoomInVariants}
            src={heroimg}  
            alt='hero image' 
            className='h-[250px] sm:h-[300px] lg:h-[350px] mt-5 lg:mt-[350px]' 
          />
        </div>
        {/* <div className='w-[50%] flex flex-col justify-end items-end'>
          <motion.img 
            initial={'hidden'}
            whileInView={'visible'}
            variants={ZoomInVariants}
            src={heroimg}  
            alt='hero image' 
            className='lg:h-[350px] h-[400px] lg:mt-[350px]' />
        </div> */}
    </div>
  )
}

export default Hero
