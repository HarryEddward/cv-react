import { useState, useRef, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import { gsap } from 'gsap';

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
    <Canvas camera={{ position: [2, 1, 5], fov: 25 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[1, 1, 1]} />
      <pointLight position={[-1, -1, -1]} />
      <Box />
      <OrbitControls makeDefault />
    </Canvas>
  );
}