import React, {Component} from 'react';
import './App.css';
import Places from './components/places/listPlaces.js';

import Test from './components/test';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Layout, Menu, Button, Space, Col, Row } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import AddPlace from './components/places/newPlace';
import EditPlace from './components/places/editPlaces';



const { Header, Content, Sider } = Layout;


class App extends Component {

  render () {
    return (
      <Router>
      <Layout style={{ minHeight: '100vh' }}>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
              <span>Home</span>
              <Link to="/" />
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <span>Test</span>
              <Link to="/test" />
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background">

      <Row justify="end">
        <Col span={4}>
          <Space justify="end">
            <Link to="/test"><Button type="dashed">Test</Button></Link>
            <Link to="/new"><Button type="primary">Add Place</Button></Link>
          </Space>
        </Col>
      </Row>
      
        
      </Header>

      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <Route exact path="/new" component={AddPlace} />
          <Route exact path="/" component={Places} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/edit" component={EditPlace} />
        </div>
      </Content>
    </Layout>
  </Layout>
  </Router>
    )
  }
  
}

export default App;
