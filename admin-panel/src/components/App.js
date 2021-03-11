import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import Header from "./generic/Header";
import Sidebar from "./generic/Sidebar";
// import Dashboard from './generic/Dashboard'
import PersonRouter from "./person/Router";
import PostRouter from "./post/Router";
import "antd/dist/antd.css";
import "../assets/css/general.css";
import Dashboard from "./generic/Dashboard";

const { Header: AntHeader, Sider, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <AntHeader>
          <Header />
        </AntHeader>
        <Layout>
          <Sider>
            <Sidebar />
          </Sider>
          <Content
            style={{
              padding: "20px",
              backgroundColor: "white",
              margin: "30px",
            }}
          >
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/person*" exact component={PersonRouter} />
              <Route path="/post*" exact component={PostRouter} />
            </Switch>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
