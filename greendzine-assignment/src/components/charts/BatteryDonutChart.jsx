import React from "react";
import { Doughnut } from "react-chartjs-2";
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

const percentage = 65;

const batteryData = {
  labels: ["Remaining", "Consumed"],
  datasets: [
    {
      data: [percentage, 100 - percentage],
      backgroundColor: ["#007BFF", "#FFC107"],
    },
  ],
};

const doughnutOptions = {
  cutout: "70%",
  plugins: {
    legend: {
      labels: { color: "white", font: { size: 14 } },
    },
  },
};

const BatteryDonutChart = () => (
  <Doughnut data={batteryData} options={doughnutOptions} />
);

export default BatteryDonutChart;
