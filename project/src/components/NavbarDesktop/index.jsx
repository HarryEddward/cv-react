import React from 'react';
import { motion } from 'framer-motion';
import useLangStore from '../../store/langStore';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import { CiZoomIn } from 'react-icons/ci';
import { div } from 'three/webgpu';
import { LangButton } from '../buttons/LangButton';
import { Link } from 'react-router-dom';

export function NavbarDesktop({ className }) {
  const { actualLang, changeLang } = useLangStore();
  const { t } = useTranslation();

  const renderFlag = () => {
    if (actualLang === "es") {
      return (
        <img
          className='w-8 h-8'
          src="/img/espana.png"
          alt="Spanish Flag"
        />
      );
    } else if (actualLang === "en") {
      return (
        <img
          className='w-8 h-8'
          src="/img/reino-unido.png"
          alt="English Flag"
        />
      );
    }
  };

  return (
    <div className={className}>
        <nav className="bg-gray-000 py-4 sticky top-0 z-20">

        {/* Contenedor vacío para empujar el contenido central */}
        <div className="w-full flex justify-between">
            <div className="w-1/3"></div>

            {/* Contenedor de los enlaces centrados */}
            <div className="w-1/3 flex justify-center">
                
            </div>

            {/* Botón de cambio de idioma */}
            <div className="w-1/3 flex justify-end relative">
            <div className="absolute top-0 right-0 h-screen pr-4 mt-3">
        
                <ul className="font-black font-ECKHART_display_black text-right space-y-3 mt-12 border-l-gray-300 border-l-2 pl-5 mr-10">
                <LangButton/>
                <li>
                    <motion.button
                    whileHover={{
                        scale: 1.2,
                        opacity: 0.7
                    }}
                    transition={{
                        duration: 0.2
                    }}
                    className="text-xl mix-blend-color"
                    >
                      <Link to="/">
                        <span>Home</span>
                      </Link>
                    </motion.button>
                </li>
                <li>
                    <motion.button
                    whileHover={{
                        scale: 1.2,
                        opacity: 0.7
                    }}
                    transition={{
                        duration: 0.2
                    }}
                    className="text-xl mix-blend-screen"
                    >
                      <Link to="/about">
                        <span>About</span>
                      </Link>
                    </motion.button>
                </li>
                <li>
                    <motion.button
                    whileHover={{
                        scale: 1.2,
                        opacity: 0.7
                    }}
                    transition={{
                        duration: 0.2
                    }}
                    className="text-xl"
                    >
                      <Link to="/contact">
                        <span>Contact</span>
                      </Link>
                    </motion.button>
                </li>
                
                </ul>
                
                </div>
            </div>
        </div>

        {/* Menú vertical a la derecha */}
        
        </nav>
        
    </div>
  );
}
