const ContactHero = () => {
  return (
    <section className="relative w-full h-auto mx-auto rounded-3xl overflow-hidden">
      <div className="absolute top-0 left-0  w-full  object-bottom">
        <img
          src="/images/contact/contact-banner.png"
          className="w-full h-full object-contain object-center select-none"
        />
      </div>

      <div className="relative flex flex-col justify-end h-[400px] p-8 md:p-8 text-white">
        <div className="animate-on-load" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-6xl md:text-7xl font-bold">Contacts</h1>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
