import { Layout } from 'antd'
import Header from './generic/Header'
import Sidebar from './generic/Sidebar'
// import Dashboard from './generic/Dashboard'
import Users from './person/List'
import 'antd/dist/antd.css'
import '../assets/css/general.css'

const { Header: AntHeader, Sider, Content, Footer } = Layout

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
          <Content style={{ padding: '20px 80px' }}>
            {/* <Dashboard /> */}
            <Users />
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
