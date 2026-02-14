import * as React from 'react';
import { useEffect } from 'react';
import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate
} from 'framer-motion';

const COLORS_TOP = ["#8D53FF", "#EC4899", "#06B6D4", "#7a42eb"];

interface AuroraButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    ariaLabel?: string;
}

export const AuroraButton: React.FC<AuroraButtonProps> = ({
    children,
    onClick,
    className = "",
    ariaLabel
}) => {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    return (
        <motion.button
            style={{
                border,
                boxShadow,
            }}
            whileHover={{
                scale: 1.015,
            }}
            whileTap={{
                scale: 0.985,
            }}
            onClick={onClick}
            aria-label={ariaLabel}
            className={`group relative flex w-fit items-center gap-2 rounded-full bg-gray-950/10 px-8 py-4 text-white transition-colors hover:bg-gray-950/50 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-bold text-lg ${className}`}
        >
            {children}
        </motion.button>
    );
};
