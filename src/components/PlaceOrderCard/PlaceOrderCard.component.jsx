import PoBack from "../../assets/PlaceOrder/PoBack.png";
import Group26 from "../../assets/PlaceOrder/Group26.png";
import SecondaryBtn from "../secondary-btn/SecondaryBtn.component";

const PlaceOrderCard = () => {
  return (
    <div
      className="bg-primary rounded-b-[50px] w-full h-[561px] bg-no-repeat bg-right flex flex-col items-center justify-center "
      style={{ backgroundImage: `url(${PoBack})` }}
    >
      <h2 className="text-white text-[35px] font-bold">Place Order</h2>
      <div className="relative w-full h-[303px] bg-[#0094FF] flex items-center justify-between px-8 rounded-[24px] mt-4">
        {/* Left Content */}
        <div>
          <h2 className="text-white text-[35px]  font-bold">
            Let’s bring your vision to life
          </h2>
          <p className="text-sm text-white ">
            Schedule a free consultation with one of our experts — no
            commitments, just a meaningful conversation about your goals.
            <br />
            Let’s explore how we can turn your ideas into powerful digital
            solutions.
          </p>
          <SecondaryBtn text="Contact Us" />
        </div>

        {/* Right Background Illustration */}
        <div>
          <img
            src={Group26}
            alt="Background Illustration"
            className="absolute top-0 h-[303px] left-[80%] right-0 rounded-r-[24px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderCard;
