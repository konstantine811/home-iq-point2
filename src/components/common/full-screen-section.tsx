interface Props {
  title: string;
  children: React.ReactNode;
}

const FullScreenSection = ({ title, children }: Props) => {
  return (
    <section className="md:min-h-screen py-8 flex flex-col justify-center items-center">
      <div className="container">
        <h2 className="text-2xl md:text-3xl text-blue-900 font-extrabold pb-12">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default FullScreenSection;
