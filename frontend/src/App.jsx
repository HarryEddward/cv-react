import React, { useState, useRef, useEffect, Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Html, OrbitControls, useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';
import Navbar from './components/Navbar';
import AnimatedCursor from "react-animated-cursor"
import { CiZoomIn } from "react-icons/ci";
import { Howl } from 'howler';

function Laptop() {
  const { scene } = useGLTF('/models/untitled.gltf', true);  // Obtén la escena directamente
  const modelRef = useRef();  // Si planeas hacer manipulaciones adicionales con el modelo
  
  return scene ? (  // Verifica que `scene` esté disponible antes de renderizar
    <>
    <primitive position={[0, -1, 0]} scale={[1,1, 1]} rotation={[0, 0, 0]} object={scene} ref={modelRef} />
    <mesh>
      <Html occlude distanceFactor={1} position={[0.13,-0.3,0.001]} rotation={[0, -1.58, 0]} transform>
        
        <div style={{ width: "750px", height: "460px", backgroundColor: "white", borderRadius: "10px", overflow: 'scroll' }}>
          <iframe src="http://localhost:5174" title="Example iframe" width="100%" height="100%"></iframe>
          <ul>
            <li>1</li>
            <li>2</li>
          </ul>
        </div>
      </Html>
    </mesh>
    </>
  ) 
  : null;  // Retorna `null` mientras el modelo está cargando
}



function Box() {
  const boxRef = useRef(null);
  const [name, setName] = useState('');

  // Función para animar en hover
  const handleMouseEnter = () => {
    gsap.to(boxRef.current.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 0.5 });
  };

  const handleMouseLeave = () => {
    gsap.to(boxRef.current.scale, { x: 1, y: 1, z: 1, duration: 0.5 });
  };

  useEffect(() => {
    // Animación inicial
    gsap.fromTo(
      boxRef.current.scale,
      { x: 0, y: 0, z: 0 }, // Inicialmente, escala en 0
      { x: 1, y: 1, z: 1, duration: 1 }
    );
  }, []);

  return (
    <mesh
      ref={boxRef}  // Asegúrate de que el ref esté aquí
      onPointerOver={handleMouseEnter} // Al pasar el mouse
      onPointerOut={handleMouseLeave} // Al salir el mouse
    >
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color="white" />
      <Html occlude distanceFactor={1.5} position={[0, 0, 0.51]} transform>
        <span>Size</span>
        <div style={{ width: '100px', height: '100px', backgroundColor: 'royalblue' }}>
          Soy un cuadro animado
        </div>
      </Html>
      <Html occlude distanceFactor={1.5} position={[0, 1.00001, 0]} rotation={[-Math.PI / 2, 0, 0]} transform>
        <h1 className='font-semibold text-3xl'>{name}</h1>
        <input
          type="text"
          value={name} // Asegúrate de enlazar el valor del input con state
          onChange={(event) => setName(event.target.value)} // Actualizar el estado correctamente
        /><br/><br/>
        <button className='bg-black text-white' onClick={() => console.log('Cliekaio')}>Iniciar sesión</button>
      </Html>
    </mesh>
  );
}


export default function App() {

  return (
    <div className='w-[100%] h-[100%]'>
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
      
      <Navbar/>
      <div className='w-[100%] text-center'>
        <span className='text-lg' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Haz zoom <CiZoomIn size={20} style={{marginLeft: '10px'}}/></span>
      </div>
      <div className='hidden xl:block relative w-[100%] h-[1px] bg-red-900 '>
          <h1 className='w-[100%] font-black text-[50vh] text-center border-b-4 font-serif'>Adrian</h1>
      </div>
      
      <Canvas className='' style={{ height: '100%' }} camera={{ position: [-15, 60, -10], fov: 4 }}>
        <ambientLight intensity={1} />
        <pointLight position={[0, 20, 20]} intensity={10000}/>
        <pointLight position={[20, -20, -20]} intensity={10000}/>
        <Suspense fallback={null}>
          <Laptop />
        </Suspense>
        <OrbitControls
        makeDefault
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}/>
      </Canvas>
  
    </div>
  );
}