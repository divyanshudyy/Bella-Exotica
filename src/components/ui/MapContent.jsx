import Map from "./Map";

const MapContent = ({ heading, para }) => {
  return (
    <section className="h-auto w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Heading + Paragraph */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center ">
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-[#3D2B1F] font-oakes-grotesk max-w-full md:max-w-lg px-5">
            {heading}
          </h2>
          <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end lg:text-right">
            <p className="text-md sm:text-base max-w-full sm:max-w-sm text-gray-700 mb-4 px-5 md:px-0">
              {para}
            </p>
          </div>
        </div>

        {/* Map Container */}
        <div className="w-full flex justify-center mt-6 sm:mt-8 md:mt-10">
          <div className="w-full sm:w-[95%] md:w-[100%] h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[80vh] flex flex-col relative shadow-lg rounded-2xl overflow-hidden">
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
