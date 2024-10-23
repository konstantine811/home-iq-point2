import ColoredSection from "@/components/common/colored-section";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import RedButton from "./red-button";
import InputHQ from "@/components/common/input-h-q";

const NinthSEmailSend = () => {
  return (
    <ColoredSection wrapClasses="py-16" innerClasses="sm:flex gap-3">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl max-w-xl font-extrabold text-blue-900">
        Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
      </h2>

      {/* Input Fields */}
      <div className="flex flex-col lg:flex-row items-center justify-end gap-4 mt-4 lg:mt-0 w-full">
        {/* Email Input */}
        <InputHQ
          type="email"
          placeholder="Email address"
          className="relative w-full xl:w-auto"
        />

        {/* ZIP Code Input */}
        <InputHQ
          type="text"
          placeholder="ZIP code"
          className="relative w-full xl:w-auto"
          beforeChildren={
            <MapPin
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-900"
              size={20}
            />
          }
        />

        {/* Send Button */}
        <div className="w-full xl:w-auto">
          <RedButton title="Send"></RedButton>
        </div>
      </div>
    </ColoredSection>
  );
};

export default NinthSEmailSend;
