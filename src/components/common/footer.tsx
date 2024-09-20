const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="mx-auto px-4 gap-8 flex flex-col md:flex-row justify-between md:items-center">
        {/* Left button-like element */}
        <div className="bg-white/50 w-[140px] h-[48px] rounded-full"></div>

        {/* Navigation links */}
        <nav className="flex flex-col md:flex-row gap-6 md:gap-10 underline">
          <a href="#">Terms Of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">For Contractors</a>
          <a href="#">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
