import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="flex justify-center bg-gray-100 py-4 py-10 border-b-2 border-b-black">
      <ul className="flex items-center ">
        <li className="lg:mr-12 mr-10">
        <motion.div className='text-2xl'
          whileHover={{
            scale: 1.2,
            opacity: 0.3
          }}
          transition={{
            duration: 0.2
          }}
          >
            About
          </motion.div>

        </li>
        <li className="lg2:mr-12">
          <motion.div className='text-2xl'
          whileHover={{
            scale: 1.2,
            opacity: 0.3
          }}
          transition={{
            duration: 0.2
          }}
          >
            Contact
          </motion.div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;