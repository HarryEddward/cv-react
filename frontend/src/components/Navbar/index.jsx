import React from 'react';
import { motion } from 'framer-motion';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import { LangButton } from '../buttons/LangButton';
import { HamburgerButton } from '../buttons/HamburgerButton';

const Navbar = ({ className }) => {
  const { t } = useTranslation();

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
      </nav>
    </div>
  );
};

export default Navbar;
