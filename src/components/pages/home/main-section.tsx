"use client";

import InputGroup from "@/components/ui-updated/input-group";
import Image from "next/image";

const MainSection = () => {
  const items = Array.from({ length: 16 });
  return (
    <div className="w-full grow flex justify-center">
      <div className="xl:container w-full relative flex flex-col justify-center">
        <div className="absolute left-0 top-0 z-10 w-full h-full overflow-hidden xl:rounded-2xl after:bg-black/65 after:w-full after:h-full after:absolute">
          <Image
            alt="main-background"
            className="w-full object-cover "
            src="/bg/main-bg.jpg"
            fill
            priority
          />
        </div>
        <div className="container relative z-50 py-10">
          <div className="max-w-[713px] mx-auto text-center text-white pb-10">
            <h1 className="text-5xl  font-extrabold  leading-12 pb-6">
              Get the right local pro for any home project
            </h1>
            <p className="text-lg font-semibold">
              Over 200 verified contractors to complete your household tasks
            </p>
          </div>
          <div className="max-w-[716px] mx-auto">
            <InputGroup className="mb-2" />
            <p className="text-base font-semibold text-white">
              For example:{" "}
              <a className="underline" href="#">
                Remodel a bathroom
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
