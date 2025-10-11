import ServicesCard from "../services-card/ServicesCard.component";
import Web from "../../assets/services/Web.svg";
import Mobile from "../../assets/services/Mobile.svg";
import AI from "../../assets/services/AI.svg";
import Design from "../../assets/services/Design.svg";
import Automation from "../../assets/services/Automation.svg";

export default function Services() {
  return (
    <div className="mx-32 mb-20">
      <h1 className="text-lg text-center mb-20 font-poppins">Our Services</h1>
      <div className="grid grid-cols-5 justify-items-center gap-10">
        <ServicesCard title="Web Dev" picture={Web} description='Building fast, responsive, and modern websites tailored to your needs.' />
        <ServicesCard title="App Dev" picture={Mobile} description='Building fast, responsive, and modern websites tailored to your needs.' />
        <ServicesCard title="AI Services" picture={AI} description='Building fast, responsive, and modern websites tailored to your needs.' />
        <ServicesCard title="Ui/Ux" picture={Design} description='Building fast, responsive, and modern websites tailored to your needs.' />
        <ServicesCard title="Automation" picture={Automation} description='Building fast, responsive, and modern websites tailored to your needs.' />
      </div>
    </div>
  );
}
