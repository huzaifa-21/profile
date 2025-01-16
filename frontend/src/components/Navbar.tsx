import Image from "next/image";
import Navigation from "./Navigation";
import WavyText from "@/utils/WaveText";

const Navbar = () => {

  return (
    <header className=" z-50 sticky top-0 bg-backgroundColor">
      <div className="container mx-auto py-3 navbar flex justify-between items-center">
        <div className="logo flex items-center">
          <Image src="/Vector-4.svg" alt="hello" width={30} height={30} />
          <span className="text-2xl font-semibold">
            <WavyText text="uzaifa" duration={0.7} />
          </span>
        </div>
        <Navigation />
      </div>
    </header>
  );
};
export default Navbar;
