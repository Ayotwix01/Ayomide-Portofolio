const About = () => {
  return (
    <section id="about" className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-white text-center">About Me</h2>

        {/* Content */}
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 mt-12">
          {/* Text */}
          <div>
            <p className="text-gray-400 text-lg leading-relaxed">
              I am a Mathematics student and frontend developer passionate about
              building modern, responsive and interactive web applications.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mt-5">
              My journey started with HTML, CSS and JavaScript, and I have
              continued expanding my skills with React and Tailwind CSS to
              create clean and user-friendly interfaces.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mt-5">
              I enjoy solving problems, learning new technologies and turning
              ideas into functional applications.
            </p>
          </div>

          {/* Skills Cards */}
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
            <div className="bg-slate-800 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white">React</h3>

              <p className="text-gray-400 mt-2">
                Building reusable components and interactive UIs.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white">JavaScript</h3>

              <p className="text-gray-400 mt-2">
                Creating dynamic and functional applications.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white">Tailwind CSS</h3>

              <p className="text-gray-400 mt-2">
                Designing modern responsive layouts.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white">
                Problem Solving
              </h3>

              <p className="text-gray-400 mt-2">
                Using logic and creativity to solve challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
