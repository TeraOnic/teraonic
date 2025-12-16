import { motion } from "framer-motion";
import TeamMemberCard from "./core/TeamMemberCard.component";
import { fadeIn, staggerContainer } from "../../utils/motion";

import Taqi from "../../assets/team/MuhammadTaqi.webp";
import Abdullah from "../../assets/team/MuhammadAbdullah.webp";

const teamData = [
  {
    name: "Muhammad Taqi",
    role: "Software Engineer",
    image: Taqi,
  },
  {
    name: "Muhammad Abdullah",
    role: "Software Engineer",
    image: Abdullah,
  },
];

const Team = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1200px] mx-auto text-center mb-16">
        <h2 className="text-gray-500 uppercase tracking-[0.2em] mb-2 font-medium">Our Experts</h2>
        <h1 className="text-4xl md:text-5xl font-nura text-primary">Meet The Team</h1>
        <p className="text-gray-500 mt-4 max-w-lg mx-auto">
          The minds behind the innovation. Dedicated to delivering excellence.
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 flex-wrap"
      >
        {teamData.map((member, index) => (
          <motion.div key={index} variants={fadeIn("up", index * 0.2)}>
            <TeamMemberCard {...member} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Team;
