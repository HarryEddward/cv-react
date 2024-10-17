import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Html, OrbitControls } from '@react-three/drei';
import Navbar from './components/Navbar';
import AnimatedCursor from "react-animated-cursor";
import FontFaceObserver from 'fontfaceobserver';
import { CiZoomIn } from "react-icons/ci";
import './index.css';
import Laptop from './components/Laptop';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { NavbarDesktop } from './components/NavbarDesktop';
import CopyToClipboardButton from './components/buttons/CopyToClipboardButton';
import { email_contact, phone_contact } from './constants';
import { FaArrowDown, FaCartArrowDown } from 'react-icons/fa';

// Función para dividir un texto en letras individuales
const SplitText = ({ text }) => {
  const [perpetualMotion, setPerpetualMotion] = useState(false);

  return (
    <span>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 150, x: 0 }}
          animate={perpetualMotion
            ? { y: [0, -10, 0], opacity: 1 }
            : { opacity: 1, y: 0, x: 0 }}
          transition={{
            duration: perpetualMotion ? 1.5 : 1,
            delay: index * 0.12,
            type: perpetualMotion ? "easeInOut" : "spring",
            stiffness: perpetualMotion ? undefined : 100,
            repeat: perpetualMotion ? Infinity : 0,
          }}
          style={{ display: 'inline-block' }}
          onAnimationComplete={() => {
            if (index === text.length - 1) {
              setPerpetualMotion(true);
            }
          }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
};

const SplitTextSubTitle = ({ text, className }) => {
  const [perpetualMotion, setPerpetualMotion] = useState(false);

  return (
    <span className={className}>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 150, x: 0 }}
          animate={perpetualMotion
            ? { y: [0, -2, 0], opacity: 1 }
            : { opacity: 1, y: 0, x: 0 }}
          transition={{
            duration: perpetualMotion ? 1.5 : 1,
            delay: index * 0.1,
            type: perpetualMotion ? "easeInOut" : "spring",
            stiffness: perpetualMotion ? undefined : 40,
            repeat: perpetualMotion ? Infinity : 0,
          }}
          style={{ display: 'inline-block' }}
          onAnimationComplete={() => {
            if (index === text.length - 1) {
              setPerpetualMotion(true);
            }
          }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
};

export default function App() {
  const [laptopLoaded, setLaptopLoaded] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const font = new FontFaceObserver('EckhartDisplayBlack');

    font.load().then(() => {
      setFontLoaded(true);
    }).catch(() => {
      console.error('La fuente no se pudo cargar.');
    });
  }, []);

  const handleLaptopLoaded = () => {
    setLaptopLoaded(true);
  };

  return (
    <div className='w-full h-full'>
      {fontLoaded && (
        <>
          <AnimatedCursor
            innerSize={8}
            outerSize={8}
            color='0, 0, 0'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link'
            ]}
          />

          {/* NavbarDesktop visible solo en tabletas o pantallas más grandes */}
          <div className="hidden md:block">
            <NavbarDesktop />
          </div>

          {/* Navbar visible solo en móviles */}
          <div className="block md:hidden">
            <Navbar />
          </div>

          <div className='w-full text-center'>
            <div className=''>
              <div>
                <span className='text-lg flex items-center justify-center'>
                  {t('info_cursor')} <CiZoomIn size={20} style={{ marginLeft: '10px' }} />
                </span>
              </div>
              <div className="hidden md:block">
                <div className='w-[800px] max-w-full h-[2px] bg-slate-300 mx-auto my-3'/>
                <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
                  <CopyToClipboardButton text_to_copy={email_contact} />
                  <CopyToClipboardButton text_to_copy={phone_contact} />
                </div>
              </div>
            </div>
          </div>


          <div className='hidden xl:block relative w-full h-[1px]'>
            {laptopLoaded && (
              <h1 className='w-full font-black text-[50vh] text-center font-eckhart text-black'>
                <SplitText text="Adrian" />
              </h1>
            )}
          </div>

          <div className='w-full h-[1px] text-black block md:hidden'>
            {laptopLoaded && (
              <div className='text-center'>
                <h1 className='pt-10 w-full font-black text-8xl text-center font-eckhart text-black'>
                  <SplitText text="Adrian" />
                </h1>
                <SplitTextSubTitle text="Full-Stack_Web_Developer" />
                <div className='flex justify-center'>
                  <motion.div
                  initial={{ opacity: 0, translateY: 100 }}
                  animate={{ opacity: 1, translateY: 30 }}
                  transition={{ duration: 3, ease: 'easeInOut' }}
                  >
                    <FaArrowDown/>
                  </motion.div>
                </div>
              </div>
            )}
          </div>

          <Canvas className='' style={{ width: '100%' }} camera={{ position: [-15, 60, -10], fov: 4 }}>
            <ambientLight intensity={1} />
            <pointLight position={[0, 20, 20]} intensity={10000} />
            <pointLight position={[20, -20, -20]} intensity={10000} />
            <Suspense fallback={null}>
              <Float
              speed={1}
              rotationIntensity={0.5}
              floatingRange={[0.05, 0.05]}
              >
                <Laptop onLoaded={handleLaptopLoaded} />
              </Float>
              
            </Suspense>
            <OrbitControls
              makeDefault
              enableZoom={false}
              enablePan={false}
              enableRotate={true}
              minPolarAngle={Math.PI / 2.2}
              maxPolarAngle={Math.PI / 2.2}
            />
          </Canvas>
          <div className="block md:hidden">
            <div className='mb-20'>
              <div className='w-[800px] max-w-full h-[2px] bg-slate-300 mx-auto my-3'/>
              <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
                <CopyToClipboardButton text_to_copy={email_contact} />
                <CopyToClipboardButton text_to_copy={phone_contact} />
              </div>
            </div>
          </div>
        </>
      )}
      
    </div>
  );
}
