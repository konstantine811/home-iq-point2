"use client";

import CardService from "@/components/common/card-service";
import CarouselDots from "@/components/ui-updated/carousel-dots";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ICardService } from "@/models/data-config/card.model";

const CardConfig: ICardService = {
  imagePath: "/images/builder-man.jpg",
  imageAlt: "builder-main",
  rate: 4.94,
  countRated: "(1k+)",
  description:
    "Lorem ipsum dolor sit amet onsectetur Id arcu lobortis at egestas",
  btnPrice: "Start project from $245",
};

const FourthSection = () => {
  return (
    <div className="min-h-screen gap-8 flex flex-col justify-center items-center">
      <div className="container">
        <h2 className="text-2xl text-blue-900 font-extrabold pb-12">
          Popular home projects
        </h2>
        <div>
          <CarouselDots>
            <CarouselContent>
              <CarouselItem className="basis-1/3">
                <CardService data={CardConfig} />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <CardService data={CardConfig} />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <CardService data={CardConfig} />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <CardService data={CardConfig} />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <CardService data={CardConfig} />
              </CarouselItem>
            </CarouselContent>
          </CarouselDots>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
