interface Props {
  children: React.ReactNode[];
}

const CardItems = ({ children }: Props) => {
  return (
    <ul className="bg-white rounded-lg">
      {children.map((child, index) => (
        <li
          key={index}
          className="flex items-center p-6 border-b border-b-gray-300 last:border-none"
        >
          {child}
        </li>
      ))}
    </ul>
  );
};

export default CardItems;
