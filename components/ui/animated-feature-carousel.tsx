
import * as React from "react";
import {
    forwardRef,
    useCallback,
    useEffect,
    useState,
    type MouseEvent,
} from "react";
import clsx from "clsx";
import {
    AnimatePresence,
    motion,
    useMotionTemplate,
    useMotionValue,
    type MotionStyle,
    type MotionValue,
    type Variants,
} from "framer-motion";

// --- Helper Functions ---
const cn = (...classes: (string | boolean | undefined)[]) => {
    return clsx(...classes);
};

const placeholderImage = (text = "Image") =>
    `https://placehold.co/600x400/1a1a1a/ffffff?text=${text}`;

// --- Types ---
type StaticImageData = string;

type WrapperStyle = MotionStyle & {
    "--x": MotionValue<string>;
    "--y": MotionValue<string>;
};

interface CardProps {
    bgClass?: string;
}

export interface ImageSet {
    step1img1: StaticImageData;
    step1img2: StaticImageData;
    step2img1: StaticImageData;
    step2img2: StaticImageData;
    step3img: StaticImageData;
    step4img: StaticImageData;
    step5img: StaticImageData;
    alt: string;
}

export interface Step {
    id: string;
    name: string;
    title: string;
    description: string;
    bullets?: string[];
}

interface FeatureCarouselProps extends CardProps {
    image: ImageSet;
    steps: Step[];
}

interface StepImageProps {
    src: StaticImageData;
    alt: string;
    className?: string;
}

const ANIMATION_PRESETS = {
    fadeInScale: {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        transition: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
    },
} as const;

type AnimationPreset = keyof typeof ANIMATION_PRESETS;

interface AnimatedStepImageProps extends StepImageProps {
    preset?: AnimationPreset;
    delay?: number;
}

// --- Hooks ---
function useNumberCycler(totalSteps: number, interval: number = 8000) {
    const [currentNumber, setCurrentNumber] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const timerId = setTimeout(() => {
            setCurrentNumber((prev) => (prev + 1) % totalSteps);
        }, interval);
        return () => clearTimeout(timerId);
    }, [currentNumber, totalSteps, interval, isPaused]);

    const setStep = useCallback(
        (stepIndex: number) => {
            setCurrentNumber(stepIndex % totalSteps);
            setIsPaused(true);
        },
        [totalSteps]
    );

    return { currentNumber, setStep };
}

// --- Components ---
function IconCheck({ className, ...props }: React.ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            fill="currentColor"
            className={cn("h-4 w-4", className)}
            {...props}
        >
            <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
        </svg>
    );
}

const stepVariants: Variants = {
    inactive: { scale: 0.9, opacity: 0.7 },
    active: { scale: 1, opacity: 1 },
};

const StepImage = forwardRef<HTMLImageElement, StepImageProps>(
    ({ src, alt, className, ...props }, ref) => {
        return (
            <img
                ref={ref}
                alt={alt}
                className={className}
                src={src}
                style={{
                    maxWidth: "100%",
                    height: "auto",
                }}
                onError={(e) => (e.currentTarget.src = placeholderImage(alt))}
                {...props}
            />
        );
    }
);
StepImage.displayName = "StepImage";

const MotionStepImage = motion(StepImage);

const AnimatedStepImage = ({
    preset = "fadeInScale",
    delay = 0,
    ...props
}: AnimatedStepImageProps) => {
    const presetConfig = ANIMATION_PRESETS[preset];
    return (
        <MotionStepImage
            {...props}
            {...presetConfig}
            transition={{ ...presetConfig.transition, delay }}
        />
    );
};

function FeatureContent({
    step,
    steps,
}: {
    step: number;
    steps: Step[];
}) {
    return (
        <div className="flex flex-col gap-3 md:gap-4">
            <motion.div
                className="text-xs md:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-[#8D53FF] to-[#EC4899] bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
                {steps[step].name}
            </motion.div>
            <motion.h2
                className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
                {steps[step].title}
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
                <p className="text-sm md:text-base leading-relaxed text-gray-400 mb-3 md:mb-4">
                    {steps[step].description}
                </p>
                {steps[step].bullets && (
                    <ul className="space-y-2 md:space-y-3">
                        {steps[step].bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start text-gray-300 text-sm md:text-base leading-relaxed">
                                <span className="mr-2 md:mr-3 text-[#8D53FF] font-bold text-base md:text-lg flex-shrink-0">•</span>
                                {bullet}
                            </li>
                        ))}
                    </ul>
                )}
            </motion.div>
        </div>
    );
}

function StepsNav({
    steps: stepItems,
    current,
    onChange,
}: {
    steps: readonly Step[];
    current: number;
    onChange: (index: number) => void;
}) {
    return (
        <nav aria-label="Progress" className="flex justify-center px-4">
            <ol
                className="flex w-full flex-wrap items-center justify-center gap-2 md:gap-3"
                role="list"
            >
                {stepItems.map((step, stepIdx) => {
                    const isCompleted = current > stepIdx;
                    const isCurrent = current === stepIdx;
                    return (
                        <motion.li
                            key={step.name}
                            initial="inactive"
                            animate={isCurrent ? "active" : "inactive"}
                            variants={stepVariants}
                            transition={{ duration: 0.3 }}
                            className="relative"
                        >
                            <button
                                type="button"
                                className={cn(
                                    "group flex items-center gap-2 md:gap-2.5 rounded-full px-2.5 md:px-3.5 py-1.5 text-xs md:text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8D53FF]",
                                    isCurrent
                                        ? "bg-[#06B6D4] text-black font-bold"
                                        : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                                )}
                                onClick={() => onChange(stepIdx)}
                            >
                                <span
                                    className={cn(
                                        "flex h-4 w-4 md:h-5 md:w-5 shrink-0 items-center justify-center rounded-full transition-all duration-300 text-xs",
                                        isCompleted
                                            ? "bg-[#8D53FF] text-white"
                                            : isCurrent
                                                ? "bg-black text-[#06B6D4]"
                                                : "bg-gray-700 text-gray-400 group-hover:bg-gray-600"
                                    )}
                                >
                                    {isCompleted ? (
                                        <IconCheck className="h-3 w-3" />
                                    ) : (
                                        <span>{stepIdx + 1}</span>
                                    )}
                                </span>
                                <span className="hidden sm:inline-block">{step.name}</span>
                            </button>
                        </motion.li>
                    );
                })}
            </ol>
        </nav>
    );
}

export function FeatureCarousel({
    image,
    steps,
}: FeatureCarouselProps) {
    const { currentNumber: step, setStep } = useNumberCycler(steps.length);

    const getStepImage = (stepIndex: number) => {
        switch (stepIndex) {
            case 0:
                return image.step1img1;
            case 1:
                return image.step2img1;
            case 2:
                return image.step3img;
            case 3:
                return image.step4img;
            case 4:
                return image.step5img;
            default:
                return image.step1img1;
        }
    };

    return (
        <div className="flex flex-col gap-6 md:gap-8 w-full max-w-6xl mx-auto px-3 md:px-4">
            {/* Main Card - Clean Two Column Layout */}
            <div className="relative w-full rounded-2xl md:rounded-3xl border border-white/10 bg-gray-900/40 backdrop-blur-md overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 p-5 md:p-8 lg:p-12">
                    {/* Left Column - Content */}
                    <div className="flex flex-col justify-center min-h-[280px] md:min-h-[350px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <FeatureContent step={step} steps={steps} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Column - Image */}
                    <div className="flex items-center justify-center min-h-[200px] md:min-h-[350px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                {...ANIMATION_PRESETS.fadeInScale}
                                className="w-full h-full flex items-center justify-center"
                            >
                                <div className="relative w-full max-w-[320px] md:max-w-[400px] aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                    <AnimatedStepImage
                                        src={getStepImage(step)}
                                        alt={image.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <StepsNav current={step} onChange={setStep} steps={steps} />
            </motion.div>
        </div>
    );
}
