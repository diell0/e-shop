import "./AuthenticatedLayout.scss";
import { Layout, Result, Spin } from "antd";
import { Dashboard, Profile } from "../../pages";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Products from "../../pages/Products/Products";
import Favorites from "../../pages/Favorites/Favorites";
import Carts from "../../pages/Carts/Carts";
import { useEffect, useState } from "react";
import api from "../../services/axios";

const { Content } = Layout;

const AuthenticatedLayout = () => {
  const [backendStatus, setBackendStatus] = useState("connecting");

  useEffect(() => {
    api
      .get("/api")
      .then(() => {
        setBackendStatus("connected");
      })
      .catch(() => {
        setBackendStatus("error");
      });
  }, []);

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
          {backendStatus === "connecting" ? (
            <Spin style={{ margin: "auto" }} size="large" tip="Loading..." />
          ) : backendStatus === "error" ? (
            <Result
              style={{ margin: "auto" }}
              status="500"
              title="Sorry, we can't connect to the server!"
              subTitle="Please try again later!"
            />
          ) : (
            <Content className="content-wrapper">
              <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/products" element={<Products />} />
                <Route exact path="/favorites" element={<Favorites />} />
                <Route exact path="/cart" element={<Carts />} />
              </Routes>
            </Content>
          )}
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AuthenticatedLayout;
