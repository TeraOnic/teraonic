import { motion } from "framer-motion";
import WhyUsCard from "./core/why-us-card.component";
import Verified from "../../assets/why-us/Verified.svg";
import Collaboration from "../../assets/why-us/Colaboration.svg";
import Cost from "../../assets/why-us/Cost.svg";
import { staggerContainer, fadeIn } from "../../utils/motion";

const WhyUs = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="max-w-[1690px] mx-auto px-4 md:px-8 mb-32"
    >
      <motion.div variants={fadeIn("up")} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-nura text-primary mb-4">Why Choose TeraOnic</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">Excellence in every line of code. We are committed to your success.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        <motion.div variants={fadeIn("up", 0.2)} className="w-full h-full flex justify-center">
          <WhyUsCard
            logo={Verified}
            heading1={"Reliable"}
            heading2={"Partnership"}
            text={
              "We don’t just deliver projects — we build lasting relationships with consistent support and maintenance."
            }
          />
        </motion.div>

        <motion.div variants={fadeIn("up", 0.4)} className="w-full h-full flex justify-center">
          <WhyUsCard
            logo={Collaboration}
            heading1={"Collaborative"}
            heading2={"Process"}
            text={
              "Your feedback drives every step. We keep you in the loop with clear communication and progress updates."
            }
          />
        </motion.div>

        <motion.div variants={fadeIn("up", 0.6)} className="w-full h-full flex justify-center">
          <WhyUsCard
            logo={Cost}
            heading1={"Cost-Effective"}
            heading2={"Solutions"}
            text={
              "Get premium quality software without stretching your budget — no hidden charges, just value."
            }
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyUs;
