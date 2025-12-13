import { motion } from "framer-motion";
import Box from "./core/box.component";
import JS from "../../assets/tools-and-tech/JS.svg";
import React from "../../assets/tools-and-tech/React.svg";
import Node from "../../assets/tools-and-tech/Node.svg";
import Next from "../../assets/tools-and-tech/Next.svg";
import MySql from "../../assets/tools-and-tech/MySql.svg";
import MongoDB from "../../assets/tools-and-tech/MongoDB.svg";
import Django from "../../assets/tools-and-tech/Django.svg";
import Figma from "../../assets/tools-and-tech/Figma.svg";
import { staggerContainer, fadeIn } from "../../utils/motion";

const ToolsAndTechnology = () => {
  const tools = [
    { img: JS, alt: "JavaScript" },
    { img: React, alt: "React" },
    { img: Node, alt: "Node.js" },
    { img: Next, alt: "Next.js" },
    { img: MySql, alt: "MySQL" },
    { img: MongoDB, alt: "MongoDB" },
    { img: Django, alt: "Django" },
    { img: Figma, alt: "Figma" }
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
        <p className="text-gray-500">Powering your solutions with the latest stack.</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
        {tools.map((tool, index) => (
          <motion.div key={index} variants={fadeIn("up", index * 0.05)}>
            <Box img={tool.img} alt={tool.alt} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ToolsAndTechnology;

