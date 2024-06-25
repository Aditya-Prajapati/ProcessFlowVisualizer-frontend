import "./App.css";
import { useEffect, useState } from "react";

import { getGanttChartData } from "../../api/api";
import { Header, Footer, Inputbox, Outputbox } from "../exports";

const fetchGanttChartData = async (inputs, setGanttChartData, setLoading) => {
  if (inputs === null){
    setLoading(false);
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
  } finally {
    setLoading(false);
  }
};

const App = () => {
  const [ganttChartData, setGanttChartData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState(null);

  useEffect(() => {
    if (inputs){
      setLoading(true);
    }
    setTimeout(() => {
      fetchGanttChartData(inputs, setGanttChartData, setLoading);
    }, 1000)
  }, [inputs]); 

  return (
    <div className="app w-screen min-h-screen bg-black">
      <Header />
      <div className="flex flex-wrap justify-center lg:flex-nowrap">
        <div className="m-4 w-full md:w-9/12 lg:w-4/12">
        <Inputbox setInputs={setInputs} loading={loading} />
        </div>
        <div className="m-4 w-full md:w-9/12 lg:w-8/12">
          <Outputbox ganttChartData={ganttChartData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
