import { projects } from "@/assets/assets";
import { Project } from "@/types/projects";
import AnimatedSection from "@/utils/AnimatedSection";
import WavyText from "@/utils/WaveText";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="py-28 " id="projects">
      <div className="text-8xl opacity-20  py-12 font-header font-normal ">
        <WavyText text="Projects" center={true} delay={0.2} duration={0.1} />
      </div>
      <div className="container mx-auto">
        <div className="project-holder grid grid-cols-2 gap-8">
          {projects.map((project: Project, index) => {
            const isTallBox = index % 2 === 0;
            return (
              <div
                className={`${isTallBox ? "row-span-2 " : "row-span-1 mt-5"} `}
                key={index}
              >
                <AnimatedSection>
                  <div className="project-box rounded-md relative group overflow-hidden brightness-90">
                    <Image
                      src={project.image}
                      alt="project image"
                      className="rounded-ss-lg rounded-se-lg duration-300 group-hover:scale-105 group-hover:animate-pulse"
                    />
                    <div className="info p-5 absolute flex flex-col justify-end gap-2   bg-gradient-to-t from-slate-700 h-80 w-full duration-300 -bottom-52 group-hover:bottom-0">
                      <div className="project-title text-white flex justify-between items-center ">
                        <h5 className="font-semibold text-xl">
                          {project.title}
                        </h5>
                        <span className="text-xs capitalize">{project.date}</span>
                      </div>
                      {/* this is a description if needed on day  */}
                      {/* <p dangerouslySetInnerHTML={{__html:`${project.description}`}} className="text-sm"></p> */}
                      <div className="project-skill-holder flex gap-1 flex-wrap mb-3">
                        {project.skills.map((skill: string, index: number) => {
                          return (
                            <span
                              className="skill p-1 px-4 bg-slate-700 capitalize text-sm rounded-3xl"
                              key={index}
                            >
                              {skill}
                            </span>
                          );
                        })}
                      </div>
                      <a href={project.link} target="blank" aria-label="project link">
                        <FontAwesomeIcon
                          icon={faGlobe}
                          className="text-2xl text-secondaryColor animate-pulse"
                        />
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Projects;
