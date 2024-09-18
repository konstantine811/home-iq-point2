import { Input } from "@/components/ui/input";

const InputGroup = () => {
  return (
    <div className="grid grid-cols-3 border border-black rounded-full overflow-hidden h-[88px] max-w-[578px] w-full">
      {/* First input */}
      <Input
        className="border-none col-span-2 text-black placeholder:text-black/70 text-xl rounded-none h-full flex-1 focus-visible:ring-0 pl-[60px] focus:ring-0 focus:outline-none"
        placeholder="How can we help?"
      />
      {/* Divider */}
      <div className="relative">
        <div className="border-l border-black top-[12px] left-0 absolute h-[calc(100%-32px)]"></div>
        {/* Second input */}
        <Input
          className="border-none  focus-visible:ring-0 text-black placeholder:text-black/70 text-xl rounded-none h-full  focus:ring-0 pl-[48px] focus:outline-none"
          placeholder="ZIP Code"
        />
      </div>
    </div>
  );
};

export default InputGroup;
