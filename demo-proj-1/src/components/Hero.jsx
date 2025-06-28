import React from "react";
import BlackCoffee from "../assets/black.png";
import BgImage from "../assets/bg-slate.png";


const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};



const Hero = () => {
  return (

    <main style={bgImage}>
      <section className="min-h-[750px] w-full">
        <div className="container">
          {/* Navbar Section*/}
          {/* Hero Section */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
           place-items-center min-h-[850px]">
            <div className="grid grid-cols-1 bg-green-100 border border-black">
              {/* text section */}
              <div className="text-orange-400 mt-[100px] md:mt-0 p-4 space-y-28">
                <h1 className="text-7xl font-bold leading-tight ml-14">
                  Blvck Coffee
                </h1>
                
                <div className="relative">
                  <div className="relative z-10 space-y-4">
                    <h1> Black Lifestyle Lovers, </h1>
                    <h1 className="text-sm opacity-50 leading-loose">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Numquam molestiae fuga quis impedit suscipit sequi. Error
                      aliquam, laborum voluptate voluptatum amet explicabo. 
                      Commodi cumque beatae voluptate, incidunt nemo mollitia 
                      tempore!
                    </h1>
                  </div>
                </div>

                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25">

                </div>
              </div>
            </div>
            {/* Hero Section */}
            <div className="relative">
              <img src={BlackCoffee} alt="" className="relative z-40 h-[400px] 
              md:h-[700px] img-shadow"/>
            </div>
            {/* Orange Ring Circle */}
            <div className="h-[180px] w-[180px] absolute top-24 -right-16 
            border-primary border-[20px] rounded-full z-10"></div>
            <div className="text-[140px] scale-150 font-bold text-dark-orange">
              Blvck Coffee
            </div>

            {/* 3rd dive */}
          </div>
        </div>
      </section>
    </main>

  );
}

export default Hero;