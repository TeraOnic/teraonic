import { useEffect } from "react";
import ProjectCard from "../project-card/project-card.component.jsx";
import SecondaryBtn from "../secondary-btn/SecondaryBtn.component.jsx";

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
    <div className="mb-20">
      <h1 className="text-lg text-center mb-20 font-poppins">Projects</h1>

      <div
        id="projects-scroll"
        className="flex overflow-x-auto gap-6 px-32 scroll-smooth pb-6"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
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
          picture={TeraOnicMockup}
          title={"TeraOnic Website"}
          category={"Web Development"}
        />
        <ProjectCard
          picture={WingManDepo}
          title={"Fly Boys Depo"}
          category={"Web Development"}
        />
        <ProjectCard
          picture={FreshBerryUAE}
          title={"Fresh Berry UAE Web"}
          category={"Ui/Ux Design"}
        />
        <ProjectCard
          picture={HealthCare}
          title={"HealthCare Web"}
          category={"Ui/Ux Design"}
        />
        <ProjectCard
          picture={Newvative}
          title={"NewVative"}
          category={"Ui/Ux Design"}
        />
        <ProjectCard
          picture={TShirtShop}
          title={"T-Shirt Shop"}
          category={"Ui/Ux Design"}
        />
        <ProjectCard
          picture={AXEMockup}
          title={"AXE Website Redesign"}
          category={"Ui/Ux Design"}
        />
        <ProjectCard
          picture={ShoesStore}
          title={"Shoes Store"}
          category={"Ui/Ux Design"}
        />
        <ProjectCard
          picture={Coffee}
          title={"Fly Boys Depo"}
          category={"Ui/Ux Design"}
        />
        <ProjectCard
          picture={AUTransport}
          title={"AU Transport System App"}
          category={"Ui/Ux Design"}
        />
        <ProjectCard
          picture={AppSignup}
          title={"App Signup Flow"}
          category={"Ui/Ux Design"}
        />
      </div>

      <div className="w-full bg-secondary h-72 mt-[-260px] mb-12"></div>
      <div className="flex justify-center">
        <SecondaryBtn text="Show All" />
      </div>
    </div>
  );
}
