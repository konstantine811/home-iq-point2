import { Button } from "../ui/button";

interface Props {
  title: string;
}

const IQButton = ({ title }: Props) => {
  return (
    <Button className="bg-gray-900 h-12 flex items-center justify-center text-white px-8 py-4 text-sm font-semibold hover:bg-gray-900/70 rounded-none">
      {title}
    </Button>
  );
};

export default IQButton;
