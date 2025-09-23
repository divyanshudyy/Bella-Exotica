import { ArrowRight } from "lucide-react";
import Map from "./Map";

const MapContent = () => {
  return (
    <section className="h-auto w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center ">
          <h2 className="text-4xl sm:text-5xl font-medium text-brand-dark-brown max-w-md">
            Discover Our Latest Offerings
          </h2>
          <div className="mt-6 md:mt-0 text-right flex flex-col items-end">
            <p className="text-gray-500 font-light text-sm max-w-xs mb-4">
              Falli fabellas te vis, an pri utamur postea, ad cum choro
              consulatu. Vim an case vidit.
            </p>
            <button className="bg-gray-800 text-white px-6 py-3 rounded-full flex items-center  justify-end space-x-2 hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 focus-visible:ring-gray-800 ">
              Learn more <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="h-[800px] w-full flex items-start justify-center mt-10">
          <div className="w-[100%] h-[80%] z-10 flex flex-col relative shadow-2xl rounded-lg overflow-hidden">
            <div className="flex-grow">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapContent;
