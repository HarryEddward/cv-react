import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls, useGLTF } from '@react-three/drei';
import { Hourglass } from "react-loader-spinner";

export function FlowerPot() {
    const { scene } = useGLTF('/models/flowerpot.gltf', true);

    return (
        <div>
            <div className=" w-[380px] h-[400px]">
                <Canvas
                    className=""  // Ajusta el tamaño del canvas si deseas
                    camera={{ position: [3, 5, 20], fov: 30 }}  // Ajusta la posición y el FOV de la cámara
                >
                    <ambientLight intensity={1.2} />
                    <pointLight position={[6, -1, 0]} intensity={10} />
                    <pointLight position={[-6, -1, 0]} intensity={10} />
                    <pointLight position={[4, -2, 4]} intensity={20} />
                    <pointLight position={[1, -1, 6]} intensity={20} />
                    <pointLight position={[0, 2, 0]} intensity={6} />
                    <pointLight position={[0, 4, 0]} intensity={10} />

                    <Suspense fallback={
                        <Html center>
                            <Hourglass
                                visible={true}
                                height="60"
                                width="60"
                                ariaLabel="hourglass-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                colors={['#000000', '#000000']}
                            />
                        </Html>
                    }>
                        <primitive object={scene} scale={13}
                        position={[0, -4, 0]}
                        rotation={[0.2, 0, 0]}
                        />  {/* Ajusta el valor de scale para agrandar el modelo */}
                        <OrbitControls
                            makeDefault
                            enableZoom={false}
                            enablePan={false}
                            enableRotate={true}
                            minPolarAngle={Math.PI / 2.2}
                            maxPolarAngle={Math.PI / 2.2}
                            />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    )
}
