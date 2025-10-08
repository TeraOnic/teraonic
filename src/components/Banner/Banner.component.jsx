import BusinessCard from "../business-card/business-card.component";
import PrimaryBtn from "../primary-btn/PrimaryBtn.component";
import SecondaryBtn from "../secondary-btn/SecondaryBtn.component";
import Arrow from "../../assets/Banner/Arrow2.svg";
import Whatsapp from "../../assets/Banner/V-Whatsapp.svg";
import Mail from "../../assets/Banner/V-Mail.svg";
import Linkedin from "../../assets/Banner/V-Linkedin.svg";
import WhatsappHandle from "../handlers/whatsappHandle";
import LocationHandle from "../handlers/locationHandle";

const Header = () => {
  return (
    <section className="w-full max-w-[1690px] mx-auto md:px-8 px-4 flex flex-col md:flex-row justify-between items-center my-32">
      <div className="max-w-[39rem] md:mb-0 mb-12">
        <div>
          <h1 className="font-nura md:text-6xl text-5xl">TeraOnic</h1>
          <h2 className="md:text-4xl text-3xl">From Code To Impact</h2>
          <p className="text-sm max-md:text-justify">
            TeraOnics builds custom software tailored to your business needs
            fast, reliable, and beautifully designed. From startups to
            enterprises, we turn complex challenges into seamless digital
            solutions that scale.
          </p>
        </div>

        <div className="my-6 flex gap-2.5 flex-row">
          <PrimaryBtn onClick={WhatsappHandle} text="Free Consultation" />
          <SecondaryBtn
            onClick={LocationHandle}
            className="px-8 py-4"
            text="Visit us"
          />
        </div>

        <div className="flex gap-4 md:text-m text-sm">
          <div>
            <h3 className="font-bold">AI</h3>
            <p>Services</p>
          </div>
          <div className="border-l pl-4">
            <h3 className="font-bold">Web & App</h3>
            <p>Development</p>
          </div>
          <div className="border-l pl-4">
            <h3 className="font-bold">Ui/Ux</h3>
            <p>Designing</p>
          </div>
        </div>
      </div>
      <BusinessCard className="" />
      <div className="gap-6 bg-orange-500 flex-col items-center hidden md:flex w-8">
        <p className="rotate-90 mb-6 whitespace-nowrap">Get in touch </p>
        <img src={Arrow} alt="Arrow" />
        <img src={Whatsapp} alt="Whatsapp" />
        <img src={Mail} alt="Mail" />
        <img src={Linkedin} alt="Linkedin" />
      </div>
    </section>
  );
};

export default Header;
