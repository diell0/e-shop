import { useEffect, useState } from "react";
import "./Carts.scss";
import { Flex, Spin } from "antd";
import currentUserStore from "../../store/currentUserStore";
import { getProducts } from "../../services/Products";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getCarts } from "../../services/Cart";

const Carts = () => {
  const { userId } = currentUserStore();

  const [carts, setCarts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });

    getCarts(userId).then((res) => {
      setCarts(res);
    });
  }, [userId]);

  console.log({ carts });

  if (!carts) {
    return <Spin />;
  }

  return (
    <Flex className="cartsContainer">
      {carts.map(({ productId }, index) => {
        const currentProduct = products.find(({ id }) => id === productId);

        return <ProductCard key={index} {...currentProduct} />;
      })}
    </Flex>
  );
};

export default Carts;
