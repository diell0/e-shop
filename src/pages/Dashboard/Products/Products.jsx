import { SearchOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import Search from "antd/es/transfer/search";
import currentUserStore from "../../../store/currentUserStore";
import { useEffect, useState } from "react";
import { deleteProduct, getProducts } from "../../../services/Products";
import ProductCard from "../../../components/ProductCard/ProductCard";
import NewProductModal from "../../../components/NewProductModal/NewProductModal";

const Products = () => {
  const { isAdmin } = currentUserStore();

  const [products, setProducts] = useState([]);
  const [showNewModal, setShowNewModal] = useState(false);

  useEffect(() => {
    getProducts().then((res) => {
      console.log({ res });

      setProducts(res);
    });
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id);
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <Flex gap={20}>
      <Flex
        gap={20}
        align="center"
        style={{
          borderRadius: "10px",
          border: "1px solid gray",
          padding: "10px",
          background: "#fff",
        }}
      >
        <div
          style={{ fontSize: "24px", fontWeight: "bold", textWrap: "nowrap" }}
        >
          Products
        </div>

        <Search
          placeholder="Search..."
          enterButton={<SearchOutlined />}
          style={{ width: "100px" }}
        />

        <Flex gap={10}>
          {isAdmin && (
            <Button
              type="primary"
              style={{ background: "green" }}
              onClick={() => setShowNewModal(true)}
            >
              New Product
            </Button>
          )}
        </Flex>
      </Flex>

      <Flex
        gap={10}
        justify="start"
        style={{
          background: "gray",
          padding: "20px",
          height: "100%",
          flexWrap: "wrap",
        }}
      >
        {products.map((product, i) => (
          <ProductCard
            key={i}
            {...{ ...product, handleDelete: () => handleDelete(product.id) }}
          />
        ))}
      </Flex>

      <NewProductModal {...{ showNewModal, setShowNewModal, setProducts }} />
    </Flex>
  );
};

export default Products;
