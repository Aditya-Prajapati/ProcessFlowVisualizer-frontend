const GanttChart = ({ processes }) => {
  return (
    <div className="ganttChart w-full">
      <div>Gantt Chart</div>
      <div className="cells flex flex-wrap justify-center">
        {!processes.length
          ? <span className="text-xs md:text-sm">Please provide inputs</span>
          : processes.map((process, idx) => {
              return (
                <div className="cell flex flex-col my-2">
                  <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 border bg-black">
                    <div className="text-white">{process.id}</div>
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
            })}
      </div>
    </div>
  );
};

export default GanttChart;
