import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { motion } from 'framer-motion';
import { Footer } from '../../components/Footer';
import AnimatedCard from '../../components/card/AnimateCard';
import { useAge } from '../../hook/useAge';
import CountUp from 'react-countup';
import Sparkle from 'react-sparkle';
import { DivAnimated } from '../../components/animations/DivAnimated';

export const AboutView = () => {
    const [ isAnimating, setIsAnimating ] = useState(false);
    const [ isDevopsToggle, setDevopsToggle ] = useState(false);

    const age = useAge('2006-11-21');

    const handleCupClick = () => {
        setIsAnimating(true);
    };


    return (
        <div>
            <div>
                <Navbar />
                <div className="w-full h-full">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-7xl lg:text-9xl font-ECKHART_display_black">Acerca</h1>
                        <div className="my-2 h-[2px] 2xl:w-[80%] lg:w-[69%] w-[90%] bg-slate-200 self-center" />
                    </div>

                    <div className="flex flex-col items-center w-full h-full">
                        <div className="w-full max-w-[1200px] h-full">
                            <div className="flex flex-row flex-wrap items-start md:justify-between justify-center w-full h-full ">
                                
                                <div className="flex justify-center relative"> {/* Añadido 'relative' aquí */}
                                    
                                    <img
                                        className="w-[100%] max-w-[400px] min-w-[100px] h-auto z-0 " // Asegúrate de que el z-index esté por debajo
                                        src="/img/img1.jpg"
                                        alt=""
                                    />
                                </div>


                                <div className="flex flex-col justify-end items-center flex-grow flex-shrink min-w-[400px] max-w-[800px] h-full">
                                    
                                    {/* Título con animación de la copa */}
                                    <div className="flex justify-center lg:text-center w-full sm:mt-5 text-right items-center">
                                        <span className="text-5xl lg:text-7xl font-ECKHART_display_black relative">
                                            
                                            Soy Adrian,
                                            <span className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent pl-4">
                                                <CountUp
                                                    end={age}
                                                    duration={5}
                                                />
                                            </span>
                                        </span>
                                        <motion.span
                                            className="text-7xl mr-3 self-center"
                                            initial={{ translateY: 0, rotateZ: 0 }}
                                            animate={{
                                                translateY: [0, 20, 0, -5, 0],
                                                rotateZ: [0, 0, 10, 0, 0],
                                            }}
                                            whileHover={{ scale: 1.1 }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                repeatType: 'loop',
                                                repeatDelay: 2,
                                            }}
                                        >
                                            <div className="relative inline-block sm:mt-4 lg:mt-0" onClick={handleCupClick}>
                                                <div className="z-10">
                                                    <span>🍷</span>
                                                </div>
                                                {isAnimating && (
                                                    <motion.div
                                                        className=" z-0"
                                                        initial={{ opacity: 0, scale: 0, translateY: 0 }}
                                                        animate={{
                                                            opacity: [0.9, 1, 1, 0],
                                                            scale: [0, 0.4, 0.4],
                                                            translateY: [0, -0.2],
                                                        }}
                                                        transition={{
                                                            duration: 1,
                                                            ease: 'easeInOut',
                                                            onComplete: () => setIsAnimating(false),
                                                        }}
                                                    >
                                                        
                                                        <div className="absolute top-[-24rem] left-0 rotate-180 scale-125 z-0">
                                                            <span className="">🩸</span>
                                                        </div>
                                                        <div className="absolute top-[-24rem] left-10 rotate-[-160deg] scale-50 z-0">
                                                            <span className="">🩸</span>
                                                        </div>
                                                        <div className="absolute top-[-24rem] left-20 rotate-[-140deg] z-0">
                                                            <span className="">🩸</span>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </div>
                                        </motion.span>
                                    </div>
                                    <div className='py-4 my-3'>
                                        <DivAnimated text='“Only with discipline and curiosity are the best men made”'/>
                                    </div>
                                    {/* Nueva sección de contenedores debajo de la animación */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 w-full max-w-[1200px] mx-auto my-6 text-3xl">
                                        {/* Tarjeta Frontal */}
                                        <AnimatedCard
                                            frontContent={
                                            <div className="text-center">
                                                <h2 className="text-2xl font-bold">Frontend 🖌️</h2>
                                                <p className="text-sm">Tap to learn more</p>
                                            </div>
                                            }
                                            backContent={
                                            <div className="text-white text-center p-4">
                                                <h3 className="text-xl font-bold mb-2">Frontend</h3>
                                                <ul className="text-lg mb-4 list-disc text-left ml-5">
                                                    <li>React & Astro</li>
                                                    <li>Tailwind & Sass</li>
                                                    <li>Framer motion & GSAP</li>
                                                    <li>React/Fiber & React/Drei</li>
                                                    <li>i18n</li>
                                                </ul>
                                            </div>
                                            }
                                        />
                                         <AnimatedCard
                                            frontContent={
                                            <div className="text-center">
                                                <h2 className="text-2xl font-bold">Backend 🖥️</h2>
                                                <p className="text-sm">Tap to learn more</p>
                                            </div>
                                            }
                                            backContent={
                                            <div className="text-white text-center p-4">
                                                <h3 className="text-xl font-bold mb-2">Backend</h3>
                                                <ul className="text-lg mb-4 list-disc text-left ml-5">
                                                    <li>FastAPI + Gunicorn</li>
                                                    <li>Express.js + Socket.io</li>
                                                    <li>AES256 Optimization</li>
                                                    <li>Extraconfidencial methods</li>
                                                </ul>
                                            </div>
                                            }
                                        />
                                         <AnimatedCard
                                            frontContent={
                                            <div className="text-center">
                                                <h2 className="text-2xl font-bold">Libraries 📚</h2>
                                                <p className="text-sm">Tap to learn more</p>
                                            </div>
                                            }
                                            backContent={
                                                <div className="text-white text-center p-4">
                                                <h3 className="text-xl font-bold mb-2">Libraries</h3>
                                                <ul className="text-lg mb-4 list-disc text-left ml-5">
                                                    <li>To_Literal (PyPi)</li>
                                                    <li>Simply_Cuda_AES (PyPi)</li>
                                                    <li>Valtio_Hook_AutoProxy (NPM)</li>
                                                    <li>FontifyJS (NPM)</li>
                                                </ul>
                                                
                                            </div>
                                            
                                            }
                                        />
                                        <AnimatedCard
                                            frontContent={
                                            <div className="text-center">
                                                <h2 className="text-2xl font-bold">DevOps ⚙️</h2>
                                                <p className="text-sm">Tap to learn more</p>
                                            </div>
                                            }
                                            backContent={
                                            <div className="text-white text-center p-4 items-center">
                                                <h3 className="text-xl font-bold mb-2">DevOps</h3>
                                                <ul className="text-lg mb-4 list-disc text-left ml-5">
                                                    <li>Docker & Docker Swarm</li>
                                                    <li>Jenkins</li>
                                                    <li>Github Workflows</li>
                                                    <li>Ansible</li>
                                                    <li>Vagrant</li>
                                                </ul>
                                                
                                            </div>
                                            }
                                        />
                                        <AnimatedCard
                                            frontContent={
                                            <div className="text-center">
                                                <h2 className="text-2xl font-bold">Databases 📂</h2>
                                                <p className="text-sm">Tap to learn more</p>
                                            </div>
                                            }
                                            backContent={
                                            <div className="text-white text-center p-4 items-center">
                                                <h3 className="text-xl font-bold mb-2">Databases</h3>
                                                <ul className="text-lg mb-4 list-disc text-left ml-5">
                                                    <li>MongoDB</li>
                                                    <li>RethinkDB</li>
                                                    <li>Sqlite</li>
                                                    <li>Redis</li>
                                                </ul>
                                                
                                            </div>
                                            }
                                        />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};
