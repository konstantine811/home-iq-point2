import CarouselInfinite from "@/components/common/carousel-infinite";
import { Button } from "@/components/ui/button";

const SecondSection = () => {
  const items = Array.from({ length: 16 });
  const items2 = Array.from({ length: 10 });
  return (
    <div className="w-full">
      <CarouselInfinite>
        {items.map((_, index) => {
          return (
            <Button
              key={index}
              className="rounded-full bg-gray-600 hover:bg-gray-700 text-sm text-black px-8 py-4"
            >
              Company logo
            </Button>
          );
        })}
      </CarouselInfinite>
      <CarouselInfinite delay={300}>
        {items2.map((_, index) => {
          return (
            <Button
              key={index}
              className="rounded-full bg-gray-600 hover:bg-gray-700 text-sm text-black px-8 py-4"
            >
              Company logo
            </Button>
          );
        })}
      </CarouselInfinite>
    </div>
  );
};

export default SecondSection;
