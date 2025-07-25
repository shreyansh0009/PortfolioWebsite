import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <div className="pb-1 pt-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-15 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-14 flex flex-col items-center lg:flex-row lg:justify-center"
          >
            {/* Project Image with GitHub Link Below */}
            <div className="w-full flex flex-col items-center lg:w-1/3">
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-3 w-[450px] h-56 rounded-md"
              />
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className=" gap-1 text-stone-300  hover:text-white transition-colors mb-4"
                  aria-label="GitHub repository"
                >
                  <FaGithub size={30} />
                  
                </a>
              )}
            </div>

            {/* Project Details */}
           <div className="w-full max-w-xl text-center sm:text-center lg:text-left px-4 sm:px-0 lg:pl-20 lg:w-3/4">
              <h3 className="mb-2  text-2xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>
              <div className="flex flex-wrap justify-center lg:justify-start">
                {project.technologies.map((tech, index) => (
                  <span
                    className="mr-2 mb-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;