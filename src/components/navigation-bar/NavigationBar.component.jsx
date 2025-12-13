import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../assets/logo/Logo-TeraOnic.svg";
import SecondaryBtn from "../secondary-btn/SecondaryBtn.component";
import Sidebar from "../sidebar/Sidebar.component";
import { navLinkHover } from "../../utils/motion";

export default function NavigationBar() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`w-full fixed top-0 left-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? "glass-panel border-b border-gray-100" : "bg-white/50 backdrop-blur-sm border-transparent"
        }`}
    >
      <div className="font-poppins flex justify-between items-center py-3 md:py-4 px-4 md:px-8 w-full max-w-[1690px]">
        {/* Logo */}
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={Logo}
          alt="TeraOnic Logo"
          className="w-32 md:w-40 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12 items-center text-sm font-medium text-gray-600">
          {[
            { name: "Home", path: "/" },
            { name: "Our Projects", path: "/projects" },
            { name: "About Us", path: "/about" },
            { name: "Contact Us", path: "/contact" }
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative group transition-colors duration-300 ${isActive ? "text-secondary font-semibold" : "hover:text-secondary"}`
              }
            >
              {({ isActive }) => (
                <>
                  <motion.span variants={navLinkHover} whileHover="hover">
                    {item.name}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary rounded-full"
                    />
                  )}
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 items-center">
          <SecondaryBtn
            onClick={() => navigate("/contact")}
            text="Free Consultation"
            className="hidden md:block px-6 py-2.5 !border-secondary !text-secondary hover:!bg-secondary hover:!text-white"
          />

          <motion.div
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-full cursor-pointer hover:bg-gray-100/50"
            onClick={() => setSidebarOpen(true)}
          >
            <RxHamburgerMenu size={28} className="text-secondary" />
          </motion.div>

          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </div>
      </div>
    </motion.nav>
  );
}
