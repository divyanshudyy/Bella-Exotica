import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically handle the form submission, e.g., send to an API
  };

  return (
    <div
      className="bg-slate-50 p-8 md:p-12 rounded-3xl animate-on-load"
      style={{ animationDelay: "0.5s" }}
    >
      <h3 className="text-2xl font-bold mb-2 text-gray-800">Get in Touch</h3>
      <p className="text-gray-600 mb-8">
        Define your goals and identify areas where AI can add value to your
        business.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="e.g., John"
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
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="e.g., Doe"
              className="mt-1 block w-full bg-transparent border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-b-2 focus:border-gray-800 sm:text-sm transition-colors"
            />
          </div>
        </div>
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
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g., john.doe@example.com"
            className="mt-1 block w-full bg-transparent border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-b-2 focus:border-gray-800 sm:text-sm transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g., Inquiry about your services"
            className="mt-1 block w-full bg-transparent border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-b-2 focus:border-gray-800 sm:text-sm transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700"
          >
            Company / Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g., Acme Corporation"
            className="mt-1 block w-full bg-transparent border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-b-2 focus:border-gray-800 sm:text-sm transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="mt-1 block w-full bg-transparent border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-b-2 focus:border-gray-800 sm:text-sm resize-none transition-colors"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-gray-800 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 focus-visible:ring-gray-800"
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
