"use client"

import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Sparkle from 'react-sparkle'

export default function AnimatedCard({ 
  frontContent,
  backContent,
  colorBg,
  className
}) {
  const [isTapping, setIsTapping] = useState(false)
  const blackBackgroundControls = useAnimation();

  const handleTapStart = () => {
    setIsTapping(true)
    blackBackgroundControls.start({ width: '100%', transition: { duration: 0.3, delay: 0.6 } })
  }

  const handleTapEnd = () => {
    setIsTapping(false)
    blackBackgroundControls.start({ width: '0%', transition: { duration: 0.3 } })
  }

  return (
        <div className={"flex justify-center items-center w-full min-h-48 select-none"}>
            
        <motion.div
            className="relative h-full w-full cursor-pointer"
            initial={{ rotateY: 0, y: 0, rotate: 0 }}
            whileTap={{
            y: [-20, 0, 0, 0],
            rotate: [0, -5, 5, -5, 5, 0, 0],
            rotateY: [0, 0, 0, 180],
            }}
            onTapStart={handleTapStart}
            onTap={handleTapEnd}
            onTapCancel={handleTapEnd}
            
            transition={{
            duration: 0.6,
            times: [0, 0.2, 0.4, 1],
            ease: "easeInOut",
            }}
            style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d'
            }}
        >
            
            {/* Lado Frontal */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gray-100 flex items-center justify-center backface-hidden shadow-lg border-black"
                style={{
                    backfaceVisibility: "hidden"
                }}
            >
                
                <img
                    src="/img/stamp.png" // Asegúrate de que esta ruta sea correcta
                    alt=""
                    className="absolute top-0 right-0 w-[7rem] h-auto mt-3 mr-3" // Ajusta la anchura según lo necesites
                />

                {frontContent || null}
            </motion.div>


            {/* Lado Posterior */}
            <motion.div
            className="absolute top-0 left-0 w-full h-full bg-white border-2 border-black flex items-center shadow-lg backface-hidden"
            style={{
                backfaceVisibility: "hidden",
                transform: 'rotateY(180deg)'
            }}
            >
                
                {/* Contenido personalizado */}
                <div className='z-10 relative w-full h-full overflow-scroll'>
                
                    {backContent || null}
                </div>
            
            {/* Fondo negro animado */}
            <motion.div 
                className='absolute top-0 left-0 h-full bg-black' 
                initial={{ width: '0%' }}
                animate={blackBackgroundControls}
            />
            
            {/* Línea blanca posicionada a la derecha */}
            <div className='absolute top-0 right-0 h-full w-1 bg-white mr-2 z-20' />
            </motion.div>
        </motion.div>
        </div>
  )
}