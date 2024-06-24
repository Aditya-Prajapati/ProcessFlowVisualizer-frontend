import { useEffect } from "react";

import { GanttChart, ProcessTable } from "../exports";

const processes = [
  { id: 1, startTime: 0, endTime: 5, arrivalTime: 2, burstTime: 1, completionTime: 4, waitingTime: 4, turnaroundTime: 2 },
  { id: 2, startTime: 1, endTime: 3, arrivalTime: 2, burstTime: 1, completionTime: 4, waitingTime: 4, turnaroundTime: 2 },
  { id: 3, startTime: 2, endTime: 8, arrivalTime: 2, burstTime: 1, completionTime: 4, waitingTime: 4, turnaroundTime: 2 },
  { id: 4, startTime: 3, endTime: 6, arrivalTime: 2, burstTime: 1, completionTime: 4, waitingTime: 4, turnaroundTime: 2 },
  { id: 1, startTime: 0, endTime: 5, arrivalTime: 2, burstTime: 1, completionTime: 4, waitingTime: 4, turnaroundTime: 2 },
  { id: 2, startTime: 1, endTime: 3, arrivalTime: 2, burstTime: 1, completionTime: 4, waitingTime: 4, turnaroundTime: 2 },
  { id: 3, startTime: 2, endTime: 8, arrivalTime: 2, burstTime: 1, completionTime: 4, waitingTime: 4, turnaroundTime: 2 },
  { id: 4, startTime: 3, endTime: 6, arrivalTime: 2, burstTime: 1, completionTime: 4, waitingTime: 4, turnaroundTime: 2 },
  { id: 1, startTime: 0, endTime: 5, arrivalTime: 2, burstTime: 1, completionTime: 4, waitingTime: 4, turnaroundTime: 2 },
];


const Outputbox = ({}) => {
  return (
    <div className="outputbox bg-white rounded-lg p-4 w-full">
      <h1 className="text-xl md:text-2xl font-heading font-medium shadow-text text-center mt-1 mb-2 md:mt-2 md:mb-4">
        Output
      </h1>
      <div className="w-full">
        <div className="p-2">
          <GanttChart processes={processes} />
        </div>
        <div className="p-2">
          <ProcessTable processes={processes} />
        </div>
      </div>
    </div>
  );
};

export default Outputbox;
