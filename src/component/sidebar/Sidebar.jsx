import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { ContactsOutlined } from "@ant-design/icons";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Deals } from "../news/Deals";
const { Sider } = Layout;
export class Sidebar extends React.Component {
  state = {
    collapsed: false,
  };
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider width={"250"}>
          <div className="logo">
            <AdminPanelSettingsIcon /> Salesautomators
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<ContactsOutlined />}>
              Deals
            </Menu.Item>
          </Menu>
        </Sider>
          <Deals />
      </Layout>
    );
  }
}
