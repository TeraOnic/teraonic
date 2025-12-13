import { motion } from "framer-motion";
import ProjectCard from "../components/project-card/project-card.component";
import { fadeIn, staggerContainer } from "../utils/motion";

import WingManDepo from "../assets/projects/WingManDepo.webp";
import TeraOnicMockup from "../assets/projects/TeraOnicMockup.webp";
import AXEMockup from "../assets/projects/AXE.webp";
import Coffee from "../assets/projects/Coffee.webp";
import AUTransport from "../assets/projects/AUTransport.webp";
import AppSignup from "../assets/projects/AppSignup.webp";
import ShoesStore from "../assets/projects/ShoesStore.webp";
import FreshBerryUAE from "../assets/projects/FreshBerryUAE.webp";
import HealthCare from "../assets/projects/HealthCare.webp";
import Newvative from "../assets/projects/Newvative.webp";
import TShirtShop from "../assets/projects/TShirtShop.webp";

const projectsData = [
  { picture: TeraOnicMockup, title: "TeraOnic Website", category: "Web Development" },
  { picture: WingManDepo, title: "Fly Boys Depo", category: "Web Development" },
  { picture: FreshBerryUAE, title: "Fresh Berry UAE", category: "UI/UX Design" },
  { picture: HealthCare, title: "HealthCare Web", category: "UI/UX Design" },
  { picture: Newvative, title: "NewVative", category: "UI/UX Design" },
  { picture: TShirtShop, title: "T-Shirt Shop", category: "UI/UX Design" },
  { picture: AXEMockup, title: "AXE Website Redesign", category: "Re-Design" },
  { picture: ShoesStore, title: "Shoes Store", category: "App Design" },
  { picture: Coffee, title: "Coffee App", category: "Mobile App" },
  { picture: AUTransport, title: "AU Transport System", category: "System App" },
  { picture: AppSignup, title: "App Signup Flow", category: "UI Component" },
];

export default function Projects() {
  return (
    <div className="py-24 px-4 md:px-12 lg:px-20 overflow-hidden bg-primary/5 min-h-screen">
      {/* Background Elements */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-[1690px] mx-auto"
      >
        <div className="text-center mb-20">
          <motion.h2
            variants={fadeIn("down", 0.1)}
            className="text-4xl md:text-6xl font-nura text-primary mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.3)}
            className="text-gray-500 uppercase tracking-[0.2em] font-medium text-sm md:text-base"
          >
            Crafting Digital Experiences
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 min-[1550px]:grid-cols-3 gap-8 md:gap-12 justify-items-center"
        >
          {projectsData.map((project, index) => (
            <motion.div key={index} variants={fadeIn("up", index * 0.1)}>
              <ProjectCard
                picture={project.picture}
                title={project.title}
                category={project.category}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
