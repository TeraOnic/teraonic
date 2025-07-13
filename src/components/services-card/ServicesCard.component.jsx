import WebDevImg from "../../assets/services/4.png";
import Arrow from "../../assets/services/arrow.svg";
export default function ServicesCard({ title, picture }) {
  return (
    <div className="hover:shadow-[12px_22px_4px_rgba(0,0,0,0.25)] transition-all duration-300 rounded-m group font-poppins">
      <img src={picture} alt="Service Image" className="w-96 h-96 rounded-tl-m rounded-tr-m object-cover object-center" />
      <div className="bg-primary text-white w-96 px-6 py-7 flex justify-between rounded-bl-m rounded-br-m text-m group-hover:bg-secondary transition-all duration-300">
        <p>{title}</p>
        <img src={Arrow} alt="Arrow icon" />
      </div>
    </div>
  );
}
