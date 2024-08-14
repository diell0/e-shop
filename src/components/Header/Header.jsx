import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { Button, Layout, Tooltip, message } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import currentUserStore from "../../store/currentUserStore";

const { Header: HeaderAntd } = Layout;

const Header = () => {
  const navigate = useNavigate();
  const { fullName } = currentUserStore();

  const onLogOut = () => {
    message.info("You logged out!");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <HeaderAntd theme="light" className="header-content">
      <div className="header-logo">E Shop</div>
      <div className="right-section">
        <Tooltip title={"name"}>
          <Button type="default" ghost icon={<UserOutlined />}>
            {`Hello ${fullName}`}
          </Button>
        </Tooltip>
        <Button shape="circle" onClick={onLogOut} icon={<LogoutOutlined />} />
      </div>
    </HeaderAntd>
  );
};

export default Header;
