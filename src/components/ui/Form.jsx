import { useForm } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (data) => {
    emailjs
      .send("service_mzxhcn5", "template_7qloudg", data, "cGJh2G9qi5tH5Nx8i")
      .then(() => {
        alert("Message sent! 🎉");
        reset();
      })
      .catch((err) => console.error("Error:", err));

    emailjs
      .send("service_mzxhcn5", "template_ozli29j", data, "cGJh2G9qi5tH5Nx8i")
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div
      className="bg-slate-50 p-8 md:p-12 rounded-3xl animate-on-load"
      style={{ animationDelay: "0.5s" }}
    >
      <h3 className="text-2xl font-bold mb-2 text-gray-800">Get in Touch</h3>
      <p className="text-gray-600 mb-8 max-w-md">
        We welcome all your questions and inquiries. Our team will be in touch
        with you shortly.
      </p>

      <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
        {/* First + Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First name
            </label>
            <input
              id="firstName"
              {...register("firstName", { required: true })}
              placeholder="e.g., abc"
              className="mt-1 block w-full bg-transparent border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-b-2 focus:border-gray-800 sm:text-sm transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last name
            </label>
            <input
              id="lastName"
              placeholder="e.g., xyz"
              {...register("lastName", { required: true })}
              className="mt-1 block w-full bg-transparent border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-b-2 focus:border-gray-800 sm:text-sm transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            placeholder="e.g., 123@example.com"
            className="mt-1 block w-full bg-transparent border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-b-2 focus:border-gray-800 sm:text-sm transition-colors"
          />
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <input
            id="subject"
            {...register("subject", { required: true })}
            placeholder="e.g., Inquiry about your services"
            className="mt-1 block w-full bg-transparent border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-b-2 focus:border-gray-800 sm:text-sm transition-colors"
          />
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700"
          >
            Company / Organization
          </label>
          <input
            id="company"
            {...register("orgName")}
            placeholder="e.g., Food Corporation"
            className="mt-1 block w-full bg-transparent border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-b-2 focus:border-gray-800 sm:text-sm transition-colors"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            {...register("message", { required: true })}
            placeholder="Write your message..."
            className="mt-1 block w-full bg-transparent border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-b-2 focus:border-gray-800 sm:text-sm resize-none transition-colors"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-gray-800 text-white px-6 py-3 rounded-full flex items-center space-x-2  hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2  focus-visible:ring-offset-slate-50 focus-visible:ring-gray-800"
          >
            <ArrowRight />
            <span>Send a message</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
