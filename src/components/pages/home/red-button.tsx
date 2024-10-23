import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  className?: string;
}

const RedButton = ({ title, className = "" }: Props) => {
  return (
    <div>
      <Button
        className={`min-w-40 w-full bg-red-700 hover:bg-red-700 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50 font-extrabold rounded-xl h-12 ${className}`}
      >
        {title}
      </Button>
    </div>
  );
};

export default RedButton;
