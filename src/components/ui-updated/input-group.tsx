import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MarkerIcon from "../svg-icons/marker";

interface Props {
  className?: string;
}

const InputGroup = ({ className }: Props) => {
  return (
    <div
      className={`${className} w-full flex flex-col md:flex-row md:items-center md:justify-center p-2 md:bg-white rounded-xl gap-2 md:gap-0`}
    >
      <div className="md:grid bg-white md:bg-transparent grid-cols-3 border border-none rounded-xl md:rounded-full overflow-hidden h-full w-full">
        {/* First input */}
        <Input
          className="border-none col-span-2 h-14 md:h-full  text-gray-900 placeholder:text-gray-900 text-xl rounded-none  flex-1 focus-visible:ring-0 py-3 pr-3 pl-6 md:py-0 md:pl-[60px] focus:ring-0 focus:outline-none"
          placeholder="How can we help?"
        />
        {/* Divider */}
        <div className="relative h-full hidden md:block">
          <div className="border-l border-gray-400 left-0 absolute h-full"></div>
          {/* Second input */}
          <div className="pl-4 flex items-center ">
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
