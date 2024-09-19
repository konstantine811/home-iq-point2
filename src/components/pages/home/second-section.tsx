import dynamic from "next/dynamic";
const svgPathConfig = [
  {
    path: () => import("@/assets/svg/bathroom.svg"),
    title: "Bathroom Remodel",
  },
  {
    path: () => import("@/assets/svg/kitchen.svg"),
    title: "Kitchen Remodel",
  },
  {
    path: () => import("@/assets/svg/gutter.svg"),
    title: "Gutter",
  },
  {
    path: () => import("@/assets/svg/home-security.svg"),
    title: "Home Security",
  },
  {
    path: () => import("@/assets/svg/hvac.svg"),
    title: "HVAC",
  },
  {
    path: () => import("@/assets/svg/roofing.svg"),
    title: "Roofing",
  },
  {
    path: () => import("@/assets/svg/windows.svg"),
    title: "Windows",
  },
  {
    path: () => import("@/assets/svg/bath-to-shower.svg"),
    title: "Bath to Shower",
  },
  {
    path: () => import("@/assets/svg/walk-in-tubs.svg"),
    title: "Walk-in Tubs",
  },
  {
    path: () => import("@/assets/svg/walk-in-shower.svg"),
    title: "Walk-in Shower",
  },
];

const SecondSection = () => {
  return (
    <div className="container grid md:grid-cols-5 grid-cols-2 gap-8 mb-8">
      {svgPathConfig.map((data, index) => {
        const SvgComponent = dynamic(data.path);
        return (
          <div
            className="flex flex-col p-4 items-center justify-center h-[128px] hover:bg-red-100 transition-all duration-300 rounded-lg cursor-pointer"
            key={index}
          >
            <div className="grow flex items-end mb-4">
              <SvgComponent />
            </div>
            <p className="text-blue-900 font-semibold text-sm text-center">
              {data.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SecondSection;
