import { Facebook, Twitter, Instagram } from "lucide-react";

const ContactInfo = () => {
  return (
    <div
      className="bg-slate-50 p-8 md:p-10 rounded-xl text-[#3D2B1F] h-auto animate-on-load shadow-lg"
      style={{ animationDelay: "0.2s" }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 font-oakes-grotesk ">
        Let’s Connect
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ">
        <div>
          <h3 className="font-bold text-lg mb-3 font-oakes-grotesk">
            Call Center
          </h3>
          <p className="text-gray-700">(+91) 97248 84985</p>
          <p className="text-gray-700">(+91) XXXXX XXXXX </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3 font-oakes-grotesk">
            Our Location
          </h3>
          <p className="text-gray-700">BELLA EXOTICA PVT LTD</p>

          <p className="text-gray-700">
            Plot No. 1, Survey No. NA-160, Village: Ajapar, Anjar, 370110 -
            Kutch, Gujarat, India.{" "}
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3 font-oakes-grotesk">Email</h3>
          <p className="text-gray-700">hello@bellaexotica.com</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3 font-oakes-grotesk">
            Social network
          </h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-[#3D2B1F] transition-transform duration-200 hover:scale-110"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="text-[#3D2B1F]  transition-transform duration-200 hover:scale-110"
            >
              <Twitter />
            </a>
            <a
              href="#"
              className="text-[#3D2B1F] transition-transform duration-200 hover:scale-110"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
