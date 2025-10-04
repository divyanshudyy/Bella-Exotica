import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import CustomButton from "../ui/CustomButton";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Lock/unlock scroll when menu toggles
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/technology", label: "Technology" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        opacity: { duration: 1.2, ease: "easeInOut" },
        y: { duration: 0.8, ease: "easeOut" },
      }}
      className={`fixed z-100 top-0 left-0 right-0 h-auto flex items-center justify-between md:px-6 md:py-3 py-5 px-5 border-b border-black/10 ${
        isScrolled
          ? "backdrop-blur-md bg-white/30 shadow-sm transition-all duration-300 ease-in"
          : "bg-transparent transition-all duration-300 ease-out"
      }`}
    >
      {/* Left side (hamburger/close on mobile + nav on desktop) */}
      <div className="flex items-center">
        {/* Mobile Hamburger → Close */}
        <div className="lg:hidden mr-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-8 h-6 flex flex-col justify-between items-center focus:outline-none"
          >
            {/* Line 1 */}
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 11 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="block w-8 h-[3px] bg-black border rounded-4xl"
            />
            {/* Line 2 */}
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="block w-8 h-[2px] bg-black border rounded-4xl"
            />
            {/* Line 3 */}
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -11 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="block w-8 h-[1px] bg-black border rounded-4xl"
            />
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-md pb-1 border-b-2 ${
                  isActive
                    ? "text-[#8B5E34] border-[#8B5E34]"
                    : "text-gray-600 border-transparent hover:text-[#8B5E34] transition-colors"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Logo */}
      <div className="flex justify-center absolute left-1/2 md:right-1/2 -translate-x-1/2 md:translate-x-0">
        <div className="text-center text-[#684627]">
          <h2 className="font-bold text-[1.7rem] tracking-wider leading-3">
            Bella
          </h2>
          <h2 className="font-normal tracking-wide text-lg">EXOTICA</h2>
        </div>
      </div>

      {/* Right side CTA (desktop only) */}
      <div className="hidden lg:flex justify-end">
        <NavLink
          to="/b2b" // target route
          className={({ isActive }) => `${isActive ? "font-semibold" : ""}`}
        >
          <CustomButton
            margin={"my-0"}
            padding={"px-5 py-2"}
            text={"Partner Now"}
          />
        </NavLink>
      </div>

      {/* Dark overlay when menu open */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0z-0"
        />
      )}
      {/* Mobile sliding menu */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={menuOpen ? { x: 0 } : { x: "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute top-full left-0 w-full min-h-svh bg-white shadow-md z-40 flex flex-col"
      >
        {/* Links */}
        <nav className="flex flex-col divide-y divide-gray-200">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-6 py-6 text-lg ${
                  isActive
                    ? "text-[#8B5E34] font-semibold"
                    : "text-gray-600 hover:text-[#8B5E34] bg-white shadow-md"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA inside menu */}
        <div className="p-6">
          <CustomButton
            margin={"mt-2"}
            padding={"px-10 py-3"}
            text={"Partner Now"}
            textSize={"text-md"}
          />
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
