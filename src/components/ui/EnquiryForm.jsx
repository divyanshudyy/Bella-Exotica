import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Twitter, Instagram, Globe } from "lucide-react";

const EnquiryForm = () => {
  const { register, handleSubmit } = useForm();

  function submitHandler(data) {
    console.log("submitted", data);
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20 py-5 min-h-screen w-full  gap-12">
      {/* Left Contact Info */}
      <div className="flex flex-col w-full lg:w-[30%] space-y-8">
        <div className="p-6 bg-white shadow-md rounded-xl border border-gray-100 transition-transform hover:scale-[1.01]">
          <h3 className="font-bold text-xl text-gray-800 mb-4">Contact Info</h3>

          {/* Mail */}
          <div className="flex gap-4 items-start group mb-6">
            <div className="bg-amber-100 text-amber-700 p-3 rounded-lg group-hover:scale-110 transition-transform">
              <Mail />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Mail Us</h4>
              <p className="text-gray-600 text-sm">hello@bellaexotica.com</p>
              <p className="text-gray-600 text-sm">support@bellaexotica.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4 items-start group mb-6">
            <div className="bg-amber-100 text-amber-700 p-3 rounded-lg group-hover:scale-110 transition-transform">
              <Phone />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Call Us</h4>
              <p className="text-gray-600 text-sm">+91 9876543210</p>
              <p className="text-gray-600 text-sm">+91 9876501234</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex gap-4 items-start group">
            <div className="bg-amber-100 text-amber-700 p-3 rounded-lg group-hover:scale-110 transition-transform">
              <MapPin />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Location</h4>
              <p className="text-gray-600 text-sm">123 Bella Street</p>
              <p className="text-gray-600 text-sm">Mumbai, India</p>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="p-6 bg-white shadow-md rounded-xl border border-gray-100 transition-transform hover:scale-[1.01]">
          <h3 className="font-bold text-xl text-gray-800 mb-4">
            Stay Connected
          </h3>
          <div className="flex gap-4">
            <Twitter className="h-10 w-10 p-2 rounded-full border text-amber-700 hover:bg-amber-600 hover:text-white transition-all cursor-pointer" />
            <Instagram className="h-10 w-10 p-2 rounded-full border text-amber-700 hover:bg-amber-600 hover:text-white transition-all cursor-pointer" />
            <Globe className="h-10 w-10 p-2 rounded-full border text-amber-700 hover:bg-amber-600 hover:text-white transition-all cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Right Form */}
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-full lg:w-[65%] p-8 lg:p-12 bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow"
      >
        <h1 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-4">
          Let’s grow <span className="text-amber-700">together.</span>
        </h1>
        <p className="text-center text-gray-500 mb-8 text-sm lg:text-base">
          Have questions about our cereals, oats, or muesli? Reach out below 👇
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="First Name*"
            className="border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 outline-none transition"
            {...register("firstName", { required: true })}
          />
          <input
            type="text"
            placeholder="Last Name*"
            className="border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 outline-none transition"
            {...register("lastName", { required: true })}
          />

          <input
            type="email"
            placeholder="Email*"
            className="col-span-2 border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 outline-none transition"
            {...register("email", { required: true })}
          />

          <input
            type="text"
            placeholder="Company / Organisation"
            className="col-span-2 border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 outline-none transition"
            {...register("orgName")}
          />

          <input
            type="text"
            placeholder="Subject*"
            className="col-span-2 border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 outline-none transition"
            {...register("subject", { required: true })}
          />

          <textarea
            placeholder="Write your message*"
            rows="5"
            className="col-span-2 border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 outline-none transition"
            {...register("message", { required: true })}
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="mt-6 w-full h-12 rounded-lg font-medium border bg-amber-600 border-gray-300 text-white transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
