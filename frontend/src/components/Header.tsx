import { links, logo } from "@/assets/assets";
import AnimatedSection from "@/utils/AnimatedSection";
import Image from "next/image";
import Navigation from "./Navigation";
import WavyText from "@/utils/WaveText";

const Header = () => {

  return (
    // <AnimatedSection>
      <header className="container mx-auto py-3 navbar flex justify-between items-center">
        <div className="logo flex items-center">
          <Image src={logo.src} alt="hello" width={30} height={30} />
          <span className="text-2xl font-semibold">
            <WavyText text="uzaifa"  duration={.7}/>
          </span>
        </div>
        <Navigation />
      </header>
    // </AnimatedSection>
  );
};
export default Header;
