import { useState } from "react";

import "./Inputbox.css";
import { LabelAndInput, CustomDropdown } from "../../sharedComponents/exports";

const options = [
  { value: "fcfs", label: "First Come First Serve, FCFS" },
  { value: "sjf", label: "Shortest Job First, SJF" },
  { value: "priority", label: "Priority Scheduling" },
  { value: "rr", label: "Round Robin, RR" },
];

const handleSubmit = () => {
  // take input data and send to backend 
  // Show loading... until gantt chart is created
}

const Inputbox = ({}) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="inputbox bg-white rounded-lg p-4 w-full">
      <h1 className="text-xl md:text-2xl font-heading font-medium shadow-text text-center mt-1 mb-2 md:mt-2 md:mb-4">
        Input
      </h1>
      <div className="flex flex-col md:flex-row lg:flex-col mx-auto p-1 text-sm md:text-lg">
        <div className="flex-1 items-center p-2">
          <details className="rounded-lg cursor-pointer">
            <summary>
              <span>Algorithm</span>
            </summary>
            <div className="mt-1 text-sm">
              <p>One line define for algorithm</p>
            </div>
          </details>
        </div>
        <div className="flex-1 p-1">
          <CustomDropdown
            options={options}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      </div>
      <LabelAndInput
        label="Arrival Times"
        description="Arrival time one line define"
        placeholder="eg. 3 5 11 2 4"
      />
      <LabelAndInput
        label="Burst Times"
        description="Burst time one line define"
        placeholder="eg. 2 6 8 13 7"
      />
      {selected.value === "priority" && (
        <LabelAndInput
          label="Priorities"
          description="One line priority definition"
          placeholder="eg. 1 2 3 4 5"
        />
      )}
      {selected.value === "rr" && (
        <LabelAndInput
          label="Time Quantum"
          description="One line priority definition"
          placeholder="eg. 8"
        />
      )}
      <button onClick={() => handleSubmit} className="w-full mt-4 bg-black hover:bg-white text-white hover:text-black active:text-white hover:border border-black active:bg-black active:border rounded-md py-2 px-3 ">Submit</button>
    </div>
  );
};

export default Inputbox;
