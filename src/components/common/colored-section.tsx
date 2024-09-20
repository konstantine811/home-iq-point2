interface Props {
  children: React.ReactNode;
  wrapClasses?: string;
  innerClasses?: string;
}

const ColoredSection = ({ children, wrapClasses, innerClasses }: Props) => {
  return (
    <section className={`bg-gray-700 ${wrapClasses}`}>
      <div className={`container ${innerClasses}`}>{children}</div>
    </section>
  );
};

export default ColoredSection;
