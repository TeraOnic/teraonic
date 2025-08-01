import Ahmed from "../../../assets/team/Ahmed.jpeg";
import Usman from "../../../assets/team/Usman.jpg";
import Linkedin from "../../../assets/team/Linkedin.svg";
import Facebook from "../../../assets/team/Facebook.svg";
import Instagram from "../../../assets/team/Instagram.svg";
import Github from "../../../assets/team/Github.svg";
const AhmedCard = () => {
  return (
    <div className="w-72 pb-8 rounded-m bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.25)] flex flex-col items-center">
      <div className="w-full h-32 bg-secondary rounded-t-m bg-gradient-to-b from-secondary to-[#004376]"></div>
      <img
        src={Ahmed}
        alt="picture"
        className="size-28 rounded-full mt-[-3.5rem] object-cover object-top"
      />
      <h2 className="text-center text-m font-bold">Muhammad Ahmed</h2>
      <h3 className="text-center text-sm mb-6">Full Stack Developer</h3>
      <div className="flex justify-between w-56">
        <img src={Linkedin} alt="Linkedin" />
        <img src={Facebook} alt="Facebook" />
        <img src={Instagram} alt="Instagram" />
        <img src={Github} alt="Github" />
      </div>
    </div>
  );
};

export default AhmedCard;
