import { HERO } from "../../../data/b2bData";

const B2bContent = () => {
  return (
    <section className="pb-5 pt-10   md:pt-10 md:pb-5 mx-5 md:mx-20 shadow-lg rounded-2xl bg-white">
      <div className="max-w-3xl mx-auto text-center px-0 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center  captialize  text-[#3D2B1F] font-hanken-grotesk">
          {HERO.subtitle_3}
        </h2>
        <p className="text-center mb-10 mt-5 text-md text-gray-600  px-10">
          {HERO.paragraph_3}
        </p>
      </div>
    </section>
  );
};

export default B2bContent;
