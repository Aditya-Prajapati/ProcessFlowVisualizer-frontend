import "./App.css";
import { useEffect, useState } from "react";

import { getGanttChartData, getProcessTableData } from "../../api/api";
import { Header, Footer, Inputbox, Outputbox, ProcessChart } from "../exports";

const fetchGanttChartData = async (inputs, setGanttChartData) => {
  if (inputs === null){
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

const fetchProcessTableData = async (inputs, setProcessTableData) => {
  if (inputs === null){
    return;
  }
  try {
    const processTableData = await getProcessTableData(inputs.algorithm, {
      processes: inputs.processes,
    })
    setProcessTableData(processTableData);
  } catch (err) {
    console.log("Error fetching process chart data: ", err);
    setProcessTableData("err");
  }
}

const App = () => {
  const [ganttChartData, setGanttChartData] = useState(null);
  const [processTableData, setProcessTableData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState(null);

  useEffect(() => {
    if (inputs){
      setLoading(true);
    }
    setTimeout(() => {
      const fetchData = async () => {
        await Promise.all([
          fetchGanttChartData(inputs, setGanttChartData),
          fetchProcessTableData(inputs, setProcessTableData),
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
          <Inputbox setInputs={setInputs} loading={loading} />
        </div>
        <div className="flex flex-col items-center lg:w-[70%] m-2">
          <div className="mb-2 w-full">
            <Outputbox ganttChartData={ganttChartData} processTableData={processTableData} />
          </div>
          <div className="mb-2 w-full">
            <ProcessChart inputs={inputs} />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
