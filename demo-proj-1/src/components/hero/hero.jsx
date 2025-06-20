import React from "react";

function hero() {
  return (
    <main className="bgImage">
      <section className="min-h-[750px] w-full">
        <div className="container">
          {/* Navbar Section*/}
          {/* Hero Section */}

          <div className="grid grid-cols-1 md:grid-cols-2 
          lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text section */}
            <div className="text-lightOrange mt-[100px]">
              <h1 className="text-7xl font-bold leading-tight ml-14">
                Blvck Tumbler
              </h1>
              <div className="relative z-10 space-y-4">
                <h1> Black Lifestyle Lovers, </h1>
                <h1 className="text-sm opacity-55 leading-loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam molestiae fuga quis impedit suscipit sequi. Error
                  aliquam, laborum voluptate voluptatum amet explicabo. Commodi
                  cumque beatae voluptate, incidunt nemo mollitia tempore!
                </h1>
              </div>
            </div>
            {/* Hero Text */}
            {/* 3rd dive */}
          </div>
        </div>
      </section>
    </main>
  );
}

export default hero;
