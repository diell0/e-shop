import { Flex } from "antd";
import "./Dashboard.scss";
import Card from "../../components/Card/Card";

const products = [
  {
    name: "Iphone 15",
    price: 1200,
    category: "phone",
    img: "https://primefaces.org/cdn/primereact/images/usercard.png",
  },
  {
    name: "Samsung 15",
    price: 500,
    category: "phone",
    img: "https://primefaces.org/cdn/primereact/images/usercard.png",
  },
  {
    name: "Laptop Acer",
    price: 2200,
    category: "laptop",
    img: "https://primefaces.org/cdn/primereact/images/usercard.png",
  },
  {
    name: "ssss Acer",
    price: 2200,
    category: "laptop",
    img: "https://primefaces.org/cdn/primereact/images/usercard.png",
  },
  {
    name: "111111111111 Acer",
    price: 2200,
    category: "laptop",
    img: "https://primefaces.org/cdn/primereact/images/usercard.png",
  },
];

const Dashboard = () => {
  return (
    <Flex className="dashboardContainer">
      {products.map((product, i) => {
        return <Card key={i} />;
      })}
    </Flex>
  );
};

export default Dashboard;
