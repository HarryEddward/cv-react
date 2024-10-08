import React from "react";
import useCalculateAge from "../../hook/utils/useCalculateAge";
import { motion } from 'framer-motion';
import CountUp from "react-countup";

export function Header() {

    const birthDate = '2006-11-21';
    const age = useCalculateAge(birthDate);

    return (
        <div>
            <div className="z-10 flex flex-col items-start bg-slate-100"> {/* Cambiado a items-start */}
                <motion.h1
                    className="text-6xl font-black pb-4"
                    initial={{ opacity: 0, y: -10 }}  // Estado inicial
                    animate={{ opacity: 1, y: 0 }}  // Estado final (cuando se carga)
                    transition={{ duration: 1 }}  // Duración de la animación
                >
                    Expert web developer, <CountUp end={age} duration={6}/>
                </motion.h1>
                <h2 className="text-3xl font-bold text-left text-gray-700">Experience with MultiPlatform App's</h2> {/* Alineado a la izquierda */}
                <h2 className="text-3xl font-bold text-left text-gray-700">Notions with DevOps</h2> {/* Alineado a la izquierda */}
            </div>
        </div>
    )
}