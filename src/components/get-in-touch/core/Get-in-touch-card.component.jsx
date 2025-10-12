import SecondaryBtn from "../../secondary-btn/SecondaryBtn.component";
const GetInTouchCard = ({ logo, heading, btnTitle, onClick }) => {
  return (
    <section className="px-8 w-[28rem] h-[39.5rem] shadow-[0_0_4px_0_rgba(0,0,0,0.25)] rounded-3xl flex flex-col items-center text-center justify-between group max-[1460px]:px-4 max-[1460px]:w-[22rem] max-[1330px]:w-[20rem] max-[1230px]:w-[16rem] max-[810px]:w-[14rem] max-[720px]:w-[12rem] max-[620px]:w-[10rem] max-[520px]:w-[16rem] max-[1460px]:h-[35rem]">
      <div className="w-24 h-4 bg-secondary rounded-b-3xl group-hover:w-80 transition-all duration-300"></div>
      <div className="flex flex-col items-center">
        <img className="size-32 mb-16 max-[810px]:size-24 max-[520px]:size-20" src={logo} alt="" />
        <h2 className="text-2xl font-bold mb-6 max-[720px]:text-xl max-[520px]:text-sm">{heading}</h2>
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 [@media(hover:none)]:opacity-100">
        <SecondaryBtn onClick={onClick} text={btnTitle}/>
        </div>
      </div>
      <div className="w-24 h-4 bg-secondary rounded-t-3xl group-hover:w-80 transition-all duration-300"></div>
    </section>
  );
};

export default GetInTouchCard;
