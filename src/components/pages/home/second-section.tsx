"use client";

import Bathroom from "@/components/svg-icons/bathroom";

const SVG_PATH_CONFIG = [
  {
    icon: <Bathroom />,
    title: "Bathroom Remodel",
  },
  // {
  //   path: () => import("@/assets/svg/kitchen.svg"),
  //   title: "Kitchen Remodel",
  // },
  // {
  //   path: () => import("@/assets/svg/gutter.svg"),
  //   title: "Gutter",
  // },
  // {
  //   path: () => import("@/assets/svg/home-security.svg"),
  //   title: "Home Security",
  // },
  // {
  //   path: () => import("@/assets/svg/hvac.svg"),
  //   title: "HVAC",
  // },
  // {
  //   path: () => import("@/assets/svg/roofing.svg"),
  //   title: "Roofing",
  // },
  // {
  //   path: () => import("@/assets/svg/windows.svg"),
  //   title: "Windows",
  // },
  // {
  //   path: () => import("@/assets/svg/bath-to-shower.svg"),
  //   title: "Bath to Shower",
  // },
  // {
  //   path: () => import("@/assets/svg/walk-in-tubs.svg"),
  //   title: "Walk-in Tubs",
  // },
  // {
  //   path: () => import("@/assets/svg/walk-in-shower.svg"),
  //   title: "Walk-in Shower",
  // },
];

const SecondSection = () => {
  return (
    <section className="container grid md:grid-cols-5 grid-cols-2 md:gap-8 mb-8">
      {SVG_PATH_CONFIG.map((data, index) => {
        return (
          <div
            className="flex flex-col md:p-4 items-center justify-center h-[128px] hover:bg-red-100 transition-all duration-300 rounded-lg cursor-pointer"
            key={index}
          >
            <div className="grow flex items-end mb-4 w-14 h-14">
              {data.icon}
            </div>
            <p className="text-blue-900 font-semibold text-sm text-center pb-2">
              {data.title}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default SecondSection;
