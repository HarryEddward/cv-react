import React from 'react';
import { email_contact } from '../../../constants';
import { FaClipboard } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CopyToClipboardButton = ({ text_to_copy }) => {
    const copyText = () => {
        navigator.clipboard.writeText(text_to_copy);
    }

    return (
        <div className='bg-gray-300 rounded-xl flex items-center'>
            <div className='bg-gray-100 rounded-xl h-10 flex items-center px-3 mr-3 my-[2px] ml-[2px]'>
                <span className='text-lg font-mono'>{text_to_copy}</span>
            </div>
            <button
                onClick={copyText}
                className=' bg-gray-300 p-2 mr-3 rounded-xl text-lg flex items-center'
            >
                <motion.div
                initial={{ scale: 1, rotateZ: 0 }}
                whileTap={{ scale: 0.7 }}
                whileHover={{ scale: 1.3, rotateZ: 20 }}
                transition={{
                    duration: 0.2,
                }}
                >
                    <FaClipboard color='black'/>
                </motion.div>
            </button>
        </div>
    );
}

export default CopyToClipboardButton;