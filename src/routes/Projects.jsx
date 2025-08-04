import ProjectCard from "../components/project-card/project-card.component";
import WingsmenDepoImg from "../assets/projects/WingManDepo.webp";
import TeraOnicMockup from "../assets/projects/TeraOnicMockup.webp";
import AXEMockup from "../assets/projects/AXE.webp";
import Coffee from "../assets/projects/Coffee.webp";
import AUTransport from "../assets/projects/AUTransport.webp";
import AppSignup from "../assets/projects/AppSignup.webp";
import ShoesStore from "../assets/projects/ShoesStore.webp";
import FreshBerryUAE from "../assets/projects/ShoesStore.webp";
import HealthCare from "../assets/projects/HealthCare.webp";
import Newvative from "../assets/projects/Newvative.webp";
import TShirtShop from "../assets/projects/TShirtShop.webp";

export default function Projects() {
  return (
    <div className="my-20 px-32">
      <h1 className="text-center text-lg mb-12">Projects</h1>
      <div className="flex flex-wrap gap-y-6 gap-x-14">
        <ProjectCard
          picture={TeraOnicMockup}
          title={"TeraOnic Website"}
          category={"Web Development"}
        />
        <ProjectCard
          picture={WingsmenDepoImg}
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
    </div>
  );
}
