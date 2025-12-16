import { motion } from "framer-motion";
import Box from "./core/box.component";
import {
  SiFramer,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiDjango,
} from "react-icons/si";
import { staggerContainer, fadeIn } from "../../utils/motion";

const ToolsAndTechnology = () => {
  const tools = [
    { icon: SiFramer, alt: "Framer" },
    { icon: SiFigma, alt: "Figma" },
    { icon: SiHtml5, alt: "HTML" },
    { icon: SiCss3, alt: "CSS" },
    { icon: SiJavascript, alt: "JS" },
    { icon: SiSass, alt: "SCSS" },
    { icon: SiTailwindcss, alt: "Tailwind" },
    { icon: SiReact, alt: "React" },
    { icon: SiNodedotjs, alt: "Node" },
    { icon: SiNextdotjs, alt: "Next" },
    { icon: SiExpress, alt: "Express" },
    { icon: SiMongodb, alt: "Mongo" },
    { icon: SiMysql, alt: "MySQL" },
    { icon: SiDjango, alt: "Django" },
  ];

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full mx-auto max-w-[1690px] mt-32 mb-32 md:px-8 px-4"
    >
      <motion.div variants={fadeIn("up")} className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-nura text-primary mb-4">
          Tools and Technologies
        </h2>
        <p className="text-gray-500">
          Powering your solutions with the latest stack.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6 md:gap-8 lg:gap-10 justify-items-center">
        {tools.map((tool, index) => (
          <motion.div key={index} variants={fadeIn("up", index * 0.05)}>
            <Box icon={tool.icon} alt={tool.alt} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ToolsAndTechnology;
