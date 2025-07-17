import { useEffect, useRef, useState } from "react";
import projects_data from "../data/projects.json";
import { Calendar, Clock, ExternalLink, TrendingUp, Users, X } from "lucide-react";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects_data.projects
      : projects_data.projects.filter((project) =>
          project.categories.includes(filter)
        );

  const handleProjectClick = (project) => {
    setActiveProject(project);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {projects_data.categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                filter === category
                  ? "bg-purple-600 dark:bg-purple-400 text-white"
                  : "bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col h-full min-h-[412px] project-card cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-purple-600 dark:bg-purple-400 text-white px-3 py-1 text-xs font-medium rounded-full">
                  {project.categories.join(", ")}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2 flex-1">
                  {project.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">
                    {project.button}
                  </span>
                  {project.outcome.length > 0 && (
                    <div className="flex items-center">
                      <TrendingUp size={16} className="text-green-500 mr-1" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        {project.outcome}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {activeProject && (
          <ProjectModal activeProject={activeProject} closeModal={closeModal} />
        )}
      </div>
    </section>
  );
}

function ProjectModal({ activeProject, closeModal }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeProject]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
  }, [closeModal]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div
        ref={modalRef}
        className="bg-white dark:bg-slate-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-scroll scrollbar-overlay"
      >
        <div className="relative">
          <img
            src={activeProject.img}
            alt={activeProject.name}
            className="w-full h-64 -mr-2 object-cover"
          />
          <button
            className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-all cursor-pointer"
            onClick={closeModal}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="absolute top-4 left-4 bg-purple-600 dark:bg-purple-400 text-white px-3 py-1 text-sm font-medium rounded-full">
            {activeProject.categories.join(", ")}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4">{activeProject.name}</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {activeProject.period.length > 0 && (
              <div className="flex items-center">
                <Calendar
                  size={18}
                  className="text-purple-600 dark:text-purple-400 mr-2"
                />
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Timeline
                  </p>
                  <p className="text-sm font-medium">{activeProject.period}</p>
                </div>
              </div>
            )}

            {activeProject.team_size.length > 0 && (
              <div className="flex items-center">
                <Users
                  size={18}
                  className="text-purple-600 dark:text-purple-400 mr-2"
                />
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Team Size
                  </p>
                  <p className="text-sm font-medium">
                    {activeProject.team_size}
                  </p>
                </div>
              </div>
            )}

            {activeProject.outcome.length > 0 && (
              <div className="flex items-center">
                <Clock
                  size={18}
                  className="text-purple-600 dark:text-purple-400 mr-2"
                />
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Outcome
                  </p>
                  <p className="text-sm font-medium">{activeProject.outcome}</p>
                </div>
              </div>
            )}
          </div>

          {activeProject.description.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2">Project Overview</h4>
              <p className="text-slate-700 dark:text-slate-300">
                {activeProject.description}
              </p>
            </div>
          )}

          <div className="mb-6">
            <h4 className="text-lg font-medium mb-2">
              Key Responsibilities & Achievements:
            </h4>
            <ul className="list-disc list-outside text-slate-700 dark:text-slate-300">
              {activeProject.responsibilities.map((responsibility, index) => (
                <li key={index} className="mb-1 ms-5">
                  {responsibility.subtitle.length > 0 && (
                    <span className="font-bold">
                      {responsibility.subtitle + ": "}
                    </span>
                  )}
                  {responsibility.description}
                </li>
              ))}
            </ul>
          </div>

          {activeProject.stack.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2">Technologies Used:</h4>

              <div className="flex flex-wrap gap-2">
                {activeProject.stack.map((stack, index) => (
                  <span
                    key={index}
                    className="bg-purple-600 dark:bg-purple-400 text-white px-3 py-1 text-sm font-medium rounded-full"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeProject.modal_buttons.length > 0 && (
            <div className="flex justify-end">
              {activeProject.modal_buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 btn btn-primary mr-2"
                >
                  {button.name} <ExternalLink size={16} className="ml-2" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
