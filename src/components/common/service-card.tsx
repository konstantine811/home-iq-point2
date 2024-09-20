import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SmoothedStar from "../svg-icons/smoothed-star";
import { IServiceCard } from "@/models/data-config/card.model";

interface Props {
  data: IServiceCard;
}

const ServiceCard = ({
  data: { imagePath, imageAlt, rate, countRated, description, btnPrice },
}: Props) => {
  return (
    <Card className="w-full rounded-xl shadow-none max-w-[385px]">
      <CardHeader className="p-0 mb-4 h-[269px] relative">
        {/* Image */}
        <Image
          src={imagePath}
          alt={imageAlt}
          width={386}
          height={269}
          className="rounded-t-xl object-cover h-full w-full"
        />
      </CardHeader>
      <CardContent className="p-6">
        {/* Rating and Reviews */}
        <div className="flex items-center mb-2">
          <SmoothedStar />
          <span className="text-sm text-blue-800 ml-2 mr-0.5 font-semibold">
            {rate}
          </span>
          <span className="text-sm text-gray-600">{countRated}</span>
        </div>
        {/* Description */}
        <p className="text-blue-900 font-semibold">{description}</p>
      </CardContent>
      <CardFooter className="px-6 pb-4">
        {/* CTA Button */}
        <Button
          variant="outline"
          className="w-full shadow border-gray-300 text-red-700 hover:bg-red-100 hover:text-red-700 rounded-xl text-base font-bold"
        >
          {btnPrice}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
