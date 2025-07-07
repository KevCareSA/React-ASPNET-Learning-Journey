import React from 'react'
// import { motion } from 'framer-motion';
import WorldMap from '../assets/world-map.png'; // Adjust the path as necessary

const WhereToBuy = () => {
  return (
    <div className='container my-36'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 
        place-items-center'>
            {/* form section */}
            <div className='space-y-8'>
                <h1 className='text-4xl font-bold text-darkGray font-serif'>
                    Buy our coffee from anywhere!
                </h1>
                <div className='flex items-center gap-4'>
                        <input type="text" placeholder='Enter your name' 
                        className='input-style w-full lg:w-[150px]'/>
                        <input type="email" placeholder='Enter your email' 
                        className='input-style w-full' />
                </div>
                <div className='flex items-center gap-4'>
                        <input type="text" placeholder='Country' 
                        className='input-style w-full '/>
                        <input type="email" placeholder='Zip Code' 
                        className='input-style w-full lg:w-[150px]' />  
                </div>
                <button type="submit" 
                        className='primary-btn'>
                            Order Now
                </button>
            </div>
            {/* world map section */}
            <div className='col-span-2'>
              <img src={WorldMap} alt="World Map" 
              className='w-full sm:w-[500px] mx-auto'/>
            </div>
        </div>
    </div>
  )
}

export default WhereToBuy
