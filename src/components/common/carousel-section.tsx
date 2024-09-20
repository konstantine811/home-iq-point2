import { ReactNode } from "react";
import CarouselDots from "../ui-updated/carousel-dots";
import { CarouselContent } from "../ui/carousel";

interface Props {
  title: string;
  children: ReactNode;
}

const CarouselSection = ({ title, children }: Props) => {
  return (
    <section className="min-h-screen py-8 flex flex-col justify-center items-center">
      <div className="container">
        <h2 className="text-2xl md:text-3xl text-blue-900 font-extrabold pb-4 md:pb-8 lg:pb-12">
          {title}
        </h2>
        <CarouselDots>
          <CarouselContent>{children}</CarouselContent>
        </CarouselDots>
      </div>
    </section>
  );
};

export default CarouselSection;
