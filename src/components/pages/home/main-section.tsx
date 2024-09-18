"use client";

import InputGroup from "@/components/ui-updated/input-group";
import { Button } from "@/components/ui/button";

const MainSection = () => {
  const items = Array.from({ length: 16 });
  return (
    <div className="w-full grow flex flex-col justify-center items-center py-10">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="text-5xl font-semibold max-w-[620px] mx-auto text-center leading-12 pb-10">
          Get the right local pro for any home project
        </h1>
        <div className="w-full flex flex-wrap gap-8 justify-center pb-20">
          <InputGroup />
          <Button className="bg-gray-900 h-[88px] min-w-[235px] flex items-center justify-center text-white px-8 py-4 text-sm font-semibold hover:bg-gray-900/70 rounded-full">
            Start project
          </Button>
        </div>
        <div className="max-w-[1096px] flex flex-wrap items-center justify-center gap-10">
          {items.map((_, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-4"
            >
              <span className="w-[56px] h-[56px] rounded-full bg-gray-600"></span>
              <p className="font-medium text-sm text-black">Name of item</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
