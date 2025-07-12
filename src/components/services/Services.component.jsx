import ServicesCard from "../services-card/ServicesCard.component";
import WebDevImg from "../../assets/services/4.png";
import MobDevImg from "../../assets/services/5.png";
import AiServImg from "../../assets/services/6.png";
import UiUxImg from "../../assets/services/7.png";
import GDImg from "../../assets/services/8.png";

export default function Services() {
  return (
    <div>
      <h1 className="text-[42px] text-center mb-[70px]">Our Services</h1>
      <div className="flex mx-[124px] justify-between flex-wrap gap-y-12">
        <ServicesCard title="Web Development" picture={WebDevImg} />
        <ServicesCard title="Mobile App Development" picture={MobDevImg} />
        <ServicesCard title="AI Services" picture={AiServImg} />
        <ServicesCard title="Quality Assurance" picture={UiUxImg} />
        <ServicesCard title="UI/UX Design" picture={UiUxImg} />
        <ServicesCard title="Graphic Design" picture={GDImg} />
      </div>
    </div>
  );
}
