import { motion } from "framer-motion";
import ServicesCard from "../services-card/ServicesCard.component";
import { LuMonitor, LuSmartphone, LuBot, LuMessageSquare } from "react-icons/lu";
import { staggerContainer, fadeIn } from "../../utils/motion";

export default function Services() {
  const servicesData = [
    { title: "Web Development & Design", icon: LuMonitor, description: 'Building fast, responsive, and modern websites tailored to your needs.' },
    { title: "App Development", icon: LuSmartphone, description: 'Cross-platform mobile applications that provide seamless user experiences.' },
    { title: "AI Services", icon: LuBot, description: 'Intelligent solutions integrating machine learning to automate and optimize.' },
    { title: "Consultation", icon: LuMessageSquare, description: 'Expert strategic guidance to help you navigate complex technical decisions and optimize your digital presence.' },
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {servicesData.map((service, index) => (
          <motion.div key={index} variants={fadeIn("up", index * 0.1)} className="w-full flex justify-center">
            <ServicesCard
              title={service.title}
              icon={service.icon}
              description={service.description}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
