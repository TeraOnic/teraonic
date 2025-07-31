import PoBack from "../../assets/PlaceOrder/PoBack.png";
import Group26 from "../../assets/PlaceOrder/Group26.png";
import SecondaryBtn from "../secondary-btn/SecondaryBtn.component";

const PlaceOrderCard = () => {
  return (
    <div
      className="bg-primary rounded-b-[50px] w-full h-auto min-h-[561px] bg-no-repeat bg-right flex flex-col justify-center items-center px-4 sm:px-6 lg:px-0"
      style={{ backgroundImage: `url(${PoBack})` }}
    >
      <h2 className="text-white text-[28px] sm:text-[32px] lg:text-[35px] font-bold text-center mt-8">
        Place Order
      </h2>
      <div className="w-full sm:w-[90%] lg:w-[70%] rounded-4xl h-auto lg:h-[303px] bg-secondary mt-10 mx-auto flex flex-col lg:flex-row justify-between items-center overflow-hidden group p-6 lg:p-0">
        <div className="mb-6 lg:my-[52px] mx-0 lg:mx-[60px] text-center lg:text-left">
          <h2 className="text-white text-[24px] sm:text-[28px] lg:text-[35px] font-bold">
            Let’s bring your vision to life
          </h2>
          <p className="text-sm text-white mt-6 sm:mt-8 mb-4 sm:mb-5">
            Schedule a free consultation with one of our experts — no
            commitments, just a meaningful <br />
            conversation about your goals.
            <br />
            Let’s explore how we can turn your ideas into powerful digital
            solutions.
          </p>
          <button className="bg-transparent border text-white p-4 rounded-[0.5rem] w-44 text-sm font-poppins hover:bg-white hover:text-black transition-all duration-300">
            Contact Us
          </button>
        </div>

        <div className="w-full lg:w-auto lg:mr-[-23%] flex justify-center lg:justify-end">
          <img
            src={Group26}
            alt="Background Illustration"
            className="w-[70%] sm:w-[50%] md:w-[40%] lg:w-auto group-hover:transition-transform duration-300 ease-in-out group-hover:scale-125"
          />
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderCard;
