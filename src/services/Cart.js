import api from "./axios";

export const getCarts = async (userId) => {
  try {
    if (!userId) {
      return;
    }
    const response = await api.get("/cart/" + userId);
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
  }
};

export const createCart = async (data) => {
  try {
    const response = await api.post("/cart", data);
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
  }
};

export const deleteCart = async (id) => {
  try {
    const response = await api.delete("/cart/" + id);
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
  }
};
