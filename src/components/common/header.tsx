import IQButton from "../ui-updated/button";

const NavHeaderLinks = ["Services", "About Us", "Search", "Log in"];

const Header = () => {
  return (
    <header className="bg-gray-500 w-full py-4">
      <div className="container w-full flex gap-4 items-center justify-between">
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-black flex items-center justify-center hover:text-black h-[48px] w-[140px] rounded-full bg-gray-700"
          >
            Logo
          </a>
        </div>
        <div className="flex flex-wrap items-center">
          {NavHeaderLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-black font-semibold text-sm hover:text-black/50 min-w-[132px] text-center"
            >
              {link}
            </a>
          ))}
          <IQButton title="Start project" />
        </div>
      </div>
    </header>
  );
};

export default Header;
