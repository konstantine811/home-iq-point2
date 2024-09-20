interface Props {
  children: React.ReactNode;
  customSpace?: string;
}

const TextBox = ({
  children,
  customSpace = "px-3 py-1.5 space-x-2",
}: Props) => {
  return (
    <div className={`flex items-center  bg-white rounded-lg ${customSpace}`}>
      {children}
    </div>
  );
};

export default TextBox;
