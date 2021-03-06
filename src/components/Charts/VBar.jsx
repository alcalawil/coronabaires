import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { vBarOptions } from "variables/chartOptions";

const VBar = ({ labels, data, name, title, color }) => {
  const _series = [
    {
      name,
      data,
    },
  ];
  const options = {
    ...vBarOptions,
    xaxis: { categories: labels },
    colors: color ? [color] : undefined,
    title: {
      text: title,
      align: "left",
    },
  };

  return (
    <div id="vbar">
      <ReactApexChart
        options={options}
        series={_series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default VBar;
