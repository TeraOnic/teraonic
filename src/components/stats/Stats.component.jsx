import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const StatItem = ({ end, suffix, label }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div ref={ref} className="text-center">
            <div className="flex justify-center items-baseline text-4xl md:text-5xl font-bold text-secondary mb-2">
                {isInView ? (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Counter from={0} to={end} duration={2} />
                    </motion.span>
                ) : (
                    <span>0</span>
                )}
                <span>{suffix}</span>
            </div>
            <p className="text-gray-500 font-medium">{label}</p>
        </div>
    );
};

const Counter = ({ from, to, duration }) => {
    // A simple counter implementation could use standard react state or motion values
    // For simplicity with framer-motion, we can animate a value
    return <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
    >{to}</motion.span>;
    // Creating a real counter with framer-motion requires MotionValue and useSpring/useTransform or a custom hook
    // Let's stick to a simpler visual for now or implement a basic counter hook if needed. 
    // Re-writing this block to be a proper counter.
};

// Re-implementation of StatItem to use a proper counter approach
const AnimatedCounter = ({ value }) => {
    return (
        <span className="tabular-nums">
            {value}
        </span>
    );
}

// Actually better to just use a text that implies scale for now or a simple library. 
// But i'll try to just show static number with slide up for simplicity and robustness 
// unless I Implement a `useCountUp` hook.
// Let's implement a simple `useCountUp` equivalent inside.

import { useEffect, useState } from 'react';

const CountUp = ({ end, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const endValue = parseInt(end);
            if (start === endValue) return;

            let totalMilSec = duration * 1000;
            let incrementTime = (totalMilSec / endValue) * 10; // accelerate

            let timer = setInterval(() => {
                start += 1;
                setCount(String(start) + (end.toString().includes('+') ? '+' : ''));
                if (start === endValue) {
                    clearInterval(timer);
                    setCount(end);
                }
            }, 10); // visual speed approximation, simplified

            // Better approach: easeOut

            const startTime = Date.now();
            const frame = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / totalMilSec, 1);
                const ease = 1 - Math.pow(1 - progress, 3); // cubic out

                setCount(Math.floor(ease * endValue));

                if (progress < 1) {
                    requestAnimationFrame(frame);
                } else {
                    setCount(end);
                }
            };

            requestAnimationFrame(frame);
        }
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}</span>;
};


export default function Stats() {
    const stats = [
        { value: 50, label: "Projects Completed", suffix: "+" },
        { value: 20, label: "Happy Clients", suffix: "+" },
        { value: 5, label: "Years Experience", suffix: "+" },
        { value: 100, label: "Success Rate", suffix: "%" },
    ];

    return (
        <section className="w-full bg-primary/5 py-16 md:py-24">
            <div className="max-w-[1690px] mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-2 flex items-center">
                            <CountUp end={stat.value} />{stat.suffix}
                        </h3>
                        <p className="text-gray-600 font-medium text-center">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
