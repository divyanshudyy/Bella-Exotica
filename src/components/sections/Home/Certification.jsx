import ScrollVelocity from "../../ui/ScrollVelocity";

const Certification = () => {
  return (
    <section className="pt-10">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-800 text-center capitalize mt-20">
        Trusted by
      </h1>
      <div className="mt-5 bg-gray-200 ">
        <ScrollVelocity
          texts={["GMP", "HACCP", "FSSAI", "ISO"]}
          velocity={10}
          className="custom-scroll-text"
        />
      </div>
    </section>
  );
};

export default Certification;
