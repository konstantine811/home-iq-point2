import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MarkerIcon from "../svg-icons/marker";

interface Props {
  className?: string;
}

const InputGroup = ({ className }: Props) => {
  return (
    <div
      className={`${className} w-full flex items-center justify-center p-2 bg-white rounded-xl`}
    >
      <div className="grid grid-cols-3 border border-none rounded-full overflow-hidden h-full w-full">
        {/* First input */}
        <Input
          className="border-none col-span-2 text-gray-900 placeholder:text-gray-900 text-xl rounded-none h-full flex-1 focus-visible:ring-0 pl-[60px] focus:ring-0 focus:outline-none"
          placeholder="How can we help?"
        />
        {/* Divider */}
        <div className="relative h-full">
          <div className="border-l border-gray-400 left-0 absolute h-full"></div>
          {/* Second input */}
          <div className="pl-4 flex items-center">
            <MarkerIcon />
            <Input
              className="border-none pl-2 focus-visible:ring-0 shadow-none text-gray-900 placeholder:text-gray-900 text-xl rounded-none h-full  focus:ring-0 focus:outline-none"
              placeholder="ZIP code"
            />
          </div>
        </div>
      </div>
      <Button className="bg-red-700 h-[56px] px-10 flex items-center justify-center text-base py-4 font-extrabold hover:scale-105 hover:bg-red-700 transition-all rounded-xl">
        Start project
      </Button>
    </div>
  );
};

export default InputGroup;
