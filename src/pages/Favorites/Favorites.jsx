import { useEffect, useState } from "react";
import "./Favorites.scss";
import { Flex, Spin } from "antd";
import { getFavorites } from "../../services/Favorite";
import currentUserStore from "../../store/currentUserStore";
import { getProducts } from "../../services/Products";
import ProductCard from "../../components/ProductCard/ProductCard";

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

  if (!favorites) {
    return <Spin />;
  }

  return (
    <Flex className="favoritesContainer">
      {favorites.map(({ productId }, index) => {
        const currentProduct = products.find(({ id }) => id === productId);

        return <ProductCard key={index} {...currentProduct} />;
      })}
    </Flex>
  );
};

export default Favorites;
