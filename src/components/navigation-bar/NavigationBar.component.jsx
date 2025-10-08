import Logo from "../../assets/logo/Logo-TeraOnic.svg";
import SecondaryBtn from "../secondary-btn/SecondaryBtn.component";
import WhatsappHandle from "../handlers/whatsappHandle";

import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white border-b-gray-300 border-b z-10 flex justify-center">
      <div className="font-poppins flex justify-between py-4 px-4 w-full max-w-[1690px]">
        <img src={Logo} alt="" />
        <div className="gap-16 items-center text-sm mr-0.5 flex">
          <div className="gap-16 bg-orange-500 md:flex hidden">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              Our Projects
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              Contact Us
            </NavLink>
          </div>
          <div>
            <SecondaryBtn onClick={WhatsappHandle} text="Get Started" />
          </div>
        </div>
      </div>
    </nav>
  );
}
