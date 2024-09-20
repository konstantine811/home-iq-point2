import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}

const CompletedProjectCard = ({ icon, title, description }: Props) => {
  return (
    <Card className="inline-block rounded-lg shadow-md  bg-white">
      <CardContent className="p-10 flex flex-col justify-center items-center gap-4">
        {/* Number */}
        <h2 className="text-4xl font-bold text-blue-900">{title}</h2>

        {/* Icon and Text */}
        <div className="flex items-center space-x-2 mt-2">
          {icon}
          <p className="text-md font-medium text-blue-900">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompletedProjectCard;
