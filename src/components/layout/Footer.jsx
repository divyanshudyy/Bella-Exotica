import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Facebook, Instagram, Twitter, ChevronUp } from "lucide-react";
import { FOOTER } from "../../data/globalConstants";

const SOCIAL_LINKS = [
  { icon: Facebook, path: "/facebook" },
  { icon: Twitter, path: "/twitter" },
  { icon: Instagram, path: "/instagram" },
];

// --- Reusable Link Component ---
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

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer
      style={{ boxShadow: "0 -5px 10px -4px rgba(0,0,0,0.4)" }}
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
            <h3 className="text-2xl font-bold text-white">{FOOTER.logoText}</h3>
            <p className="text-sm max-w-xs">{FOOTER.description}</p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map(({ icon: Icon, path }) => (
                <RouterLink
                  key={path}
                  to={path}
                  className="text-zinc-400 hover:text-white transition-colors duration-300"
                >
                  <Icon className="h-6 w-6" />
                </RouterLink>
              ))}
            </div>
          </div>

          {/* Sections Links */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16 text-sm">
              {FOOTER.sections.map((section) => (
                <div key={section.heading}>
                  <h4 className="font-semibold text-white mb-4 uppercase text-base">
                    {section.heading}
                  </h4>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link to={link.path}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Button */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="font-semibold text-white mb-4 uppercase text-base">
              Contact Us
            </h4>
            <RouterLink to="/contact">
              <button className="bg-white text-zinc-900 font-semibold py-2 px-4 rounded-lg hover:bg-zinc-200 transition-colors duration-300 w-full max-w-xs md:w-auto">
                {FOOTER.contactButtonText}
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
              {FOOTER.bottomLinks.slice(0, 2).map((link) => (
                <Link key={link.name} to={link.path}>
                  {link.name}
                </Link>
              ))}
            </div>
            <div>
              <Link to={FOOTER.bottomLinks[2].path}>
                {FOOTER.bottomLinks[2].name}
              </Link>
            </div>
            <div>
              <p>{FOOTER.copyright}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed z-100 bottom-6 right-7 bg-white text-[#3D2B1F] p-3 rounded-full shadow-md hover:bg-[#3D2B1F] hover:text-white transition-all duration-300 ease-in-out ${
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
