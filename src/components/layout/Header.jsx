import { ShoppingCart, CircleUserRound, Link } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        opacity: { duration: 1.2, ease: "easeInOut" }, // entry fade
        y: { duration: 0.8, ease: "easeOut" }, // entry slide
      }}
      className={`fixed z-100 top-0 left-0 right-0 h-auto flex justify-between items-center px-10 pb-2 pt-3 ${
        isScrolled
          ? "backdrop-blur-md bg-white/30 shadow-sm transition-all duration-300 ease-in"
          : "bg-transparent transition-all duration-300 ease-out"
      }`}
    >
      <div className="md:text-xl text-[#684627]">
        <h2 className="font-bold text-[1.7rem] tracking-wider leading-3">
          Bella
        </h2>
        <h2 className="font-normal tracking-wide text-lg">EXOTICA</h2>
      </div>

      <nav className="hidden lg:flex items-center space-x-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-md pb-1 border-b-2 ${
              isActive
                ? "text-[#8B5E34] border-[#8B5E34]"
                : "text-gray-600 border-transparent hover:text-[#8B5E34] transition-colors"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            `text-md pb-1 border-b-2 ${
              isActive
                ? "text-[#8B5E34] border-[#8B5E34]"
                : "text-gray-600 border-transparent hover:text-[#8B5E34] transition-colors"
            }`
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/technology"
          className={({ isActive }) =>
            `text-md pb-1 border-b-2 ${
              isActive
                ? "text-[#8B5E34] border-[#8B5E34]"
                : "text-gray-600 border-transparent hover:text-[#8B5E34] transition-colors"
            }`
          }
        >
          Technology
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-md pb-1 border-b-2 ${
              isActive
                ? "text-[#8B5E34] border-[#8B5E34]"
                : "text-gray-600 border-transparent hover:text-[#8B5E34] transition-colors"
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-md pb-1 border-b-2 ${
              isActive
                ? "text-[#8B5E34] border-[#8B5E34]"
                : "text-gray-600 border-transparent hover:text-[#8B5E34] transition-colors"
            }`
          }
        >
          Contact
        </NavLink>
      </nav>

      <div className="flex items-center space-x-5">
        <a href="#" aria-label="Shopping Cart">
          <ShoppingCart color="#8B5E34" strokeWidth={2} />
        </a>
        <a href="#" aria-label="User Profile">
          <CircleUserRound color="#8B5E34" strokeWidth={2} />
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
