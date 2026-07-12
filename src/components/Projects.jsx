import yarnncrafting from "../assets/images/Yarrncrafting.png";
import counter from "../assets/images/counter.png";
import flashcard from "../assets/images/flashcard.png";
import travelList from "../assets/images/travel-list.png";

const Projects = () => {
  const projects = [
    {
      title: "YarnnCrafting",
      description:
        "A responsive e-commerce website featuring product browsing, shopping cart functionality, and a clean, modern user interface built with HTML, Tailwind CSS, and JavaScript.",
      image: yarnncrafting,
      tech: ["🌐HTML", "💨Tailwind CSS", "🟨JavaScript"],
      github: "https://github.com/Ayotwix01/YarnnCrafting-Project.git",
      demo: "https://yarnn-crafting-project.vercel.app/",
    },

    {
      title: "React Counter App",
      description:
        "A customizable React counter application demonstrating state management, reusable components, and interactive user input.",
      image: counter,
      tech: ["✡️React", "🟨JavaScript"],
      github: "https://github.com/Ayotwix01/react-advance-counter-website.git",
      demo: "https://react-advance-counter-website.vercel.app/",
    },

    {
      title: "React Flashcards",
      description:
        "An interactive React flashcard application designed to improve learning through dynamic question-and-answer cards and efficient state management.",
      image: flashcard,
      tech: ["✡️React", "🎨CSS"],
      github: "https://github.com/Ayotwix01/flashcard.git",
      demo: "https://flashcards-5nfbg26hw-ayotwix01s-projects.vercel.app/",
    },

    {
      title: "Travel List App",
      description:
        "A React travel planner that allows users to organize packing lists, track packed items, and manage trip essentials efficiently.",
      image: travelList,
      tech: ["✡️React", "🟨JavaScript"],
      github: "https://github.com/Ayotwix01/React-travel-list-interactive-.git",
      demo: "https://react-travel-list-interactive.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center">Projects</h2>

        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8 mt-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
              bg-slate-800
              border border-white/10

              rounded-2xl

              overflow-hidden

              shadow-lg

              hover:shadow-blue-500/20

              hover:border-blue-500

              hover:-translate-y-2

              transition-all

              duration-300 
              "
            >
              {/* Image Placeholder */}

              <div className="overflow-hidden rounded-lg mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  h-48
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-110
                "
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="
                      bg-slate-700
                      text-gray-200
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-medium
                      hover:bg-blue-500
                      transition
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    flex-1
                    text-center
                    border
                    border-blue-500
                    text-blue-400
                    py-2.5
                    rounded-lg
                    hover:bg-blue-500
                    hover:text-white
                    transition
                    "
                  >
                    Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    flex-1
                    text-center
                    bg-blue-500
                    py-2.5
                    rounded-lg
                    text-white
                    hover:bg-blue-700
                    transition
                    "
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
