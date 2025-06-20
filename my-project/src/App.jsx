import { motion } from 'framer-motion';
import React from 'react';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-red-600 text-white text-4xl font-bold p-10 rounded-lg shadow-lg"
    >
      Tailwind + Framer Motion works! 🚀
    </motion.div>
  );
}

export default App;
