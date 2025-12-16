import { createPortal } from "react-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LuX, LuArrowRight, LuPhone } from "react-icons/lu";

export default function Sidebar({ open, onClose }) {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Our Projects", path: "/projects" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const backdropVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={backdropVariants}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9990]"
          />

          {/* Sidebar Panel */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-[9999] p-6 flex flex-col justify-between"
            style={{ backgroundColor: "white" }}
          >
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-nura text-primary font-bold tracking-wide">MENU</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <LuX size={24} className="text-gray-500" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    custom={index}
                    variants={itemVariants}
                  >
                    <NavLink
                      to={item.path}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `flex items-center justify-between p-4 rounded-xl transition-all duration-300 group ${isActive
                          ? "bg-secondary/5 text-secondary font-bold"
                          : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                        }`
                      }
                    >
                      <span className="text-base font-medium group-hover:translate-x-1 transition-transform">{item.name}</span>
                      <LuArrowRight
                        size={18}
                        className={({ isActive }) =>
                          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100 text-gray-400"
                        }
                      />
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <button
                onClick={() => {
                  navigate("/contact");
                  onClose();
                }}
                className="w-full bg-secondary text-white py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-primary hover:shadow-lg active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <LuPhone size={20} />
                Book a Call
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
