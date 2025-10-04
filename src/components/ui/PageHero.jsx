const PageHero = ({ image, text }) => {
  return (
    <section className="relative w-full h-auto mx-auto rounded-3xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={image}
          alt={`${text} Banner`}
          className="w-full h-full object-cover object-center select-none"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative flex flex-col justify-end h-[250px] sm:h-[300px] md:h-[400px] p-4 sm:p-6 md:p-8 text-white">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-snug sm:leading-snug md:leading-tight">
            {text}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
