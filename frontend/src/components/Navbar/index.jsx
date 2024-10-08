import React from 'react';
import { motion } from 'framer-motion';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import { LangButton } from '../buttons/LangButton';
import { HamburgerButton } from '../buttons/HamburgerButton';
import useNavbarStore from '../../store/navbarStore';

const Navbar = ({ className }) => {
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

        {/* Contenedor de los enlaces About y Contact centrados */}
        {/*
        <ul className="flex items-center justify-center w-1/3 space-x-4 sm:space-x-6 md:space-x-12">
          <li>
            <motion.div className="text-lg md:text-xl font-eckhart"
              whileHover={{
                scale: 1.2,
                opacity: 0.3
              }}
              transition={{
                duration: 0.2
              }}
            >
              {t('about')}
            </motion.div>
          </li>
          <li>
            <motion.div className="text-lg md:text-xl font-eckhart"
              whileHover={{
                scale: 1.2,
                opacity: 0.3
              }}
              transition={{
                duration: 0.2
              }}
            >
              {t('contact')}
            </motion.div>
          </li>
        </ul>
        */}

        {/* Botón al final del Navbar */}
        <div className="flex justify-end">
          <div className='mr-3'>
            <LangButton/>
          </div>
          
        </div>
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
                About 
              </motion.button>
            </li>
            <li>
              <motion.button
              className='font-eckhart text-4xl p-2 rounded-lg border-gr underline'
              whileTap={{
                x: 15
              }}
              >
                Acerca
              </motion.button>
            </li>
            
          </ul>
         
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
