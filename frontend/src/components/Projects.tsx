import { projects } from "@/assets/assets";
import { Project } from "@/types/projects";
import AnimatedSection from "@/utils/AnimatedSection";
import WavyText from "@/utils/WaveText";

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
                  <div className="project-box bg-boxBackground  rounded-md">
                    <img src="/blackdantella.png" className="rounded-ss-lg rounded-se-lg" />
                    <div className="info p-10 "></div>
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
