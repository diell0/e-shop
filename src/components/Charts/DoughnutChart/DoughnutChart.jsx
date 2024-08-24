import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Flex } from "antd";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const DoughnutChart = ({ title, labels, data }) => {
  // Data for Doughnut Chart

  return (
    <Flex
      justify="center"
      align="center"
      style={{
        background: "rgb(0, 0, 0, 0.03)",
        borderRadius: "10px",
        padding: "20px",
        height: "280px",
        flex: "1 0 0",
        minWidth: "300px",
      }}
    >
      <Doughnut data={doughnutData} />;
    </Flex>
  );
};

export default DoughnutChart;
