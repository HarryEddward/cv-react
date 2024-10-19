import React, { useState, useEffect, Suspense, startTransition } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Float, Html, OrbitControls } from '@react-three/drei';
import AnimatedCursor from "react-animated-cursor";
import FontFaceObserver from 'fontfaceobserver';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

import { emailContact, phoneContact } from '../../constants';

import { FaArrowDown } from 'react-icons/fa';
import { CiZoomIn } from "react-icons/ci";
import { Hourglass } from 'react-loader-spinner'

import { CopyToClipboardButton } from '../../components/buttons/CopyToClipboardButton';
import { Laptop } from '../../components/Laptop';
import { ResponsiveNavbar } from '../../components/ResponsiveNavbar';
import { SplitText } from '../../components/SplitText';
import { SplitTextSubtitle } from '../../components/SplitTextSubtitle';
import { Navbar } from '../../components/Navbar';





export const HomeView = () => {

    const [laptopLoaded, setLaptopLoaded] = useState(false);
    const [fontLoaded, setFontLoaded] = useState(false);

    const { t } = useTranslation('home');

    useEffect(() => {
        const font = new FontFaceObserver('EckhartDisplayBlack');

        font.load().then(() => {
        setFontLoaded(true);
        }).catch(() => {
        console.error('La fuente no se pudo cargar.');
        });
    }, []);

    const handleLaptopLoaded = () => {
        startTransition(() => {
            setLaptopLoaded(true);
        });
    };


    return (
        
        <div
        className='w-full h-full overflow-hidden'
        >
            {fontLoaded && (
                <>

                <Navbar/>

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
                        <CopyToClipboardButton text_to_copy={emailContact} />
                        <CopyToClipboardButton text_to_copy={phoneContact} />
                        </div>
                    </div>
                    </div>
                </div>


                <div className='hidden xl:block w-full h-[1px]'>
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
                        <SplitTextSubtitle text="Full-Stack_Web_Developer" />
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
                <div>
                    <Canvas
                    camera={{ position: [-15, 60, -10], fov: 4 }}
                    style={{
                        width: "100%",
                        height: "100vh",
                        position: 'relative'
                    }}
                    >
                        <ambientLight intensity={1} />
                        <pointLight position={[0, 20, 20]} intensity={10000} />
                        <pointLight position={[20, -20, -20]} intensity={10000} />
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
                </div>
                <div className="block md:hidden">
                    <div className='mb-20'>
                    <div className='w-[800px] max-w-full h-[2px] bg-slate-300 mx-auto my-3'/>
                    <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
                        <CopyToClipboardButton text_to_copy={emailContact} />
                        <CopyToClipboardButton text_to_copy={phoneContact} />
                    </div>
                    </div>
                </div>
                </>
            )}
            
        </div>
    
    );
};