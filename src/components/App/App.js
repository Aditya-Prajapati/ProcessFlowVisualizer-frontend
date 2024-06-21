import "./App.css";
import { Header, Footer, Inputbox, Outputbox } from "../exports";

const App = () => {
  return (
    <div className="app w-screen min-h-screen bg-black">
      <Header />
      <div className="flex flex-wrap justify-center lg:flex-nowrap">
        <div className="m-4 w-full md:w-8/12 lg:w-full lg:flex-1">
          <Inputbox />
        </div>
        <div className="m-4 w-full md:w-8/12 lg:w-full lg:flex-1">
          <Outputbox />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
