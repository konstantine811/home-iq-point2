import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
  children: React.ReactNode;
}

const CarouselDots = ({ children }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [dots, setDots] = useState<number[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    // Get the correct number of slides (for dots)
    const snapList = api.scrollSnapList();
    setDots(
      Array(snapList.length)
        .fill(0)
        .map((_, i) => i)
    );

    // Event listener to update active slide index
    const updateActiveIndex = () => {
      const newIndex = api.selectedScrollSnap(); // Correct method to get current index
      setActiveIndex(newIndex);
    };

    api.on("select", updateActiveIndex); // Listen for slide changes

    // Clean up the event listener on unmount
    return () => {
      api.off("select", updateActiveIndex);
    };
  }, [api]);
  return (
    <Carousel setApi={setApi}>
      {children}
      <div className="flex justify-center gap-4 mt-10">
        {dots.map((dotIndex) => (
          <span
            key={dotIndex}
            className={`h-[10px] w-[10px] transition-all rounded-full mx-1 cursor-pointer ${
              activeIndex === dotIndex ? "bg-blue-900" : "bg-gray-300"
            }`}
            onClick={() => {
              // Scroll to the specific slide
              api?.scrollTo(dotIndex);
            }}
          ></span>
        ))}
      </div>
      <CarouselPrevious className="hover:bg-red-100  custom-carousel-arrow" />
      <CarouselNext className="hover:bg-red-100  custom-carousel-arrow" />
    </Carousel>
  );
};

export default CarouselDots;
