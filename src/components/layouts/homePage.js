import React, { Component } from 'react';
import { Layout, Menu, Button, Space, Col, Row, Avatar, message, Dropdown } from 'antd';

import User from '../../robots/UserRobot';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

import Places from '../places/listPlaces';
import Test from '../test';
import AddPlace from '../places/newPlace';
import EditPlace from '../places/editPlaces';

import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;  

const menu = (
  <Menu>
    
    <Menu.Item key="0">
    <Link to="/new">
        Place
    </Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Divider />
    
  </Menu>
);

class Homepage extends Component {

    state = {
      currentUser: User.getCurrentUser(),
      message: this.props.location.message
    }

    logOut() {
        User.logOut().then(() =>
        this.props.history.push('/')
        )
    }

    componentDidMount()
    {

      if (this.state.message) {
        message.success(this.state.message);
      }
    }
    
    render () {

        if (localStorage.getItem('currentUser')) { 

            return (
                <Router>
                    <Layout style={{ minHeight: '100vh' }}>
                  <Sider
                    
                    breakpoint="lg"
                    collapsedWidth="0"
                  >
                    <div className="logo" />
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: 'center', paddingTop: '50px', paddingBottom: '15px'}}>
                    <Avatar style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: 'center'}} size={64} icon={<UserOutlined />} ></Avatar>
                    </div>
                    
                    <h4 style={{color: 'white', textAlign: 'center'}}>{this.state.currentUser.user.firstName} {this.state.currentUser.user.lastName}</h4>
            <p style={{color: 'white', textAlign: 'center'}}>{this.state.currentUser.user.username}</p>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                      <Menu.Item key="1" icon={<UserOutlined />}>
                            <span>Home</span>
                            <Link to="/" />
                      </Menu.Item>
                      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                          <span>Settings</span>
                            <Link to="/test" />
                      </Menu.Item>
                    </Menu>
                    
                  </Sider>
                  <Layout>
                    <Header className="site-layout-sub-header-background">
              
                    <Row justify="end">
                      <Col span={6}>
                        <Space justify="end">
                          <Link to="/test"><Button style={{ background: "orange", borderColor: "orange"  }} type="dashed">Test</Button></Link>
                          <Link to="/new"><Button type="primary">Add Place</Button></Link>
                          <Button type="primary" style={{ background: "red", borderColor: "red" }} onClick={() => {this.logOut()}}>LogOut</Button>
                          <Dropdown overlay={menu}>
                          <Button>Add</Button>

                          </Dropdown>

                        </Space>
                      </Col>
                    </Row>
                    
                      
                    </Header>
              
                    <Content style={{ background: 'white' }}>
                      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Route exact path="/new" component={AddPlace} />
                        <Route exact path="/" component={Places} />
                        <Route exact path="/test" component={Test} />
                        <Route exact path="/edit/:id" component={EditPlace} />
                      </div>
                    </Content>
                  </Layout>
                </Layout>
                </Router>
                )

        }  else {
            return (
                <Redirect to="login" />
            )
              
        }

        
    }

}


export default Homepage; 