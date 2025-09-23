import CustomButton from "../../ui/CustomButton";

const Hero = () => {
  return (
    <section className="relative min-h-180 md:min-h-svh w-full flex flex-col items-center justify-between px-4 sm:px-6">
      {/* Text Content */}
      <div className="mt-30 sm:mt-24 lg:mt-25 text-center">
        <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-stone-800 capitalize leading-snug lg:leading-tight ">
          Pure taste timeless nutrition
        </h1>
        <p className="text-md sm:text-xl lg:text-3xl text-stone-600 mt-0 lg:mt-2 max-w-md sm:max-w-2xl lg:max-w-3xl mx-auto">
          Premium Organic Cereals, Granolas & Nuts
        </p>
      </div>

      {/* Background Image */}
      <img
        src="/images/hero/HeroBanner.png"
        alt="Bella Exotica organic products including oats, muesli, granola, cereals, and almonds"
        className="absolute inset-0 z-[-1] md:h-full md:w-full object-cover w-full h-full object cover select-none pointer-events-none"
      />

      {/* CTA Button */}
      <CustomButton text={"EXPLORE COLLECTION"} margin={"mb-5"} />
    </section>
  );
};

export default Hero;
