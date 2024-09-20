import ColoredSection from "@/components/common/colored-section";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import RedButton from "./red-button";

const NinthSection = () => {
  return (
    <ColoredSection wrapClasses="py-16" innerClasses="sm:flex">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl max-w-xl font-extrabold text-blue-900">
        Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
      </h2>

      {/* Input Fields */}
      <div className="flex flex-col lg:flex-row items-center justify-end gap-4 mt-4 lg:mt-0 w-full">
        {/* Email Input */}
        <div className="relative w-full xl:w-auto">
          <Input
            type="email"
            placeholder="Email address"
            className="pr-10 border-gray-400 text-blue-900 shadow-none placeholder-gray-900"
          />
        </div>

        {/* ZIP Code Input */}
        <div className="relative w-full xl:w-auto">
          <MapPin
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-900"
            size={20}
          />
          <Input
            type="text"
            placeholder="ZIP code"
            className="pl-10 border-gray-400 text-blue-900 shadow-none placeholder-gray-900"
          />
        </div>

        {/* Send Button */}
        <div className="w-full xl:w-auto">
          <RedButton title="Send"></RedButton>
        </div>
      </div>
    </ColoredSection>
  );
};

export default NinthSection;
