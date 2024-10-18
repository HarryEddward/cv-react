import React from 'react';
import {motion} from 'framer-motion';


export const ScrollAnimated = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = React.useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.2,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, translateY: 50 }}
            animate={isVisible ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="animated-element"  // Añade clases según lo que necesites
        >
            {children}
        </motion.div>
    );
};
