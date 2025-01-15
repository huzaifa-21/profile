// import assets from "@/assets/assets";
import Header from "@/components/Header";
import Landing from "@/components/Landing";

export default function Home() {
  return <>
    <Header />
    <Landing />
  </>
}

{
  /* this code below is for looping the skills

<div className="skii-container">
  {assets.skills.map((skill, index) => {
    return (
      <Skill
        title={skill.title}
        description={skill.description}
        image={skill.image}
        alt={skill.alt}
        link={skill.link}
        key={index}
      />
    );
  })}
</div> */
}
