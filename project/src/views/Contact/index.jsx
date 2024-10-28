import React, { Suspense, useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { FlowerPot } from '../../components/models/FlowerPot';
import { Hourglass } from 'react-loader-spinner';
import { DivAnimated } from '../../components/animations/DivAnimated';
import { motion, useAnimation } from 'framer-motion';

export const ContactView = () => {

    const [textArea, setTextArea] = useState('');

    const handleChange = (e) => {
        setTextArea(e.target.value);
    };

    // Manejar el clic en el botón para vaciar el textarea
    const handleClear = () => {
    setTextArea(''); // Vaciar el estado
    };

    const blackBackgroundControls = useAnimation();

    const handleHoverStart = () => {
      blackBackgroundControls.start({ scale: 2, transition: { duration: 1, type: "spring", stiffness: 200, damping: 100 } })
    }
  
    const handleHoverEnd = () => {
        blackBackgroundControls.start({
            scale: 0,
            transition: { duration: 1, type: "spring", stiffness: 200, damping: 100 }
        });
    }

    return (
        <div>
            <div>
                <Navbar/>
                <div className='w-full h-full'>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-7xl lg:text-9xl font-ECKHART_display_black">Contact</h1>
                        <div className="my-2 h-[2px] 2xl:w-[80%] lg:w-[69%] w-[90%] bg-slate-200 self-center" />
                    </div>
                    <motion.div
                    className='border-2 border-green-400 w-full min-w-[100px] max-w-[900px] mx-auto relative z-50'
                    
                    onHoverStart={handleHoverStart}
                    onHoverEnd={handleHoverEnd}
                    >
                        <motion.div
                        className='absolute bg-black top-0 left-0 w-full h-full z-0'
                        initial={{
                            scale: 0
                        }}
                        animate={blackBackgroundControls}
                        />
                        <div className='absolute bg-white top-0 left-0 w-full h-full z-0 border-black border-2 outline outline-2 outline-white'/>
                        <div className='flex flex-wrap md:justify-start justify-center border-2 z-50'>
                            <div>
                                <Suspense fallback={
                                    <Hourglass
                                    visible={true}
                                    height="60"
                                    width="60"
                                    ariaLabel="hourglass-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    colors={['#000000', '#000000']}
                                />      
                                }>
                                    <FlowerPot/>
                                </Suspense>
                            </div>
                            <div className=' w-[500px] h-full z-50 '>
                                <div className='flex flex-wrap w-full justify-center border-b-2 border-black'>
                                    
                                    <span className='font-ECKHART_display_black text-6xl py-2'>
                                        Letter & Send Request
                                    </span>

                                    
                                    
                                </div>
                                <motion.textarea
                                    value={textArea} // Vincular el valor del textarea al estado
                                    onChange={handleChange}
                                    rows="6"
                                    placeholder="Dear Adrià Martín..."
                                    initial={{ scale: 1, backgroundColor: '#ffffff', borderColor: '#d1d5db' }} // border-gray-300
                                    whileFocus={{ scale: 1.05, backgroundColor: '#f0f9ff', borderColor: '#3b82f6' }} // bg-blue-50, border-blue-500
                                    whileHover={{ scale: 1.02, boxShadow: '0px 4px 20px rgba(59, 130, 246, 0.5)' }} // shadow-lg
                                    className="w-full my-3 p-2 border-2 border-gray-300 rounded-md transition-all duration-300 ease-in-out resize-none"
                                />
                                <button
                                className='mb-5 w-full'
                                onClick={() => {
                                    handleClear();
                                    console.log('send request succesfully!');
                                }}>
                                    <DivAnimated text='Send Request'/>
                                </button>
                                
                            </div>

                            
                        </div>
                    </motion.div>
                    
                    
                </div>
                <Footer/>
            </div>
        </div>
    );
};
