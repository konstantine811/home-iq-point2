import ColoredSection from "@/components/common/colored-section";
import ProjectSteps from "@/components/common/project-steps";

const SeventhSHowItWorks = () => {
  return (
    <ColoredSection wrapClasses="md:min-h-screen py-8 flex flex-col justify-center items-center">
      <h2 className="text-2xl md:text-3xl text-blue-900 font-extrabold pb-12 text-center">
        How it works
      </h2>
      <ProjectSteps />
    </ColoredSection>
  );
};

export default SeventhSHowItWorks;
