interface Props {
  children: React.ReactNode;
  customSpace?: string;
  isBordered?: boolean;
}

const TextBox = ({
  children,
  customSpace = "px-3 py-1.5 space-x-2",
  isBordered = false,
}: Props) => {
  return (
    <div
      className={`flex items-center  bg-white rounded-lg ${customSpace} ${
        isBordered ? "border border-gray-400" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default TextBox;
