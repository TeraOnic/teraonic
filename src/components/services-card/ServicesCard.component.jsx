import { motion } from "framer-motion";

export default function ServicesCard({ title, picture, description }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className="font-poppins w-full max-w-[18rem] bg-zinc-900 rounded-3xl p-8 flex flex-col items-start gap-4 shadow-xl hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-300 border border-zinc-800 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-secondary/20"></div>

      <div className="bg-zinc-800 p-4 rounded-2xl group-hover:bg-zinc-700 transition-colors duration-300">
        <img src={picture} alt="" className="w-8 h-8 object-contain" />
      </div>

      <h3 className="text-xl font-bold text-white mt-2 group-hover:text-secondary transition-colors duration-300">
        {title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>

      <div className="mt-2 text-secondary text-sm font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center gap-2">
        Learn more <span>→</span>
      </div>
    </motion.div>
  );
}
