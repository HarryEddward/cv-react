import React, { useState } from 'react';
import { FaClipboard } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const CopyToClipboardButton = ({ text_to_copy }) => {
    const copyText = () => {
        navigator.clipboard.writeText(text_to_copy);
    };

    const [hoverDivClipboardButton, setHoverDivClipboardButton] = useState(false);

    return (
        <div 
            className='relative bg-black flex items-center h-auto'
            onMouseEnter={() => setHoverDivClipboardButton(true)}
            onMouseLeave={() => setHoverDivClipboardButton(false)}
        >
            {/* Fondo negro absoluto que ocupa todo el contenedor */}
            <motion.div
                className='absolute inset-0 bg-black z-10'
                initial={{
                    width: '0%'
                }}
                animate={{
                    width: hoverDivClipboardButton ? '100%' : '0%',
                }}
                transition={{
                    duration: 0.5
                }}
            />

            <div className='bg-white h-10 flex items-center px-3 mr-3 my-[2px] ml-[2px] relative z-20'>
                <motion.div
                    className='absolute inset-0 bg-black z-10'
                    initial={{ width: '0%' }}
                    animate={{ width: hoverDivClipboardButton ? '100%' : '0%' }}
                    transition={{ duration: 0.5 }}
                />
                <motion.span
                    className="text-lg z-30 relative"
                    initial={{
                        color: 'rgb(255, 255, 255)'
                    }}
                    animate={{
                        color: hoverDivClipboardButton ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {text_to_copy}
                </motion.span>
            </div>

            <button
                onClick={copyText}
                className='bg-black p-2 mr-3 rounded-xl text-lg flex items-center relative z-20'
            >
                <motion.div
                    initial={{ scale: 1, rotateZ: 0 }}
                    whileTap={{ scale: 0.7 }}
                    whileHover={{ scale: 1.3, rotateZ: 20 }}
                    transition={{
                        duration: 0.2,
                    }}
                >
                    <FaClipboard color='#e5e7eb' />
                </motion.div>
            </button>

            <div className='w-1 h-[2.8rem] mr-1 bg-white border-2 relative z-20' />
        </div>
    );
};
