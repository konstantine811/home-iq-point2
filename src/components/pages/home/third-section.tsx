import Image from "next/image";

const imageArray = [
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
  return (
    <div className="bg-gray-700 py-[72px]">
      <div className="container grid grid-cols-4 gap-y-8 gap-x-7 justify-center">
        {imageArray.map((data, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={data.path}
              alt={`Image ${index + 1}`}
              className="object-contain"
              width={data.width}
              height={data.height}
              priority={index === 0} // Set priority for the first image to load faster
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdSection;
