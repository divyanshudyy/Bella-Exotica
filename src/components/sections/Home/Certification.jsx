import ScrollVelocity from "../../ui/home/ScrollVelocity";

const Certification = () => {
  return (
    <section className=" flex justify-center items-center flex-col">
      <div className=" bg-white max-w-sm sm:w-full md:max-w-7xl">
        <ScrollVelocity
          texts={["gmp", "haccp", "fssai", "iso"]}
          velocity={10}
          className="custom-scroll-text"
        />
      </div>
    </section>
  );
};

export default Certification;
