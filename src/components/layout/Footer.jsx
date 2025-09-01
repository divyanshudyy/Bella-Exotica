import { motion, useScroll, useTransform } from "motion/react";
import FillButton from "../ui/FillButton";

export default function Footer({ footerRef }) {
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start center", "end center"],
  });

  const fontWeight = useTransform(scrollYProgress, [0.15, 0.5], [100, 900]);

  const link = (label, href = "#", extraClass = "") => (
    <a
      href={href}
      className={`group relative inline-block text-[#FAF3E0] no-underline ${extraClass}`}
    >
      {label}
      <span className="pointer-events-none absolute left-0 bottom-[-2px] h-[2px] w-0 bg-current transition-[width] duration-700 ease-out group-hover:w-full"></span>
    </a>
  );

  return (
    <footer
      ref={footerRef}
      className="text-[#FAF3E0] bg-[#3D2B1F] pb-5 py-12 px-8 z-10 relative h-screen flex flex-col gap-10 overflow-hidden"
    >
      {/* Top section */}
      <div className="grid md:grid-cols-2 gap-12 max-w-full mx-20 ">
        <div className="flex gap-20">
          <div className="flex flex-col space-y-3">
            {link("Home")}
            {link("About")}
            {link("Process")}
            {link("Contact")}
            {link("Products")}
          </div>

          <div className="flex flex-col space-y-3">
            {link("Instagram")}
            {link("LinkedIn")}
            {link("Facebook")}
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <p className="max-w-md">
            Let’s collaborate and build something meaningful together. I’m open
            to exciting projects that merge tech with creativity, design with
            function, and ideas with execution. Whether it’s a full-stack web
            app, an AI-powered solution, or a bold digital experiment — let’s
            turn vision into reality.
          </p>
          <FillButton
            size="lg"
            baseColor="#F5E6CA"
            fillColor="#1A1A1A"
            hoverTextColor="#F6E6CA"
          >
            Get in touch
          </FillButton>
        </div>
      </div>

      {/* Bottom Large Text */}
      <div className="h-2/3 text-center flex flex-col items-center justify-end ">
        <motion.h1
          style={{ fontWeight }}
          className="text-5xl md:text-[25rem] font-boska"
        >
          Exotica
        </motion.h1>

        {/* 🔥 Bottom links with same hover effect */}
        <div className="flex justify-between w-full cursor-pointer text-sm opacity-80">
          <div className="flex gap-4">
            {link("Terms of Service")}
            {link("Privacy Policy")}
          </div>
          {link("www.bellaexotica.com")}
          {link("© 2025 Bella Exotica")}
        </div>
      </div>
    </footer>
  );
}
