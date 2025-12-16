import { motion } from "framer-motion";

const WhyUsCard = ({ logo, heading1, heading2, text }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative w-full max-w-sm p-8 rounded-3xl overflow-hidden glass-panel group transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/20 border border-gray-100 bg-white"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="flex flex-col items-center text-center z-10 relative">
        <motion.div
          className="bg-gray-50 p-6 rounded-full mb-6 group-hover:bg-blue-50 transition-colors duration-300"
          whileHover={{ rotate: 5 }}
        >
          <img className="w-16 h-16 object-contain" src={logo} alt="" />
        </motion.div>

        <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-secondary transition-colors duration-300">
          {heading1} <span className="block">{heading2}</span>
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {text}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

export default WhyUsCard;
