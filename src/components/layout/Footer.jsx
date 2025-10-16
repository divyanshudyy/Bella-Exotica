import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Facebook, Instagram, Twitter, ChevronUp } from "lucide-react";

// Reusable Link component for consistent styling and hover effects
const Link = ({ to, children }) => {
  const linkHoverEffect =
    "relative hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-full after:bg-white after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out";
  return (
    <RouterLink to={to} className={linkHoverEffect}>
      {children}
    </RouterLink>
  );
};

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-[#34241d] text-zinc-300 mx-5 rounded-t-2xl"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="max-w-7xl mx-auto py-24">
        <div className="flex flex-col lg:flex-row justify-around gap-20 text-center lg:text-left">
          {/* Logo and Social */}
          <div className="space-y-8 flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-bold text-white">Bella Exotica</h3>
            <p className="text-sm max-w-xs">
              Explore Bella Exotica for premium organic meals and snacks,
              thoughtfully prepared and delivered with a commitment to taste,
              health, and environmental responsibility.
            </p>
            <div className="flex space-x-4">
              <RouterLink
                to="/facebook"
                className="text-zinc-400 hover:text-white transition-colors duration-300"
              >
                <Facebook className="h-6 w-6" />
              </RouterLink>
              <RouterLink
                to="/twitter"
                className="text-zinc-400 hover:text-white transition-colors duration-300"
              >
                <Twitter className="h-6 w-6" />
              </RouterLink>
              <RouterLink
                to="/instagram"
                className="text-zinc-400 hover:text-white transition-colors duration-300"
              >
                <Instagram className="h-6 w-6" />
              </RouterLink>
            </div>
          </div>

          {/* Links */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16 text-sm">
              <div>
                <h4 className="font-semibold text-white mb-4 uppercase text-base">
                  Our Service
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link to="/technology">Process</Link>
                  </li>

                  <li>
                    <Link to="/account">My Account</Link>
                  </li>
                  <li>
                    <Link to="/products">Products</Link>
                  </li>
                  <li>
                    <Link to="/checkout">Payment</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4 uppercase text-base">
                  Learn
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link to="/">Reviews</Link>
                  </li>
                  <li>
                    <Link to="/about">Location</Link>
                  </li>
                  <li>
                    <Link to="/b2b">Exports</Link>
                  </li>
                  <li>
                    <Link to="/about">Ingredients</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4 uppercase text-base">
                  Our Story
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link to="/b2b">Partners</Link>
                  </li>
                  <li>
                    <Link to="/">Purpose</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="font-semibold text-white mb-4 uppercase text-base">
              Contact Us
            </h4>
            <RouterLink to="/contact">
              <button className="bg-white text-zinc-900 font-semibold py-2 px-4 rounded-lg hover:bg-zinc-200 transition-colors duration-300 w-full max-w-xs md:w-auto">
                Get in touch
              </button>
            </RouterLink>
          </div>
        </div>
      </div>

      {/* Bottom Band */}
      <div className="bg-zinc-900 font-serif">
        <div className="max-w-7xl mx-auto py-4 px-10">
          <div className="flex flex-col md:flex-row justify-between items-center text-center text-stone-300 text-sm space-y-2 md:space-y-0">
            <div className="flex space-x-6">
              <Link to="/terms">Terms of Service</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
            <div>
              <Link to="/">www.bellaexotica.com</Link>
            </div>
            <div>
              <p>&copy; 2025 Bella Exotica</p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-7 bg-white text-[#3D2B1F] p-3 rounded-full shadow-md  hover:bg-[#3D2B1F] hover:text-white transition-all duration-300 ease-in-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Go to top"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
