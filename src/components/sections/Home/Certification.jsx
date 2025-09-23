import ScrollVelocity from "../../ui/ScrollVelocity";

const Certification = () => {
  return (
    <section>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-800 text-center capitalize">
        Trusted Certifications
      </h1>
      <ScrollVelocity
        texts={[, "GMP", "HACCP", "FSSAI", "ISO"]}
        velocity={50}
        className="custom-scroll-text"
      />
    </section>
  );
};

export default Certification;
