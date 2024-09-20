import TextBox from "./text-box";

interface Props {
  title: string;
  label: string;
  className?: string;
}

const Stepper = ({ title, label, className }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h4 className="text-blue-900 text-xl font-bold">{title}</h4>
      <div className={className}>
        <TextBox customSpace="px-3 py-1 relative z-10">
          <span className="text-blue-900 text-lg">{label}</span>
        </TextBox>
      </div>
    </div>
  );
};

export default Stepper;
