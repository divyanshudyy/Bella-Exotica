import CountUp from "../../ui/home/CountUp";
import CustomButton from "../../ui/CustomButton";
import { Link } from "react-router-dom";
import { COUNTER_SECTION } from "../../../data/homeData";

const Counter = () => {
  return (
    <section className="px-8 sm:px-8 py-8 md:py-16">
      <div className="mx-auto max-w-6xl text-center bg-white shadow-lg rounded-3xl md:rounded-5xl pt-10 md:pt-15 px-5 sm:px-20">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#3D2B1F] font-oakes-grostek font-bold capitalize">
          {COUNTER_SECTION.heading}
        </h1>

        {/* Description */}
        <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-600 max-w-xl sm:max-w-xl md:max-w-2xl mx-auto">
          {COUNTER_SECTION.paragraph}
        </p>

        {/* Buttons */}
        <div className="mt-6 sm:mt-7 flex justify-center items-center gap-4 sm:gap-10">
          {COUNTER_SECTION.buttons.map((btn, idx) => (
            <Link key={idx} to={btn.link}>
              <CustomButton
                text={btn.text}
                margin={btn.margin}
                bgColor={btn.bgColor}
                textColor={btn.textColor}
              />
            </Link>
          ))}
        </div>

        {/* Stats Box */}
        <div className="mt-6 sm:mt-8 md:mt-0 p-6 sm:p-8 md:p-12 max-w-full md:max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center gap-0 sm:gap-8 md:gap-20 text-center">
            {COUNTER_SECTION.stats.map((stat, idx) => (
              <CountUp
                key={idx}
                endValue={stat.endValue}
                label={stat.label}
                suffix={stat.suffix}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
