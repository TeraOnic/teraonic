import Logo from "../../assets/logo/Logo-TeraOnic.svg";
import SecondaryBtn from "../secondary-btn/SecondaryBtn.component";
import { Link } from "react-router-dom";
export default function NavigationBar() {
  return (
    <nav>
      <div className="font-poppins mx-32 flex justify-between py-4">
        <img src={Logo} alt="" />
        <div className="flex gap-16 items-center text-sm mr-0.5">
          <Link to="/">Home</Link>
          <Link to="">Our Projects</Link>
          <Link to="/about">About Us</Link>
          <Link to="">Contact Us</Link>
          <SecondaryBtn text="Get Started" />
        </div>
      </div>
    </nav>
  );
}
