import { GanttChart, ProcessTable } from "../exports";

const processes = [
  // { id: 1, arrivalTime: 0, burstTime: 5 },
  // { id: 2, arrivalTime: 1, burstTime: 3 },
  // { id: 3, arrivalTime: 2, burstTime: 8 },
  // { id: 4, arrivalTime: 3, burstTime: 6 },
  // { id: 1, arrivalTime: 0, burstTime: 5 },
  // { id: 2, arrivalTime: 1, burstTime: 3 },
  // { id: 3, arrivalTime: 2, burstTime: 8 },
  // { id: 4, arrivalTime: 3, burstTime: 6 },
  // { id: 1, arrivalTime: 0, burstTime: 5 },
  // { id: 2, arrivalTime: 1, burstTime: 3 },
  // { id: 4, arrivalTime: 3, burstTime: 6 },
  // { id: 1, arrivalTime: 0, burstTime: 5 },
  // { id: 2, arrivalTime: 1, burstTime: 3 },
  // { id: 3, arrivalTime: 2, burstTime: 8 },
  // { id: 4, arrivalTime: 3, burstTime: 6 },
  // { id: 1, arrivalTime: 0, burstTime: 5 },
  // { id: 2, arrivalTime: 1, burstTime: 3 },
  // { id: 3, arrivalTime: 2, burstTime: 8 },
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
