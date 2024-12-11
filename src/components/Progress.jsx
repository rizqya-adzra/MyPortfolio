import React from 'react';
import { motion, useScroll } from 'framer-motion';

const Progress = () => {
    // Gunakan useScroll untuk mendapatkan scrollYProgress
    const { scrollYProgress } = useScroll();

    return (
        // Gunakan motion.div dengan gaya untuk menggambarkan progress
        <motion.div
            style={{
                scaleX: scrollYProgress,
                transformOrigin: 'left',
                height: '5px',
                background: 'white',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0
            }}
        />
    );
};

export default Progress;
