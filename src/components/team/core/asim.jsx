import Asim from "../../../assets/team/Asim.png";
import Github from "../../../assets/team/Github.svg";
import Linkedin from "../../../assets/team/Linkedin.svg";
const AsimCard = () => {
  return (
    <div className="w-72 pb-8 rounded-m bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.25)] flex flex-col items-center">
      <div className="w-full h-32 bg-secondary rounded-t-m bg-gradient-to-b from-secondary to-[#004376]"></div>
      <img
        src={Asim}
        alt="picture"
        className="size-28 rounded-full mt-[-3.5rem] object-cover object-top"
      />
      <h2 className="text-center text-m font-bold">Muhammad Asim</h2>
      <h3 className="text-center text-sm mb-6">Snr. Software Engr & QA</h3>
      <div className="flex gap-3.5">
        <img src={Linkedin} alt="Linkedin" />
        <img src={Github} alt="Github" />
      </div>
    </div>
  );
};

export default AsimCard;
