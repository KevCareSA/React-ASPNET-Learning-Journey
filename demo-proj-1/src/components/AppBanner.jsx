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
                <h1 className='text-2xl text-center sm:text-4xl font-semibold'>
                    Download Our App
                </h1>
                <p className='text-center sm:px-20'>
                    Get your daily dose of caffeine
                </p>
                {/* image links */}
                <div className='flex items-center justify-center gap-4'>
                    <a href="#">
                        <img src={Appstore} alt="App Store" />
                    </a>
                    <a href="#">
                        <img src={Playstore} alt="Play Store" />
                    </a>
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default AppBanner
