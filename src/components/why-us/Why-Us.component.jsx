import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { LuInfinity, LuZap, LuLayers } from "react-icons/lu";

const WhyUsCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      variants={fadeIn("up", delay)}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full hover:shadow-xl hover:shadow-secondary/10 hover:border-secondary transition-all duration-300 cursor-pointer relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-secondary/20"></div>

      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-secondary group-hover:text-white transition-colors duration-300 relative z-10">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold font-nura text-primary mb-3 group-hover:text-secondary transition-colors duration-300 relative z-10">
        {title}
      </h3>
      <p className="text-gray-500 leading-relaxed text-sm relative z-10">
        {description}
      </p>
    </motion.div>
  );
};

export default function WhyUs() {
  const features = [
    {
      icon: LuInfinity,
      title: "Unlimited Revisions",
      description: "We offer unlimited revisions for a set period to ensure the best results.",
    },
    {
      icon: LuZap,
      title: "Fast Turnaround Time",
      description: "Quick execution with updates every 24 to 48 hours and a smooth communication flow.",
    },
    {
      icon: LuLayers,
      title: "Everything, one team",
      description: "Branding, websites and e-commerce, all under one roof. One team, zero hassle.",
    },
  ];

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-[1690px] mx-auto px-4 md:px-8 mb-32"
    >
      <motion.div variants={fadeIn("up")} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-nura text-primary mb-4">Why you'll love us</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">We are committed to delivering excellence and value in every project.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <WhyUsCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={index * 0.1}
          />
        ))}
      </div>
    </motion.section>
  );
}
