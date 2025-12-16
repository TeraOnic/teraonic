import { motion } from "framer-motion";
import { hoverScale } from "../../utils/motion";

export default function SecondaryBtn({ text, onClick, className = "" }) {
  return (
    <motion.button
      variants={hoverScale}
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`bg-transparent border border-gray-200 text-black rounded-xl text-sm font-poppins hover:bg-white hover:border-secondary hover:text-secondary hover:shadow-md transition-all duration-300 cursor-pointer ${className}`}
    >
      {text}
    </motion.button>
  );
}

