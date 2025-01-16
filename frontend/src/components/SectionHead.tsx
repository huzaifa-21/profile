import WavyText from "@/utils/WaveText";

const SectionHead = ({ text }: { text: string }) => {
  return (
    <div className="text-8xl opacity-20  py-12 font-header font-normal ">
      <WavyText text={`${text}`} center={true} delay={0.2} duration={0.1} />
    </div>
  );
};
export default SectionHead;
