import ColoredSection from "@/components/common/colored-section";
import Image from "next/image";
import RedButton from "./red-button";

const TwelveSection = () => {
  return (
    <ColoredSection wrapClasses="grow flex flex-col justify-center py-8 lg:py-16">
      <div className="flex flex-col lg:flex-row lg:gap-8 items-center justify-between w-full">
        {/* Left Text Section */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
          </h2>
          <p className="text-blue-900 text-lg mb-10">
            Lorem ipsum dolor sit amet consectetur. Dolor senectus id sodales mi
            imperdiet pellentesque. Lorem ipsum dolor sit amet consectetur.
            Dolor senectus: Lorem ipsum dolor sit amet consectetur. Dolor
            senectus:
          </p>
          <RedButton className="max-w-40" title="Send"></RedButton>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <Image
            src="/images/builder-man-2.jpg"
            alt="Worker image"
            width={582}
            height={600}
            className="rounded-xl"
          />
        </div>
      </div>
    </ColoredSection>
  );
};

export default TwelveSection;
