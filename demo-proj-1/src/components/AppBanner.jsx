import React from 'react';
import { motion } from 'framer-motion';
import BannerImg from '../assets/coffee-cover.jpg';  
import Appstore from '../assets/website/app_store.png';
import Playstore from '../assets/website/play_store.png';


const BannerStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%',
};

const AppBanner = () => {
  return (
    <div className='container my-14'>
        <div style={BannerStyle} className='sm:min-h-[400px] sm:flex 
        sm:items-center sm:justify-end rounded-xl'>
            <div>
               <div className='space-y-6 max-w-xl mx-auto'>
                <motion.h1 
                     initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                        type: 'spring',
                        stiffness: 100,
                        damping: 20,
                        delay: 0.2,
                     }} 
                    
                    className='text-2xl text-center sm:text-4xl font-semibold'>
                    Download Our App
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                        type: 'spring',
                        stiffness: 100,
                        damping: 20,
                        delay: 0.3,
                     }}
                    
                    className='text-center sm:px-20'>
                    Get your daily dose of caffeine
                </motion.p>
                {/* image links */}
                <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                        type: 'spring',
                        stiffness: 100,
                        damping: 20,
                        delay: 0.3,
                     }}

                    className='flex items-center justify-center gap-4'>
                    <motion.a href="#"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 20,
                            delay: 0.4,
                        }}
                        className='max-w-[150px] sm:max-w-[120px]
                        md:max-w-[200px]'>
                        <img src={Appstore} alt="App Store" />
                    </motion.a>
                    <motion.a href="#"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 20,
                            delay: 0.5,
                        }}
                        className='max-w-[150px] sm:max-w-[120px]
                        md:max-w-[200px]'>
                        <img src={Playstore} alt="Play Store" />
                    </motion.a>
                </motion.div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default AppBanner
