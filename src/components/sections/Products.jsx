"use client";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SplitText from "../ui/splitText";
import "swiper/css";
import { products } from "../../data/content";

import { A11y, Autoplay } from "swiper/modules";

export default function Products() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center">
      <SplitText
        text="Our Products"
        className="text-8xl font-extrabold text-center font-boska text-[#3D2B1F] "
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />

      <div className="w-full px-10 h-full">
        <Swiper
          modules={[A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="w-full h-full flex items-center"
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              className="!flex justify-center items-end !h-full !pb-40" // use ! to override swiper css
            >
              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="relative h-[250px] w-[350px] flex flex-col items-center justify-center rounded-md border border-[#3D2B1F]/20 bg-[#3D2B1F]/10 origin-top"
                variants={{
                  rest: {
                    scale: 1,
                    transition: { duration: 0.4, ease: "easeOut" },
                  },
                  hover: {
                    scale: 1.1,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                <motion.img
                  src={product.image}
                  className="absolute bottom-10 h-100 origin-bottom"
                  variants={{
                    rest: {
                      scale: 1,
                      transition: { duration: 0.4, ease: "easeOut" },
                    },
                    hover: {
                      scale: 1.15,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                />
                <motion.div
                  variants={{
                    rest: {
                      opacity: 0,
                      y: 30,
                      transition: { duration: 0.4, ease: "easeOut" },
                    },
                    hover: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                  className="absolute bottom-5 text-[#3D2B1F] text-lg font-semibold"
                >
                  {product.name}
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
