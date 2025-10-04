import React, { useState, useEffect, useRef } from "react";

const storyItemsData = [
  {
    title: "ADVANCED TECHNOLOGY",
    description:
      "We use advanced freeze-drying and dehydration systems that gently remove moisture while preserving nutrients, flavor, and aroma — keeping food as close to fresh as possible.\n\nOur precision technology works under low temperatures and vacuum conditions, protecting vitamins, antioxidants, and bioactive compounds often lost in conventional methods. With real-time monitoring, automated quality checks, and sustainable energy practices, we deliver lighter, crisper, nutrient-rich products that last longer while retaining natural taste, color, and texture.",
    imageUrl: "/images/about/Morning Vibe_2.png",
    imageAlt: "Advanced freeze-drying technology system",
  },
  {
    title: "NUTRIENT RETENTION",
    description:
      "Our process locks in vitamins, minerals, and antioxidants, retaining up to 95% of nutritional value and offering food as wholesome as its natural form.\n\nBy combining low temperatures with vacuum dehydration, we gently remove moisture while safeguarding Vitamin C, polyphenols, and natural enzymes. This ensures food retains its health benefits, offering consumers a nutrient-dense and wholesome experience as close to fresh as possible.",
    imageUrl: "/images/about/Almonds.png",
    imageAlt: "Fresh fruits preserved through freeze-drying",
  },
  {
    title: "GLOBAL STANDARDS",
    description:
      "We comply with FSSAI, ISO, HACCP, and Codex standards, ensuring safe, consistent, and export-ready products trusted worldwide.\n\nEvery step — from sourcing to packaging — complies with FSSAI, ISO 22000, HACCP, and Codex Alimentarius guidelines. With certified machinery, hygienic handling, and strict quality checks, we guarantee trust, transparency, and global competitiveness for our products.",
    imageUrl: "/images/about/Dark_2.png",
    imageAlt: "Global food safety and quality certifications",
  },
];

const AboutProcess = () => {
  const [isIntersecting, setIntersecting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-5xl sm:text-6xl font-medium text-brand-dark-brown">
            Our Process &amp; Value
          </h2>
        </div>
        <div className="space-y-40">
          {storyItemsData.map((item, index) => (
            <div
              key={item.title + index}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 transition-all duration-1000 ease-out ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } ${
                isIntersecting
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className="w-[400px] h-[400px] object-cover rounded-full shadow-xl"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left mx-10">
                <h3 className="text-xl font-medium tracking-[0.2em] text-brand-dark-brown uppercase mb-4">
                  {item.title}
                </h3>

                {item.description.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-gray-500 font-light text-base leading-relaxed mb-4"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;
