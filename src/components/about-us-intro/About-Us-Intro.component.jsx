import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const AboutUsIntro = () => {
  return (
    <section className="relative py-24 px-4 md:px-8 mt-12 mb-20">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn("up", 0.2)}
          className="glass-panel p-8 md:p-16 rounded-[40px] relative overflow-hidden"
        >
          {/* Accent Line */}
          <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <h2 className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">Who We Are</h2>
              <h1 className="text-4xl md:text-6xl font-nura text-primary leading-tight">
                Building <br />
                <span className="text-secondary">Digital</span> <br />
                Futures.
              </h1>
            </div>

            <div className="w-full md:w-2/3">
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
                At <span className="font-semibold text-primary">TeraOnic</span>, we specialize in building custom software solutions stylized precisely to your needs.
                From the first spark of an idea to the final deployment, we focus on delivering software that’s
                <span className="text-secondary font-medium"> seamless, efficient, and reliable</span>.
              </p>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light mt-6">
                Our approach combines technical precision with clean, user-friendly design, ensuring every product not only
                functions flawlessly but also delivers a beautiful user experience. Whether you're a startup finding your path
                or an enterprise scaling fast, we align our expertise with your goals.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsIntro;
