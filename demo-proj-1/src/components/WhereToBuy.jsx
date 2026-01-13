import React from 'react'
import { motion } from 'framer-motion';
import WorldMap from '../assets/world-map.png'; // Adjust the path as necessary

const WhereToBuy = () => {
  return (
    <div className='container my-36'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 
        place-items-center'>
            {/* form section */}
            <div className='space-y-8'>
                <motion.h1 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}  

                className='text-4xl font-bold text-darkGray font-serif'
                >
                    Buy our coffee from anywhere!
                </motion.h1>

                <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}  
                    className='flex items-center gap-4'
                >
                        <input type="text" placeholder='Enter your name' 
                        className='input-style w-full lg:w-[150px]'/>
                        <input type="email" placeholder='Enter your email' 
                        className='input-style w-full' />
                </motion.div>
                <motion.div 
                     initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }} 
                    
                    className='flex items-center gap-4'
                >
                        <input type="text" placeholder='Country' 
                        className='input-style w-full '/>
                        <input type="email" placeholder='Zip Code' 
                        className='input-style w-full lg:w-[150px]' />  
                </motion.div>
                <motion.button 

                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }} 

                    className='primary-btn'
                >
                            Order Now
                </motion.button>
            </div>
            {/* world map section */}
            <div className='col-span-2'>
              <motion.img 
              
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: 1,
              }}

              src={WorldMap} alt="World Map" 
              className='w-full sm:w-[500px] mx-auto'/>
            </div>
        </div>
    </div>
  )
}

export default WhereToBuy
