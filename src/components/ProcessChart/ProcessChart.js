import React, { useContext, useState } from "react";
import Chart from "react-apexcharts";

import { useScreenSize } from "../../contexts/ScreenSizeContext";
const chartOptions = require("./chartOptions")

const ProcessChart = ({ inputs, processChartData }) => {
  const { sm, md, lg } = useScreenSize();
  let chartWidth = sm ? 380 : md ? 580 : lg ? 680 : 680;

  const [series, setSeries] = useState([{
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91] 
  }]);

  return (
    <div className="processChart bg-white rounded-lg p-4 w-full shadow z-40">
      <h1 className="text-xl md:text-2xl font-heading font-medium shadow-text text-center mt-1 mb-2 md:mt-2 md:mb-4">
        Process chart
      </h1>
      <div className="w-full">
        <div className="flex justify-center p-2 overflow-auto">
        {!inputs ? (
          <div className="err">Error fetching process chart data. Please retry.</div>
        ) : !processChartData || !processChartData.length ? (
          <div className="text-center text-xs md:text-sm">
            Provide inputs to see process chart here.
          </div>
        ) : (
          <Chart options={chartOptions} series={series} type="line" width={chartWidth} />
        )}
        </div>
      </div>
    </div>
  );
};

export default ProcessChart;
