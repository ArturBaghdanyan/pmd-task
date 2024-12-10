import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { createPolarAreaDiagram } from "./polar";

function PolarAreaChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [
      { Key: "Category 1", name: '15% Bill Expense',  medal: 30 },
      { Key: "Category 2", name: '20% Investment',    medal: 35 },
      { Key: "Category 3", name: '35% Others',        medal: 30 },
      { Key: "Category 4", name: '30% Entertainment', medal: 45 },
    ];

    const width = 300;
    const height = 300;

    d3.select(chartRef.current).selectAll("*").remove();

    const svg = d3.select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    createPolarAreaDiagram(svg, data, width, height);
  }, []);

  return <div ref={chartRef} id="chart-container"></div>;
}

export default PolarAreaChart;
