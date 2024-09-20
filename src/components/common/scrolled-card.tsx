import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  children: React.ReactNode;
  isEnd?: boolean;
}

const ScrolledCard = ({ children, isEnd = false }: Props) => {
  return (
    <div
      className={`bg-gray-300 rounded-xl py-8 px-12 max-w-[387px] w-full h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-white ${
        isEnd ? "flex flex-col justify-end" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default ScrolledCard;
