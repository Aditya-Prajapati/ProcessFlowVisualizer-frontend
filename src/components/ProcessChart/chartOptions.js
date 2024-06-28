const chartOptions = {
  chart: {
    type: "line",
    dropShadow: {
      enabled: true,
      colors: "#f3f4f6",
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2,
    },
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "smooth",
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
  grid: {
    show: true,
    row: {
      colors: ["#f3f4f6", "transparent"],
      opacity: 0.25,
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
    offsetX: -5,
  },
  colors: ["#2E93fA", "#66DA26", "#546E7A", "#E91E63", "#FF9800"],
};

module.exports = chartOptions;