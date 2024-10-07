import React from 'react';
import { motion } from 'framer-motion';
import useLangStore from '../../store/langStore';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { actualLang, changeLang } = useLangStore();


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
    <nav className="flex justify-between items-center bg-gray-100 py-4 border-b-2 border-b-black">
      {/* Contenedor vacío para empujar el contenido central */}
      <div className="w-1/3"></div>

      {/* Botón al final del Navbar */}
      <div className="w-1/3 flex justify-end">
        <button
          className="h-[2.5rem] border-gray-700 border-2 px-4 rounded-lg hover:bg-slate-300 transition duration-200 mr-7"
          onClick={() => changeLang()}
        >
          {renderFlag()}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
