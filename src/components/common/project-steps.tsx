"use client";

import { User, Building, Flag, MapPin, MessageSquare } from "lucide-react";
import { StepperData } from "@/configs/stepper";
import ArrayStepper from "./array-stepper";
import CarouselDots from "../ui-updated/carousel-dots";
import { CarouselContent, CarouselItem } from "../ui/carousel";
import Stepper from "./stepper";
import Image from "next/image";

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
          <Image
            src={"/images/select_home_project.png"}
            alt={"Select Home Project Image"}
            width={387}
            height={300}
          />
          <Image
            src={"/images/basic_questions.png"}
            alt={"Baisc Questions Image"}
            width={387}
            height={300}
          />
          <Image
            src={"/images/connect_with_pro.png"}
            alt={"Connect with Pro Image"}
            width={387}
            height={300}
          />
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
          <Image
            src={"/images/select_home_project.png"}
            alt={"Select Home Project Image"}
            width={387}
            height={300}
          />
          <Stepper
            title={StepperData[0].title}
            label={StepperData[0].label}
            className="relative w-full flex justify-center after:border-b after:border-dashed after:border-b-gray-500 after:w-full after:h-px after:absolute after:top-1/2 after:left-1/2 after:z-0 z-10"
          />
        </CarouselItem>
        <CarouselItem className="basis-full flex flex-col justify-center items-center gap-6">
          <Image
            src={"/images/basic_questions.png"}
            alt={"Baisc Questions Image"}
            width={387}
            height={300}
          />
          <Stepper
            title={StepperData[1].title}
            label={StepperData[1].label}
            className="relative w-full flex justify-center after:border-b after:border-dashed after:border-b-gray-500 after:w-full after:h-px after:absolute after:top-1/2 after:left-1/2 after:z-0 z-10 before:border-dashed before:border-b before:border-gray-500 before:w-full before:h-px before:absolute before:top-1/2 before:-left-1/2 before:z-0"
          />
        </CarouselItem>
        <CarouselItem className="basis-full flex flex-col justify-center items-center gap-6">
          <Image
            src={"/images/connect_with_pro.png"}
            alt={"Connect with Pro Image"}
            width={387}
            height={300}
          />
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
