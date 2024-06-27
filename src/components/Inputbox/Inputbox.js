import { useState } from "react";

import "./Inputbox.css";
import { LabelAndInput, CustomDropdown, Modal } from "../../sharedComponents/exports";

const options = [
  { value: "fcfs", label: "First Come First Serve, FCFS" },
  { value: "sjf", label: "Shortest Job First, SJF" },
  { value: "priority", label: "Priority Scheduling" },
  { value: "rr", label: "Round Robin, RR" },
];

const parseInputString = (inputString, setInputErr) => {
  if (typeof inputString !== "string") {
    setInputErr("Please enter integers only.");
    return [];
  }

  const values = inputString.trim().split(/\s+/);
  const integers = values.map((val) => parseInt(val));

  inputString = inputString.trim();
  if (inputString.length !== 0 && integers.some((val) => isNaN(val))) {
    setInputErr("Please enter integers only.");
    return [];
  }
  return integers;
};

const parseInputs = (algorithm, arrivalTimes, burstTimes, priorities, timeQuantum, inputErr, setInputErr) => {
  const trimmedArrivalTime = arrivalTimes.trim();
  const trimmedBurstTime = burstTimes.trim();
  const trimmedPriorities = priorities.trim();
  const trimmedTimeQuantum = timeQuantum.trim();
  if (trimmedArrivalTime === "" || trimmedBurstTime === "" || (algorithm === "priority" && trimmedPriorities === "") ||(algorithm === "rr" && trimmedTimeQuantum === "")) {
    setInputErr("Please enter all the required fields.");
    return null;
  }

  const parsedArrivalTimes = parseInputString(arrivalTimes, setInputErr);
  const parsedBurstTimes = parseInputString(burstTimes, setInputErr);
  const parsedPriorities = parseInputString(priorities, setInputErr);
  const parsedTimeQuantum = parseInputString(timeQuantum, setInputErr);
  if (inputErr) {
    return null;
  }

  const containsNegative = (arrays) => {
    return arrays.some((array) => array.some((value) => value < 0));
  };
  if (containsNegative([parsedArrivalTimes, parsedBurstTimes, parsedPriorities, parsedTimeQuantum])) {
    setInputErr("Values should not be negative.");
    return null;
  }

  if (parsedArrivalTimes.length !== parsedBurstTimes.length) {
    setInputErr("Arrival times & Burst times should have equal number of processes.");
    return null;
  }

  if (algorithm === "priority" && parsedArrivalTimes.length !== parsedPriorities.length) {
    setInputErr("Arrival times, Burst times & Priorities should have equal number of processes.");
    return null;
  }

  if (inputErr) {
    return null;
  } else {
    const processes = parsedArrivalTimes.map((arrivalTime, index) => ({
      id: index,
      arrivalTime: arrivalTime,
      burstTime: parsedBurstTimes[index],
      priority: algorithm === "priority" ? parsedPriorities[index] : null,
      timeQuantum: algorithm === "rr" ? parsedTimeQuantum : null,
    }));

    return {
      algorithm: algorithm,
      processes: processes,
    };
  }
};

const Inputbox = ({ setInputs, loading }) => {
  const [algorithm, setAlgorithm] = useState(options[0]);
  const [arrivalTimes, setArrivalTimes] = useState("");
  const [burstTimes, setBurstTimes] = useState("");
  const [priorities, setPriorities] = useState("");
  const [timeQuantum, setTimeQuantum] = useState("");
  const [inputErr, setInputErr] = useState(false);

  const handleSubmit = () => {
    const inputData = parseInputs(algorithm.value, arrivalTimes, burstTimes, priorities, timeQuantum, inputErr, setInputErr);
    if (inputErr !== false && (inputData === null || inputData.processes.length === 0)){
      setInputErr("Error in parsing inputs.");
      setInputs(null);
    }
    else {
      setInputs(inputErr ? null : inputData);
    }
  };

  return (
    <div className="inputbox sticky left-2 top-16 bg-white rounded-lg p-4 w-full shadow">
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
          <CustomDropdown options={options} algorithm={algorithm} setAlgorithm={setAlgorithm} />
        </div>
      </div>
      <LabelAndInput
        label="Arrival Times"
        description="Arrival time one line define"
        placeholder="eg. 3 5 11 2 4"
        value={arrivalTimes}
        onChange={(e) => setArrivalTimes(e.target.value)}
      />
      <LabelAndInput
        label="Burst Times"
        description="Burst time one line define"
        placeholder="eg. 2 6 8 13 7"
        value={burstTimes}
        onChange={(e) => setBurstTimes(e.target.value)}
      />
      {algorithm.value === "priority" && (
        <LabelAndInput
          label="Priorities"
          description="One line priority definition"
          placeholder="eg. 1 2 3 4 5"
          value={priorities}
          onChange={(e) => setPriorities(e.target.value)}
        />
      )}
      {algorithm.value === "rr" && (
        <LabelAndInput
          label="Time Quantum"
          description="One line priority definition"
          placeholder="eg. 8"
          inputType="number"
          value={timeQuantum}
          onChange={(e) => setTimeQuantum(e.target.value)}
        />
      )}
      <button onClick={handleSubmit} className="flex items-center justify-center md:w-full mt-4 bg-black hover:bg-white text-sm md:text-base text-white hover:text-black active:text-white border border-black active:bg-black active:border rounded-md px-3 py-1 md:p-2">
        <svg className={`${loading ? "inline-block animate-spin h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" : "hidden"}`} viewBox="0 0 24 24">
          <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>{loading ? "Solving..." : "Submit"}</span>
      </button>
      {inputErr && (
        <Modal heading={"Inputs error"} description={inputErr} buttonText="Okay" setInputErr={setInputErr}
        />
      )}
    </div>
  );
};

export default Inputbox;
