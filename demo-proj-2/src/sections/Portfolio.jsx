import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, ZoomInVariants } from './animation'
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
import project5 from '../assets/project5.jpg';
import project6 from '../assets/project6.jpg';
import project7 from '../assets/project7.jpg';
import project8 from '../assets/project8.jpg';


const Portfolio = () => {
  return (
    <div id='projects' className='w-full'>
      <motion.div
        initial={'hidden'}
        whileInView={'visible'}
        variants={{slideUpVariants}}
        className='lg:w-[80%] w-[90%] m-auto py-[60px] flex 
        flex-col justify-between items-center gap-[20px]'
      >
        <motion.div
          initial={'hidden'}
          whileInView={'visible'}
          variants={{slideUpVariants}}
          className='lg:w-[80%] w-[90%] m-auto py-[20px] flex 
          flex-col justify-between items-center gap-[20px]'
        >
            <motion.h1
              variants={slideUpVariants}
              className='text-yellow-500 text-2xl'
            >
              PORTFOLIO
            </motion.h1>
            <motion.h1
              variants={slideUpVariants}
              className='text-white uppercase text-[40px] font-bold 
              text-center'
            >
              OUR BEST PROJECTS
            </motion.h1>
    
            <motion.div className='w-[400px] h-[6px] bg-yellow-500'>
            </motion.div>

            <motion.div
              initial={'hidden'}
              whileInView={'visible'}
              variants={{ZoomInVariants}}
              className='w-full m-auto grid lg:grid-cols-4 grid-cols-1'
            >
              <img src={project1} alt="" />
              <img src={project2} alt="" />
              <img src={project3} alt="" />
              <img src={project4} alt="" />
              <img src={project5} alt="" />
              <img src={project6} alt="" />
              <img src={project7} alt="" />
              <img src={project8} alt="" />

            </motion.div>
        </motion.div>
      </motion.div>

    </div>
  )
}

export default Portfolio
