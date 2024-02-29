import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My <span className="blue-gradient_text drop-shadow font-semibold">Projects</span>
      </h1>

      <div className="my-20 gap-16">
        {projects.map(project => (
          <div className="w-full grid md:grid-cols-2 gap-y-10 pb-10" key={project.name}>
            <div className="w-full flex flex-col justify-center">
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img src={project.iconUrl} alt="threads" className="w-1/2 h-1/2 object-contain" />
                </div>
              </div>

              <div className="mt-5 flex flex-col">
                <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
                <h4 className="text-lg font-poppins">Tech Stack: {project.tech}</h4>
                <p className="mt-2 text-slate-500">{project.description}</p>
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  {project.link ? (
                    <Link to={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 flex items-center">
                      View Live Link <img src={arrow} alt="arrow" className="w-4 h-4 object-contain ml-2" />
                    </Link>
                  ) : (
                    <p className="font-semibold text-blue-600">Work In Progress</p>
                  )}
                </div>
              </div>
            </div>

            <div className="px-10 flex justify-center items-center">
              <img src={project.mockup} alt="screenshot" />
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;
