import React from 'react';
import { motion } from 'framer-motion';

export const BlurScaleAnimation = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 1, filter: 'blur(0px)', scale: 1  }}
            transition={{ duration: 2 }}
        >
            {children}
        </motion.div>
    );
};
