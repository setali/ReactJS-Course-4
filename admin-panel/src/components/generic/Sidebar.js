import { Link } from "react-router-dom";
import { Menu } from "antd";
import { UserOutlined, EditOutlined, HomeOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

function Sider() {
  const handleClick = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={handleClick}
      style={{ width: "100%" }}
      defaultSelectedKeys={["dashboard"]}
      defaultOpenKeys={[]}
      mode="inline"
    >
      <Menu.Item key="dashboard">
        <HomeOutlined />
        <Link to="/">داشبورد</Link>
      </Menu.Item>

      <SubMenu key="person" icon={<UserOutlined />} title="کاربران">
        <Menu.Item key="list">
          <Link to="/person">لیست کاربران</Link>
        </Menu.Item>
        <Menu.Item key="new">
          <Link to="/person/new">ایجاد کاربر</Link>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="post" icon={<EditOutlined />} title="مقالات">
        <Menu.Item key="list">
          <Link to="/post">لیست مقالات</Link>
        </Menu.Item>
        <Menu.Item key="new">
          <Link to="post/new">ایجاد مقاله</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default Sider;
