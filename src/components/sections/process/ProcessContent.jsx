import ProcessSteps from "./ProcessSteps";
import { HERO } from "../../../data/processData";

function ProcessContent() {
  return (
    <div className="bg-[#FFFBF7] min-h-screen text-gray-800 lg:mx-20 mx-5 rounded-xl shadow-xl">
      <header className="py-12 md:py-5 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-center  captialize  text-[#3D2B1F] font-oakes-grotesk">
          {HERO.subtitle}
        </h1>
        <p className="max-w-2xl text-center mb-10 mt-5 text-md text-gray-600  px-10">
          {HERO.paragraph}
        </p>
      </header>
      <main>
        <ProcessSteps />
      </main>
    </div>
  );
}

export default ProcessContent;
