import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import ProjectCard from "../project-card/project-card.component.jsx";

import WingManDepo from "../../assets/projects/WingManDepo.webp";
import TeraOnicMockup from "../../assets/projects/TeraOnicMockup.webp";
import AXEMockup from "../../assets/projects/AXE.webp";
import Coffee from "../../assets/projects/Coffee.webp";
import AUTransport from "../../assets/projects/AUTransport.webp";
import AppSignup from "../../assets/projects/AppSignup.webp";
import ShoesStore from "../../assets/projects/ShoesStore.webp";
import FreshBerryUAE from "../../assets/projects/FreshBerryUAE.webp";
import HealthCare from "../../assets/projects/HealthCare.webp";
import Newvative from "../../assets/projects/Newvative.webp";
import TShirtShop from "../../assets/projects/TShirtShop.webp";

const projectsData = [
  { picture: TeraOnicMockup, title: "TeraOnic Website", category: "Web Development" },
  { picture: WingManDepo, title: "Fly Boys Depo", category: "Web Development" },
  { picture: FreshBerryUAE, title: "Fresh Berry UAE", category: "UI/UX Design" },
  { picture: HealthCare, title: "HealthCare Web", category: "UI/UX Design" },
  { picture: Newvative, title: "NewVative", category: "UI/UX Design" },
  { picture: TShirtShop, title: "T-Shirt Shop", category: "UI/UX Design" },
  { picture: AXEMockup, title: "AXE Website", category: "Re-Design" },
  { picture: ShoesStore, title: "Shoes Store", category: "App Design" },
  { picture: Coffee, title: "Coffee App", category: "Mobile App" },
  { picture: AUTransport, title: "AU Transport", category: "System App" },
  { picture: AppSignup, title: "App Signup Flow", category: "UI Component" },
];

export default function Projects() {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  // Motion value for x-axis translation
  const x = useMotionValue(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slideLeft = () => {
    const currentX = x.get();
    const newX = Math.min(currentX + 500, 0); // Move right (increase x), max 0
    animate(x, newX, { duration: 0.5, ease: "easeOut" });
  };

  const slideRight = () => {
    const currentX = x.get();
    const newX = Math.max(currentX - 500, -width); // Move left (decrease x), min -width
    animate(x, newX, { duration: 0.5, ease: "easeOut" });
  };

  return (
    <section className="mb-32 overflow-hidden relative">
      <div className="max-w-[1690px] mx-auto px-4 md:px-8 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-nura text-primary mb-3">Featured Projects</h1>
        <h2 className="text-gray-500 uppercase tracking-[0.2em] font-medium text-sm">Crafting Digital Experiences</h2>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={slideLeft}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={slideRight}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      <div className="pl-4 md:pl-8 cursor-grab active:cursor-grabbing">
        <motion.div
          ref={carouselRef}
          className="flex gap-8"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          style={{ x }}
          whileTap={{ cursor: "grabbing" }}
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              picture={project.picture}
              title={project.title}
              category={project.category}
            />
          ))}
        </motion.div>
      </div>

      {/* Decorative Progress Bar Line */}
      <div className="w-full h-[1px] bg-gray-100 mt-12 mx-auto max-w-[1690px]"></div>
    </section>
  );
}
