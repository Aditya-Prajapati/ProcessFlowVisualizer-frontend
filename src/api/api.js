import apiClient from "./apiClient";

export const getGanttChartData = async (algorithm, processes) => {
  try {
    const response = await apiClient.post(`${algorithm}/ganttChart`, processes)
    console.log(response.data)
    return response.data.GanttChart;
  } 
  catch (err){
    console.log("Error fetching gantt chart data: ", err);
    throw err;
  }
}