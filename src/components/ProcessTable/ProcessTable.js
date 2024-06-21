import React from "react";

import { useScreenSize } from "../../contexts/ScreenSizeContext";

const ProcessTable = ({ processes }) => {
  const { sm, md, lg } = useScreenSize();

  return (
    <div className="processTable w-full">
      <div className="my-1"> Process table</div>
      {!processes.length ? (
        <div className="text-center text-xs md:text-sm">Please provide inputs</div>
      ) : (
        <div className="processTable w-full overflow-auto">
          <table className="text-xs md:text-sm w-full border-separate">
            <thead className="font-light md:font-bold">
              <tr className="text-center text-white bg-black">
                <th className="rounded p-1">{sm ? "PID" : "Process Id"}</th>
                <th className="rounded p-1">{sm ? "AT" : "Arrival time"}</th>
                <th className="rounded p-1">{sm ? "BT" : "Burst time"}</th>
                <th className="rounded p-1">{sm ? "CT" : "Completion time"}</th>
                <th className="rounded p-1">{sm ? "TAT" : "Turnaround time"}</th>
                <th className="rounded p-1">{sm ? "WT" : "Waiting time"}</th>
              </tr>
            </thead>
            <tbody>
              {processes.map((process, idx) => {
                return (
                  <tr
                    className={`text-center ${
                      idx & 1 ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <td className="rounded p-1 border">{process.id}</td>
                    <td className="rounded p-1 border">
                      {process.arrivalTime}
                    </td>
                    <td className="rounded p-1 border">{process.burstTime}</td>
                    <td className="rounded p-1 border">
                      {process.completionTime}
                    </td>
                    <td className="rounded p-1 border">
                      {process.turnaroundTime}
                    </td>
                    <td className="rounded p-1 border">
                      {process.waitingTime}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProcessTable;
