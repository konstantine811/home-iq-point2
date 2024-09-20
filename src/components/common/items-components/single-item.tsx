interface Props {
  children: React.ReactNode;
  title: string;
}

const SingleItem = ({ children, title }: Props) => {
  return (
    <>
      {children}
      <span className="ml-4 text-sm font-semibold text-blue-900">{title}</span>
    </>
  );
};

export default SingleItem;
