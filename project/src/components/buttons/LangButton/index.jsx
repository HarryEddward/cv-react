import React from 'react';
import useLangStore from '../../../store/langStore';
import { motion } from 'framer-motion';

export function LangButton() {

    const { changeLang, actualLang } = useLangStore();


    const renderFlag = () => {
        if (actualLang === "es") {
          return (
            <img
              className='w-8 h-8'
              src="/img/espana.png"
              alt="Spanish Flag"
            />
          );
        } else if (actualLang === "en") {
          return (
            <img
              className='w-8 h-8'
              src="/img/reino-unido.png"
              alt="English Flag"
            />
          );
        }
    };

    return(
        <div>
            <motion.button
            initial={{
              scale: 0
            }}
            transition={{
              type: 'spring',
              damping: 10,
              duration: 2
            }}
            animate={{
              scale: 1
            }}
            className="h-[2.5rem] px-4 rounded-lg hover:bg-slate-300 transition duration-200"
            onClick={() => changeLang()}
          >
            {renderFlag()}
          </motion.button>
        </div>
    )
}