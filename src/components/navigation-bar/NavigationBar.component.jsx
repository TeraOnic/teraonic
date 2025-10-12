import Logo from "../../assets/logo/Logo-TeraOnic.svg";
import SecondaryBtn from "../secondary-btn/SecondaryBtn.component";
import WhatsappHandle from "../handlers/whatsappHandle";
import Sidebar from "../sidebar/Sidebar.component";

import { RxHamburgerMenu } from "react-icons/rx";

import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NavigationBar() {
  const navigater = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white border-b-gray-300 border-b z-10 flex justify-center">
      <div className="font-poppins flex justify-between py-2 md:py-4 px-2 md:px-4  w-full max-w-[1690px]">
        <img src={Logo} alt="" className="max-md:w-30" />
        <div className="gap-16 items-center text-sm mr-0.5 flex">
          <div className="gap-16 md:flex hidden">
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
          <div className="flex gap-2 justify-center items-center">
            <SecondaryBtn
              // onClick={WhatsappHandle}
              onClick={() => navigater("/contact")}
              text="Free Consultation"
              className="px-4 py-2 md:px-8 md:py-4"
            />
            <SecondaryBtn
              text={<RxHamburgerMenu size={24} />}
              className="px-4 py-2 md:hidden active:bg-black active:text-white"
              onClick={() => setSidebarOpen(true)}
            />
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          </div>
        </div>
      </div>
    </nav>
  );
}
