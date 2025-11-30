import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    fullWidth?: boolean;
    className?: string;
}

const FadeIn = ({
    children,
    delay = 0,
    direction = 'up',
    fullWidth = false,
    className = ''
}: FadeInProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    const getInitialProps = () => {
        switch (direction) {
            case 'up': return { opacity: 0, y: 40 };
            case 'down': return { opacity: 0, y: -40 };
            case 'left': return { opacity: 0, x: 40 };
            case 'right': return { opacity: 0, x: -40 };
            case 'none': return { opacity: 0 };
            default: return { opacity: 0, y: 40 };
        }
    };

    const getAnimateProps = () => {
        switch (direction) {
            case 'up': return { opacity: 1, y: 0 };
            case 'down': return { opacity: 1, y: 0 };
            case 'left': return { opacity: 1, x: 0 };
            case 'right': return { opacity: 1, x: 0 };
            case 'none': return { opacity: 1 };
            default: return { opacity: 1, y: 0 };
        }
    };

    return (
        <motion.div
            ref={ref}
            initial={getInitialProps()}
            animate={isInView ? getAnimateProps() : getInitialProps()}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98] // Custom ease for "premium" feel
            }}
            style={{ width: fullWidth ? '100%' : 'auto' }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
