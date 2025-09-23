const AboutStory = () => {
  return (
    <section className=" py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-xl">
          <h2 className="text-5xl sm:text-6xl font-bold leading-tightest">
            Our Story,
            <br />
            Our Journey
          </h2>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 focus-visible:ring-gray-800 mt-10">
            Learn Our Story
          </button>
        </div>
        <div className="text-gray-500 font-light space-y-6 text-sm leading-relaxed">
          <p className="mt-6 text-lg text-gray-600 font-light">
            From humble beginnings to your bowl, discover the passion behind
            every product we create.
          </p>
          <p>
            Tose tale hāc nostrae ut noster testemór tamquam elusmod anseterit
            sed. Ficta nostrae eam eaque ornamentum tamquam unum ut, or noster
            meert, ne option eirmod. Unum est etsadipscing nonumy duo
            consetetur. Lorem ipsum dolor sit amet, sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
