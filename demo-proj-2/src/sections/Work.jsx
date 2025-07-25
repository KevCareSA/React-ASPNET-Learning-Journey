import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, ZoomInVariants } from './animation' 
//import { allservices } from '../export' // Importing all services from export.js

const Work = () => {
  return (
    <div id='work' className='w-full bg-white'>
      <motion.div
        initial={'hidden'}
        whileInView={'visible'}
        variants={{slideUpVariants}}
        className='lg:w-[80%] w-[90%] m-auto py-[60px] flex 
        flex-col justify-between items-center gap-[20px]'
      >
        <motion.h1
          variants={slideUpVariants}
          className='text-yellow-500 text-2xl'
        >
          THIS IS
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className='text-black uppercase text-[40px] font-bold text-center'
        >
          OUR WORK PROCESS 
        </motion.h1>

        <motion.div className='w-[400px] h-[6px] bg-yellow-500'>
        </motion.div>

        {/* Make div for services mapping from export js file */}
        <motion.div
          initial={'hidden'}
          whileInView={'visible'}
          variants={ZoomInVariants}
          className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center
          items-start gap-[20px] mt-[30px]'
          >
            
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Work
