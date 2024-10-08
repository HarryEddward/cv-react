import { useState } from 'react';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';

import './i18n.js';
import './App.css';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import Navbar from './components/Navbar';
import { HardSkills } from './components/Section/HardSkills/index.jsx';
import useCalculateAge from './hook/utils/useCalculateAge.js';
import { Softkills } from './components/Section/SoftSkills/index.jsx';
import { Header } from './components/Header/index.jsx';

function App() {

  return (
    <div>
      <Navbar/>
      <div className=" max-w-[1280px] mx-auto p-8 text-center">
        {/* Contenedor de la imagen centrado y detrás del contenido */}
        <div className="relative inset-0 flex items-center justify-center z-0 border-slate-200 border-b-8 m-0 p-0">
          <img
            className="w-[20%] h-auto rounded-full"
            src="/img/logo.png"
            alt="Logo"
            style={{ clipPath: 'inset(0 0 5% 0)' }} // Esto recorta la mitad inferior
          />
        </div>

        {/* Contenido principal */}
        <Header/>
        <div className="mt-10">
          <div>
            <HardSkills/>
          </div>
          <div className='mt-10'>
            <Softkills/>            
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
