import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, ZoomInVariants } from './animation' 
import { planning } from '../export'
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
          className='text-yellow-500 text-3xl'
        >
          THIS IS
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className='text-black uppercase text-[40px] font-bold text-center'
        >
          OUR WORKING PROCESS 
        </motion.h1>

        <motion.div className='w-[400px] h-[6px] bg-yellow-500'>
        </motion.div>

        {/* Make div for services mapping from export js file */}
        <motion.div
          initial={'hidden'}
          whileInView={'visible'}
          variants={ZoomInVariants}
          className='w-full grid lg:grid-cols-4 grid-cols-1 justify-center
          items-start gap-[20px] mt-[30px]'
          >
            {
              planning.map((item, index) => (
                <div key={index} className='flex flex-col justify-center 
                items-center gap-5 p-6 border-2 border-yellow-500 round-mg'>
                  <div>
                      <item.icon className='size-[80px] bg-yellow-500 
                    hover:bg-black hover:fill-white p-4 rounded-full 
                    cursor-pointer'/>
                  </div>
                  <h1 className='text-2xl uppercase font-bold'>
                    {item.title}
                  </h1> 
                  <p className='text-[20px] text-center text-gray-500'>
                    {item.about}
                  </p>
                </div>
              ))
            }
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Work
