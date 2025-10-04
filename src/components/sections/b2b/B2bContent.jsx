const B2bContent = () => {
  return (
    <>
      {/* New B2B Collaboration Section */}
      <section className="py-10  bg-gray-50">
        <div className="max-w-3xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tightest mb-6">
            Collaboration
          </h2>
          <p className="text-gray-600 text-lg font-light leading-relaxed">
            We partner with businesses worldwide to deliver high-quality
            products and seamless services. Our B2B collaborations ensure mutual
            growth, innovation, and long-lasting relationships that benefit all
            parties.
          </p>
        </div>
      </section>

      {/* Existing Section Updated to Exports */}
      <section className="">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tightest">
              Our Story,
              <br />
              Global Exports
            </h2>
            <button className="bg-gray-800 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 focus-visible:ring-gray-800 mt-10">
              Learn More
            </button>
          </div>
          <div className="text-gray-500 font-light space-y-6 text-sm leading-relaxed">
            <p className="mt-6 text-lg text-gray-600 font-light">
              From local markets to international tables, our products have
              reached over 20+ countries, sharing the taste and quality of our
              offerings worldwide.
            </p>
            <p>
              Our export strategy focuses on maintaining product integrity,
              ensuring timely deliveries, and building trusted partnerships in
              foreign markets. We pride ourselves on delivering excellence
              globally.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default B2bContent;
