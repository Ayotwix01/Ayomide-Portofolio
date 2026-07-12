import ayomide from "../assets/images/ayomide.png";
const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 max-md:grid-cols-1 items-center gap-10 relative z-10">
        {/* Text Section */}

        <div>
          <div
            className="
              inline-flex
              items-center
              gap-2
              bg-slate-800
              border
              border-green-500/30
              text-green-400
              px-4
              py-2
              rounded-full
              mb-6
            "
          >
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Available for Opportunities
          </div>
          <p className="text-blue-400 text-lg mb-4">Hi, I'm</p>

          <h1 className="text-5xl max-md:text-4xl font-extrabold text-white leading-tight">
            Hi, I'm <span className="text-blue-500">Ayomide Orokunle</span>
          </h1>

          <h2 className="text-2xl text-gray-300 mt-4">
            Frontend Developer | React Developer
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl leading-8">
            I build responsive, modern and user-friendly web applications using
            React, JavaScript and Tailwind CSS. I'm passionate about creating
            beautiful digital experiences and continuously improving my skills
            as a software developer.
          </p>

          {/* Buttons */}
          <div className="flex gap-5 mt-8 max-sm:flex-col">
            <a
              href="#projects"
              className="
              bg-blue-500
              hover:bg-blue-600
              px-7
              py-3
              rounded-xl
              text-white
              font-semibold
              transition
              "
            >
              View Projects
            </a>

            <a
              href="/Ayomide_Orokunle_CV.pdf"
              download
              className="
              border
              border-blue-500
              text-blue-400
              px-7
              py-3
              rounded-xl
              font-semibold
              hover:bg-blue-500
              hover:text-white
              transition
              "
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={ayomide}
            alt="Ayomide"
            className="
              w-80
              h-80
              rounded-full
              object-cover
              border-4
              border-blue-500
              shadow-2xl
              shadow-blue-500/20
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
