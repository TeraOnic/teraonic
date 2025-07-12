import { useEffect } from "react";
import ProjectCard from "../project-card/project-card.component.jsx";
import WingsmenDepoImg from "../../assets/projects/WingsmenDepo.jpg";
import Nasa from "../../assets/projects/Nasa.jpg";
import Google from "../../assets/projects/Google.webp";
import Facebook from "../../assets/projects/facebook.webp";
import Blog from "../../assets/projects/optional.avif";
import TradingApp from "../../assets/projects/optional2.webp";

export default function Projects() {
  useEffect(() => {
    const slider = document.getElementById("projects-scroll");
    let isDown = false;
    let startX;
    let scrollLeft;

    const start = (e) => {
      isDown = true;
      slider.classList.add("dragging");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const stop = () => {
      isDown = false;
      slider.classList.remove("dragging");
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
        id="projects-scroll"
        className="flex overflow-x-auto gap-6 px-[124px] scroll-smooth pb-6"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch"
        }}
      >
        <style>
          {`
            #projects-scroll {
              cursor: default;
            }
            #projects-scroll::-webkit-scrollbar {
              display: none;
            }
            #projects-scroll.dragging {
              cursor: grabbing !important;
            }
          `}
        </style>

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
          category="App Development"
        />
        <ProjectCard
          title="Blog Site"
          picture={Blog}
          category="Ui/Ux Design"
        />
        <ProjectCard
          title="Trading Website"
          picture={TradingApp}
          category="Website Development"
        />
      </div>

      <div className="w-full bg-[#007DDC] h-[308px] mt-[-216px]"></div>
    </div>
  );
}
