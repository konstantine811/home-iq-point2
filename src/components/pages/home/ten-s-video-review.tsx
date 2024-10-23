import FullScreenSection from "@/components/common/full-screen-section";
import TextBox from "@/components/common/text-box";
import { ThemeColors } from "@/configs/theme-colors";
import { Clock, Wallet } from "lucide-react";

const TenSVideoReview = () => {
  return (
    <FullScreenSection title="Video review">
      <div className="flex justify-between items-center flex-wrap border border-gray-400 rounded-xl gap-2 xl:gap-16">
        <div className="max-w-[624px] w-full pt-12 pb-4 xl:py-12 pl-12">
          {/* Left Section - Text and Info */}
          <div className="space-y-4">
            {/* Badges */}
            <div className="flex space-x-4">
              <TextBox isBordered>
                <Clock className="text-red-700" size={20} />
                <p className="text-blue-900 text-sm font-semibold">
                  from 14 days
                </p>
              </TextBox>
              {/* Price */}
              <TextBox isBordered>
                <Wallet color={ThemeColors["red-700"]} />
                <p className="text-blue-900 text-sm font-semibold">
                  from $2345
                </p>
              </TextBox>
            </div>

            {/* Title */}
            <h4 className="text-2xl font-bold text-blue-900">
              Lorem ipsum dolor sit amet onsectetur Id arcu lobortis at
              egestasLorem ipsum dolor sit amet
            </h4>

            {/* Description */}
            <p className="text-blue-900">
              Lorem ipsum dolor sit amet consectetur. Dolor senectus id sodales
              mi imperdiet pellentesque. Lorem ipsum dolor sit amet consectetur.
              Dolor senectus:
            </p>

            {/* List */}
            <ul className="list-disc pl-6 space-y-2 text-blue-900">
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>Lorem ipsum dolor sit amet consectetur</li>
            </ul>
          </div>
        </div>

        {/* Right Section - Image/Video */}
        <div className="xl:max-w-[504px] w-full xl:h-[504px]">
          <video
            controls
            playsInline
            className="rounded-lg shadow-lg object-cover w-full  h-full"
          >
            <source src="/video/builder-bathroom.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </FullScreenSection>
  );
};

export default TenSVideoReview;
