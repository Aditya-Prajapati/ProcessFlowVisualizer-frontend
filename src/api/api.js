import apiClient from "./apiClient";

export const getGanttChartData = async (algorithm, processes) => {
  try {
    console.log("getGanttChartData request - algorithm:", algorithm, processes)
    const response = await apiClient.post(`${algorithm}/ganttChart`, processes)
    console.log("getGanttChartData response - ", response.data);
    return response.data.GanttChart;
  } 
  catch (err){
    console.log("Error fetching gantt chart data: ", err);
    throw err;
  }
}

export const getProcessTableData = async (algorithm, processes) => {
  try {
    console.log("getProcessTableData request - algorithm:", algorithm, processes)
    const response = await apiClient.post(`${algorithm}/property`, processes)
    console.log("getProcessTableData response - ", response.data);
    return response.data.property.processes;
  } 
  catch (err){
    console.log("Error fetching process chart data: ", err);
    throw err;
  }
}