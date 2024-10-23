import Image from "next/image";
import ColoredSection from "@/components/common/colored-section";
import { IImageConfig } from "@/models/data-config/image-config.model";
import InfiniteCarousel from "@/components/common/infinite-carousel";
import { splitArray } from "@/utils/array";

const imageArray: IImageConfig[] = [
  {
    width: 205,
    height: 59,
    path: "/logo-img/home-pride.png",
  },
  {
    width: 86,
    height: 69,
    path: "/logo-img/all-acrylic.png",
  },
  {
    width: 227,
    height: 52,
    path: "/logo-img/pacific-bath.png",
  },
  {
    width: 153,
    height: 49,
    path: "/logo-img/bath-experts.png",
  },
  {
    width: 187,
    height: 57,
    path: "/logo-img/kohler.png",
  },
  {
    width: 97,
    height: 69,
    path: "/logo-img/premier-home-pros.png",
  },
  {
    width: 183,
    height: 40,
    path: "/logo-img/da-bella.png",
  },
  {
    width: 158,
    height: 54,
    path: "/logo-img/masters-home-solutions.png",
  },
];

const ThirdSection = () => {
  const { firstHalf, secondHalf } = splitArray<IImageConfig>(imageArray);
  return (
    <ColoredSection wrapClasses="py-[12px] md:py-[72px]">
      <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-7 justify-center">
        {imageArray.map((data, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={data.path}
              alt={`Image ${index + 1}`}
              className="object-contain h-full w-auto"
              width={data.width}
              height={data.height}
              priority={index === 0} // Set priority for the first image to load faster
            />
          </div>
        ))}
      </div>
      <div className="md:hidden flex gap-4 items-center w-full">
        <InfiniteCarousel>
          {[...firstHalf, ...firstHalf].map((image, index) => (
            <div
              key={index}
              style={{ minWidth: 70 + "px" }}
              className="flex justify-center items-center p-2"
            >
              <Image
                src={image.path}
                alt={image.path}
                width={70}
                height={30}
                className="object-cover"
              />
            </div>
          ))}
        </InfiniteCarousel>
      </div>
      <div className="md:hidden flex gap-4 items-center w-full">
        <InfiniteCarousel delayBeforeStart={300}>
          {[...secondHalf, ...secondHalf].map((image, index) => (
            <div
              key={index}
              style={{ minWidth: 70 + "px" }}
              className="flex justify-center items-center p-2"
            >
              <Image
                src={image.path}
                alt={image.path}
                width={70}
                height={30}
                className="object-cover"
              />
            </div>
          ))}
        </InfiniteCarousel>
      </div>
    </ColoredSection>
  );
};

export default ThirdSection;
