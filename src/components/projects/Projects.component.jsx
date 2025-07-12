import { useEffect } from "react";
import ProjectCard from "../project-card/project-card.component.jsx";
import WingsmenDepoImg from "../../assets/projects/WingsmenDepo.jpg";
import Nasa from "../../assets/projects/Nasa.jpg";
import Google from "../../assets/projects/Google.webp";
import Facebook from "../../assets/projects/facebook.webp";

export default function Projects() {
  useEffect(() => {
    const slider = document.getElementById("projects-scroll");
    let isDown = false;
    let startX;
    let scrollLeft;

    const start = (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const stop = () => {
      isDown = false;
      slider.classList.remove("active");
    };

    const move = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5; // drag speed multiplier
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", start);
    slider.addEventListener("mouseleave", stop);
    slider.addEventListener("mouseup", stop);
    slider.addEventListener("mousemove", move);

    return () => {
      slider.removeEventListener("mousedown", start);
      slider.removeEventListener("mouseleave", stop);
      slider.removeEventListener("mouseup", stop);
      slider.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div className="mb-[70px]">
      <h1 className="text-[42px] text-center mb-[70px] w-full">Projects</h1>
      <div
        className="flex overflow-x-auto gap-6 px-[124px] scroll-smooth hide-scrollbar cursor-grab active:cursor-grabbing"
        id="projects-scroll"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
          WebkitOverflowScrolling: "touch", // iOS smooth scroll
        }}
        onWheel={(e) => (e.currentTarget.style.scrollbarWidth = "none")}
      >
        <ProjectCard
          title="Wingsmen Depo"
          picture={WingsmenDepoImg}
          category="Website Development"
        />
        <ProjectCard
          title="Nasa"
          picture={Nasa}
          category="Website Development"
        />
        <ProjectCard
          title="Google"
          picture={Google}
          category="Website Development"
        />
        <ProjectCard
          title="Facebook"
          picture={Facebook}
          category="Website Development"
        />
      </div>
      <div className="w-full bg-[#007DDC] h-[308px] mt-[-216px]"></div>
    </div>
  );
}
