import { motion } from "framer-motion";

const Box = ({ img, alt }) => {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.05 }}
            className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center p-6 rounded-2xl glass-panel border border-gray-100/50 hover:border-secondary/20 hover:shadow-lg transition-all duration-300 relative group bg-white"
        >
            <img src={img} alt={alt} className="w-16 h-16 md:w-20 md:h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-2xl z-10">
                <span className="font-bold text-secondary text-sm md:text-base">{alt}</span>
            </div>
        </motion.div>
    );
}

export default Box;