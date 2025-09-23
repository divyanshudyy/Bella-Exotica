import { Facebook, Twitter, Instagram } from "lucide-react";

const ContactInfo = () => {
  return (
    <div
      className="bg-slate-50 p-8 md:p-12 rounded-3xl text-gray-800 h-full animate-on-load"
      style={{ animationDelay: "0.2s" }}
    >
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12">
        We are always ready to help you and answer your questions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div>
          <h3 className="font-bold text-lg mb-3">Call Center</h3>
          <p className="text-gray-600">(+91) 97248 84985</p>
          <p className="text-gray-600">(+91) 97248 84985 </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Our Location</h3>
          <p className="text-gray-600">
            Plot No. 1, Survey No. NA-160, Village: Ajapar, Anjar, 370110 -
            Kutch, Gujarat, India.{" "}
          </p>
          &nbsp;
          <p className="text-gray-600">BELLA EXOTICA PVT LTD</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Email</h3>
          <p className="text-gray-600">hello@bellaexotica.com</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Social network</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-transform duration-200 hover:scale-110"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-transform duration-200 hover:scale-110"
            >
              <Twitter />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-transform duration-200 hover:scale-110"
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
