import AnimatedSection from "@/utils/AnimatedSection";
import WavyText from "@/utils/WaveText";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="landing-page flex gap-10 items-center justify-between container mx-auto py-32 ">
      <div className="info">
        <div className="name-title">
          <div className="name text-6xl font-semibold ">
            <WavyText text="Huzaifa Ali" duration={0.1} />
          </div>
          <div className="job-title text-2xl">
            <WavyText text="Front-End Developer" delay={1.5} />
          </div>
        </div>
        <AnimatedSection delay={2}>
          <div className="description max-w-lg text-paragrahColor my-4 leading-relaxed text-lg">
            Welcome to my digital playground! I specialize in crafting visually
            stunning and user-friendly web experiences. From clean code to
            captivating design, I'm here to turn your digital dreams into
            reality. Let's build something amazing together!
          </div>
        </AnimatedSection>
        <AnimatedSection delay={1.4}>
          <div className="links mt-10 flex gap-2">
            {[
              { icon: faFacebookF, href: "https://www.facebook.com/7ozifaaa/" },
              { icon: faGithub, href: "https://github.com/huzaifa-21" },
              {
                icon: faLinkedin,
                href: "https://linkedin.com/in/huzaifa-ali-frontend",
              },
              { icon: faEnvelope, href: "mailto:huzaifasalah9@gmail.com" },
            ].map((link, index) => {
              return (
                <a
                  href={link.href}
                  key={index}
                  className="relative group overflow-hidden before:rounded-full before:absolute before:duration-300  before:w-0 before:h-0 before:bg-secondaryColor hover:before:w-full hover:before:h-full p-4 grid place-items-center border-secondaryColor border-4 rounded-full w-20 h-20"
                  target="blank"
                >
                  <FontAwesomeIcon
                    icon={link.icon}
                    className="text-4xl duration-300 group-hover:text-backgroundColor relative"
                  />
                </a>
              );
            })}
          </div>
        </AnimatedSection>
        <AnimatedSection delay={1}>
          <a
            href="/Huzaifa Ali.pdf"
            download="Huzaifa Ali.pdf"
            className="btn-primary mt-14 block w-fit"
          >
            Download CV
          </a>
        </AnimatedSection>
      </div>
      <div className="my-pic">
        <AnimatedSection>
          <Image
            src={"/portfolio.jpeg"}
            alt="my image"
            width={500}
            height={0}
          />
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Landing;
