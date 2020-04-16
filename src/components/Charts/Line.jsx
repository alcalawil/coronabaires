import React from "react";
import ReactApexChart from "react-apexcharts";
import { lineOptions } from "variables/chartOptions";

const LineChart = ({ data, labels, color, name, title }) => {
  const series = [
    {
      name,
      data,
    },
  ];

  const options = {
    ...lineOptions,
    labels,
    colors: color ? [color] : undefined,
    title: {
      text: title,
      align: "left",
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={400}
      />
    </div>
  );
};

export default LineChart;
