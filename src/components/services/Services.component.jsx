import ServicesCard from "../services-card/ServicesCard.component";
import WebDevImg from "../../assets/services/4.png";
import MobDevImg from "../../assets/services/5.png";
import AiServImg from "../../assets/services/6.png";
import QAImg from "../../assets/services/9.jpg";
import UiUxImg from "../../assets/services/7.png";
import GDImg from "../../assets/services/8.png";

export default function Services() {
  return (
    <div className="mx-32 mb-20">
      <h1 className="text-lg text-center mb-20 font-poppins">Our Services</h1>
      <div className="flex justify-between flex-wrap gap-y-12">
        <ServicesCard title="Web Development" picture={WebDevImg} />
        <ServicesCard title="Mobile App" picture={MobDevImg} />
        <ServicesCard title="AI Services" picture={AiServImg} />
        <ServicesCard title="Quality Assurance" picture={QAImg} />
        <ServicesCard title="UI/UX Design" picture={UiUxImg} />
        <ServicesCard title="Graphic Design" picture={GDImg} />
      </div>
    </div>
  );
}
