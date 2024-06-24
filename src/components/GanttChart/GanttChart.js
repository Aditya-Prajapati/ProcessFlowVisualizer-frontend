import { useEffect, useState } from "react";

import { getGanttChartData } from "../../api/api";

const GanttChart = ({ algorithm, processes }) => {
  const [ganttChartData, setGanttChartData] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchGanttChartData = async () => {
      try {
        const ganttChartData = await getGanttChartData(algorithm, {
          processes: processes,
        });
        setGanttChartData(ganttChartData);
      } catch (err) {
        console.log("Error fetching gantt chart data: ", err);
        setErr(err);
        setGanttChartData(null);
      }
    };
    fetchGanttChartData();
  }, []);

  return (
    <div className="ganttChart w-full">
      <div className="text-sm md:text-lg">Gantt chart</div>
      <div className="cells flex flex-wrap justify-center">
        {err ? (
          <div className="err">Error fetching gantt chart data.</div>
        ) : !ganttChartData || !ganttChartData.length ? (
          <div className="text-center text-xs md:text-sm">
            Please provide inputs.
          </div>
        ) : (
          ganttChartData.map((process, idx) => {
            return (
              <div key={idx} className="cell flex flex-col my-2">
                <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 border bg-black">
                  <div className="text-white">{process.processId}</div>
                </div>
                <div
                  className={`flex text-xs md:text-sm ${
                    idx === 0 ? "justify-between" : "justify-end"
                  }`}
                >
                  {idx === 0 && (
                    <div className="startTime">{process.startTime}</div>
                  )}
                  <div className="endTime">{process.endTime}</div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default GanttChart;
