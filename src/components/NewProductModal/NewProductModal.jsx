import { Button, Flex, Form, Input, message, Modal } from "antd";
import { createProduct } from "../../services/Products";

const productInputs = [
  { label: "name", name: "name", placeholder: "Enter product name" },
  {
    label: "description",
    name: "description",
    placeholder: "Enter product description",
  },
  { label: "image", name: "image", placeholder: "Enter product image" },
  {
    label: "category",
    name: "category",
    placeholder: "Enter product category",
  },
  { label: "price", name: "price", placeholder: "Enter product price" },
  { label: "rate", name: "rate", placeholder: "Enter product rate" },
  {
    label: "status",
    name: "status",
    type: "select",
    placeholder: "Select product status",
    options: [
      { label: "In Stock", value: "In Stock" },
      { label: "Out Of Stock", value: "Out Of Stock" },
    ],
  },
];

const NewProductModal = ({ showNewModal, setShowNewModal, setProducts }) => {
  const [form] = Form.useForm();

  const handleSaveProduct = () => {
    form
      .validateFields()
      .then(() => {
        const newProduct = form.getFieldsValue();

        createProduct(newProduct).then((res) => {
          setProducts((prev) => [...prev, res]);
          setShowNewModal(false);
          message.success("Product added successfully!");
        });
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  return (
    <Modal
      title="New Product"
      centered
      open={showNewModal}
      onCancel={() => setShowNewModal(false)}
      footer={
        <Flex justify="space-between">
          <Button style={{ color: "white", background: "red" }}>Close</Button>
          <Button
            style={{ color: "white", background: "green" }}
            onClick={handleSaveProduct}
          >
            Save
          </Button>
        </Flex>
      }
    >
      <Form
        form={form}
        initialValues={{
          name: "name",
          description: "description",
          image:
            "https://primefaces.org/cdn/primereact/images/product/pink-purse.jpg",
          category: "Laptop",
          price: "123.2",
          rate: "4",
          status: "In Stock",
        }}
      >
        <Flex vertical gap={20}>
          {productInputs.map((input, i) => {
            const { name, label, ...rest } = input;
            return (
              <Form.Item
                key={i}
                layout="vertical"
                label={label}
                name={name}
                rules={[{ required: true, message: "Please input " + name }]}
                style={{ height: "40px" }}
              >
                <Input {...rest} />
              </Form.Item>
            );
          })}
        </Flex>
      </Form>
    </Modal>
  );
};

export default NewProductModal;
