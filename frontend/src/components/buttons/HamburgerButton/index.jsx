import { motion, transform } from 'framer-motion';
import React from 'react';

export function HamburgerButton() {

    const variants = {
        hover: {
            scale: 1.1, // Escalado del botón completo
            transition: {
                duration: 0.5,
                staggerChildren: 0.1, // Stagger para animar los divs con un pequeño retraso
            }
        },
        tap: {
            scale: 0.9,
            transition: {
                duration: 0.5
            }
        }
    };

    const lineVariants = {
        initial: {
            x: 0,
        },
        hover: (x) => ({
            x: x, // Animación personalizada para cada línea
            transition: { duration: 0.5 },
        }),
    };

    return (
        <div>
        
            <div className='flex justify-center items-center h-16 w-16 rounded-md'>
                <motion.button
                    className='w-8 h-auto'
                    variants={variants} // Aplica el escalado al botón completo
                    whileHover="hover" // Activa el hover en el botón
                    initial="initial"
                    whileTap="tap"
                    
                >
                    <div className='flex flex-col space-y-[8px]'>
                        {/* Primera barra - se mueve hacia la derecha */}
                        <motion.div
                            className='w-full h-[3px] bg-black rounded'
                            variants={lineVariants}
                            custom={10} // Se mueve 10px a la derecha
                        />
                        {/* Segunda barra - se mueve hacia la izquierda */}
                        <motion.div
                            className='w-full h-[3px] bg-black rounded'
                            variants={lineVariants}
                            custom={-10} // Se mueve 10px a la izquierda
                        />
                        {/* Tercera barra - se mueve hacia la derecha */}
                        <motion.div
                            className='w-full h-[3px] bg-black rounded'
                            variants={lineVariants}
                            custom={10} // Se mueve 10px a la derecha
                        />
                    </div>
                </motion.button>
            </div>
        </div>
    );
}
