"use client";
import CarouselSection from "@/components/common/carousel-section";
import ProjectCard from "@/components/common/project-card";
import { CarouselItem } from "@/components/ui/carousel";

const SixthSection = () => {
  return (
    <CarouselSection title="Popular remodeling projects">
      {Array.from({ length: 8 }, (_, i) => (
        <CarouselItem
          key={i++}
          className="basis-full sm:basis-1/2 lg:basis-1/3 flex justify-center"
        >
          <ProjectCard />
        </CarouselItem>
      ))}
    </CarouselSection>
  );
};

export default SixthSection;
