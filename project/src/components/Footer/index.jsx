import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {  iconsFooterList } from '../../constants';
import { FaBox, FaDashcube, FaSquare, FaSquareRootAlt, FaSquarespace } from 'react-icons/fa';


export const Footer = () => {
    return (
        <div>
            <div className='w-full'>
                <div className='flex min-h-[100px] w-full items-center'>

                    {/* Segundo grupo de elementos centrados y con mejor comportamiento en pantallas pequeñas */}
                    <div className='flex flex-wrap justify-center gap-x-4 w-full'>
                        {/*<div className='border-b-indigo-200 border-2'>
                            <div className='min-h-[70px] max-h-[120px] w-[200px] bg-slate-500'>
                                <span>HELLO</span>
                            </div>
                            </div>*/}
                        <div className='flex flex-col items-center'>
                            <div className='flex flex-col items-center my-5 mt-7'>
                                <div className='h-8 w-8 border-[4px] border-black rotate-45'/>
                                <div className=' h-6 w-6 border-[3px] border-black rotate-45'/>
                                <div className='h-4 w-4 border-[2px] border-black rotate-45'/>
                            </div>
                            <div className='min-h-[70px] max-h-[120px] w-[400px] items-center flex justify-center gap-4 border-t-2 border-black'>
                                
                                {
                                    iconsFooterList.map((value, i) => {
                                        return (
                                            <React.Fragment key={i}>
                                                <motion.div 
                                                key={i}
                                                initial={{
                                                    scale: 0.6
                                                }}
                                                animate={{
                                                    scale: 1
                                                }}
                                                whileHover={{
                                                    scale: 1.1
                                                }}
                                                >
                                                    <Link to={value[1]}>
                                                        {value[0]}
                                                    </Link>

                                                </motion.div>
                                            </React.Fragment>
                                            
                                        )
                                    })
                                }
                            </div>
                        </div>
                        {/*
                        <div className='min-h-[70px] max-h-[120px] w-[200px] bg-slate-500'>
                            <span>HELLO</span>
                        </div>
                        */}
                    </div>
                    

                </div>
            </div>
        </div>
    );
};
