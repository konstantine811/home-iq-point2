import { IStepperData } from "@/models/data-config/stepper.model";
import Stepper from "./stepper";

interface Props {
  stepperData: IStepperData[];
  className?: string;
}

const ArrayStepper = ({ stepperData, className = "" }: Props) => {
  return (
    <div className={`lg:grid ${className} hidden`}>
      {stepperData.map((data, index) => {
        return (
          <Stepper
            key={index}
            title={data.title}
            label={data.label}
            className={`${
              index < stepperData.length - 1
                ? "relative w-full flex justify-center after:border-b after:border-dashed after:border-b-gray-500 after:w-full after:h-px after:absolute after:top-1/2 after:left-1/2 after:z-0 z-10"
                : ""
            }`}
          />
        );
      })}
    </div>
  );
};

export default ArrayStepper;
