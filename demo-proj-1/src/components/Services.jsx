import React from "react";
import { motion } from "framer-motion";

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
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.4,
          }}
          className="text-sm opacity-50"
        >
          We offer a wide range of coffee products, from classic blends to
          unique flavors, all made with the finest ingredients.
        </motion.p>
      </div>
      {/* Card Section */}
    </div>
  );
};

export default Services;
