import React from "react";
import { motion } from "framer-motion";
import Coffee1 from "../assets/coffee/coffee1.png";
import Coffee3 from "../assets/coffee/coffee3.png";


const ServiceData = [
  {
    id: 1,
    image: Coffee1,
    title: "Freshly Roasted Coffee",
    description: "Experience the rich aroma and flavor of our freshly roasted coffee, sourced from the best beans."
  }, 
  
  {
    id: 2,
    image: Coffee3,
    title: "Hot Coffee",
    description: "Experience the rich aroma and flavor of our freshly roasted coffee, sourced from the best beans."
  },

  {
    id: 3,
    image: Coffee1,
    title: "Cold Brew Coffee",
    description: "Experience the rich aroma and flavor of our freshly roasted coffee, sourced from the best beans."
  }
];

const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* Header Section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Fresh and <span className="text-primary">Quality Coffee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.6,
          }}
          className="text-sm opacity-50"
        >
          We offer a wide range of coffee products, from classic blends to
          unique flavors, all made with the finest ingredients.
        </motion.p>
      </div>
      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {ServiceData.map((service) => (
          <div className="text-center p-4 space-y-6">
            <img src={service.image} alt="" 
              className="img-shadow2 max-w-[200px] mx-auto
              hover:scale-110 duration-300 cursor-pointer"/>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-primary">{service.title}</h1>
              <p className="text-darkGray">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
