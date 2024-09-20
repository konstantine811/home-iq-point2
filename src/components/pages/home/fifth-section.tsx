import ColoredSection from "@/components/common/colored-section";
import CompletedProjectCard from "@/components/common/completed-project-card";
import Users from "@/components/svg-icons/users";
import { CheckCircle, Star, Trophy } from "lucide-react";

const CardConfig = [
  {
    icon: <CheckCircle className="text-red-700" size={24} />,
    title: "65,224",
    description: "Completed projects",
  },
  {
    icon: <Star className="text-red-700" size={24} />,
    title: "4.95",
    description: "Average rating",
  },
  {
    icon: <Users />,
    title: "200+",
    description: "Number of contractors",
  },
  {
    icon: <Trophy className="text-red-700" size={24} />,
    title: "20+",
    description: "Years on the market",
  },
];

const FifthSection = () => {
  return (
    <ColoredSection wrapClasses="py-16">
      <h2 className="text-center text-blue-900 text-2xl  md:text-5xl font-extrabold pb-8 md:pb-10">
        Lorem ipsum dolor
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-between">
        {CardConfig.map((config, index) => (
          <CompletedProjectCard
            key={index}
            icon={config.icon}
            title={config.title}
            description={config.description}
          />
        ))}
      </div>
    </ColoredSection>
  );
};

export default FifthSection;
