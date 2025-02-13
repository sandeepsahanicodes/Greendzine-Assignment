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

const ordersData = {
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
      label: "Orders",
      data: [40, 50, 45, 55, 65, 60],
      borderColor: "#FF416C",
      backgroundColor: "rgba(255, 65, 108, 0.2)",
      tension: 0.4,
    },
  ],
};

const OrdersChart = () => <Line data={ordersData} options={lineChartOptions} />;

export default OrdersChart;
