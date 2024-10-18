import React, {useState} from 'react';
import { motion } from "framer-motion";

export const SplitTextSubtitle = ({ text, className }) => {
    const [perpetualMotion, setPerpetualMotion] = useState(false);
  
    return (
      <span className={className}>
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 150, x: 0 }}
            animate={perpetualMotion
              ? { y: [0, -2, 0], opacity: 1 }
              : { opacity: 1, y: 0, x: 0 }}
            transition={{
              duration: perpetualMotion ? 1.5 : 1,
              delay: index * 0.1,
              type: perpetualMotion ? "easeInOut" : "spring",
              stiffness: perpetualMotion ? undefined : 40,
              repeat: perpetualMotion ? Infinity : 0,
            }}
            style={{ display: 'inline-block' }}
            onAnimationComplete={() => {
              if (index === text.length - 1) {
                setPerpetualMotion(true);
              }
            }}
          >
            {letter}
          </motion.span>
        ))}
      </span>
    );
};
