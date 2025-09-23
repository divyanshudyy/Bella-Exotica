import { useState, useEffect } from "react";
import { Facebook, Instagram, Twitter, ChevronUp } from "lucide-react";

// Reusable NavLink component for consistent styling and hover effects
const NavLink = ({ href, children }) => {
  const linkHoverEffect =
    "relative hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-full after:bg-white after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out";
  return (
    <a href={href} className={linkHoverEffect}>
      {children}
    </a>
  );
};

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
              doloribus delectus fugiat, eius adipisci ipsam? Mollitia amet
              exercitationem iusto adipisci rem soluta, suscipit vero quo.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-zinc-400 hover:text-white transition-colors duration-300"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-white transition-colors duration-300"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-white transition-colors duration-300"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16 text-sm">
              <div>
                <h4 className="font-semibold text-white mb-4 uppercase text-base">
                  Platform
                </h4>
                <ul className="space-y-4">
                  <li>
                    <NavLink href="#">How it Works</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Checkout</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Fraud Protection</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Payments</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Accounts</NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4 uppercase text-base">
                  Learn
                </h4>
                <ul className="space-y-4">
                  <li>
                    <NavLink href="#">Resources</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Blog</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">FAQs</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">ThinkShop</NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4 uppercase text-base">
                  About
                </h4>
                <ul className="space-y-4">
                  <li>
                    <NavLink href="#">Careers</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Team</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Partners</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Contact Us</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">News & Press</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="font-semibold text-white mb-4 uppercase text-base">
              Contact US
            </h4>
            <button className="bg-white text-zinc-900 font-semibold py-2 px-4 rounded-lg hover:bg-zinc-200 transition-colors duration-300 w-full max-w-xs md:w-auto">
              Get in touch
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Band */}
      <div className="bg-zinc-900 font-serif">
        <div className="max-w-7xl mx-auto py-4 px-10">
          <div className="flex flex-col md:flex-row justify-between items-center text-center text-stone-300 text-sm space-y-2 md:space-y-0">
            <div className="flex space-x-6">
              <NavLink href="#">Terms of Service</NavLink>
              <NavLink href="#">Privacy Policy</NavLink>
            </div>
            <div>
              <NavLink href="#">www.bellaexotica.com</NavLink>
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
        className={`fixed bottom-6 right-7 bg-white text-zinc-700 p-3 rounded-full shadow-lg hover:bg-zinc-800 hover:text-zinc-100 transition-all duration-300 ease-in-out ${
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

// import { motion, useScroll, useTransform } from "motion/react";
// import FillButton from "../ui/FillButton";

// export default function Footer({ footerRef }) {
//   const { scrollYProgress } = useScroll({
//     target: footerRef,
//     offset: ["start center", "end center"],
//   });

//   const fontWeight = useTransform(scrollYProgress, [0.15, 0.5], [100, 900]);

//   const link = (label, href = "#", extraClass = "") => (
//     <a
//       href={href}
//       className={`group relative inline-block text-[#FAF3E0] no-underline ${extraClass}`}
//     >
//       {label}
//       <span className="pointer-events-none absolute left-0 bottom-[-2px] h-[2px] w-0 bg-current transition-[width] duration-700 ease-out group-hover:w-full"></span>
//     </a>
//   );

//   return (
//     <footer
//       ref={footerRef}
//       className="text-[#FAF3E0] bg-[#3D2B1F] pb-5 py-12 px-8 z-10 relative h-screen flex flex-col gap-10 overflow-hidden"
//     >
//       {/* Top section */}
//       <div className="grid md:grid-cols-2 gap-12 max-w-full mx-20 ">
//         <div className="flex gap-20">
//           <div className="flex flex-col space-y-3">
//             {link("Home")}
//             {link("About")}
//             {link("Process")}
//             {link("Contact")}
//             {link("Products")}
//           </div>

//           <div className="flex flex-col space-y-3">
//             {link("Instagram")}
//             {link("LinkedIn")}
//             {link("Facebook")}
//           </div>
//         </div>

//         <div className="flex flex-col gap-10">
//           <p className="max-w-md">
//             Let’s collaborate and build something meaningful together. I’m open
//             to exciting projects that merge tech with creativity, design with
//             function, and ideas with execution. Whether it’s a full-stack web
//             app, an AI-powered solution, or a bold digital experiment — let’s
//             turn vision into reality.
//           </p>
//           <FillButton
//             size="lg"
//             baseColor="#F5E6CA"
//             fillColor="#1A1A1A"
//             hoverTextColor="#F6E6CA"
//           >
//             Get in touch
//           </FillButton>
//         </div>
//       </div>

//       {/* Bottom Large Text */}
//       <div className="h-2/3 text-center flex flex-col items-center justify-end ">
//         <motion.h1
//           style={{ fontWeight }}
//           className="text-5xl md:text-[25rem] font-boska"
//         >
//           Exotica
//         </motion.h1>

//         {/* 🔥 Bottom links with same hover effect */}
//         <div className="flex justify-between w-full cursor-pointer text-sm opacity-80">
//           <div className="flex gap-4">
//             {link("Terms of Service")}
//             {link("Privacy Policy")}
//           </div>
//           {link("www.bellaexotica.com")}
//           {link("© 2025 Bella Exotica")}
//         </div>
//       </div>
//     </footer>
//   );
// }
