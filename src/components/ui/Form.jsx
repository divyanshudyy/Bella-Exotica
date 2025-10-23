import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomButton from "../ui/CustomButton";
import emailjs from "@emailjs/browser";

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

    // Send both templates
    Promise.all([
      emailjs.send(serviceID, template1ID, data, publicKey),
      emailjs.send(serviceID, template2ID, data, publicKey),
    ])
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
        console.error("Error sending message:", err);
        setAlert({
          type: "error",
          message: "Failed to send message.",
          visible: true,
        });
        setTimeout(() => setAlert({ ...alert, visible: false }), 4000);
      });
  };

  return (
    <div className="bg-slate-50 p-5 md:p-10 rounded-xl shadow-lg">
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

      <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
        {/* Example: Name */}
        <div>
          <label className="block text-sm font-medium text-[#3D2B1F]">
            Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Your Name"
            className="mt-1 block w-full border-b py-2 px-2 focus:outline-none focus:border-b-2 sm:text-sm"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-[#3D2B1F]">
            Message
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Your Message"
            rows="3"
            className="mt-1 block w-full border-b py-2 px-2 focus:outline-none focus:border-b-2 sm:text-sm resize-none"
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <CustomButton text="Send" type="submit" margin="my-0" />
      </form>
    </div>
  );
};

export default ContactForm;
