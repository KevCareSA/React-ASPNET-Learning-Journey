import React from 'react'
import backgroundImage from '../assets/homeimg.webp'
//import heroimg from '../assets/heroimg.png'
//import {slideUpVariants, zoomInVariants} from './animation'
//import { motion } from 'framer-motion'


const Hero = () => {
  return (
    <div id='hero' className='bg-black w-full lg:h-[700px] h-fit 
      m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between 
      items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center' 
      style={{ backgroundImage: `url(${backgroundImage})` }}>
    </div>
  )
}

export default Hero
