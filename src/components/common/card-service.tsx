import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SmoothedStar from "../svg-icons/smoothed-star";
import { ICardService } from "@/models/data-config/card.model";

interface Props {
  data: ICardService;
}

const CardService = ({
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
      <CardContent className="p-4">
        {/* Rating and Reviews */}
        <div className="flex items-center mb-2 space-x-1">
          <SmoothedStar />
          <span className="text-sm text-blue-800 font-semibold">{rate}</span>
          <span className="text-sm text-gray-600">{countRated}</span>
        </div>
        {/* Description */}
        <p className="text-blue-900 font-semibold">{description}</p>
      </CardContent>
      <CardFooter className="px-4 pb-4">
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

export default CardService;
