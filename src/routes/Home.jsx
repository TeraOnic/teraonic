import Services from "../components/services/Services.component";
import Projects from "../components/projects/Projects.component";
import Banner from "../components/Banner/Banner.component";
import ToolsAndTechnology from "../components/tools-and-technology/Tools-and-tech.component";
import Testimonials from "../components/testimonials/Testimonials.component";
import Stats from "../components/stats/Stats.component";
import Process from "../components/process/Process.component";
import WhyUs from "../components/why-us/Why-Us.component";

export default function Home() {
  return (
    <>
      <Banner />
      <Stats />
      <ToolsAndTechnology />
      <Services />
      <Process />
      <WhyUs />
      <Projects />
      <Testimonials />
    </>
  );
}
