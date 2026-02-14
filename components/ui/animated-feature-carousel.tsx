
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

// --- Helper Functions and Fallbacks ---

// A simple utility for class names, similar to cn/clsx
const cn = (...classes: (string | boolean | undefined)[]) => {
    return clsx(...classes);
};

// Placeholder for image assets if they are not found.
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
    step1img1Class?: string;
    step1img2Class?: string;
    step2img1Class?: string;
    step2img2Class?: string;
    step3imgClass?: string;
    step4imgClass?: string;
    step5imgClass?: string;
    image: ImageSet;
    steps: Step[];
}

interface StepImageProps {
    src: StaticImageData;
    alt: string;
    className?: string;
    style?: React.CSSProperties;
    width?: number;
    height?: number;
}

const ANIMATION_PRESETS = {
    fadeInScale: {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        transition: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
    },
    slideInRight: {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
        transition: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
    },
    slideInLeft: {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 20 },
        transition: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
    },
} as const;

type AnimationPreset = keyof typeof ANIMATION_PRESETS;

interface AnimatedStepImageProps extends StepImageProps {
    preset?: AnimationPreset;
    delay?: number;
    onAnimationComplete?: () => void;
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

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        };
        checkDevice();
        window.addEventListener("resize", checkDevice);
        return () => window.removeEventListener("resize", checkDevice);
    }, []);
    return isMobile;
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
    ({ src, alt, className, style, ...props }, ref) => {
        return (
            <img
                ref={ref}
                alt={alt}
                className={className}
                src={src}
                style={{
                    position: "absolute",
                    userSelect: "none",
                    maxWidth: "unset",
                    ...style,
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

function FeatureCard({
    children,
    step,
    steps,
}: {
    children: React.ReactNode;
    step: number;
    steps: Step[];
}) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const isMobile = useIsMobile();
    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        if (isMobile) return;
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }
    return (
        <motion.div
            className="animated-cards group relative w-full rounded-2xl"
            onMouseMove={handleMouseMove}
            style={
                {
                    "--x": useMotionTemplate`${mouseX}px`,
                    "--y": useMotionTemplate`${mouseY}px`,
                } as WrapperStyle
            }
        >
            {/* T-Pone Style: Dark glass background with border glow */}
            <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-gray-900/40 backdrop-blur-md transition-colors duration-300">
                <div className="m-10 min-h-[450px] w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            className="flex w-full flex-col gap-4 md:w-[45%] relative z-20"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <motion.div
                                className="text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-[#8D53FF] to-[#EC4899] bg-clip-text text-transparent"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.05,
                                    duration: 0.3,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                {steps[step].name}
                            </motion.div>
                            <motion.h2
                                className="text-2xl font-bold tracking-tight text-white md:text-3xl"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.1,
                                    duration: 0.3,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                {steps[step].title}
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.15,
                                    duration: 0.3,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                <p className="text-base leading-relaxed text-gray-400 mb-4">
                                    {steps[step].description}
                                </p>
                                {steps[step].bullets && (
                                    <ul className="space-y-3">
                                        {steps[step].bullets.map((bullet, idx) => (
                                            <li key={idx} className="flex items-start text-gray-300 text-base leading-relaxed">
                                                <span className="mr-3 text-[#8D53FF] font-bold text-lg">•</span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                    {children}
                </div>
            </div>
        </motion.div>
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
                className="flex w-full flex-wrap items-center justify-center gap-2"
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
                                    "group flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8D53FF]",
                                    isCurrent
                                        ? "bg-[#06B6D4] text-black font-bold"
                                        : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                                )}
                                onClick={() => onChange(stepIdx)}
                            >
                                <span
                                    className={cn(
                                        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                                        isCompleted
                                            ? "bg-[#8D53FF] text-white"
                                            : isCurrent
                                                ? "bg-black text-[#06B6D4]"
                                                : "bg-gray-700 text-gray-400 group-hover:bg-gray-600"
                                    )}
                                >
                                    {isCompleted ? (
                                        <IconCheck className="h-3.5 w-3.5" />
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



// T-Pone Default positioning (prevents overlap)
const defaultClasses = {
    img: "rounded-xl border border-white/10 shadow-2xl shadow-black/50 absolute object-cover",
    step1img1: "w-[45%] left-[50%] top-[25%] z-10 shadow-xl",
    step1img2: "w-[45%] left-[65%] top-[35%] z-20",
    step2img1: "w-[45%] left-[50%] top-[25%] z-10 shadow-xl",
    step2img2: "w-[40%] left-[60%] top-[45%] z-20",
    step3img: "w-[45%] left-[50%] top-[25%] z-10 shadow-xl",
    step4img: "w-[45%] left-[50%] top-[25%] z-10 shadow-xl",
    step5img: "w-[45%] left-[50%] top-[25%] z-10 shadow-xl",
} as const;

export function FeatureCarousel({
    image,
    steps,
    step1img1Class = defaultClasses.step1img1,
    step1img2Class = defaultClasses.step1img2,
    step2img1Class = defaultClasses.step2img1,
    step2img2Class = defaultClasses.step2img2,
    step3imgClass = defaultClasses.step3img,
    step4imgClass = defaultClasses.step4img,
    step5imgClass = defaultClasses.step5img,
    ...props
}: FeatureCarouselProps) {
    const { currentNumber: step, setStep } = useNumberCycler(steps.length);

    const renderStepContent = () => {
        switch (step) {
            case 0:
                return (
                    <AnimatedStepImage
                        alt={image.alt}
                        className={cn(defaultClasses.img, step1img1Class)}
                        src={image.step1img1}
                        preset="slideInLeft"
                    />
                );
            case 1:
                return (
                    <AnimatedStepImage
                        alt={image.alt}
                        className={cn(defaultClasses.img, step2img1Class)}
                        src={image.step2img1}
                        preset="fadeInScale"
                    />
                );
            case 2:
                return (
                    <AnimatedStepImage
                        alt={image.alt}
                        className={cn(defaultClasses.img, step3imgClass)}
                        src={image.step3img}
                        preset="fadeInScale"
                    />
                );
            case 3:
                return (
                    <AnimatedStepImage
                        alt={image.alt}
                        className={cn(defaultClasses.img, step4imgClass)}
                        src={image.step4img}
                        preset="fadeInScale"
                    />
                );
            case 4:
                // Safety Net (Retargeting) - Ad flow
                return (
                    <AnimatedStepImage
                        alt={image.alt}
                        className={cn(defaultClasses.img, step5imgClass)}
                        src={image.step5img}
                        preset="fadeInScale"
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col gap-12 w-full max-w-5xl mx-auto p-4">
            <FeatureCard {...props} step={step} steps={steps}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        {...ANIMATION_PRESETS.fadeInScale}
                        className="w-full h-full absolute top-0 left-0"
                    >
                        {renderStepContent()}
                    </motion.div>
                </AnimatePresence>
            </FeatureCard>
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
