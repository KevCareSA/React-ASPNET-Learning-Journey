import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants } from './animation'



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
          SALLY CONSTRUCTION AND PROJECTS
        </motion.h1>
        <div className='w-[400px] h-[6px] bg-yellow-500'>
        </div>
        <motion.p 
          variants={slideUpVariants}
          className='text-3xl italic text-gray-50 text-[20px]'>
          We are a leading construction company dedicated to building and 
          constructing dreams together. Our team of experts is committed 
          to delivering high-quality projects that exceed expectations.
        </motion.p>
      </motion.div>

      <motion.div
        initial={'hidden'}
        whileInView={'visible'}
        variants={slideUpVariants}
        className='lg:w-[40%] w-full flex flex-col justify-center items-start *
        gap-5'>
        <p className='text-white text-lg text-'>
          At Sally Construction and Projects, we believe in the power of 
          collaboration and innovation. Our mission is to turn your visions 
          into reality, whether it's residential, commercial, or industrial 
          projects. With a focus on quality, safety, and sustainability, we 
          strive to create spaces that inspire and endure.

          Our experienced team is equipped with the latest technology and
          industry knowledge to ensure that every project is executed with
          precision and care. From the initial design phase to the final
          touches, we work closely with our clients to understand their needs
          and deliver results that not only meet but exceed their expectations. 
          Join us on this journey of building dreams together, where your
          satisfaction is our top priority.
        
        </p>
        <motion.button
          initial={'hidden'}
          whileInView={'visible'}
          variants={slideUpVariants}
          className='bg-yellow-500 hover:bg-white hover:text-black transition-all duration-100 
          px-4 py-1.5 rounded-lg text-white font-bold'>
          READ MORE
        </motion.button>
      </motion.div>

    </div>
  )
}

export default About
