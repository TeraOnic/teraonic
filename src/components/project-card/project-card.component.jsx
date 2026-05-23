import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CustomLink = ({ to, children, className, ...props }) => {
  if (!to) return <span className={className} {...props}>{children}</span>;
  const isExternal = to.startsWith("http") || to.startsWith("www");
  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      to={to}
      className={className}
      onClick={(e) => e.stopPropagation()}
      {...props}
    >
      {children}
    </Link>
  );
};

const ProjectCard = ({ picture, title, category, caseStudyUrl, visitUrl }) => {
  const displayImage = picture || (visitUrl ? `https://api.microlink.io/?url=${encodeURIComponent(visitUrl)}&screenshot=true&embed=screenshot.url` : null);

  return (
    <motion.div
      className="relative min-w-[320px] md:min-w-[450px] h-[400px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer group border border-white/10 bg-black/20 backdrop-blur-3xl shadow-2xl"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* macOS Window Title Bar */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-black/45 backdrop-blur-md border-b border-white/10 flex items-center px-4 z-20">
        {/* Three Window Control Dots */}
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50"></div>
        </div>
        {/* Center aligned OS Window label */}
        <span className="absolute left-1/2 -translate-x-1/2 text-[10px] text-white/40 tracking-widest font-mono uppercase select-none">
          {title ? title.toLowerCase().replace(/\s+/g, "-") : "project"}.app
        </span>
      </div>

      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 w-full h-full pt-10 bg-gradient-to-tr from-secondary/5 via-primary/5 to-black/20">
        {displayImage ? (
          <motion.img
            src={displayImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-tr from-secondary/30 via-primary/45 to-black/80 transition-transform duration-700 group-hover:scale-110" />
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-500 ease-out transform max-md:-translate-y-14 md:translate-y-4 md:group-hover:-translate-y-16">
        <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-white uppercase bg-primary/20 backdrop-blur-md rounded-full border border-white/10">
          {category}
        </span>
        <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
          {title}
        </h3>
        <div className="w-0 group-hover:w-full h-0.5 bg-secondary transition-all duration-500 ease-in-out"></div>
      </div>

      {/* macOS Dock */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-[92%] sm:w-auto max-w-max flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-xl border border-white/15 px-3 py-2.5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) transform max-md:translate-y-0 max-md:opacity-100 max-md:pointer-events-auto md:translate-y-10 md:opacity-0 md:pointer-events-none md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-hover:pointer-events-auto">
        <CustomLink
          to={caseStudyUrl}
          className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white/90 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap active:scale-95 shadow-inner"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-white/80">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
          </svg>
          Read Case Study
        </CustomLink>

        <CustomLink
          to={visitUrl}
          className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-secondary/80 hover:bg-secondary border border-white/5 rounded-xl shadow-lg shadow-secondary/20 transition-all duration-300 cursor-pointer whitespace-nowrap active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          Visit Link
        </CustomLink>
      </div>
    </motion.div>
  );
};

export default ProjectCard;