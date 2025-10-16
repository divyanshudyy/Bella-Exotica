import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import CustomButton from "../ui/CustomButton";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `relative py-1 transition-all duration-300 ${
      isActive
        ? "text-[#3D2B1F] scale-105"
        : "text-[#3D2B1F]/80 hover:text-[#3D2B1F] hover:scale-105"
    } after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-[2px] after:bg-[#3D2B1F] after:transition-all after:duration-300 ${
      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
    }`;

  return (
    <>
      {/* --- Mobile Menu Overlay --- */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#fff9f5] z-[9999] transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen relative px-6 py-12">
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-5 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition z-[10000]"
          >
            <X size={28} className="text-[#3D2B1F]" />
          </button>

          {/* Mobile Nav */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-6 text-center text-2xl font-medium text-[#3D2B1F]"
          >
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/products" onClick={() => setMenuOpen(false)}>
              Products
            </NavLink>
            <NavLink to="/technology" onClick={() => setMenuOpen(false)}>
              Technology
            </NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
            <NavLink to="/b2b" onClick={() => setMenuOpen(false)}>
              <CustomButton text="Let's Collaborate" padding="px-6 py-3" />
            </NavLink>
          </motion.nav>
        </div>
      </div>

      {/* --- Main Header --- */}
      <header
        className={`fixed top-0 left-0 w-full z-[9998] transition-all duration-300 ${
          isScrolled
            ? "bg-[#fff9f5]/80 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-5 sm:px-10 md:px-10">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold text-[#3D2B1F] font-oakes-grotesk"
          >
            Bella Exotica
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-medium font-oakes-grotesk">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/products" className={navLinkClass}>
              Products
            </NavLink>
            <NavLink to="/technology" className={navLinkClass}>
              Technology
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact 
            </NavLink>
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <NavLink to="/b2b">
              <CustomButton

                text="Let's Collaborate"
                padding="px-4 py-1.5"
                bgColor="bg-[#3D2B1F]"
                textColor="text-white"
                hover="hover:scale-104"
              />
            </NavLink>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2 bg-white rounded-full shadow hover:bg-gray-100 transition z-[9999]"
          >
            <Menu size={24} className="text-[#3D2B1F]" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
