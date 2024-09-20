import { ThemeColors } from "@/configs/theme-colors";
import { Star } from "lucide-react"; // Icons from Lucide React
import Image from "next/image";
import BadgeCheck from "@/assets/svg/badge-check.svg";

interface Props {
  labelColor: ThemeColors;
  title: string;
  countStar: number;
  description: string;
}

const ReviewCard = ({ labelColor, countStar, description, title }: Props) => {
  return (
    <div className="bg-white border border-gray-400 rounded-lg p-6 min-w-[514px]">
      <div className="flex gap-4">
        {/* Left Section - Avatar */}
        <div className="relative">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-semibold"
            style={{ backgroundColor: labelColor }}
          >
            {title[0].toUpperCase()}
          </div>
          <div className="p-1 bg-white rounded-full absolute -right-2 -bottom-2">
            {/* Google Icon (Placeholder) */}
            <Image
              src="/logo-img/google.png"
              alt="Google"
              width={20}
              height={20}
            />
          </div>
        </div>

        {/* Right Section - Review Content */}
        <div>
          {/* User Name and Verified Icon */}
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <BadgeCheck />
          </div>

          {/* Star Rating */}
          <div className="flex items-center mt-1">
            {Array(countStar)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  className="text-yellow-700"
                  size={16}
                  fill={ThemeColors.yellow}
                />
              ))}
          </div>
        </div>
      </div>
      <p className="mt-2 text-blue-900">{description}</p>
    </div>
  );
};

export default ReviewCard;
