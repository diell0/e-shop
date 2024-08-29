import "./Carts.scss";
import { useEffect, useState } from "react";
import { Divider, Flex, Spin } from "antd";
import currentUserStore from "../../store/currentUserStore";
import { getProducts } from "../../services/Products";
import ProductCard from "../../components/ProductCard/ProductCard";
import { deleteCart, getCarts } from "../../services/Cart";

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

  const handleDeleteFromCart = (productId) => {
    const currentCartId = carts.find(
      (cart) => cart.productId === productId
    )?.id;

    deleteCart(currentCartId).then(() => {
      setCarts((prev) => prev.filter((cart) => cart.id !== currentCartId));
    });
  };

  if (!carts) {
    return (
      <Spin
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        size="large"
        tip="Loading..."
      />
    );
  }

  const groupedCartsByProduct = carts.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.productId]: [...(acc?.[curr?.productId] || []), curr],
    };
  }, {});

  return (
    <Flex className="cartsContainer" gap={10}>
      {Object.entries(groupedCartsByProduct).map(
        ([productId, productCarts], index) => {
          const currentProduct = products.find(
            ({ id }) => id === parseInt(productId)
          );

          return (
            <Flex vertical key={index}>
              <Divider>
                <b style={{ fontSize: 22 }}>{currentProduct.name}</b>
              </Divider>

              <Flex className="cards" vertical gap={10}>
                {productCarts.map((cart, i) => {
                  return (
                    <ProductCard
                      key={i}
                      {...{
                        ...currentProduct,
                        handleAddToCart: () =>
                          handleDeleteFromCart(cart.productId),
                      }}
                    />
                  );
                })}
              </Flex>
            </Flex>
          );
        }
      )}
    </Flex>
  );
};

export default Carts;
