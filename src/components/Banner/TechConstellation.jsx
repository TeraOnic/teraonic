import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect } from "react";
import ReactIcon from "../../assets/tools-and-tech/React.svg";
import NodeIcon from "../../assets/tools-and-tech/Node.svg";
import NextIcon from "../../assets/tools-and-tech/Next.svg";
import DjangoIcon from "../../assets/tools-and-tech/Django.svg";
import FigmaIcon from "../../assets/tools-and-tech/Figma.svg";
import JSIcon from "../../assets/tools-and-tech/JS.svg";
import MongoDBIcon from "../../assets/tools-and-tech/MongoDB.svg";
import MySqlIcon from "../../assets/tools-and-tech/MySql.svg";

const isBot = typeof window !== "undefined" && (
    /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|headless|screenshot|microlink/i.test(window.navigator.userAgent) ||
    window.navigator.webdriver
);

const ParallaxIcon = ({ icon, delay, x, y, size = "w-16", mouseX, mouseY, depth = 1 }) => {
    // Parallax movement based on mouse position
    const xMotion = useTransform(mouseX, [-0.5, 0.5], [-30 * depth, 30 * depth]);
    const yMotion = useTransform(mouseY, [-0.5, 0.5], [-30 * depth, 30 * depth]);

    const xSpring = useSpring(xMotion, { stiffness: 50, damping: 15 });
    const ySpring = useSpring(yMotion, { stiffness: 50, damping: 15 });

    return (
        <motion.div
            initial={isBot ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            animate={{
                opacity: 1,
                scale: 1,
                // Keep the gentle floating animation
                y: isBot ? 0 : [0, -10, 0],
            }}
            style={{
                x: xSpring, // Apply parallax x
                y: ySpring, // Apply parallax y (won't conflict with animate.y if using transforms correctly, but motion handles arrays in animate as keyframes)
                // Wait, style x/y and animate x/y might conflict.
                // Better to use a wrapper for parallax and inner for float.
                left: "50%",
                top: "50%",
            }}
            transition={{
                opacity: { duration: isBot ? 0 : 0.5, delay: isBot ? 0 : delay * 0.2 },
                scale: { duration: isBot ? 0 : 0.5, delay: isBot ? 0 : delay * 0.2 },
                y: isBot ? { duration: 0 } : { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 } // specific float
            }}
            className={`absolute z-10`}
        >
            <motion.div
                className={`${size} h-auto p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl flex items-center justify-center cursor-pointer`}
                whileHover={{ scale: 1.2, rotate: 10, borderColor: "rgba(255,255,255,0.5)" }}
                style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                    // Hardcoding the positioning translation here to avoid x/y conflict
                }}
            >
                <img src={icon} alt="Tech Icon" className="w-full h-full object-contain pointer-events-none" />
            </motion.div>
        </motion.div>
    );
};

// Simplified wrapper to separate position/parallax from floating/hover
const ScatteredIcon = ({ icon, x, y, size, mouseX, mouseY, depth }) => {
    const xBase = useTransform(mouseX, [-0.5, 0.5], [-40 * depth, 40 * depth]);
    const yBase = useTransform(mouseY, [-0.5, 0.5], [-40 * depth, 40 * depth]);

    const springConfig = { stiffness: 40, damping: 20 };
    const xParallax = useSpring(xBase, springConfig);
    const yParallax = useSpring(yBase, springConfig);

    return (
        <motion.div
            style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                x: xParallax,
                y: yParallax,
                marginLeft: x,
                marginTop: y
            }}
        >
            <motion.div
                initial={isBot ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: isBot ? 0 : [0, -15, 0] }}
                transition={{
                    opacity: { duration: isBot ? 0 : 0.8, delay: isBot ? 0 : Math.random() * 0.5 },
                    scale: { duration: isBot ? 0 : 0.8, delay: isBot ? 0 : Math.random() * 0.5 },
                    y: isBot ? { duration: 0 } : { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: Math.random() }
                }}
                className={`flex items-center justify-center ${size} p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg hover:shadow-secondary/30 transition-shadow -translate-x-1/2 -translate-y-1/2`}
                whileHover={{ scale: 1.15, rotate: 5, zIndex: 50 }}
            >
                <img src={icon} alt="icon" className="w-full h-full object-contain" />
            </motion.div>
        </motion.div>
    );
}

export default function TechConstellation() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth) - 0.5;
            const y = (e.clientY / innerHeight) - 0.5;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="relative w-[350px] h-[350px] md:w-[600px] md:h-[600px] flex items-center justify-center perspective-1000">

            {/* Background Glows to add depth */}
            <motion.div
                style={{ x: useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20])), y: useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20])) }}
                className="absolute inset-0 bg-secondary/5 blur-[80px] rounded-full"
            />

            {/* Central Orb / Main Hub - Rotating slowly */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                className="w-48 h-48 md:w-[22rem] md:h-[22rem] rounded-full border border-secondary/5 flex items-center justify-center relative -z-10"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full opacity-50"></div>
            </motion.div>

            {/* Scattered Icons with Parallax 
          x, y are offsets from center (0,0) of the 600x600 container.
          Outer Ring: ~220px - 260px radius
          Inner Ring: ~100px - 140px radius
      */}

            {/* --- OUTER RING (5 Icons) --- */}
            {/* Top */}
            <ScatteredIcon icon={ReactIcon} x={0} y={-240} depth={0.6} size="w-16 md:w-24" mouseX={mouseX} mouseY={mouseY} />
            {/* Top Right */}
            <ScatteredIcon icon={NextIcon} x={220} y={-100} depth={0.8} size="w-14 md:w-20" mouseX={mouseX} mouseY={mouseY} />
            {/* Bottom Right */}
            <ScatteredIcon icon={NodeIcon} x={180} y={180} depth={0.7} size="w-16 md:w-24" mouseX={mouseX} mouseY={mouseY} />
            {/* Bottom Left */}
            <ScatteredIcon icon={DjangoIcon} x={-180} y={180} depth={0.9} size="w-14 md:w-20" mouseX={mouseX} mouseY={mouseY} />
            {/* Top Left */}
            <ScatteredIcon icon={FigmaIcon} x={-220} y={-100} depth={0.5} size="w-14 md:w-18" mouseX={mouseX} mouseY={mouseY} />


            {/* --- INNER CLUSTER (3 Icons) --- */}
            {/* Mid Right */}
            <ScatteredIcon icon={JSIcon} x={100} y={40} depth={1.2} size="w-12 md:w-16" mouseX={mouseX} mouseY={mouseY} />
            {/* Mid Left */}
            <ScatteredIcon icon={MongoDBIcon} x={-120} y={20} depth={1.5} size="w-16 md:w-20" mouseX={mouseX} mouseY={mouseY} />
            {/* Bottom Center - slightly lower inner */}
            <ScatteredIcon icon={MySqlIcon} x={0} y={120} depth={1.1} size="w-12 md:w-16" mouseX={mouseX} mouseY={mouseY} />

        </div>
    );
}
