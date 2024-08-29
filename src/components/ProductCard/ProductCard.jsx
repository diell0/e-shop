import "./ProductCard.scss";
import {
  DeleteFilled,
  HeartFilled,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Badge, Button, Flex, Image, Rate, Tag } from "antd";
import currentUserStore from "../../store/currentUserStore";

const statuses = { "Out Of Stock": "red", "In Stock": "green" };

const ProductCard = ({
  name,
  description,
  image,
  category,
  price,
  rate = 2.5,
  status = "In Stock",
  isFavorite,
  cartsLength,
  handleDelete,
  handleFavorite,
  handleAddToCart,
}) => {
  const { isAdmin } = currentUserStore();

  return (
    <Flex className="cardContainer" justify="space-between" align="center">
      <Flex style={{ height: "100%" }} align="center" gap={20}>
        <Flex>
          <Image
            width={100}
            height={100}
            style={{ borderRadius: "20px" }}
            src={
              image ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgAaHX6pPeyewcUpOxSTk1T-Qo6FsnVvs6Vg&s"
            }
          />
        </Flex>
        <Flex vertical justify="space-between" style={{ height: "100%" }}>
          <span style={{ fontSize: "24px", fontWeight: "bold" }}>{name}</span>
          <span>{description}</span>
          <Rate allowHalf defaultValue={rate} />
        </Flex>
      </Flex>
      <Flex
        style={{ height: "100%", marginRight: 20 }}
        vertical
        justify="space-evenly"
        align="flex-end"
        gap={5}
      >
        <Flex gap={10}>
          {handleAddToCart && (
            <Badge count={cartsLength}>
              <Button
                shape="circle"
                icon={<ShoppingCartOutlined />}
                onClick={handleAddToCart}
              />
            </Badge>
          )}
          {handleFavorite && (
            <Button
              shape="circle"
              icon={isFavorite ? <HeartFilled /> : <HeartOutlined />}
              onClick={handleFavorite}
            />
          )}
        </Flex>
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>{price}$</span>
        <Flex justify="space-between">
          <Tag style={{ fontWeight: 700 }}>{category}</Tag>
          <Tag color={statuses[status]}>{status}</Tag>
        </Flex>
      </Flex>

      {isAdmin && handleDelete && (
        <Button
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            border: 0,
            margin: 3,
          }}
          type="primary"
          icon={<DeleteFilled />}
          onClick={handleDelete}
          color="white"
          danger
        />
      )}
    </Flex>
  );
};

export default ProductCard;
