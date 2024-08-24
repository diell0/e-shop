import "./Dashboard.scss";
import { Carousel, Flex, Image } from "antd";
import { getProducts } from "../../services/Products";
import { useEffect, useState } from "react";
import BarChart from "../../components/Charts/BarChart/BarChart";
import DoughnutChart from "../../components/Charts/DoughnutChart/DoughnutChart";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  const uniqueNames = [...new Set(products.map(({ name }) => name))];
  const uniqueStatuses = [...new Set(products.map(({ status }) => status))];
  const productRates = [...new Set(products.map(({ rate }) => rate))];

  const chartData = [
    {
      title: "Unique products",
      labels: uniqueNames,
      data: uniqueNames.map(
        (name) => products.filter((product) => product.name === name).length
      ),
      Chart: BarChart,
    },
    {
      title: "Statuses of all products",
      labels: uniqueStatuses,
      data: uniqueStatuses.map(
        (status) =>
          products.filter((product) => product.status === status).length
      ),
      Chart: DoughnutChart,
    },
    {
      title: "Rates for products",
      labels: productRates,
      data: productRates.map(
        (rate) => products.filter((product) => product.rate === rate).length
      ),
      Chart: BarChart,
    },
  ];

  return (
    <Flex
      className="dashboardContainer"
      style={{ overflow: "auto", height: "100%" }}
    >
      <Flex style={{ width: "100%" }}>
        <Carousel autoplay style={{ background: "black" }}>
          {products.map(({ image }, i) => (
            <Image key={i} src={image} />
          ))}
        </Carousel>
      </Flex>
      <Flex gap={10} style={{}}></Flex>
      <Flex
        gap={10}
        style={{
          padding: "10px",
          height: "100%",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {chartData.map(({ title, labels, data, Chart }) => (
          <Chart title={title} labels={labels} data={data} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Dashboard;
