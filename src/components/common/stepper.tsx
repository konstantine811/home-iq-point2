import { IStepperData } from "@/models/data-config/stepper.model";
import TextBox from "./text-box";

interface Props {
  stepperData: IStepperData[];
  className?: string;
}

const Stepper = ({ stepperData, className }: Props) => {
  return (
    <div
      className={`lg:grid ${className} hidden lg:grid-cols-${stepperData.length}`}
    >
      {stepperData.map((data, index) => {
        return (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-4"
          >
            <h4 className="text-blue-900 text-xl font-bold">{data.title}</h4>
            <div
              className={`${
                index < stepperData.length - 1
                  ? "relative w-full flex justify-center after:border-b after:border-dashed after:border-b-gray-500 after:w-full after:h-1 after:absolute after:top-1/2 after:left-1/2 after:z-0 z-10"
                  : ""
              }`}
            >
              <TextBox customSpace="px-3 py-1 relative z-10">
                <span className="text-blue-900 text-lg">{data.label}</span>
              </TextBox>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
