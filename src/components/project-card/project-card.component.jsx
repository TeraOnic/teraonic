import { motion } from "framer-motion";

const ProjectCard = ({ picture, title, category }) => {
  return (
    <motion.div
      className="relative min-w-[320px] md:min-w-[450px] h-[400px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer group"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 w-full h-full">
        <motion.img
          src={picture}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-white uppercase bg-primary/20 backdrop-blur-md rounded-full border border-white/10">
          {category}
        </span>
        <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
          {title}
        </h3>
        <div className="w-0 group-hover:w-full h-0.5 bg-secondary transition-all duration-500 ease-in-out"></div>
        <p className="text-gray-300 text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          Click to view case study &rarr;
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;