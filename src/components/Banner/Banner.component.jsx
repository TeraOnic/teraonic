import GridDesign from "../../assets/Banner/GridDesign.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Banner = () => {
  const bannerRef = useRef(null);

  // Track scroll progress in this section
  const { scrollYProgress } = useScroll({
    target: bannerRef,
  });

  const teraonicX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const teraonicY = useTransform(scrollYProgress, [0, 1], ["0%", "320%"]);
  const teraonicColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#494949", "#FFFFFF"],
  );
  const teraonicScale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  const paragraphX = useTransform(scrollYProgress, [0, 1], ["0%", "-135%"]);
  const paragraphY = useTransform(scrollYProgress, [0, 1], ["0%", "240%"]);
  const paragraphScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  const paragraphOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "170%"]);

  return (
    <div
      ref={bannerRef}
      className="relative w-full h-[2160px] bg-primary overflow-hidden"
    >
      <motion.img
        src={GridDesign}
        alt="Banner Background"
        className="w-full h-[594px] object-cover"
        style={{ y: imageY }}
      />
      <div className="relative w-full mt-[-230px] text-[#494949]">
        <motion.p
          style={{
            x: teraonicX,
            y: teraonicY,
            color: teraonicColor,
            scale: teraonicScale,
          }}
          className="font-jomhuria text-[240px] absolute left-[50%] translate-x-[-50%]"
        >
          TeraOnic
        </motion.p>
        <motion.div
          style={{
            x: paragraphX,
            y: paragraphY,
            scale: paragraphScale,
            opacity: paragraphOpacity,
          }}
          className="text-[#C0C0C0] text-[24px] w-full max-w-[700px] px-4 absolute right-0 translate-x-[100%] top-[500px] text-left"
        >
          At TeraOnics, we build{" "}
          <span className="text-blue-400">Custom Software</span> that’s
          purpose-built for your unique challenges. From concept to deployment,
          every solution is designed to perform — seamlessly, efficiently, and
          reliably. We blend technical precision with clean design to create
          systems that not only work, but work beautifully. Whether you're a
          startup or an enterprise, we adapt to your goals and help you move
          forward with confidence.
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
