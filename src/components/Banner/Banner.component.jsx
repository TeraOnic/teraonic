import { motion } from "framer-motion";
import TechConstellation from "./TechConstellation";
import PrimaryBtn from "../primary-btn/PrimaryBtn.component";
import SecondaryBtn from "../secondary-btn/SecondaryBtn.component";
import Whatsapp from "../../assets/Banner/V-Whatsapp.svg";
import Mail from "../../assets/Banner/V-Mail.svg";
import Linkedin from "../../assets/Banner/V-Linkedin.svg";
import LocationHandle from "../handlers/locationHandle";
import { useNavigate } from "react-router-dom";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { LuPhone } from "react-icons/lu";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full max-w-[1600px] mx-auto md:px-8 px-4 flex flex-col-reverse lg:flex-row justify-between items-center md:mt-32 mt-24 mb-32 overflow-visible"
    >
      {/* Left Content */}
      <motion.div variants={fadeIn("right", 0.2)} className="max-w-[42rem] md:mb-0 mb-12 flex flex-col gap-6 relative z-10 items-center text-center lg:items-start lg:text-left">
        <div>
          <h1 className="font-nura md:text-7xl lg:text-7xl text-5xl text-primary leading-tight">
            TeraOnic
          </h1>
          <h2 className="md:text-6xl lg:text-5xl text-4xl font-medium text-gray-800 tracking-wide mt-2">
            From Code To Impact
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl leading-relaxed mt-6 max-w-lg mx-auto lg:mx-0">
            We build custom software tailored to your business needs — fast, reliable, and beautifully designed.
            Turning complex challenges into seamless digital solutions.
          </p>
        </div>

        <div className="flex gap-4 flex-row mt-4 justify-center lg:justify-start">
          <div className="w-full md:w-auto">
            <PrimaryBtn
              onClick={() => navigate("/contact")}
              text="Book a Call"
              icon={LuPhone}
            />
          </div>
          <div className="w-full md:w-auto">
            <SecondaryBtn
              onClick={() => navigate("/projects")}
              className="px-8 py-4 w-full md:w-auto"
              text="See Our Work"
            />
          </div>
        </div>

        {/* Socials moved here to avoid overlap on right */}

        <div className="flex gap-8 md:text-base text-sm mt-8 pt-8 border-t border-gray-200 justify-center lg:justify-start">
          <div>
            <h3 className="font-bold text-secondary text-xl">AI</h3>
            <p className="text-gray-500">Solutions</p>
          </div>
          <div className="border-l border-gray-300 pl-8">
            <h3 className="font-bold text-secondary text-xl">Web & App</h3>
            <p className="text-gray-500">Development</p>
          </div>
          <div className="border-l border-gray-300 pl-8">
            <h3 className="font-bold text-secondary text-xl">UI/UX</h3>
            <p className="text-gray-500">Design</p>
          </div>
        </div>
      </motion.div>

      {/* Right Content - Tech Constellation */}
      <motion.div
        variants={fadeIn("left", 0.4)}
        className="hidden lg:flex relative flex-col items-center justify-center w-full lg:w-auto min-h-[400px] lg:pl-10"
      >
        <TechConstellation />
      </motion.div>
    </motion.section>
  );
};

export default Banner;
