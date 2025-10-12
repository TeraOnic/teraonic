import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function Sidebar({ open, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-white via-gray-50 to-gray-100 shadow-2xl transition-transform duration-300 border-l border-gray-200 !z-50 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ willChange: "transform" }}
    >
      <div className="px-6 py-4 flex justify-end">
        <button
          className="text-gray-500 hover:text-primary transition-colors"
          onClick={onClose}
        >
          <IoMdClose size={24} />
        </button>
      </div>
      <nav className="flex flex-col gap-2 p-6">
        <NavLink
          to="/"
          onClick={() => {
            setTimeout(onClose, 200);
          }}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              isActive
                ? "bg-primary/10 text-primary font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          onClick={() => {
            setTimeout(onClose, 200);
          }}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              isActive
                ? "bg-primary/10 text-primary font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Our Projects
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => {
            setTimeout(onClose, 200);
          }}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              isActive
                ? "bg-primary/10 text-primary font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => {
            setTimeout(onClose, 200);
          }}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              isActive
                ? "bg-primary/10 text-primary font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Contact Us
        </NavLink>
      </nav>
    </div>
  );
}
