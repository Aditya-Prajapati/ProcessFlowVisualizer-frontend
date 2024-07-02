import "./App.css";
import { useEffect, useState } from "react";

import { getGanttChartData, getProcessTableData } from "../../api/api";
import { Header, Footer, Inputbox, Outputbox, ProcessChart, Comparebox } from "../exports";

const fetchGanttChartData = async (inputs, setGanttChartData) => {
  if (!inputs || inputs === "err"){
    return;
  }
  try {
    const ganttChartData = await getGanttChartData(inputs.algorithm, {
      processes: inputs.processes,
    });
    setGanttChartData(ganttChartData);
  } catch (err) {
    console.log("Error fetching gantt chart data: ", err);
    setGanttChartData("err");
  }
};

const fetchProcessTableData = async (inputs, setProcessTableData, setProcessChartData) => {
  if (!inputs || inputs === "err"){
    return;
  }
  try {
    const processTableData = await getProcessTableData(inputs.algorithm, {
      processes: inputs.processes,
    })
    setProcessChartData(processTableData.property.averages || "err");
    const headers = [
      { text: "Process Id", smText: "PID" },
      { text: "Arrival time", smText: "AT" },
      { text: "Burst time", smText: "BT" },
      { text: "Completion time", smText: "CT" },
      { text: "Turnaround time", smText: "TAT" },
      { text: "Waiting time", smText: "WT" }
    ];
    processTableData.property.processes.unshift(headers);
    setProcessTableData(processTableData.property.processes);
  } catch (err) {
    console.log("Error fetching process chart data: ", err);
    setProcessTableData("err");
    setProcessChartData("err");
  }
}

const App = () => {
  const [ganttChartData, setGanttChartData] = useState(null);
  const [processTableData, setProcessTableData] = useState(null);
  const [processChartData, setProcessChartData] = useState(null);
  const [comparisonData, setComparisonData] = useState(null);
  const [buttonText, setButtonText] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState(null);

  useEffect(() => {
    if (inputs !== "err"){
      setLoading(true);
    }
    setTimeout(() => {
      const fetchData = async () => {
        await Promise.all([
          fetchGanttChartData(inputs, setGanttChartData),
          fetchProcessTableData(inputs, setProcessTableData, setProcessChartData),
        ]);
        setLoading(false);
      };
      fetchData();
    }, 500)
  }, [inputs]); 

  return (
    <div className="app w-full min-h-screen bg-white">
      <Header />
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="lg:w-[30%] ms-2 mt-2 mr-2 lg:mr-0">
          <Inputbox inputs={inputs} setInputs={setInputs} loading={loading} buttonText={buttonText} setButtonText={setButtonText} setComparisonData={setComparisonData} />
        </div>
        <div className="flex flex-col items-center lg:w-[70%] m-2">
          <div className="mb-2 w-full">
            <Outputbox ganttChartData={ganttChartData} processTableData={processTableData} />
          </div>
          <div className="mb-2 w-full">
            <ProcessChart processChartData={processChartData} />
          </div>
          <div className="mb-2 w-full">
            <Comparebox buttonText={buttonText} comparisonData={comparisonData} />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
