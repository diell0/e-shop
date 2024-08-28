import { useEffect, useState } from "react";
import "./Favorites.scss";
import { Alert, Flex } from "antd";
import { getFavorites } from "../../services/Favorite";
import currentUserStore from "../../store/currentUserStore";
import { getProducts } from "../../services/Products";

const Favorites = () => {
  const { userId } = currentUserStore();

  const [favorites, setFavorites] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });

    getFavorites(userId).then((res) => {
      setFavorites(res);
    });
  }, [userId]);

  return (
    <Flex className="favoritesContainer">
      {favorites.map(({ productId }, index) => {
        const currentProduct = products.find(({ id }) => id === productId);

        return (
          <Alert
            key={index}
            message={currentProduct.name}
            description={currentProduct.description}
            type={currentProduct.status === "In Stock" ? "success" : "error"}
            showIcon
          />
        );
      })}
    </Flex>
  );
};

export default Favorites;
