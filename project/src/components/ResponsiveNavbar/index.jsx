import React from 'react';
import { motion } from 'framer-motion';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import { LangButton } from '../buttons/LangButton';
import { HamburgerButton } from '../buttons/HamburgerButton';
import useNavbarStore from '../../store/navbarStore';
import { Link } from 'react-router-dom';

export const ResponsiveNavbar = ({ className }) => {
  const { t } = useTranslation();

  const {
    isOpen,
  } = useNavbarStore();

  const navbarVariants = {
    open: {
      height: 'auto',
      scaleY: 1,
      transition: {
        duration: 0.3
      }
    },
    closed: {
      height: 0,
      scaleY: 0,
      transition: {
        duration: 0.3
      }
    }
  };
  

  return (
    <div className={className}>
      <nav className="flex flex-wrap justify-between items-center py-4 sticky top-0 z-20">

        {/* Contenedor vacío para empujar el contenido central */}
        <div className="flex justify-end">
          <div className='ml-4'>
            <HamburgerButton/>
          </div>
        </div>


        {/* Botón al final del Navbar */}
        <div className="flex justify-end">
          <div className='mr-3'>
            <LangButton/>
          </div>
          
        </div>
        <div className='w-full'>
          <motion.div
          className='bg-black w-full h-auto text-gray-200'
          initial={{
            height: 0,
            scaleY: 0
          }}
          variants={navbarVariants}
          animate={isOpen ? 'open' : 'closed'}
          >
            <ul className=''>
              
              <li>
                <motion.button
                className='font-eckhart text-4xl p-2 rounded-lg underline'
                whileTap={{
                  x: 15
                }}
                >
                  <Link to='/about'>
                    <span>About</span>
                  </Link>
                </motion.button>
              </li>
              <li>
                <motion.button
                className='font-eckhart text-4xl p-2 rounded-lg border-gr underline'
                whileTap={{
                  x: 15
                }}
                >
                  <Link to='/contact'>
                    <span>Contact</span>
                  </Link>
                  
                </motion.button>
              </li>
              
            </ul>
          
          </motion.div>
        </div>
      </nav>
    </div>
  );
};