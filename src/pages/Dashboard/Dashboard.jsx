import { Carousel, Flex } from "antd";
import "./Dashboard.scss";
import { getProducts } from "../../services/Products";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <Flex className="dashboardContainer">
      <Carousel style={{ width: "100%" }} autoplay>
        {products.map((_, i) => (
          <div key={i}>
            <h3 style={contentStyle}>{i}</h3>
          </div>
        ))}
      </Carousel>
    </Flex>
  );
};

export default Dashboard;
