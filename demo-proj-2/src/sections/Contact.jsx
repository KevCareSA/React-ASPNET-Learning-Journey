import React from 'react' 
import { motion } from 'framer-motion'
import { slideUpVariants, ZoomInVariants } from './animation'

const Contact = () => {
  return (
    
<div id='contact' className='w-full bg-white'>
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
            CONTACT US
          </motion.h1>

          <motion.h1 
            variants={slideUpVariants}
            className='text-black text-[40px] font-bold'>
            REACH OUT TO US
          </motion.h1>
          <div className='w-[400px] h-[6px] bg-yellow-500'>
          </div>
          <motion.p 
            variants={slideUpVariants}
            className='text-3xl italic text-gray-500 text-[20px]'>
            We would love to hear from you! Whether you have a question, 
            need assistance, or want to discuss your project, feel free to 
            reach out to us. Our team is here to help and ensure that your 
            experience with Sally Construction and Projects is exceptional.
          </motion.p>
        </motion.div>
        

      <motion.div
        initial={'hidden'}
        whileInView={'visible'}
        variants={slideUpVariants}
        className='lg:w-[40%] w-full flex flex-col justify-center items-start 
        gap-5'>
        <motion.form 
        initial={'hidden'}
        whileInView={'visible'}
        variants={ZoomInVariants}
        className='w-full flex flex-col justify-center items-start gap-4'>
          <input 
            type='text' 
            placeholder='Your Name' 
            className='w-full px-6 py-3 border-[2px] border-black 
            text-black rounded-lg'
          />
          <input 
            type='email' 
            placeholder='Your Email' 
            className='w-full px-6 py-3 border-[2px] border-black 
            text-black rounded-lg'
          />
          <input type="text" placeholder='Your Mobile Number' 
          className='w-full px-6 py-3 border-[2px] border-black 
          text-black rounded-lg' />
          <textarea
            name=''
            id='' 
            rows='4' 
            placeholder='Your Message' 
            className='w-full px-6 py-3 border-[2px] border-black 
            text-black rounded-lg'
          ></textarea>
          <motion.button
            initial={'hidden'}
            whileInView={'visible'}
            variants={slideUpVariants}
            className='bg-yellow-500 hover:bg-black hover:text-white 
            transition-all duration-100 px-10 py-4 rounded-lg 
            text-black font-bold w-full'>
            Send Message
          </motion.button>
        </motion.form> 
      </motion.div>

    </div>
  </div>
  )
}

export default Contact
