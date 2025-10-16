import { useForm } from "react-hook-form";
import CustomButton from "../ui/CustomButton";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    emailjs
      .send("service_mzxhcn5", "template_7qloudg", data, "cGJh2G9qi5tH5Nx8i")
      .then(() => {
        alert("Message sent!");
        reset();
      })
      .catch((err) => console.error("Error:", err));

    emailjs
      .send("service_mzxhcn5", "template_ozli29j", data, "cGJh2G9qi5tH5Nx8i")
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div
      className="bg-slate-50 p-5 md:p-10 rounded-xl animate-on-load shadow-lg"
      style={{ animationDelay: "0.5s" }}
    >
      <h3 className="text-3xl font-bold mb-2 text-[#3D2B1F] font-oakes-grotesk">
        Get in Touch
      </h3>
        <p className="text-[#3D2B1F] mb-8 max-w-md">
          We welcome all your questions and inquiries. Our team will be in touch
          with you shortly.
        </p>

      <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
        {/* First + Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-[#3D2B1F]"
            >
              First name
            </label>
            <input
              id="firstName"
              {...register("firstName", { required: "First name is required" })}
              placeholder="Enter your first name"
              className={`mt-1 block w-full bg-transparent border-b py-2 px-2 focus:outline-none focus:border-b-2 sm:text-sm transition-colors ${
                errors.firstName
                  ? "border-red-400 focus:border-red-500"
                  : "border-gray-300 focus:border-[#3D2B1F]/50"
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-[#3D2B1F]"
            >
              Last name
            </label>
            <input
              id="lastName"
              placeholder="Enter your last name"
              {...register("lastName", { required: "Last name is required" })}
              className={`mt-1 block w-full bg-transparent border-b py-2 px-2 focus:outline-none focus:border-b-2 sm:text-sm transition-colors ${
                errors.lastName
                  ? "border-red-400 focus:border-red-500"
                  : "border-gray-300 focus:border-[#3D2B1F]/50"
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Email + Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#3D2B1F]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email address",
                },
              })}
              placeholder="Your email address"
              className={`mt-1 block w-full bg-transparent border-b py-2 px-2 focus:outline-none focus:border-b-2 sm:text-sm transition-colors ${
                errors.email
                  ? "border-red-400 focus:border-red-500"
                  : "border-gray-300 focus:border-[#3D2B1F]/50"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-[#3D2B1F]"
            >
              Contact number
            </label>
            <input
              type="tel"
              id="contact"
              {...register("contact", {
                required: "Contact number is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Enter a valid phone number",
                },
              })}
              placeholder="Your phone number"
              className={`mt-1 block w-full bg-transparent border-b py-2 px-2 focus:outline-none focus:border-b-2 sm:text-sm transition-colors ${
                errors.contact
                  ? "border-red-400 focus:border-red-500"
                  : "border-gray-300 focus:border-[#3D2B1F]/50"
              }`}
            />
            {errors.contact && (
              <p className="text-red-500 text-xs mt-1">
                {errors.contact.message}
              </p>
            )}
          </div>
        </div>

        {/* Subject + Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-[#3D2B1F]"
            >
              Subject
            </label>
            <input
              id="subject"
              {...register("subject", { required: "Subject is required" })}
              placeholder="What’s your message about?"
              className={`mt-1 block w-full bg-transparent border-b py-2 px-2 focus:outline-none focus:border-b-2 sm:text-sm transition-colors ${
                errors.subject
                  ? "border-red-400 focus:border-red-500"
                  : "border-gray-300 focus:border-[#3D2B1F]/50"
              }`}
            />
            {errors.subject && (
              <p className="text-red-500 text-xs mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-[#3D2B1F]"
            >
              Company / Organization
            </label>
            <input
              id="company"
              {...register("orgName")}
              placeholder="Your company or team name"
              className="mt-1 block w-full bg-transparent border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-b-2 focus:border-[#3D2B1F]/50 sm:text-sm transition-colors"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[#3D2B1F]"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            {...register("message", { required: "Message cannot be empty" })}
            placeholder="Write your message here..."
            className={`mt-1 block w-full bg-transparent border-b py-2 px-2 focus:outline-none focus:border-b-2 sm:text-sm resize-none transition-colors ${
              errors.message
                ? "border-red-400 focus:border-red-500"
                : "border-gray-300 focus:border-[#3D2B1F]/50"
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <CustomButton text="Send a message" type="submit" margin="my-0" />
      </form>
    </div>
  );
};

export default ContactForm;
