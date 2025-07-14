import GridDesign from "../../assets/Banner/GridDesign.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Banner = () => {
  const bannerRef = useRef(null);

  // Track scroll progress in this section
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to horizontal shift (0% to -40%)
  const xShift = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <div
      ref={bannerRef}
      className="relative w-full h-[200vh] bg-primary overflow-hidden"
    >
      <img
        src={GridDesign}
        alt="Banner Background"
        className="w-full h-[594px] object-cover"
      />
      <div className="relative w-full mt-[-230px] text-[#494949]">
        <p className="font-jomhuria text-[240px] absolute left-[50%] translate-x-[-50%]">
          TeraOnic
        </p>
        <div className="text-[#C0C0C0] text-[24px] w-full max-w-[800px] px-4 absolute right-0 translate-x-[100%] text-left">
          At TeraOnics, we build{" "}
          <span className="text-blue-400">Custom Software</span> that’s
          purpose-built for your unique challenges. From concept to deployment,
          every solution is designed to perform — seamlessly, efficiently, and
          reliably. We blend technical precision with clean design to create
          systems that not only work, but work beautifully. Whether you're a
          startup or an enterprise, we adapt to your goals and help you move
          forward with confidence.
        </div>
      </div>
    </div>
  );
};

export default Banner;
