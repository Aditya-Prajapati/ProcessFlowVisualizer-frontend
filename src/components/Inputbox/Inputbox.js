import { useState } from "react";

import "./Inputbox.css";
import { LabelAndInput, CustomDropdown, Modal } from "../../sharedComponents/exports";

const options = [
  { value: "fcfs", label: "First Come First Serve, FCFS" },
  { value: "sjf", label: "Shortest Job First, SJF" },
  { value: "priority", label: "Priority Scheduling" },
  { value: "rr", label: "Round Robin, RR" },
];

// fieldNo: 1-ArrivalTimes, 2-BurstTimes, 3-Priorities, 4-TimeQuantum
const parseInputString = (inputString, setInputErr, fieldNo) => {
  if (typeof inputString !== "string") {
    setInputErr({description: "Please enter integers only.", fieldNo: fieldNo});
    return null;
  }

  const values = inputString.trim().split(/\s+/);
  const integers = values.map((val) => parseInt(val));

  inputString = inputString.trim();
  if (inputString.length !== 0 && integers.some((val) => isNaN(val))) {
    setInputErr({description: "Please enter integers only.", fieldNo: [fieldNo]});
    return null;
  }

  const containsNegative = (array) => {
    return array.some((value) => value < 0);
  };
  if (containsNegative(integers)){
    setInputErr({description: "Values should not be negative.", fieldNo: [fieldNo]});
    return null;
  }
  return integers;
};

const parseInputs = (algorithm, arrivalTimes, burstTimes, priorities, timeQuantum, inputErr, setInputErr) => {
  const trimmedArrivalTime = arrivalTimes.trim();
  const trimmedBurstTime = burstTimes.trim();
  const trimmedPriorities = priorities.trim();
  const trimmedTimeQuantum = timeQuantum.trim();
  if (trimmedArrivalTime === ""){ 
    setInputErr({description: "Please enter all the required fields.", fieldNo: [1]});
    return null;
  }
  else if (trimmedBurstTime === ""){
    setInputErr({description: "Please enter all the required fields.", fieldNo: [2]});
    return null;
  }
  else if (algorithm === "priority" && trimmedPriorities === ""){
    setInputErr({description: "Please enter all the required fields.", fieldNo: [3]});
    return null;
  }
  else if (algorithm === "rr" && trimmedTimeQuantum === ""){
    setInputErr({description: "Please enter all the required fields.", fieldNo: [4]});
    return null;
  }

  const parsedArrivalTimes = parseInputString(arrivalTimes, setInputErr, 1);
  const parsedBurstTimes = parseInputString(burstTimes, setInputErr, 2);
  const parsedPriorities = parseInputString(priorities, setInputErr, 3);
  const parsedTimeQuantum = parseInputString(timeQuantum, setInputErr, 4);
  if (inputErr || !parsedArrivalTimes || !parsedBurstTimes || !parsedPriorities || !parsedTimeQuantum) {
    return null;
  }

  if (parsedArrivalTimes.length !== parsedBurstTimes.length) {
    setInputErr({description: "Arrival times & Burst times should have equal number of processes.", fieldNo: [1, 2] });
    return null;
  }

  if (algorithm === "priority" && parsedArrivalTimes.length !== parsedPriorities.length) {
    setInputErr({description: "Arrival times, Burst times & Priorities should have equal number of processes.", fieldNo: [1, 3] });
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

const Inputbox = ({ inputs, setInputs, loading }) => {
  const [algorithm, setAlgorithm] = useState(options[0]);
  const [arrivalTimes, setArrivalTimes] = useState("");
  const [burstTimes, setBurstTimes] = useState("");
  const [priorities, setPriorities] = useState("");
  const [timeQuantum, setTimeQuantum] = useState("");
  const [inputErr, setInputErr] = useState(false);

  const handleSubmit = () => {
    const inputData = parseInputs(algorithm.value, arrivalTimes, burstTimes, priorities, timeQuantum, inputErr, setInputErr);
    if (inputErr !== false && (inputData === null || inputData.processes.length === 0)){
      setInputs("err");
    }
    else {
      setInputs(inputErr || !inputData ? "err" : inputData);
    }
  };

  return (
    <div className="inputbox sticky left-2 top-16 bg-white rounded-lg p-4 w-full shadow">
      <h1 className="text-xl md:text-2xl font-heading font-medium shadow-text text-center mt-1 mb-2 md:mt-2 md:mb-4">
        Input
      </h1>
      <div className="flex flex-col md:flex-row lg:flex-col mx-auto p-1 text-base md:text-md">
        <div className="flex-1 items-center p-2">
          <details className="rounded-lg cursor-pointer">
            <summary>
              <span class="text-sm md:text-base">Algorithm</span>
            </summary>
            <div className="mt-1 text-sm">
              <p>A predefined set of rules for determining the order of executing processes on a computer's CPU.</p>
            </div>
          </details>
        </div>
        <div className="flex-1 p-1">
          <CustomDropdown options={options} algorithm={algorithm} setAlgorithm={setAlgorithm} setInputErr={setInputErr} />
        </div>
      </div>
      <LabelAndInput
        label="Arrival Times"
        description="The instance when a process enters the ready queue and is available for CPU execution."
        placeholder="eg. 3 5 11 2 4"
        value={arrivalTimes}
        showErr={inputErr && inputErr.fieldNo.includes(1)}
        onChange={(e) => {setArrivalTimes(e.target.value); setInputErr(false);}}
      />
      <LabelAndInput
        label="Burst Times"
        description="The amount of CPU time required for a process to complete its execution."
        placeholder="eg. 2 6 8 13 7"
        value={burstTimes}
        showErr={inputErr && inputErr.fieldNo.includes(2)}
        onChange={(e) => {setBurstTimes(e.target.value); setInputErr(false);}}
      />
      {algorithm.value === "priority" && (
        <LabelAndInput
          label="Priorities"
          description="Values assigned to processes to determine their relative importance or order of execution."
          placeholder="eg. 1 2 3 4 5"
          value={priorities}
          showErr={inputErr && inputErr.fieldNo.includes(3)}
          onChange={(e) => {setPriorities(e.target.value); setInputErr(false);}}
        />
      )}
      {algorithm.value === "rr" && (
        <LabelAndInput
          label="Time Quantum"
          description="A fixed unit of time allocated to each process for uninterrupted execution on the CPU before potentially being preempted or switched."
          placeholder="eg. 8"
          inputType="number"
          value={timeQuantum}
          showErr={inputErr && inputErr.fieldNo.includes(4)}
          onChange={(e) => {setTimeQuantum(e.target.value); setInputErr(false);}}
        />
      )}
      <div className="flex flex-wrap">
        <button onClick={handleSubmit} className="flex items-center justify-center md:w-full mt-4 bg-black hover:bg-white text-sm md:text-base text-white hover:text-black active:text-white border border-black active:bg-black active:border rounded-md px-3 py-1 md:p-2">
          <svg className={`${loading ? "inline-block animate-spin h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" : "hidden"}`} viewBox="0 0 24 24">
            <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>{loading ? (!inputs ? "Loading..." : "Solving...") : "Submit"}</span>
        </button>
        {inputErr && (
          <div className="err text-left md:text-center lg:text-left mt-2 ms-1 w-full">{inputErr.description}</div>
        )}
      </div>
      {/* {inputErr && (
        <Modal heading={"Inputs error"} description={inputErr} buttonText="Okay" setInputErr={setInputErr}
        />
      )} */}
    </div>
  );
};

export default Inputbox;
