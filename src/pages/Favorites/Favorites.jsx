import { useEffect, useState } from "react";
import "./Favorites.scss";
import { Flex } from "antd";
import { getFavorites } from "../../services/Favorite";
import currentUserStore from "../../store/currentUserStore";

const Favorites = () => {
  const { userId } = currentUserStore();

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites(userId).then((res) => {
      setFavorites(res);
    });
  }, [userId]);

  return (
    <Flex className="favoritesContainer">
      <h1>Favorites</h1>
    </Flex>
  );
};

export default Favorites;
