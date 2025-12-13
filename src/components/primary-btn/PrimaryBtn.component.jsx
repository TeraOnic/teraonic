import { motion } from "framer-motion";
import { hoverScale } from "../../utils/motion";

export default function PrimaryBtn({ text, onClick }) {
  return (
    <motion.button
      variants={hoverScale}
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="bg-secondary text-white p-4 rounded-xl w-44 text-sm font-poppins hover:bg-secondary/90 hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 cursor-pointer"
    >
      {text}
    </motion.button>
  );
}