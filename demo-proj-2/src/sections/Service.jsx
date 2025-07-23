import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, ZoomInVariants } from './animation' 
import { allservices } from '../export' // Importing all services from export.js

const Service = () => {
  return (
    <div id='service' className='w-full bg-white'>
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
          WE OFFER
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className='text-black uppercase text-[40px] font-bold text-center'
        >
          OUR BEST SERVICES
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
            {
              allservices.map((item, index) => (
                <motion.div
                variants={ZoomInVariants} 
                className='flex justify-center items-start gap-5 p-8'
                key={index}
                >
                <img src={item.icon} alt='icon'
                className='w-[70px] border-2 border-yellow-500 
                 hover:bg-yellow-50 rounded-lg p-2' />
                <div className='flex flex-col justify-start items-start gap-2'>
                  <h1 className='text-xl text-black  font-bold'>
                    {item.title}
                  </h1>
                  <p className='text-gray-500 text-[16px]'>
                    {item.about}
                  </p>
                </div>
                </motion.div>
              ))
            }
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Service
