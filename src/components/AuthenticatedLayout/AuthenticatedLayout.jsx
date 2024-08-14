import "./AuthenticatedLayout.scss";
import React from "react";
import { Layout } from "antd";
import { Dashboard, Profile } from "../../pages";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

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
            padding: "0 24px 24px",
            background: "#4d6f8fcc",
          }}
        >
          <Content className="content-wrapper">
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/profile" element={<Profile />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AuthenticatedLayout;
