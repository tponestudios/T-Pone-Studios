
import * as React from "react";
import { useState, useEffect } from "react";
import { ParticleTextEffect } from "./ui/particle-text-effect";

export const AuroraHero = () => {
    const [showScrollIndicator, setShowScrollIndicator] = useState(false);

    useEffect(() => {
        // Show scroll indicator after first word forms (about 1.5 seconds)
        const timer = setTimeout(() => {
            setShowScrollIndicator(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative min-h-screen w-full bg-gray-950 overflow-hidden">
            <ParticleTextEffect 
                words={["T-PONE STUDIOS", "DESIGN", "ATTRACT", "CONVERT", "SCALE"]}
                className="w-full h-screen"
            />
            
            {/* Subtle gradient overlay for smooth transition to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#020617] to-transparent z-10 pointer-events-none" />

            {/* Scroll Indicator - appears after first word forms */}
            <div 
                className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 transition-all duration-700 ease-out ${showScrollIndicator ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
                <span className="text-gray-400 text-xs tracking-widest uppercase">Scroll</span>
                <svg 
                    className="w-6 h-6 text-[#8D53FF] animate-pulse" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ animationDuration: '2.5s' }}
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                    />
                </svg>
            </div>
        </section>
    );
};
