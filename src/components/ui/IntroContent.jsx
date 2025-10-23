const IntroContent = ({ title, subtitle, description }) => {
  return (
    <section className=" py-0 sm:py-7">
      <div className="max-w-6xl mx-auto px-7 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold font-oakes-grotesk  text-[#3D2B1F]">
            {title}
          </h2>
          <p className="mt-3 text-md md:text-lg text-[#3D2B1F] font-oakes-grotesk">
            {subtitle}
          </p>
        </div>
        <div className="text-gray-600 font-normal text-md space-y-5 text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </section>
  );
};

export default IntroContent;
