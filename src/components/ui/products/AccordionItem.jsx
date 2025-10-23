import { useState } from "react";
import { ChevronDown } from "lucide-react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = `accordion-content-${title
    .replace(/\s+/g, "-")
    .toLowerCase()}`;

  return (
    <div className="border-b border-gray-300">
      <button
        className="w-full flex justify-between items-center py-3 text-left font-semibold text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="text-[#3D2B1F]">{title}</span>
        <ChevronDown
        stroke="#3D2B1F"
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        id={contentId}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="pt-1 pb-4">{children}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
