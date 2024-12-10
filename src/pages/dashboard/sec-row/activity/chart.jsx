import React from "react";
import Chart from "react-apexcharts";
import style from "./style.module.scss";

function Barchart() {
  return (
    <>
      <Chart
        type="bar"
        width={650}
        height={250}
        className={style.aside_asideTwo_content_activity_row_statistics_item}
          series={[
          {
            name: "Series 1",
            data: [480, 330, 310, 480, 120, 390, 400]
          },
          {
            name: "Series 2",
            data: [220, 110, 280, 380, 220, 230, 330]
          },
        ]}
        options={{
          colors: ["rgba(24, 20, 243, 1)", "rgba(22, 219, 204, 1)"],

          xaxis: {
            categories: [
              "Sat",
              "Sun",
              "Mon",
              "Tue",
              "Wed",
              "Thu",
              "Fri",
            ],
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "40%",
              barHeight: "100%",
              borderRadius: 10,
              distributed: false
            },
          },
          grid: {
            padding: {
              left: 10,
              right: 10,
            },
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false, 
          },
          chart: {
            toolbar: {
              show: false, 
            },
          },
        }}
      ></Chart>
    </>
  );
}

export default Barchart;