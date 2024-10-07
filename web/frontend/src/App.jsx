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

function App() {

  const birthDate = '2006-11-21'; // Fecha de nacimiento
  const age = useCalculateAge(birthDate);

  const { t } = useTranslation('hard_skills');


  return (
    <div>
      <HardSkills/>
      
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
        <div className="z-10 flex flex-col items-start bg-slate-100"> {/* Cambiado a items-start */}
          <motion.h1
            className="text-6xl font-black pb-4"
            initial={{ opacity: 0, y: -10 }}  // Estado inicial
            animate={{ opacity: 1, y: 0 }}  // Estado final (cuando se carga)
            transition={{ duration: 1 }}  // Duración de la animación
          >
            Full stack developer, <CountUp end={age} duration={6}/>
          </motion.h1>
          <h2 className="text-3xl font-bold text-left text-gray-700">Experience with MultiPlatform App's</h2> {/* Alineado a la izquierda */}
          <h2 className="text-3xl font-bold text-left text-gray-700">Notions with DevOps</h2> {/* Alineado a la izquierda */}
        </div>
        <div className="mt-10">
          <div>
            <h2 className="text-4xl font-semibold text-left">{t('title')}</h2>
            <div className='pl-5 pt-4 border-l-4'>

              <div>
                <h2 className="text-2xl font-semibold text-left">{t('title_languges')}</h2>
                <div>
                  <p className='text-md text-justify'>{t('content_languages')}</p>
                </div>
              </div>

              <div className='mt-5'>
                <h2 className="text-2xl font-semibold text-left">{t('title_technologies')}</h2>
                <div>
                  <p className='text-md text-justify'>{t('content_technologies')}</p>
                </div>
              </div>
              
              <div className='mt-5'>
                <h2 className="text-2xl font-semibold text-left">{t('title_db')}</h2>
                <div>
                  <p className='text-md text-justify'>{t('content_db')}</p>
                </div>
              </div>

              <div className='mt-5'>
                <h2 className="text-2xl font-semibold text-left">{t('title_3D')}</h2>
                <div>
                  <p className='text-md text-justify'>{t('content_3D')}</p>
                </div>
              </div>

            </div>
          </div>
          <div className='mt-6'>
            <h2 className="text-4xl font-semibold text-left">Soft Skills</h2>
            <div className='pl-5 pt-4 border-l-4'>
              <h2 className="text-2xl font-semibold text-left">🤝 Sales</h2>
              <div>
                <p className='text-md text-justify'>
                  I sell to a hairdresser 1 web to download the apps, and 3 apps, to manage all the appointments in automatized way.
                </p>
              </div>

              <div className='mt-5'>
                <h2 className="text-2xl font-semibold text-left">🙋 Social</h2>
                <div>
                  <p className='text-md text-justify'>I'm one of the best persons to start a conversation from a simple thing in common. I learn to interest to the people and avoid ignoring to them, and thats i have a greate contacts from high-ranking people.</p>
                </div>
              </div>

              <div className='mt-5'>
                <h2 className="text-2xl font-semibold text-left">👨‍👩‍👧‍👦 Communities</h2>
                <div>
                  <p className='text-md text-justify'>
                    I'm very courious person, i like undestand all prespectives of very differnt 
                    types of thoughts. I start when my fathers put me the ethernet at my home, y explored
                    the femenine psychology, and i begin with enter the community of the red pill. I want to emphasize that she was a feminist,
                    and i belived to the high school have all the reason.
                    I learn a lot from the woman self-taught between communities,
                    and inseide I learn how improtant is the self image from your
                    pyshic.
                    And the end I join the latest community named: MGTOW. To see how woman is
                    capable to do, after the relationship, and avoid all of the errors, and make
                    my life more equilibrate and enjoy the life.
                  </p>
                </div>
              </div>
            </div>

            
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
