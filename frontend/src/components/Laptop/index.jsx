import React, { useRef, useEffect } from "react";
import { Html, useGLTF } from '@react-three/drei';
import gsap from 'gsap';

export default function Laptop({ onLoaded }) {
  const { scene } = useGLTF('/models/untitled.gltf', true);
  const modelRef = useRef();

  useEffect(() => {
    if (scene) {
      // Llamar a la función cuando el modelo esté listo
      onLoaded();
    }
  }, [scene, onLoaded]);

  // Función para manejar el hover (ratón encima)
  const handleMouseEnter = () => {
    gsap.to(modelRef.current.scale, {
      x: 1.7,
      y: 1.7,
      z: 1.7,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  // Función para manejar cuando el ratón se va
  const handleMouseLeave = () => {
    gsap.to(modelRef.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return scene ? (
    <>
      <primitive
        object={scene}
        ref={modelRef}
        position={[0, -1, 0]}
        scale={[1, 1, 1]}
        rotation={[0, 0, 0]}
        onPointerEnter={handleMouseEnter}  // Aplica la animación cuando el mouse está sobre el modelo
        onPointerLeave={handleMouseLeave}  // Aplica la animación cuando el mouse deja el modelo
      >
        <Html occlude distanceFactor={1} position={[0.13, 0.7, 0.001]} rotation={[0, -1.58, 0]} transform>
          <div style={{ width: "750px", height: "460px", backgroundColor: "white", borderRadius: "10px", overflow: 'scroll' }}>
            <iframe src="http://localhost:5174" title="Example iframe" width="100%" height="100%"></iframe>
          </div>
        </Html>
      </primitive>
    </>
  ) : null;
}
