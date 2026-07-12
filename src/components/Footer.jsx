import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center max-md:flex-col gap-5">
        <p className="text-gray-400">
          © 2026 Orokunle Ayomide. All rights reserved.
        </p>

        <div className="flex gap-5">
          <a
            href="https://github.com/Ayotwix01"
            target="_blank"
            className="text-gray-400 hover:text-white text-2xl transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/orokunle-ayomide-b16ba6310"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 text-2xl transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
