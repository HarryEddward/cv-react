import React from 'react';
import { Navbar } from '../../components/Navbar';
import { motion } from 'framer-motion';

export const AboutView = () => {
    return (
        <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            transition={{ duration: 2 }}
        >
            <div>
                <Navbar />
                <div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-7xl lg:text-9xl font-eckhart'>Acerca</h1>
                        <div className='my-2 h-[2px] 2xl:w-[80%] lg:w-[69%] w-[90%] bg-slate-200 self-center' />
                    </div>
                    
                    <div className='flex flex-col items-center w-full border-2'>
                        <div className='w-full max-w-[1200px] border-2'>
                            <div className='flex flex-row flex-wrap items-start md:justify-between justify-center'>
                                <div className='flex justify-center'>
                                    <img
                                        className='w-[100%] max-w-[400px] min-w-[100px] h-auto'
                                        src="/img/img1.png"
                                        alt=""
                                    />
                                </div>
                                
                                <div className='flex justify-end items-center border-2 flex-grow flex-shrink min-w-[400px] max-w-[800px]' id='here'>
                                    <div className='flex border-2 justify-center lg:text-center w-full sm:mt-5 text-right'>
                                        <span className='text-5xl lg:text-7xl font-eckhart'>
                                            Soy Adrian, 
                                            <span className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent pl-4">
                                                17
                                            </span>

                                            
                                        </span>
                                        <motion.span
                                            className='text-7xl mr-3 border-2 self-center'
                                            initial={{ translateY: 0, rotateZ: 0 }}
                                            animate={{
                                                translateY: [0, 20, 0, -5, 0],
                                                rotateZ: [0, 0, 10, 0, 0]
                                            }} // Animación de saludo
                                            transition={{
                                                duration: 1, // Duración de la animación (1 segundo por ciclo)
                                                repeat: Infinity, // Animación perpetua
                                                repeatType: 'loop', // Repetir en bucle
                                                repeatDelay: 2, // 2 segundos de pausa entre ciclos
                                            }}
                                        >
                                            🍷
                                        </motion.span>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
