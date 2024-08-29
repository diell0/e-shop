import api from "./axios";

export const getFavorites = async (userId) => {
  try {
    if (!userId) {
      return;
    }
    const response = await api.get("/favorites/" + userId);
    return response.data;
  } catch (error) {
    console.error("Error fetching favorites:", error);
  }
};

export const createFavorite = async (data) => {
  try {
    const response = await api.post("/favorites", data);
    return response.data;
  } catch (error) {
    console.error("Error fetching favorites:", error);
  }
};

export const deleteFavorite = async (id) => {
  try {
    const response = await api.delete("/favorites/" + id);
    return response.data;
  } catch (error) {
    console.error("Error fetching favorites:", error);
  }
};
