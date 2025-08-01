import Linkedin from "../../../assets/team/Linkedin.svg";
import Facebook from "../../../assets/team/Facebook.svg";
import Instagram from "../../../assets/team/Instagram.svg";
import Github from "../../../assets/team/Github.svg";
import Dribble from "../../../assets/team/Dribble.svg";
import Taqi from "../../../assets/team/Taqi.jpeg";
const TaqiCard = () => {
  return (
    <div className="w-72 pb-8 rounded-m bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.25)] flex flex-col items-center">
      <div className="w-full h-32 bg-secondary rounded-t-m bg-gradient-to-b from-secondary to-[#004376]"></div>
      <img
        src={Taqi}
        alt="picture"
        className="size-28 rounded-full mt-[-3.5rem] object-cover object-top"
      />
      <h2 className="text-center text-m font-bold">Muhammad Taqi</h2>
      <h3 className="text-center text-sm mb-6">
        Front-End Dev & Ui/Ux Designer
      </h3>
      <div className="flex justify-between w-56">
        <img src={Linkedin} alt="Linkedin" />
        <img src={Facebook} alt="Facebook" />
        <img src={Instagram} alt="Instagram" />
        <img src={Github} alt="Github" />
        <img src={Dribble} alt="Dribble" />
      </div>
    </div>
  );
};

export default TaqiCard;
