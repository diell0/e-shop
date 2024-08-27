import { useState } from "react";
import {
  DashboardOutlined,
  HeartTwoTone,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;

const sidebarItems = () => [
  { key: "", label: "Dashboard", icon: <DashboardOutlined /> },
  { key: "products", label: "Products", icon: <ShoppingOutlined /> },
  { key: "favorites", label: "Favorites", icon: <HeartTwoTone /> },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);

  const sidebar = sidebarItems();

  return (
    <Sider
      width={200}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname.slice(1)]}
        defaultOpenKeys={["other"]}
        items={sidebar}
        onClick={({ key }) => navigate(`/${key}`)}
      />
    </Sider>
  );
};

export default Sidebar;
