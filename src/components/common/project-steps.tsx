"use client";

import { User, Building, Flag, MapPin, MessageSquare } from "lucide-react";
import ScrolledCard from "./scrolled-card";
import CardItems from "@/components/common/card-items";

import { SVG_PATH_CONFIG } from "@/configs/cards";
import dynamic from "next/dynamic";
import SingleItem from "./items-components/single-item";
import CoupleItems from "./items-components/couple-items";
import MessagePopupContent from "./message-popup-content";
import { StepperData } from "@/configs/stepper";
import ArrayStepper from "./array-stepper";
import CarouselDots from "../ui-updated/carousel-dots";
import { CarouselContent, CarouselItem } from "../ui/carousel";
import Stepper from "./stepper";

const CoupleCardItems = [
  {
    icon: <User className="text-red-700" />,
    title: "Full name",
    subtitle: "John Doe",
  },

  {
    icon: <Building className="text-red-700" />,
    title: "City",
    subtitle: "New York",
  },
  {
    icon: <Flag className="text-red-700" />,
    title: "State",
    subtitle: "New York",
  },
  {
    icon: <MapPin className="text-red-700" />,
    title: "Address",
    subtitle: "1234 Street Name",
  },
  {
    icon: <MessageSquare className="text-red-700" />,
    title: "Email",
    subtitle: "john_doe@gmai.com",
  },
];

const ProjectSteps = () => {
  return (
    <>
      <div className="hidden lg:block">
        <div className="grid grid-cols-3 place-items-center gap-10 pb-6">
          <ScrolledCard>
            <CardItems>
              {SVG_PATH_CONFIG.map((data, index) => {
                const SvgComponent = dynamic(data.path);
                return (
                  <SingleItem key={index} title={data.title}>
                    <div className="w-[40px] h-[40px]">
                      <SvgComponent />
                    </div>
                  </SingleItem>
                );
              })}
            </CardItems>
          </ScrolledCard>
          <ScrolledCard>
            <CardItems>
              {CoupleCardItems.map((data, index) => {
                return (
                  <CoupleItems
                    key={index}
                    title={data.title}
                    subtitle={data.subtitle}
                  >
                    {data.icon}
                  </CoupleItems>
                );
              })}
            </CardItems>
          </ScrolledCard>
          <ScrolledCard isEnd>
            <MessagePopupContent
              isChecked
              text="Lorem ipsum dolor sit amet consectetur. Dolor senectus id sodales mi
        imperdiet pellentesque. Lorem ipsum dolor sit amet consectetur. Dolor
        senectus"
              time="9:18 PM"
            />
          </ScrolledCard>
        </div>
        <ArrayStepper className="lg:grid-cols-3" stepperData={StepperData} />
      </div>
      <MobileProjectSteps />
    </>
  );
};

const MobileProjectSteps = () => {
  return (
    <CarouselDots className="lg:hidden">
      <CarouselContent>
        <CarouselItem className="basis-full flex flex-col justify-center items-center gap-6">
          <ScrolledCard>
            <CardItems>
              {SVG_PATH_CONFIG.map((data, index) => {
                const SvgComponent = dynamic(data.path);
                return (
                  <SingleItem key={index} title={data.title}>
                    <div className="w-[40px] h-[40px]">
                      <SvgComponent />
                    </div>
                  </SingleItem>
                );
              })}
            </CardItems>
          </ScrolledCard>
          <Stepper
            title={StepperData[0].title}
            label={StepperData[0].label}
            className="relative w-full flex justify-center after:border-b after:border-dashed after:border-b-gray-500 after:w-full after:h-px after:absolute after:top-1/2 after:left-1/2 after:z-0 z-10"
          />
        </CarouselItem>
        <CarouselItem className="basis-full flex flex-col justify-center items-center gap-6">
          <ScrolledCard>
            <CardItems>
              {CoupleCardItems.map((data, index) => {
                return (
                  <CoupleItems
                    key={index}
                    title={data.title}
                    subtitle={data.subtitle}
                  >
                    {data.icon}
                  </CoupleItems>
                );
              })}
            </CardItems>
          </ScrolledCard>
          <Stepper
            title={StepperData[1].title}
            label={StepperData[1].label}
            className="relative w-full flex justify-center after:border-b after:border-dashed after:border-b-gray-500 after:w-full after:h-px after:absolute after:top-1/2 after:left-1/2 after:z-0 z-10 before:border-dashed before:border-b before:border-gray-500 before:w-full before:h-px before:absolute before:top-1/2 before:-left-1/2 before:z-0"
          />
        </CarouselItem>
        <CarouselItem className="basis-full flex flex-col justify-center items-center gap-6">
          <ScrolledCard isEnd>
            <MessagePopupContent
              isChecked
              text="Lorem ipsum dolor sit amet consectetur. Dolor senectus id sodales mi
      imperdiet pellentesque. Lorem ipsum dolor sit amet consectetur. Dolor
      senectus"
              time="9:18 PM"
            />
          </ScrolledCard>
          <Stepper
            title={StepperData[2].title}
            label={StepperData[2].label}
            className="relative w-full flex justify-center before:border-dashed before:border-b before:border-gray-500 before:w-full before:h-px before:absolute before:top-1/2 before:-left-1/2 before:z-0"
          />
        </CarouselItem>
      </CarouselContent>
    </CarouselDots>
  );
};

export default ProjectSteps;
