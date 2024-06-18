import "./App.css";
import { Header, Footer, Inputbox } from "../exports";

const App = () => {
  return (
    <div className="app w-screen h-screen bg-black">
      <Header />
      <div className="w-1/2-screen p-4">
        <Inputbox />
      </div>
      <Footer />
    </div>
  );
}

export default App;