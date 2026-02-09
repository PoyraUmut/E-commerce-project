import contactBg from "../assets/contact-bg.jpg"; 

const Contact = () => {
  return (
    <section
      className="
        w-full 
        min-h-[420px] 
        md:min-h-[480px]
        flex items-center
        bg-no-repeat
      "
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center ",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] mb-4">
            Questions & Answers
          </h2>

          <p className="text-[#737373] text-sm md:text-base leading-6 mb-6">
            Problems trying to resolve the conflict between the two
            major realms of Classical physics:
          </p>

          <button className="text-[#23A6F0] font-semibold text-sm tracking-wide">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
