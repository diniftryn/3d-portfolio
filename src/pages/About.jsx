import { Link } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";

//import { CTA } from "../components";
import { skills } from "../constants";
// import Experience from "./Experience";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow"> Dini</span> 👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>Software Engineer based in Singapore, passionate about developing full stack web and mobile applications.</p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map(skill => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <Experience /> */}

      <hr className="border-slate-200" />

      <div className="pt-10 flex flex-col">
        <h3 className="subhead-text">Feel free to view projects I've built using these skills</h3>

        <div className="pt-10 flex items-center justify-center">
          <Link to="/projects" className="btn">
            View Projects
          </Link>
        </div>
      </div>

      {/* <CTA /> */}
    </section>
  );
};

export default About;
