import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, ZoomInVariants } from './animation'
import { clients } from '../export'
import { IoTerminalSharp } from 'react-icons/io5'

const Testimonials = () => {
  return (
    <div id='clients' className='w-full '>
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
          TESTIMONIALS
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className='text-black uppercase text-[40px] font-bold text-center'
        >
          WHAT OUR CLIENTS SAY <br /> ABOUT US
        </motion.h1>

        <motion.div className='w-[400px] h-[6px] bg-yellow-500'>
        </motion.div>

        
        <motion.div
          initial={'hidden'}
          whileInView={'visible'}
          variants={ZoomInVariants}
          className='lg:w-full w-[90%] grid lg:grid-cols-3 grid-cols-1 justify-center
          items-start gap-8 mt-[30px]'
          >
            {
              clients.map((item, index) => (
                <div key={index} className='flex flex-col justify-center 
                items-center '>
                  <div className='border-2 border-white hover:bg-yellow-500 
                  pb-[100px] pt-[30px]'>
                    <p className='text-white hover:text-black text-lg 
                    text-center'>
                      {item.about}
                    </p>
                  </div>
                  <div className='flex flex-col justify-center items-center 
                  gap-[5px]'
                  >
                    <img className='mt-[-50px] rounded-full' src={item.image} 
                    alt="client image" />
                    <h1 className='text-[27px] text-white uppercase font-semibold'>
                      {item.name} 
                    </h1>
                    <h1 className='text-[20px] text-yellow-500'>
                      {item.post}
                    </h1>
                  </div>
                  
                </div>
              ))
            }

        </motion.div>

      </motion.div>
    </div>
  )
}

export default Testimonials
