import ProcessSteps from "./ProcessSteps";

function ProcessContent() {
  return (
    <div className="bg-[#FFFBF7] min-h-screen text-gray-800 lg:mx-20 mx-5 rounded-xl shadow-xl">
      <header className="py-12 md:py-5 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-center  captialize  text-[#3D2B1F] font-oakes-grotesk">
          Our Process
        </h1>
        <p className="max-w-2xl text-center mb-10 mt-5 text-md text-gray-600  px-10">
          We take pride in crafting high-quality products from start to finish.
          Every step is designed to ensure freshness, consistency, and
          excellence, from sourcing ingredients to the final product. Every
          stage of our process is carefully curated to ensure unmatched quality
          and consistency.
        </p>
      </header>
      <main>
        <ProcessSteps />
      </main>
    </div>
  );
}

export default ProcessContent;
