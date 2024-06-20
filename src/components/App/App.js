import "./App.css";
import { Header, Footer, Inputbox } from "../exports";

const App = () => {
  return (
    <div className="app w-screen min-h-screen bg-black">
      <Header />
      <div className="p-4 md:flex md:justify-center lg:block">
        <Inputbox />
      </div>
      <Footer />
    </div>
  );
}

export default App;