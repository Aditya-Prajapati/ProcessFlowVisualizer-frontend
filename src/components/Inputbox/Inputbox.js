import { useState } from "react";

import "./Inputbox.css";
import { LabelAndInput, CustomDropdown } from "../../shared/exports";

const options = [
  { value: "fcfs", label: "First Come First Serve, FCFS" },
  { value: "sjf", label: "Shortest Job First, SJF" },
  { value: "priority", label: "Priority Scheduling" },
  { value: "rr", label: "Round Robin, RR" },
];

const Inputbox = ({}) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="inputbox bg-white rounded-lg p-4 w-full lg:w-1/2-screen">
      <h1 className="text-xl md:text-2xl font-heading font-medium shadow-text text-center mt-1 mb-2 md:mt-2 md:mb-4">
        Inputs
      </h1>
      <div className="flex flex-wrap mx-auto p-1 text-sm md:text-lg">
        <div className="flex items-center w-full md:w-1/3 p-2">
          <details className="rounded-lg cursor-pointer">
            <summary>
              <span>Algorithm</span>
            </summary>
            <div className="mt-1 text-sm">
              <p>One line define for algorithm</p>
            </div>
          </details>
        </div>
        <div className="w-full md:w-2/3 p-1">
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
    </div>
  );
};

export default Inputbox;
