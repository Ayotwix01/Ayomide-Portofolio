import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import { SiTailwindcss, SiDjango, SiMongodb } from "react-icons/si";
const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-5xl text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-5xl text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-5xl text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-5xl text-cyan-400" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-5xl text-sky-400" />,
    },
    { name: "Git", icon: <FaGitAlt className="text-5xl text-orange-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-5xl text-white" /> },
    { name: "Python", icon: <FaPython className="text-5xl text-yellow-300" /> },
    { name: "Django", icon: <SiDjango className="text-5xl text-green-500" /> },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-5xl text-green-400" />,
    },
  ];

  return (
    <section id="skills" className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center">Skills</h2>

        <div className="grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-5 mt-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
      bg-slate-800
      border border-white/10
      rounded-xl
      p-6
      flex
      flex-col
      items-center
      justify-center
      gap-4
      text-white
      hover:-translate-y-2
      hover:border-blue-500
      transition-all
      duration-300
    "
            >
              {skill.icon}

              <h3 className="font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
