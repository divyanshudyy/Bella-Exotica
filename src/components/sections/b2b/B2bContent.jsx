const B2bContent = () => {
  return (
    <>
      {/* New B2B Collaboration Section */}
      <section className="py-10  bg-gray-50">
        <div className="max-w-3xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tightest mb-6">
            Collaborate with Bella Exotica
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
          </div>
          <div className="text-gray-500 font-light space-y-6 text-sm leading-relaxed">
            <p className="mt-6 text-lg text-gray-600 font-light">
              A commitment to our roots, a promise to the world.
            </p>
            <p>
              Our story is deeply rooted in the rich, natural landscapes of
              India. While we begin by serving our local community, our vision
              is to share this authentic goodness with the world. We are
              building our export strategy on a foundation of product integrity,
              reliability, and a commitment to forming trusted global
              partnerships. Our ambition is to bring the wholesome, exquisite
              taste of modern India to tables everywhere.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default B2bContent;
