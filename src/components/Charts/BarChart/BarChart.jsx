import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Flex } from "antd";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const BarChart = ({ title, labels, data }) => {
  // Data for Bar Chart
  const barData = {
    labels,
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  // Options for Bar Chart (optional)
  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

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
      <Bar style={{ height: "100%" }} data={barData} options={barOptions} />
    </Flex>
  );
};

export default BarChart;
