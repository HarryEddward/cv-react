import React from 'react';
import SlotCounter from 'react-slot-counter';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../../../components/Navbar';

export const Error404View = () => {


    const numberError = '404';
    const globalDurationAnimation = 3;

    return (
        <div>
            <Navbar/>
            <motion.div
            initial={{ 
                opacity: 0,
                translateY: 40
            }}
            animate={{
                opacity: 1,
                translateY: 0
            }}
            transition={{ duration: 0.5, type: 'spring', damping: 10, stiffness: 200 }}
            >
                <div className='flex justify-center items-center h-[100vh]'>
                    <div className='flex flex-col gap-4'>
                        
                        <h1 className='font-ECKHART_display_black lg:text-9xl text-7xl flex'>
                            <span>Error</span>
                            <motion.div
                            initial={{
                                color: '#000000',
                            }}
                            animate={{
                                color: '#A04A4A',
                            }}
                            transition={{ duration: globalDurationAnimation  }}
                            >
                                <SlotCounter value={numberError} speed={1} duration={globalDurationAnimation}/>
                            </motion.div>
                        </h1>
                        <div className='h-[2px] w-full bg-slate-200'/>
                        
                        <div>
                            <p>La página que buscas no existe.</p>
                            <p>Por favor, intenta de nuevo.</p>
                        </div>
                        
                        <div>
                            <motion.button
                            className='bg-slate-300 px-8 rounded-xl py-2'
                            >
                                <Link to="/">
                                    Back to Home
                                </Link>
                            </motion.button>
                        </div>

                    </div>
                    
                </div>
            </motion.div>
        </div>
    );
};