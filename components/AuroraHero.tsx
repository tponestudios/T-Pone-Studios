
import * as React from "react";
import { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate,
} from "framer-motion";
import { AuroraButton } from "./AuroraButton";

const COLORS_TOP = ["#8D53FF", "#EC4899", "#06B6D4", "#7a42eb"];

export const AuroraHero = () => {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

    return (
        <motion.section
            style={{
                backgroundImage,
            }}
            className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
        >
            <div className="relative z-10 flex flex-col items-center">
                <div className="inline-flex items-center space-x-2 bg-[#8D53FF]/10 border border-[#8D53FF]/20 rounded-full px-4 py-1.5 mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8D53FF] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8D53FF]"></span>
                    </span>
                    <span className="text-[#8D53FF] text-xs font-bold uppercase tracking-widest">Accepting 3 New Clients This Month</span>
                </div>
                <h1 className="max-w-4xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-4xl font-black leading-tight text-transparent sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight tracking-tighter">
                    We Turn Your Website Into Your Best Salesperson.
                </h1>
                <p className="my-8 max-w-2xl text-center text-lg leading-relaxed md:text-xl md:leading-relaxed text-gray-300">
                    Stop losing local customers to competitors. We build high-converting websites and drive instant traffic with Google Ads & SEO.
                </p>
                <AuroraButton ariaLabel="Start getting more clients with T-Pone Studios">
                    Start Getting More Clients
                    <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                </AuroraButton>
            </div>

            {/* Bottom transition overlay - Aggressive fade to match next section */}
            <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent z-10" />
        </motion.section>
    );
};
