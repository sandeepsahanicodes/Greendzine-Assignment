import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const lineChartOptions = {
  responsive: true,
  plugins: { legend: { display: false } },
  scales: {
    x: { grid: { color: "white" }, ticks: { color: "white" } },
    y: { grid: { color: "white" }, ticks: { color: "white" } },
  },
  plugins: { legend: { labels: { color: "white" } } },
};

const marginData = {
  labels: [
    "12th Oct",
    "13th Oct",
    "14th Oct",
    "15th Oct",
    "16th Oct",
    "17th Oct",
  ],
  datasets: [
    {
      label: "Margin %",
      data: [20, 40, 80, 50, 90, 70],
      borderColor: "#00FF66",
      backgroundColor: "rgba(0, 255, 102, 0.2)",
      tension: 0.4,
    },
  ],
};

const MarginChart = () => <Line data={marginData} options={lineChartOptions} />;

export default MarginChart;
