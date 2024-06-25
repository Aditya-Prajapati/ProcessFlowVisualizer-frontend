import "./Header.css";

const Header = ({}) => {
  return (
    <div className="header px-4 py-3 bg-white w-screen sticky top-0 z-50 border-b">
      <h1 className="font-light text-black text-base md:text-2xl font-heading shadow-text">
        Process Flow Visualizer
      </h1>
    </div>
  );
};

export default Header;
