interface Props {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const CoupleItems = ({ children, title, subtitle }: Props) => {
  return (
    <div className="flex flex-wrap justify-between gap-4 w-full">
      <div className="flex gap-2">
        {children}
        <span className="text-sm font-normal text-blue-900">{title}</span>
      </div>
      <span className="text-sm font-semibold text-blue-900">{subtitle}</span>
    </div>
  );
};

export default CoupleItems;
