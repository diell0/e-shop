import { SearchOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import Search from "antd/es/transfer/search";
import currentUserStore from "../../store/currentUserStore";
import { useEffect, useState } from "react";
import { deleteProduct, getProducts } from "../../services/Products";
import ProductCard from "../../components/ProductCard/ProductCard";
import NewProductModal from "../../components/NewProductModal/NewProductModal";
import "./Products.scss";

const Products = () => {
  const { isAdmin } = currentUserStore();

  const [products, setProducts] = useState([]);
  const [showNewModal, setShowNewModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id);
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  console.log({ searchValue });

  return (
    <Flex gap={10}>
      <Flex gap={20} align="center" className="productContainer">
        <div className="title">Products ({products.length})</div>

        <Search
          placeholder="Search..."
          enterButton={<SearchOutlined />}
          style={{ width: "100px" }}
          onChange={(e) => setSearchValue(e.target.value)}
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

      <Flex gap={10} justify="start" className="cards">
        {products
          .filter(({ name }) => name.includes(searchValue))
          .map((product, i) => (
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
