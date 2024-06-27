import React, { useContext, useState } from "react";
import Chart from "react-apexcharts";

import { useScreenSize } from "../../contexts/ScreenSizeContext";

const ProcessChart = () => {
  const { sm, md, lg } = useScreenSize();
  let chartWidth = sm ? 380 : md ? 580 : lg ? 680 : 680;

  const [options, setOptions] = useState({
    chart: {
      type: "line",
      dropShadow: {
        enabled: true,
        colors: "#f3f4f5",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      },
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
    },
    stroke: {
      curve: "smooth"
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    },
    grid: {
      show: true,
      row: {
        colors: ["#f3f4f5", "transparent"],
        opacity: 0.25
      },
      // column: {
      //   colors: ["#f3f4f5", "transparent"],
      //   opacity: 0.5
      // }
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5
    },
    colors: ["#2E93fA", "#66DA26", "#546E7A", "#E91E63", "#FF9800"],
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]);

  return (
    <div className="processChart bg-white rounded-lg p-4 w-full shadow">
      <h1 className="text-xl md:text-2xl font-heading font-medium shadow-text text-center mt-1 mb-2 md:mt-2 md:mb-4">
        Process chart
      </h1>
      <div className="w-full">
        <div className="flex justify-center p-2 overflow-auto">
          <Chart options={options} series={series} type="line" width={chartWidth} />
        </div>
      </div>
    </div>
  );
};

export default ProcessChart;
