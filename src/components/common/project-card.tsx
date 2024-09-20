import { Clock } from "lucide-react";
import Image from "next/image";
import Wallet from "../svg-icons/wallet";
import TextBox from "./text-box";

const ProjectCard = () => {
  return (
    <div className="bg-white rounded-xl w-full max-w-sm relative group overflow-hidden cursor-pointer">
      {/* Image */}
      <div className="relative">
        <Image
          src="/images/bathroom.jpg" // Replace with your image path
          alt="Kitchen remodeling"
          width={400}
          height={300}
          className="rounded-xl object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        {/* Overlay Text */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-6 pb-8 rounded-b-xl">
          <h3 className="text-white text-xl font-extrabold">
            Kitchen remodeling
          </h3>

          {/* Info Section */}
          <div className="flex gap-2 items-center mt-4">
            {/* Duration */}
            <TextBox>
              <Clock className="text-blue-900" size={20} />
              <p className="text-blue-900 text-sm font-semibold">
                from 14 days
              </p>
            </TextBox>
            {/* Price */}
            <TextBox>
              <Wallet />
              <p className="text-blue-900 text-sm font-semibold">from $2345</p>
            </TextBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
