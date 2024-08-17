import "./AuthenticatedLayout.scss";
import { Layout } from "antd";
import { Dashboard, Profile } from "../../pages";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Products from "../../pages/Dashboard/Products/Products";

const { Content } = Layout;

const AuthenticatedLayout = () => {
  return (
    <Layout className="authenticated-layout">
      <Header />

      <Layout className="layout-content">
        <Sidebar />

        <Layout
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "5px",
          }}
        >
          <Content className="content-wrapper">
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/products" element={<Products />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AuthenticatedLayout;
