import { User, Building, Flag, MapPin, MessageSquare } from "lucide-react";
import ScrolledCard from "./scrolled-card";
import CardItems from "@/components/common/card-items";

import { SVG_PATH_CONFIG } from "@/configs/cards";
import dynamic from "next/dynamic";
import SingleItem from "./items-components/single-item";
import CoupleItems from "./items-components/couple-items";
import { sub } from "framer-motion/client";
import MessagePopup from "../svg-icons/message-popup";
import MessagePopupContent from "./message-popup-content";
import TextBox from "./text-box";
import { StepperData } from "@/configs/stepper";
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
      <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-10 pb-6">
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
      <Stepper stepperData={StepperData} />
    </>
  );
};

export default ProjectSteps;
