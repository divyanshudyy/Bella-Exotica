import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomButton from "../ui/CustomButton";
import emailjs from "@emailjs/browser";
import { CONTACT_FORM } from "../../data/contactData";

const ContactForm = () => {
  const [alert, setAlert] = useState({ type: "", message: "", visible: false });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const template1ID = import.meta.env.VITE_EMAILJS_TEMPLATE1_ID;
    const template2ID = import.meta.env.VITE_EMAILJS_TEMPLATE2_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(serviceID, template1ID, data, publicKey)
      .then(() => {
        reset();
        setAlert({
          type: "success",
          message: "Message sent successfully!",
          visible: true,
        });
        setTimeout(() => setAlert({ ...alert, visible: false }), 4000);
      })
      .catch((err) => {
        console.error("Error:", err);
        setAlert({
          type: "error",
          message: "Failed to send message.",
          visible: true,
        });
        setTimeout(() => setAlert({ ...alert, visible: false }), 4000);
      });

    emailjs
      .send(serviceID, template2ID, data, publicKey)
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div
      className="bg-slate-50 p-5 md:p-10 rounded-xl animate-on-load shadow-lg"
      style={{ animationDelay: "0.5s" }}
    >
      {/* ALERT BOX */}
      {alert.visible && (
        <div
          className={`mb-4 p-4 rounded ${
            alert.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {alert.message}
        </div>
      )}

      <h3 className="text-[2rem] font-bold mb-2 text-[#3D2B1F] font-hanken-grotesk">
        {CONTACT_FORM.title}
      </h3>
      <p className="text-[#3D2B1F] mb-8 max-w-md">{CONTACT_FORM.description}</p>

      <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
        {/* First + Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {["firstName", "lastName"].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium text-[#3D2B1F]"
              >
                {CONTACT_FORM.fields[field].label}
              </label>
              <input
                id={field}
                {...register(field, CONTACT_FORM.fields[field].validation)}
                placeholder={CONTACT_FORM.fields[field].placeholder}
                className={`mt-1 block w-full bg-transparent border-b py-2 px-2 focus:outline-none focus:border-b-2 sm:text-sm transition-colors ${
                  errors[field]
                    ? "border-red-400 focus:border-red-500"
                    : "border-gray-300 focus:border-[#3D2B1F]/50"
                }`}
              />
              {errors[field] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[field].message}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Email + Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {["email", "contact"].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium text-[#3D2B1F]"
              >
                {CONTACT_FORM.fields[field].label}
              </label>
              <input
                type={field === "email" ? "email" : "tel"}
                id={field}
                {...register(field, CONTACT_FORM.fields[field].validation)}
                placeholder={CONTACT_FORM.fields[field].placeholder}
                className={`mt-1 block w-full bg-transparent border-b py-2 px-2 focus:outline-none focus:border-b-2 sm:text-sm transition-colors ${
                  errors[field]
                    ? "border-red-400 focus:border-red-500"
                    : "border-gray-300 focus:border-[#3D2B1F]/50"
                }`}
              />
              {errors[field] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[field].message}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Subject + Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {["subject", "orgName"].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium text-[#3D2B1F]"
              >
                {CONTACT_FORM.fields[field].label}
              </label>
              <input
                id={field}
                {...register(field, CONTACT_FORM.fields[field].validation)}
                placeholder={CONTACT_FORM.fields[field].placeholder}
                className={`mt-1 block w-full bg-transparent border-b py-2 px-2 focus:outline-none focus:border-b-2 sm:text-sm transition-colors ${
                  errors[field]
                    ? "border-red-400 focus:border-red-500"
                    : "border-gray-300 focus:border-[#3D2B1F]/50"
                }`}
              />
              {errors[field] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[field].message}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[#3D2B1F]"
          >
            {CONTACT_FORM.fields.message.label}
          </label>
          <textarea
            id="message"
            rows="3"
            {...register("message", CONTACT_FORM.fields.message.validation)}
            placeholder={CONTACT_FORM.fields.message.placeholder}
            className={`mt-1 block w-full bg-transparent border-b py-2 px-2 focus:outline-none focus:border-b-2 sm:text-sm resize-none transition-colors ${
              errors.message
                ? "border-red-400 focus:border-red-500"
                : "border-gray-300 focus:border-[#3D2B1F]/50"
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <CustomButton
          text={CONTACT_FORM.buttonText}
          type="submit"
          margin="my-0"
        />
      </form>
    </div>
  );
};

export default ContactForm;
