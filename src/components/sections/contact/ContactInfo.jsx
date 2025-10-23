import { Facebook, Twitter, Instagram } from "lucide-react";
import { CONTACT_INFO } from "../../../data/contactData";

const ICONS = {
  Facebook: <Facebook />,
  Twitter: <Twitter />,
  Instagram: <Instagram />,
};

const ContactInfo = () => {
  return (
    <div
      className="bg-slate-50 p-8 md:p-10 rounded-xl text-[#3D2B1F] h-auto animate-on-load shadow-lg"
      style={{ animationDelay: "0.2s" }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 font-oakes-grotesk">
        {CONTACT_INFO.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {CONTACT_INFO.sections.map((section, idx) => (
          <div key={idx}>
            <h3 className="font-bold text-lg mb-3 font-oakes-grotesk">
              {section.heading}
            </h3>

            {section.details?.map((text, i) => (
              <p key={i} className="text-gray-700">
                {text}
              </p>
            ))}

            {section.socialLinks && (
              <div className="flex space-x-4">
                {section.socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    className="text-[#3D2B1F] transition-transform duration-200 hover:scale-110"
                  >
                    {ICONS[link.icon]}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
