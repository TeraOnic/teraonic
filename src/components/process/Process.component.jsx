import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

const ProcessStep = ({ number, title, description, isLast }) => {
    return (
        <div className="relative flex flex-col items-center flex-1">
            <motion.div
                whileHover={{ scale: 1.1, backgroundColor: "#007ddc", color: "#fff" }}
                className="w-16 h-16 rounded-full bg-white border-2 border-secondary text-secondary flex items-center justify-center text-2xl font-bold mb-6 z-10 transition-colors duration-300 shadow-lg"
            >
                {number}
            </motion.div>

            {!isLast && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>
            )}

            <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
            <p className="text-gray-500 text-center text-sm leading-relaxed max-w-[200px]">
                {description}
            </p>
        </div>
    );
};

export default function Process() {
    const steps = [
        { title: "Discovery", description: "We analyze your requirements and understand your business goals." },
        { title: "Design", description: "Creating intuitive and beautiful designs tailored to your brand." },
        { title: "Development", description: "Coding robust solutions using the latest scalable technologies." },
        { title: "Launch", description: "Deploying your product and providing ongoing support." },
    ];

    return (
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-[1690px] mx-auto px-4 md:px-8 mb-32"
        >
            <motion.div variants={fadeIn("up")} className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-nura text-primary mb-4">How We Work</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">A seamless transparent process from concept to delivery.</p>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-12 justify-between">
                {steps.map((step, index) => (
                    <motion.div key={index} variants={fadeIn("up", index * 0.2)} className="w-full">
                        <ProcessStep
                            number={index + 1}
                            title={step.title}
                            description={step.description}
                            isLast={index === steps.length - 1}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
