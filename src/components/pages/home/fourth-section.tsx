"use client";

import CarouselSection from "@/components/common/carousel-section";
import ServiceCard from "@/components/common/service-card";
import { CarouselItem } from "@/components/ui/carousel";
import { IServiceCard } from "@/models/data-config/card.model";

const CardConfig: IServiceCard = {
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
    <CarouselSection title="Popular home projects">
      {Array.from({ length: 8 }, (_, i) => (
        <CarouselItem
          key={i++}
          className="basis-full sm:basis-1/2 lg:basis-1/3 flex justify-center"
        >
          <ServiceCard data={CardConfig} />
        </CarouselItem>
      ))}
    </CarouselSection>
  );
};

export default FourthSection;
