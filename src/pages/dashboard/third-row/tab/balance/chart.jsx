import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import style from "./style.module.scss";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const IncomeChart = () => {
  const data = {
    labels: [
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
    ],
    datasets: [
      {
        label: "Monthly Income",
        data: [0, 300, 200, 450, 400, 600, 750, 200, 500, 200, 600, 0],
        backgroundColor: "linear-gradient(rgba(45, 96, 255, 0.25), rgba(45, 96, 255, 0)",
        borderColor: "rgba(24, 20, 243, 1)",
        borderWidth: 3,
        cubicInterpolationMode: "monotone",
        fill: false,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    interaction: {
      intersect: false,
      mode: "index",
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "white",
        // bodyColor: "#272626",
        yAlign: "bottom",
        cornerRadius: 4,
        usePointStyle: true,

        callbacks: {
          label: (context) => {
            if (context.parsed.y !== null) {
              return new Intl.NumberFormat("en-US", {
                style: "currency",
              }).format(context.parsed.y);
            }
            return null;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          drawBorder: true,
          borderDash: [4, 4],
        },
      },
      y: {
        grid: {
          color: "#27292D",
        },
        ticks: {
          callback: (value) => `$${value}`,
        },
      },
    },
  };

  return (
    <div className={style.balance_container_chart}>
      <Line 
       data={data} 
       options={options} 
       className={style.balance_container_chart_line} 
      />
    </div>
  );
};

export default IncomeChart;
