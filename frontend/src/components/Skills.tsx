import { skills } from "@/assets/assets";
import { skill } from "@/types/skills";
import AnimatedSection from "@/utils/AnimatedSection";
import Image from "next/image";
import SectionHead from "./SectionHead";

const Skills = () => {
  return (
    <section className="skills py-24 " id="skills">
      <SectionHead text="Skills" />
      <div className="skills-holder flex flex-wrap container mx-auto">
        {skills.map((skill: skill, index) => {
          return (
            <div
              className="px-2 skill-holder w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 mx-auto "
              key={index}
            >
              <AnimatedSection>
                <div className="p-5 duration-300 shadow-main-shadow hover:text-primaryColor hover:-translate-y-1 rounded-md flex items-center bg-boxBackground text-paragrahColor gap-5 flex-col md:flex-row group">
                  <Image
                    src={skill.image}
                    alt="skill image"
                    width={50}
                    height={50}
                    className="group-hover:animate-pulse"
                  />
                  <span className="skill-title text-xl">{skill.title}</span>
                </div>
              </AnimatedSection>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
