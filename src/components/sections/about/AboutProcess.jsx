import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import {HERO, KEY_FEATURES } from "../../../data/aboutData";

const AboutProcess = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="bg-white pt-10 sm:pt-10 md:pt-20 lg:pt-20 pb-10 mb-10 overflow-hidden shadow-lg sm:mx-5 mx-5 md:mx-5 lg:mx-30 my-0 rounded-2xl"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-10 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold font-oakes-grotesk text-[#3D2B1F]">
          {HERO.subtitle_4}
          </h2>
        </div>

        <div className="space-y-15 sm:space-y-20 md:space-y-20">
          {KEY_FEATURES.map((item, index) => (
            <motion.div
              key={item.title + index}
              className={`flex flex-col sm:flex-col md:flex-row items-center gap-1 sm:gap-0 md:gap-0 lg:gap-0 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* --- Image --- */}
              <motion.div
                className="md:w-1/2 flex justify-center mb-10 md:mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] object-cover rounded-full shadow-xl"
                />
              </motion.div>

              {/* --- Text --- */}
              <motion.div
                className="md:w-1/2 sm:text-center md:text-left sm:mx-20 "
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-medium font-oakes-grotesk text-[#3D2B1F] mb-4 text-center md:text-left">
                  {item.title}
                </h3>

                {item.description.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-gray-500 text-md mb-4 text-center md:text-left"
                  >
                    {para}
                  </p>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;
