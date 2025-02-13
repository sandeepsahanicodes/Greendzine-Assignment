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

const inventoryData = {
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
      label: "Inventory",
      data: [50, 60, 55, 70, 80, 75],
      borderColor: "#FFC107",
      backgroundColor: "rgba(255, 193, 7, 0.2)",
      tension: 0.4,
    },
  ],
};

const InventoryChart = () => (
  <Line data={inventoryData} options={lineChartOptions} />
);

export default InventoryChart;
