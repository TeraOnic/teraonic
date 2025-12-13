import { motion } from "framer-motion";
import ServicesCard from "../services-card/ServicesCard.component";
import Web from "../../assets/services/Web.svg";
import Mobile from "../../assets/services/Mobile.svg";
import AI from "../../assets/services/AI.svg";
import Design from "../../assets/services/Design.svg";
import Automation from "../../assets/services/Automation.svg";
import { staggerContainer, fadeIn } from "../../utils/motion";

export default function Services() {
  const servicesData = [
    { title: "Web Dev", picture: Web, description: 'Building fast, responsive, and modern websites tailored to your needs.' },
    { title: "App Dev", picture: Mobile, description: 'Cross-platform mobile applications that provide seamless user experiences.' },
    { title: "AI Services", picture: AI, description: 'Intelligent solutions integrating machine learning to automate and optimize.' },
    { title: "Ui/Ux", picture: Design, description: 'User-centric designs that are intuitive, accessible, and visually stunning.' },
    { title: "Automation", picture: Automation, description: 'Streamlining business processes with custom automated workflows.' }
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="max-w-[1690px] mx-auto px-4 md:px-8 mb-32"
    >
      <motion.div variants={fadeIn("up")} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-nura text-primary mb-4">Our Services</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">Comprehensive digital solutions to propel your business forward.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
        {servicesData.map((service, index) => (
          <motion.div key={index} variants={fadeIn("up", index * 0.1)} className="w-full flex justify-center">
            <ServicesCard
              title={service.title}
              picture={service.picture}
              description={service.description}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
