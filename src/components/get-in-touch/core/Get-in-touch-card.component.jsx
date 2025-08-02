import SecondaryBtn from "../../secondary-btn/SecondaryBtn.component";
const GetInTouchCard = ({ logo, heading, btnTitle }) => {
  return (
    <section className="px-8 w-[28rem] h-[39.5rem] shadow-[0_0_4px_0_rgba(0,0,0,0.25)] rounded-3xl flex flex-col items-center text-center justify-between group">
      <div className="w-24 h-4 bg-secondary rounded-b-3xl group-hover:w-80 transition-all duration-300"></div>
      <div className="flex flex-col items-center">
        <img className="size-32 mb-16" src={logo} alt="" />
        <h2 className="text-2xl font-bold mb-6">{heading}</h2>
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
        <SecondaryBtn text={btnTitle}/>
        </div>
      </div>
      <div className="w-24 h-4 bg-secondary rounded-t-3xl group-hover:w-80 transition-all duration-300"></div>
    </section>
  );
};

export default GetInTouchCard;
