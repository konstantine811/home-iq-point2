"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Props {
  type: string;
  className?: string;
  placeholder: string;
  beforeChildren?: React.ReactNode;
}

const InputHQ = ({ beforeChildren, type, placeholder, className }: Props) => {
  return (
    <div className={cn(className)}>
      {beforeChildren}
      <Input
        type={type}
        placeholder={placeholder}
        className={`${
          beforeChildren && "pl-10"
        } pr-10 border-gray-400 text-blue-900 shadow-none placeholder-gray-900 h-12`}
      />
    </div>
  );
};

export default InputHQ;
