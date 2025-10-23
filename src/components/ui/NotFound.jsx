import { motion } from "motion/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-800">
      {/* Animated big 404 */}
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-[8rem] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#3D2B1F] via-[#684627] to-[#8B5E34]
"
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className="mt-2 text-lg md:text-xl text-gray-600"
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        className="mt-6"
      >
        <Link to="/" className="">
          <div className="mb-8">
            <button className="px-8 py-3 sm:px-10 sm:py-4 border rounded-4xl border-stone-800 text-stone-800 tracking-widest text-sm font-semibold hover:bg-stone-800 hover:text-white transition-all duration-300">
              Return Home
            </button>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
