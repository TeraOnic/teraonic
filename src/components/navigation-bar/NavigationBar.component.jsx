import Logo from "../../assets/logo/Logo-TeraOnic.svg";
import PrimaryBtn from "../primary-btn/PrimaryBtn.component";
export default function NavigationBar() {
  return (
    <nav>
      <div className="font-poppins mx-32 flex justify-between py-4">
        <img src={Logo} alt="" />
        <div className="flex gap-16 items-center text-sm mr-0.5">
          <a href="">Home</a>
          <a href="">Our Projects</a>
          <a href="">About Us</a>
          <a href="">Contact Us</a>
          <PrimaryBtn text="Get Started" />
        </div>
      </div>
    </nav>
  );
}
