import api from "./axios";

export const getProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const createProduct = async (data) => {
  try {
    const response = await api.post("/products", data);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await api.delete("/products/" + id);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
