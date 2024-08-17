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
    <Flex
      justify="space-between"
      align="center"
      style={{
        background: "red",
        flex: "1 0 0",
        height: "150px",
        minWidth: "400px",
        padding: "10px 20px",
      }}
    >
      <Flex style={{ height: "100%" }} align="center" gap={20}>
        <Flex>
          <Image
            width={100}
            height={100}
            src={
              image ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgAaHX6pPeyewcUpOxSTk1T-Qo6FsnVvs6Vg&s"
            }
          />
        </Flex>
        <Flex vertical>
          <span style={{ fontSize: "24px", fontWeight: "bold" }}>{name}</span>
          <span>{description}</span>
          <Rate allowHalf defaultValue={rate} />
          <Tag title={category} />
        </Flex>
      </Flex>
      <Flex
        style={{ height: "100%" }}
        vertical
        justify="space-evenly"
        align="center"
        gap={5}
      >
        {isAdmin && (
          <Button
            shape="circle"
            icon={<DeleteFilled />}
            onClick={handleDelete}
          />
        )}
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>{price}</span>
        <Button icon={<HeartFilled />}>Favourite</Button>
        <Button style={{ background: statuses[status] }}>{status}</Button>
      </Flex>
    </Flex>
  );
};

export default ProductCard;
