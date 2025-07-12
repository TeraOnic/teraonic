import WebDevImg from "../../assets/services/4.png";
import Arrow from "../../assets/services/arrow.svg";
export default function ServicesCard({ title, picture }) {
  return (
    <div className="hover:shadow-[12px_22px_4px_rgba(0,0,0,0.25)] transition-all duration-300 rounded-[20px] group">
      <img src={picture} alt="Service Image" className="w-[394px] h-[394px] rounded-tl-[20px] rounded-tr-[20px] object-cover object-center" />
      <div className="bg-[#2C2C2C] text-[#ffffff] w-[394px] px-[26px] py-[28px] flex justify-between rounded-bl-[20px] rounded-br-[20px] text-2xl group-hover:bg-[#007DDC] transition-all duration-300">
        <p>{title}</p>
        <img src={Arrow} alt="Arrow icon" />
      </div>
    </div>
  );
}
