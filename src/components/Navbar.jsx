import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <h1 className="text-3xl font-bold text-white cursor-pointer">
          <a href="#hero">
            Ayomide's Portofolio<span className="text-blue-500">.</span>
          </a>
        </h1>

        <div className="flex items-center gap-10 max-md:hidden">
          <ul className="flex items-center gap-8 text-gray-300 font-medium">
            <li className="cursor-pointer hover:text-blue-400 transition-all duration-300">
              <a href="#about">About</a>
            </li>

            <li className="cursor-pointer hover:text-blue-400 transition-all duration-300">
              <a href="#skills">Skills</a>
            </li>

            <li className="cursor-pointer hover:text-blue-400 transition-all duration-300">
              <a href="#projects">Projects</a>
            </li>

            <li className="cursor-pointer hover:text-blue-400 transition-all duration-300">
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div className="flex items-center gap-5 text-xl text-gray-300">
            <a
              href="https://github.com/Ayotwix01"
              target="_blank"
              className="cursor-pointer hover:text-white transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/orokunle-ayomide-b16ba6310"
              target="_blank"
              className="cursor-pointer hover:text-blue-500 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
