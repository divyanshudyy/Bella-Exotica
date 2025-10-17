import ScrollVelocity from "../../ui/home/ScrollVelocity";

const Certification = () => {
  return (
    <section className="pt-10 flex justify-center items-center flex-col">
      {/* <h1 className="text-4xl md:text-5xl font-bold text-[#3D2B1F] text-center mt-20 font-oakes-grostek">
        Certifications
      </h1> */}
      <div className="mt-10 bg-gray-200  max-w-6xl ">
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
