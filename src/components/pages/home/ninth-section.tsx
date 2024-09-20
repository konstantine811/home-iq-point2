import ColoredSection from "@/components/common/colored-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";

const NinthSection = () => {
  return (
    <ColoredSection wrapClasses="py-16" innerClasses="sm:flex">
      {/* Title */}
      <h2 className="text-3xl max-w-xl font-extrabold text-blue-900">
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
          <Button className="min-w-40 w-full bg-red-700 hover:bg-red-700 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50 font-extrabold">
            Send
          </Button>
        </div>
      </div>
    </ColoredSection>
  );
};

export default NinthSection;
