import { motion } from "motion/react";
import { MAINTENANCE_TEXTS } from "../../data/globalConstants";

// Premium Vector Illustrative Components for Page Border Spread
const CashewSVG = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M25,57 C29,54 48,51 55,61 C62,71 50,85 40,78 C30,71 20,62 25,57 Z" fill="#F4ECD8" stroke="#3D2B1F" strokeWidth="2.5" />
    <path d="M30,62 C34,60 44,59 47,65" stroke="#3D2B1F" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />
  </svg>
);

const AlmondSVG = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M25,35 C17,50 20,70 35,80 C50,90 65,75 55,50 C45,25 35,20 25,35 Z" fill="#A0522D" stroke="#3D2B1F" strokeWidth="2.5" />
    <path d="M32,35 C27,45 28,60 38,70" stroke="#3D2B1F" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.3" />
    <path d="M42,42 C38,50 39,62 45,68" stroke="#3D2B1F" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.3" />
  </svg>
);

const CranberrySVG = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="35" fill="#C0392B" stroke="#3D2B1F" strokeWidth="2.5" />
    <circle cx="40" cy="40" r="10" fill="#E74C3C" fillOpacity="0.6" />
    <path d="M48,15 Q50,18 52,15" stroke="#3D2B1F" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const WalnutSVG = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M50,15 C30,15 20,30 20,50 C20,70 30,85 50,85 C70,85 80,70 80,50 C80,30 70,15 50,15 Z" fill="#D2B48C" stroke="#3D2B1F" strokeWidth="2.5" />
    <path d="M50,15 L50,85" stroke="#3D2B1F" strokeWidth="2" strokeDasharray="3 3" />
    <path d="M35,30 C30,35 32,45 42,45 C48,45 45,35 35,30 Z" fill="#FFFDFB" fillOpacity="0.2" stroke="#3D2B1F" strokeWidth="1.5" />
    <path d="M65,30 C70,35 68,45 58,45 C52,45 55,35 65,30 Z" fill="#FFFDFB" fillOpacity="0.2" stroke="#3D2B1F" strokeWidth="1.5" />
    <path d="M35,70 C30,65 32,55 42,55 C48,55 45,65 35,70 Z" fill="#FFFDFB" fillOpacity="0.2" stroke="#3D2B1F" strokeWidth="1.5" />
    <path d="M65,70 C70,65 68,55 58,55 C52,55 55,65 65,70 Z" fill="#FFFDFB" fillOpacity="0.2" stroke="#3D2B1F" strokeWidth="1.5" />
  </svg>
);

const ApricotSVG = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="32" fill="#FFA500" stroke="#3D2B1F" strokeWidth="2.5" />
    <circle cx="50" cy="50" r="28" fill="#FF8C00" fillOpacity="0.5" />
    <path d="M32,50 C42,48 58,48 68,50" stroke="#3D2B1F" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />
  </svg>
);

const MaintenanceOverlay = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between items-center bg-[#fff9f5] px-4 sm:px-6 py-8 sm:py-12 gap-8 overflow-hidden font-hanken-grotesk">
      
      {/* Premium Ambient Background Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[40vw] h-[40vw] max-w-[500px] rounded-full bg-[#C5A880]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-[#3D2B1F]/8 blur-[160px] pointer-events-none" />

      {/* Scattered Page Border Dry Fruits Overlay (z-0 back-layer with highly chaotic, responsive, and uneven depth layout) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        
        {/* --- Left Side Scattered Suspension --- */}
        {/* Top-Left/Inward: Medium sharp Apricot */}
        <motion.div
          animate={{
            y: [0, -10, 10, 0],
            rotate: [75, 80, 70, 75]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[12%] sm:top-[14%] left-[4%] sm:left-[16%] md:left-[22%] w-10 sm:w-20 h-10 sm:h-20 opacity-60 sm:opacity-75 blur-[0.5px]"
        >
          <ApricotSVG className="w-full h-full" />
        </motion.div>

        {/* Mid-Left/Edge: Large blurred Almond (partially cut-off) */}
        <motion.div
          animate={{
            y: [0, 12, -12, 0],
            rotate: [-45, -40, -50, -45]
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[44%] sm:top-[46%] left-[-10%] sm:left-[-6%] md:left-[-2%] w-16 sm:w-32 h-16 sm:h-32 blur-[2px] opacity-50 sm:opacity-60"
        >
          <AlmondSVG className="w-full h-full" />
        </motion.div>

        {/* Lower-Left/Inward: Small sharp Cranberry */}
        <motion.div
          animate={{
            y: [0, -6, 6, 0],
            rotate: [12, 16, 8, 12]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[70%] left-[4%] sm:left-[10%] md:left-[18%] w-8 sm:w-14 h-8 sm:h-14 opacity-70 sm:opacity-85"
        >
          <CranberrySVG className="w-full h-full" />
        </motion.div>

        {/* Bottom-Left/Edge: Medium Cashew */}
        <motion.div
          animate={{
            y: [0, 8, -8, 0],
            rotate: [135, 140, 130, 135]
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[4%] left-[2%] sm:left-[4%] md:left-[8%] w-14 sm:w-24 h-14 sm:h-24 opacity-60 sm:opacity-80 blur-[0.5px]"
        >
          <CashewSVG className="w-full h-full" />
        </motion.div>


        {/* --- Right Side Scattered Suspension --- */}
        {/* Top-Right/Inward: Large blurred Walnut */}
        <motion.div
          animate={{
            y: [0, 12, -12, 0],
            rotate: [55, 60, 50, 55]
          }}
          transition={{
            duration: 23,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[6%] right-[6%] sm:right-[16%] md:right-[26%] w-16 sm:w-28 h-16 sm:h-28 blur-[1.5px] opacity-55 sm:opacity-65"
        >
          <WalnutSVG className="w-full h-full" />
        </motion.div>

        {/* Upper-Right/Inward: Small Cranberry */}
        <motion.div
          animate={{
            y: [0, -8, 8, 0],
            rotate: [-30, -25, -35, -30]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[28%] sm:top-[32%] right-[4%] sm:right-[10%] md:right-[16%] w-8 sm:w-16 h-8 sm:h-16 opacity-70 sm:opacity-80"
        >
          <CranberrySVG className="w-full h-full" />
        </motion.div>

        {/* Mid-Right/Edge: Huge heavily-blurred Almond (foreground camera depth) */}
        <motion.div
          animate={{
            y: [0, 14, -14, 0],
            rotate: [25, 29, 21, 25]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[28%] sm:bottom-[30%] right-[-10%] sm:right-[-8%] md:right-[-3%] w-20 sm:w-36 h-20 sm:h-36 opacity-55 sm:opacity-70 blur-[3px]"
        >
          <AlmondSVG className="w-full h-full" />
        </motion.div>

        {/* Lower-Right/Inward: Medium sharp Cashew */}
        <motion.div
          animate={{
            y: [0, -10, 10, 0],
            rotate: [-85, -80, -90, -85]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[10%] right-[4%] sm:right-[12%] md:right-[22%] w-12 sm:w-22 h-12 sm:h-22 opacity-65 sm:opacity-75"
        >
          <CashewSVG className="w-full h-full" />
        </motion.div>

      </div>

      {/* Brand Header */}
      <header className="w-full max-w-7xl mx-auto flex justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-[1.8rem] text-[#3D2B1F] font-playfair font-semibold tracking-wider"
        >
          {MAINTENANCE_TEXTS.logoText}
        </motion.div>
      </header>

      {/* Main Card Context */}
      <main className="w-full max-w-2xl mx-auto flex flex-col items-center text-center z-10 py-4 sm:py-6 my-auto">
        
        {/* Animated Brand Illustration (Bowl of Wholesome Dry Fruits & Muesli) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-6 sm:mb-8 flex justify-center items-center w-[130px] sm:w-[160px] h-[130px] sm:h-[160px]"
        >
          {/* Custom SVG top-down bowl of dry fruits illustration */}
          <svg
            width="100%"
            height="100%"
            viewBox="-12 -12 124 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible text-[#3D2B1F]"
          >
            {/* Rotating Bowl Group (Spinning/Loading animation containing entire bowl + muesli) */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{
                duration: 25, // slow, gentle loader rotation
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ transformOrigin: "50px 50px" }}
              originX={0.5}
              originY={0.5}
            >
              {/* Outer shadow of the bowl */}
              <circle cx="50" cy="50" r="38" fill="#3D2B1F" fillOpacity="0.04" />
              
              {/* White Ceramic Bowl Rim */}
              <circle cx="50" cy="50" r="37" fill="#FFFFFF" stroke="#3D2B1F" strokeWidth="2" />
              {/* Inner Rim Line */}
              <circle cx="50" cy="50" r="34" fill="#FFFBF7" stroke="#3D2B1F" strokeWidth="1" />

              {/* --- Oats / Milk base layer --- */}
              <circle cx="50" cy="50" r="33.5" fill="#FFFDFB" />
              
              {/* Oat flakes texture */}
              <rect x="30" y="32" width="6" height="3" rx="1.5" transform="rotate(25, 30, 32)" fill="#E3C397" fillOpacity="0.8" />
              <rect x="52" y="26" width="5" height="2.5" rx="1" transform="rotate(-15, 52, 26)" fill="#D4B27C" fillOpacity="0.8" />
              <rect x="38" y="44" width="6" height="3" rx="1.5" transform="rotate(45, 38, 44)" fill="#E3C397" fillOpacity="0.8" />
              <rect x="26" y="52" width="5" height="2.5" rx="1" transform="rotate(-40, 26, 52)" fill="#D4B27C" fillOpacity="0.8" />
              <rect x="62" y="48" width="6" height="3" rx="1.5" transform="rotate(10, 62, 48)" fill="#E3C397" fillOpacity="0.8" />
              <rect x="56" y="34" width="6" height="3" rx="1.5" transform="rotate(60, 56, 34)" fill="#D4B27C" fillOpacity="0.8" />
              <rect x="48" y="66" width="6" height="3" rx="1.5" transform="rotate(-20, 48, 66)" fill="#E3C397" fillOpacity="0.8" />
              <rect x="36" y="66" width="5" height="2.5" rx="1" transform="rotate(35, 36, 66)" fill="#D4B27C" fillOpacity="0.8" />
              <rect x="68" y="60" width="5" height="2.5" rx="1" transform="rotate(-10, 68, 60)" fill="#E3C397" fillOpacity="0.8" />

              {/* Pumpkin Seeds (Green seeds) */}
              <ellipse cx="46" cy="38" rx="1.8" ry="3" transform="rotate(35, 46, 38)" fill="#6B8E23" stroke="#3D2B1F" strokeWidth="0.6" />
              <ellipse cx="60" cy="50" rx="1.8" ry="3" transform="rotate(-45, 60, 50)" fill="#6B8E23" stroke="#3D2B1F" strokeWidth="0.6" />
              <ellipse cx="34" cy="48" rx="1.5" ry="2.8" transform="rotate(15, 34, 48)" fill="#6B8E23" stroke="#3D2B1F" strokeWidth="0.6" />
              <ellipse cx="50" cy="62" rx="1.8" ry="3" transform="rotate(70, 50, 62)" fill="#6B8E23" stroke="#3D2B1F" strokeWidth="0.6" />

              {/* Raisins / Wrinkled dark fruits */}
              <path d="M50,47 Q49,45 47,46 Q45,47 47,49 Q49,50 50,47" fill="#3A283B" stroke="#3D2B1F" strokeWidth="0.6" />
              <path d="M30,40 Q29,38 27,39 Q25,40 27,42 Q29,43 30,40" fill="#3A283B" stroke="#3D2B1F" strokeWidth="0.6" />
              <path d="M66,42 Q65,40 63,41 Q61,42 63,44 Q65,45 66,42" fill="#3A283B" stroke="#3D2B1F" strokeWidth="0.6" />

              {/* Apricots (Orange dried fruits) */}
              <circle cx="43" cy="30" r="3.2" fill="#FFA500" stroke="#3D2B1F" strokeWidth="0.8" />
              <circle cx="56" cy="56" r="3" fill="#FFA500" stroke="#3D2B1F" strokeWidth="0.8" />

              {/* Cranberries / Berries (Crimson red circles) */}
              <circle cx="37" cy="44" r="2.5" fill="#C0392B" stroke="#3D2B1F" strokeWidth="0.8" />
              <circle cx="53" cy="44" r="2.8" fill="#C0392B" stroke="#3D2B1F" strokeWidth="0.8" />
              <circle cx="43" cy="58" r="2.4" fill="#C0392B" stroke="#3D2B1F" strokeWidth="0.8" />

              {/* Walnuts */}
              <path d="M58,35 C56,38 58,41 61,40 C63,39 62,37 64,36 C66,34 63,32 59,33 Z" fill="#D2B48C" stroke="#3D2B1F" strokeWidth="0.8" />
              <path d="M36,54 C34,57 36,60 39,59 C41,58 40,56 42,55 C44,53 41,51 38,52 Z" fill="#D2B48C" stroke="#3D2B1F" strokeWidth="0.8" />

              {/* Almonds */}
              <path d="M29,27 C26,31 26,36 30,38 C34,40 36,35 33,30 Z" fill="#A0522D" stroke="#3D2B1F" strokeWidth="0.8" />
              <path d="M61,65 C59,70 60,74 64,74 C68,74 68,68 65,64 Z" fill="#A0522D" stroke="#3D2B1F" strokeWidth="0.8" />
              <path d="M22,46 C19,50 20,54 23,55 C26,56 27,51 24,47 Z" fill="#A0522D" stroke="#3D2B1F" strokeWidth="0.8" />

              {/* Cashews (Crescent-shaped pale cream nuts) */}
              <path d="M43,21 C47,19 53,21 54,25 C55,29 50,31 47,29 C45,27 42,28 41,25 Z" fill="#F4ECD8" stroke="#3D2B1F" strokeWidth="0.8" />
              <path d="M25,57 C29,54 35,57 35,61 C35,65 30,67 28,64 C26,62 23,63 22,60 Z" fill="#F4ECD8" stroke="#3D2B1F" strokeWidth="0.8" />
              <path d="M39,73 C43,71 48,73 49,76 C50,80 46,82 43,80 C41,78 39,78 37,76 Z" fill="#F4ECD8" stroke="#3D2B1F" strokeWidth="0.8" />
            </motion.g>

            {/* Wooden Spoon & Spoon Ingredients (Mixing/Stirring motion group) */}
            <motion.g
              animate={{
                x: [0, 4, 1, -3, -4, -1, 0],
                y: [0, -3, -5, -2, 1, 3, 0],
                rotate: [0, 4, 7, 3, -3, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ originX: "92px", originY: "8px" }}
            >
              {/* Spoon Handle - Outer border (Broader and Long) */}
              <path d="M92,8 L56,44" stroke="#3D2B1F" strokeWidth="3.8" strokeLinecap="round" />
              {/* Spoon Handle - Inner wood fill (Broader and Long) */}
              <path d="M92,8 L56,44" stroke="#C59B73" strokeWidth="1.8" strokeLinecap="round" />
              
              {/* Spoon Bowl - Scoop head (Smaller size, thin border) */}
              <path
                d="M56,44 C53,41 46,45 43,50 C40,55 43,61 47,61 C51,61 59,54 56,44 Z"
                fill="#C59B73"
                stroke="#3D2B1F"
                strokeWidth="0.8"
                strokeLinejoin="round"
              />
              
              {/* Wholesome dry fruits loaded on the smaller spoon scoop */}
              <rect x="46" y="52" width="3.5" height="1.8" rx="0.9" transform="rotate(30, 46, 52)" fill="#E3C397" stroke="#3D2B1F" strokeWidth="0.4" />
              <circle cx="49" cy="49" r="1.2" fill="#C0392B" stroke="#3D2B1F" strokeWidth="0.4" />
              <path d="M48,45 C47,47 48,48 49,48 C50,48 50,47 49,45 Z" fill="#A0522D" stroke="#3D2B1F" strokeWidth="0.4" />
              <ellipse cx="51" cy="53" rx="0.8" ry="1.4" transform="rotate(-30, 51, 53)" fill="#6B8E23" stroke="#3D2B1F" strokeWidth="0.3" />
            </motion.g>

            {/* --- Static dry fruits spread outside the bowl --- */}
            {/* Top-left: Cashew */}
            <path
              d="M8,18 C11,16 15,18 16,21 C17,24 13,25 11,24 C9,23 7,24 6,22 Z"
              fill="#F4ECD8"
              stroke="#3D2B1F"
              strokeWidth="0.8"
            />
            {/* Bottom-left: Almond */}
            <path
              d="M12,78 C10,81 10,84 13,86 C16,88 17,84 15,80 Z"
              fill="#A0522D"
              stroke="#3D2B1F"
              strokeWidth="0.8"
            />
            {/* Middle-left: Cranberry */}
            <circle
              cx="7.5"
              cy="48"
              r="2.5"
              fill="#C0392B"
              stroke="#3D2B1F"
              strokeWidth="0.8"
            />
            {/* Top-right: Raisin */}
            <path
              d="M88,28 Q87,26 85,27 Q83,28 85,30 Q87,31 88,28"
              fill="#3A283B"
              stroke="#3D2B1F"
              strokeWidth="0.8"
            />
            {/* Bottom-right: Cashew */}
            <path
              d="M86,72 C89,70 93,72 94,75 C95,78 91,79 89,78 C87,77 85,78 84,76 Z"
              fill="#F4ECD8"
              stroke="#3D2B1F"
              strokeWidth="0.8"
            />
            {/* Middle-right: Almond */}
            <path
              d="M92,48 C90,51 90,55 93,56 C96,57 97,53 95,49 Z"
              fill="#A0522D"
              stroke="#3D2B1F"
              strokeWidth="0.8"
            />
          </svg>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-6xl text-[#3D2B1F] font-playfair font-bold mb-4 tracking-tight leading-tight px-2"
        >
          {MAINTENANCE_TEXTS.title}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-stone-600 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed px-4"
        >
          {MAINTENANCE_TEXTS.subtitle}
        </motion.p>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-md mx-auto flex flex-col items-center gap-4 z-10 pt-6">
        {/* Static Social Media Icons (No Links) */}
        <div className="flex items-center gap-6 mb-2">
          {/* Instagram */}
          <div className="text-stone-400 hover:text-[#3D2B1F] transition-colors cursor-default" title="Instagram">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </div>
          {/* Facebook */}
          <div className="text-stone-400 hover:text-[#3D2B1F] transition-colors cursor-default" title="Facebook">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </div>
          {/* X */}
          <div className="text-stone-400 hover:text-[#3D2B1F] transition-colors cursor-default" title="X">
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </div>
        </div>
        <p className="text-stone-400 text-xs tracking-wider">
          © {new Date().getFullYear()} Bella Exotica. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default MaintenanceOverlay;
