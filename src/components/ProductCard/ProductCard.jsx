import { DeleteFilled, HeartFilled } from "@ant-design/icons";
import { Button, Flex, Image, Rate, Tag } from "antd";
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
  handleDelete,
}) => {
  const { isAdmin } = currentUserStore();

  return (
    <Flex justify="space-between" align="center" style={{}}>
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
        <Flex
          vertical
          justify="space-between"
          style={{ height: "100%" }}
        ></Flex>
      </Flex>
      <Flex
        style={{ height: "100%", marginRight: 20 }}
        vertical
        justify="space-evenly"
        align="flex-end"
        gap={5}
      >
        <Button shape="circle" icon={<HeartFilled />} />
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>{price}$</span>
        <Flex justify="space-between">
          <Tag style={{ fontWeight: 700 }}>{category}</Tag>
          <Tag color={statuses[status]}>{status}</Tag>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductCard;
