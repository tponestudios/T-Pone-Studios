
import * as React from "react";
import { ParticleTextEffect } from "./ui/particle-text-effect";

export const AuroraHero = () => {
    return (
        <section className="relative min-h-screen w-full bg-gray-950 overflow-hidden">
            <ParticleTextEffect 
                words={["T-PONE", "STUDIOS", "DOMINATE", "GROWTH", "LEADS", "RESULTS"]}
                className="w-full h-screen"
            />
            
            {/* Subtle gradient overlay for smooth transition to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#020617] to-transparent z-10 pointer-events-none" />
        </section>
    );
};
