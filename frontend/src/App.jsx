import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import Navbar from './components/Navbar';
import AnimatedCursor from "react-animated-cursor";
import FontFaceObserver from 'fontfaceobserver';
import { CiZoomIn } from "react-icons/ci";
import './index.css';
import Laptop from './components/Laptop';
import { motion } from "framer-motion";


// Función para dividir un texto en letras individuales
const SplitText = ({ text }) => {
  const [perpetualMotion, setPerpetualMotion] = useState(false); // Estado para controlar cuándo iniciar el movimiento perpetuo

  return (
    <span>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 150, x: 0 }} // Empieza fuera de la pantalla (arriba)
          animate={perpetualMotion 
            ? { y: [0, -10, 0], opacity: 1 } // Movimiento perpetuo (rebote suave)
            : { opacity: 1, y: 0, x: 0 }} // Sube a su posición en la animación inicial
          transition={{
            duration: perpetualMotion ? 1.5 : 1,  // Duración del ciclo perpetuo y de la animación inicial
            delay: index * 0.12,  // Escalonar la animación para cada letra
            type: perpetualMotion ? "easeInOut" : "spring",
            stiffness: perpetualMotion ? undefined : 100,
            repeat: perpetualMotion ? Infinity : 0,  // Repetir infinitamente en el movimiento perpetuo
          }}
          style={{ display: 'inline-block' }}
          onAnimationComplete={() => {
            if (index === text.length - 1) {
              setPerpetualMotion(true); // Cuando la última letra termina, comienza el movimiento perpetuo
            }
          }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
};

// Función para dividir un texto en letras individuales
const SplitTextSubTitle = ({ text, className }) => {
  const [perpetualMotion, setPerpetualMotion] = useState(false); // Estado para controlar cuándo iniciar el movimiento perpetuo

  return (
    <span className={className}>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 150, x: 0 }} // Empieza fuera de la pantalla (arriba)
          animate={perpetualMotion 
            ? { y: [0, -2, 0], opacity: 1 } // Movimiento perpetuo (rebote suave)
            : { opacity: 1, y: 0, x: 0 }} // Sube a su posición en la animación inicial
          transition={{
            duration: perpetualMotion ? 1.5 : 1,  // Duración del ciclo perpetuo y de la animación inicial
            delay: index * 0.1,  // Escalonar la animación para cada letra
            type: perpetualMotion ? "easeInOut" : "spring",
            stiffness: perpetualMotion ? undefined : 40,
            repeat: perpetualMotion ? Infinity : 0,  // Repetir infinitamente en el movimiento perpetuo
          }}
          style={{ display: 'inline-block' }}
          onAnimationComplete={() => {
            if (index === text.length - 1) {
              setPerpetualMotion(true); // Cuando la última letra termina, comienza el movimiento perpetuo
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
  const [laptopLoaded, setLaptopLoaded] = useState(false); // Estado para controlar la carga de la laptop
  const [fontLoaded, setFontLoaded] = useState(false); // Estado para controlar la carga de la fuente

  // Efecto para cargar la fuente
  useEffect(() => {
    const font = new FontFaceObserver('EckhartDisplayBlack');

    font.load().then(() => {
      setFontLoaded(true);
    }).catch(() => {
      console.error('La fuente no se pudo cargar.');
    });
  }, []);

  const handleLaptopLoaded = () => {
    setLaptopLoaded(true);  // Cambia el estado cuando la laptop esté lista
  };

  return (
    <div className='w-[100%] h-[100%]'>
      {/* Solo renderiza el contenido si la fuente y la laptop están cargadas */}
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

          <Navbar />
          <div className='w-[100%] text-center'>
            <span className='text-lg' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              Poner el cursor encima <CiZoomIn size={20} style={{ marginLeft: '10px' }} />
            </span>
          </div>

          <div className='hidden xl:block relative w-[100%] h-[1px] bg-red-900'>
            {laptopLoaded && (
              <h1 className='w-[100%] font-black text-[50vh] text-center font-eckhart'>
                <SplitText text="Adrian" />
              </h1>
            )}
          </div>

          <div className='w-[100%] h-[1px] bg-red-900 hidden-small'>
            {laptopLoaded && (
              <>
                <h1 className='pt-10 w-[100%] font-black text-8xl text-center font-eckhart hidden-small'>
                  <SplitText text="Adrian" />
                </h1>

                <SplitTextSubTitle text="Expert_Web_Developer" className="pl-[30%] hidden-small" />
              </>
            )}
          </div>

          <Canvas className='' style={{ width: '100%' }} camera={{ position: [-15, 60, -10], fov: 4 }}>
            <ambientLight intensity={1} />
            <pointLight position={[0, 20, 20]} intensity={10000} />
            <pointLight position={[20, -20, -20]} intensity={10000} />
            <Suspense fallback={null}>
              <Laptop onLoaded={handleLaptopLoaded} />
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
        </>
      )}
    </div>
  );
}