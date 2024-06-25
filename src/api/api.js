import apiClient from "./apiClient";

export const getGanttChartData = async (algorithm, processes) => {
  try {
    console.log("Frontend request - algorithm:", algorithm, processes)
    const response = await apiClient.post(`${algorithm}/ganttChart`, processes)
    console.log("Backend response - ", response.data);
    return response.data.GanttChart;
  } 
  catch (err){
    console.log("Error fetching gantt chart data: ", err);
    throw err;
  }
}