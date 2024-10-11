"use client";

import { SVG_PATH_CONFIG } from "@/configs/cards";
import dynamic from "next/dynamic";

const SecondSection = () => {
  return (
    <section className="container overflow-x-auto md:overflow-visible grid md:grid-cols-5 md:grid-rows-2 grid-flow-col auto-cols-max md:gap-4 mb-8">
      {SVG_PATH_CONFIG.map((data, index) => {
        const SvgComponent = dynamic(data.path);
        return (
          <div
            className="flex flex-col p-4 items-center justify-center h-[128px] w-[150px] md:w-auto hover:bg-red-100 transition-all duration-300 rounded-lg cursor-pointer"
            key={index}
          >
            <div className="mb-4 w-14 h-14">
              <SvgComponent />
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
