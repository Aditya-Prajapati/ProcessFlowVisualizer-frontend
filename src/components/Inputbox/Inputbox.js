import "./Inputbox.css";
import { LabelAndInput } from "../../shared/exports";

const Inputbox = ({}) => {
  return (
    <div className="inputbox bg-white shadow rounded-lg p-4 w-full h-full">
      <h1 className="text-xl font-heading font-medium shadow-text">Inputs</h1>
      <LabelAndInput label="Arrival time" description="arrival time one line define" placeholder="eg. 2 6 8 13" />
      <LabelAndInput label="Arrival time" description="arrival time one line define" placeholder="eg. 2 6 8 13" />
      <LabelAndInput label="Arrival time" description="arrivalhello there a time one line define" placeholder="eg. 2 6 8 13" />
    </div>
  );
};

export default Inputbox;