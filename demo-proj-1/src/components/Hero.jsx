import React from "react";
import BlackCoffee from "../assets/black.png";
import BgImage from "../assets/bg-slate.png";
import Navbar from "./Navbar";
import {motion} from "framer-motion";
import {FaFacebookF,FaTwitter, FaInstagram} from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};



const Hero = () => {

  const [sidebar, setSidebar] = React.useState(false);
  return (

    <main style={bgImage}>
      <section className=" relative min-h-[750px] w-full">
        <div className="container">
          {/* Navbar Section*/}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />

          {/* Hero Section div*/}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
           place-items-center min-h-[850px]">
            <div className="grid grid-cols-1 bg-green-100 border border-black">
              {/* text section */}
              <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
                <motion.h1 
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 10,
                  delay: 1.2,
                 }}
                className="text-7xl font-bold leading-tight ml-14">
                  Blvck Coffee
                </motion.h1>
                
                <motion.div className="relative" 
                   initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 10,
                  delay: 1.2,
                 }}
                 >
                  <div className="relative z-10 space-y-4">
                    <h1> Black Lifestyle Lovers, </h1>
                    <h1 className="text-sm opacity-55 leading-loose">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Numquam molestiae fuga quis impedit suscipit sequi. Error
                      aliquam, laborum voluptate voluptatum amet explicabo. 
                      Commodi cumque beatae voluptate, incidunt nemo mollitia 
                      tempore!
                    </h1>
                  </div>

                  <div className="absolute -bottom-10 -left-10 w-[250px] 
                h-[190px] bg-gray-700/25"></div>

                </motion.div>

                <div className="absolute -top-1 -left-10 w-[250px] 
                h-[190px] bg-gray-700/25"></div>

              
              </div>
            </div>
            {/* Hero Image Section */}
            <div className="relative">
              <motion.img 
              
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 10,
                  delay: 0.4,
                 }}

              src={BlackCoffee} alt="" className="relative z-40 h-[400px] 
              md:h-[700px] img-shadow"/>
            
            {/* Orange Ring Circle */}
             <motion.div 
             
             initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 10,
                  delay: 0.8,
                 }}
             
             className="h-[180px] w-[180px] absolute top-24 -right-16 
              border-primary border-[20px] rounded-full z-10">

            </motion.div>
            
            {/* Big Text Section */}
              <motion.div 
              
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 10,
                  delay: 1.2,
                 }}
              
              className="absolute -top-10 left-[440px] z-[1]">
                <h1 className="text-[140px] scale-120 font-bold text-darkGray/40
              leading-none">
                Blvck Coffee
                </h1>
              </motion.div>
            </div>
            {/* 3rd dive section */}
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 10,
                  delay: 0.8,
                 }}
                 
            className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
                <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                  Blvck Coffee
                </h1>
                
                <div className="relative">
                  <div className="relative z-10 space-y-4">
                    <h1> The KevCare Design, </h1>
                    <h1 className="text-sm opacity-55 leading-loose">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Numquam molestiae fuga quis impedit suscipit sequi. Error
                      aliquam, laborum voluptate voluptatum amet explicabo. 
                      Commodi cumque beatae voluptate, incidunt nemo mollitia 
                      tempore!
                    </h1>
                  </div>

                  <div className="absolute -bottom-10 --10 w-[250px] 
                h-[190px] bg-gray-700/25"></div>

                </div>

                <div className="absolute -top-1 -left-10 w-[250px] 
                h-[190px] bg-gray-700/25"></div>
              </motion.div>
          </div>
        </div>

        {/* sidebar Menu Section */}
        {sidebar && (
          <motion.div 
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            // transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b
        from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10">
          <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-center 
            gap-6 text-white">
              {/* line */}
              <div className="w-[1px] h-[70px] bg-white"></div>
              {/* social icons */}
              <div className="inline-block p-2 rounded-full cursor-pointer 
              border border-white">
                <FaFacebookF className="text-2xl"/>
              </div>
              
              <div className="inline-block p-2 rounded-full cursor-pointer 
              border border-white">
                <FaTwitter className="text-2xl"/>
              </div>
              
              <div className="inline-block p-2 rounded-full cursor-pointer 
              border border-white">
                <FaInstagram className="text-2xl"/>
              </div>

              <div className="w-[1px] h-[70px] bg-white"></div>
            </div>
            </div>
        </motion.div >)
        }
      </section>
    </main>

  );
}

export default Hero;
