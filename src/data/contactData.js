export const HERO = {
  imgUrl: "/images/hero/contact-hero.webp",
  title: "Contact",
  subtitle: "Our Location",
  paragraph:
    "Discover the true origins of freshness and flavour. This is where our commitment to quality begins.",
};

export const CONTACT_INFO = {
  title: "Let’s Connect",
  sections: [
    {
      heading: "Call Center",
      details: ["(+91) 97248 84985", "(+91) XXXXX XXXXX"],
    },
    {
      heading: "Our Location",
      details: [
        "BELLA EXOTICA PVT LTD",
        "Plot No. 1, Survey No. NA-160, Village: Ajapar, Anjar, 370110 - Kutch, Gujarat, India.",
      ],
    },
    {
      heading: "Email",
      details: ["hello@bellaexotica.com"],
    },
    {
      heading: "Social Network",
      socialLinks: [
        { name: "Facebook", icon: "Facebook", url: "#" },
        { name: "Twitter", icon: "Twitter", url: "#" },
        { name: "Instagram", icon: "Instagram", url: "#" },
      ],
    },
  ],
};

export const CONTACT_FORM = {
  title: "Get in Touch",
  description:
    "We welcome all your questions and inquiries. Our team will be in touch with you shortly.",
  fields: {
    firstName: {
      label: "First name",
      placeholder: "Enter your first name",
      validation: { required: "First name is required" },
    },
    lastName: {
      label: "Last name",
      placeholder: "Enter your last name",
      validation: { required: "Last name is required" },
    },
    email: {
      label: "Email",
      placeholder: "Your email address",
      validation: {
        required: "Email is required",
        pattern: {
          value: /^\S+@\S+$/i,
          message: "Enter a valid email address",
        },
      },
    },
    contact: {
      label: "Contact number",
      placeholder: "Your phone number",
      validation: {
        required: "Contact number is required",
        pattern: {
          value: /^[0-9]{10,15}$/,
          message: "Enter a valid phone number",
        },
      },
    },
    subject: {
      label: "Subject",
      placeholder: "What’s your message about?",
      validation: { required: "Subject is required" },
    },
    orgName: {
      label: "Company / Organization",
      placeholder: "Your company or team name",
      validation: {},
    },
    message: {
      label: "Message",
      placeholder: "Write your message here...",
      validation: { required: "Message cannot be empty" },
    },
  },
  emailJs: {
    service1: "service_mzxhcn5",
    template1: "template_7qloudg",
    template2: "template_ozli29j",
    publicKey: "cGJh2G9qi5tH5Nx8i",
  },
  buttonText: "Send a message",
};
