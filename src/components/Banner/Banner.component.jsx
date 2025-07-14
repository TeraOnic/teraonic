import GridDesign from "../../assets/Banner/GridDesign.png";

const Banner = () => {
  return (
    <div className="w-full min-h-[980px] bg-[#2C2C2C] ">
      <img
        src={GridDesign}
        alt="Banner Background"
        className="w-full  h-[594px]"
      />

      <div>
        <p>TeraOnic</p>
      </div>

      {/* Description */}
      <div className=" text-[#C0C0C0] text-[24px] w-full h-[288px]">
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
  );
};

export default Banner;
