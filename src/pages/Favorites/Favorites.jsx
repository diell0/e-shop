import { useEffect, useState } from "react";
import "./Favorites.scss";
import { Flex, Spin } from "antd";
import { deleteFavorite, getFavorites } from "../../services/Favorite";
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

  const handleDeleteFavorite = (productId) => {
    const currentFavoriteId = favorites.find(
      (favorite) => favorite.productId === productId
    ).id;

    deleteFavorite(currentFavoriteId).then(() => {
      setFavorites((prev) =>
        prev.filter((favorite) => favorite.id !== currentFavoriteId)
      );
    });
  };

  if (!favorites) {
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

  return (
    <Flex className="favoritesContainer">
      {favorites.map(({ productId }, index) => {
        const currentProduct = products.find(({ id }) => id === productId);

        return (
          <ProductCard
            key={index}
            {...{
              ...currentProduct,
              isFavorite: true,
              handleFavorite: () => handleDeleteFavorite(productId),
            }}
          />
        );
      })}
    </Flex>
  );
};

export default Favorites;
