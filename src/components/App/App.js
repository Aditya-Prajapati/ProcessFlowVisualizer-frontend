import "./App.css";
import { Header, Footer, Inputbox, Outputbox } from "../exports";

const App = () => {
  return (
    <div className="app w-screen min-h-screen bg-black">
      <Header />
      <div className="flex flex-wrap justify-center lg:flex-nowrap">
        <div className="m-4 w-full md:w-9/12 lg:w-4/12">
        <Inputbox />
        </div>
        <div className="m-4 w-full md:w-9/12 lg:w-8/12">
          <Outputbox />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
