const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-between">
      <div className="h-auto w-auto mt-30">
        <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-800 text-center capitalize">
          Pure taste timeless nutrition
        </h1>
        <p className="text-lg sm:text-xl lg:text-3xl text-stone-600 mt-4 max-w-3xl mx-auto text-center">
          Premium Organic Cereals, Granolas & Nuts
        </p>
      </div>

      <img
        src="/images/hero/HeroBanner.png"
        alt="A collection of Bella Exotica organic products including oats, muesli, granola, cereals, and almonds"
        className="absolute z-[-1] bottom-0 top-0 h-full w-full object-cover select-none pointer-events-none"
      />

      <div className="mb-8">
        <button className="px-8 py-3 sm:px-10 sm:py-4 border rounded-4xl border-stone-800 text-stone-800 tracking-widest text-sm font-semibold hover:bg-stone-800 hover:text-white transition-all duration-300">
          EXPLORE COLLECTION
        </button>
      </div>
    </section>
  );
};

export default Hero;
