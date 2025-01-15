import { skill } from "@/types/skills";
import Image from "next/image";

const Skill = ({ title, description, link, image, alt }: skill) => {
  return (
    <div className="skill-box">
      <Image src={image} alt={alt} width={100} height={200}></Image>
      <h3 className="skill-name">{title}</h3>
      <span className="description">{description}</span>
      <a href={link} target="blank">
        To Documentation
      </a>
    </div>
  );
};
export default Skill;
