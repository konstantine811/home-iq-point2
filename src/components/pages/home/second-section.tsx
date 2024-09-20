import { SVG_PATH_CONFIG } from "@/configs/cards";
import dynamic from "next/dynamic";

const SecondSection = () => {
  return (
    <section className="container grid md:grid-cols-5 grid-cols-2 md:gap-8 mb-8">
      {SVG_PATH_CONFIG.map((data, index) => {
        const SvgComponent = dynamic(data.path);
        return (
          <div
            className="flex flex-col md:p-4 items-center justify-center h-[128px] hover:bg-red-100 transition-all duration-300 rounded-lg cursor-pointer"
            key={index}
          >
            <div className="grow flex items-end mb-4 w-14 h-14">
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
