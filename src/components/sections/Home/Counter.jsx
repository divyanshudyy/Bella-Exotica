import CountUp from "../../ui/home/CountUp";
import CustomButton from "../../ui/CustomButton";
import { Link } from "react-router-dom";

const Counter = () => {
  return (
    <section className="px-8 sm:px-8 py-8 md:py-16">
      <div className="mx-auto max-w-6xl text-center bg-white shadow-lg rounded-3xl md:rounded-full pt-10 md:pt-15 px-5 sm:px-20">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#3D2B1F] font-oakes-grostek font-bold capitalize">
          Eat. Change. Inspire.
        </h1>

        {/* Description */}
        <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-600 max-w-xl sm:max-w-xl md:max-w-2xl mx-auto">
          We exist to create delicious snacks that are better for you and the
          planet. Every pack you purchase helps us rescue good food from going
          to waste and significantly reduce plastic use.
        </p>

        {/* Buttons */}
        <div className="mt-6 sm:mt-7 flex  justify-center items-center gap-4 sm:gap-10">
          <Link to="/products">
            <CustomButton text="Our Products" margin="mb-0 hover:scale-105" />
          </Link>
          <Link to="/technology">
            <CustomButton
              text="Our Process"
              margin="mb-0"
              bgColor="bg-[#3D2B1F]"
              textColor="text-white hover:scale-105"
            />
          </Link>
        </div>

        {/* Stats Box */}
        <div className="mt-6 sm:mt-8 md:mt-0 p-6 sm:p-8 md:p-12 max-w-full md:max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-0 text-center">
            <CountUp endValue={1005} label="Products Bought" suffix="+" />
            <CountUp endValue={320} label="Kg of Plastic Reduced" suffix="+" />
            <CountUp endValue={5500} label="Lbs of Food Saved" suffix="+" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
