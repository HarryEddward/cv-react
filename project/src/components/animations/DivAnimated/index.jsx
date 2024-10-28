import React, { useState } from "react";
import { motion } from "framer-motion";

export function DivAnimated({ text }) {
  const [hoverDivClipboardButton, setHoverDivClipboardButton] = useState(false);

  return (
    <div className="h-full">
      <div
        className="bg-black flex items-stretch h-full relative border-2 border-black"
        onMouseEnter={() => setHoverDivClipboardButton(true)}
        onMouseLeave={() => setHoverDivClipboardButton(false)}
      >
        {/* White background div that extends to full height */}
        <div className="flex-grow bg-white flex items-center px-3 relative z-20">
          <motion.div
            className="absolute inset-0 bg-black z-10"
            initial={{ width: '0%' }}
            animate={{ width: hoverDivClipboardButton ? '100%' : '0%' }}
            transition={{ duration: 0.5 }}
          />
          <motion.span
            className="text-lg z-30 relative"
            initial={{ color: 'rgb(0, 0, 0)' }}
            animate={{ color: hoverDivClipboardButton ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }}
            transition={{ duration: 0.3 }}
          >
            {text}
          </motion.span>
        </div>
        {/* Vertical white line */}
        <div className="w-1 bg-white z-20 mr-2" />
      </div>
    </div>
  );
}