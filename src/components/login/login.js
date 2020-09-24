import React, {Component} from 'react';
import { Form, Input, Button, Checkbox, Layout } from 'antd';
import User from '../../robots/UserRobot';

import {
  Redirect,
  withRouter
} from "react-router-dom";

const { Header, Content } = Layout;

class LoginPage extends Component {

  
      state = {
        userName: '',
        password: '',
      }

  
      handleUsernameChange = event => {
        this.setState({ userName: event.target.value });
      }
    
      handlePasswordChange = event => {
        this.setState({ password: event.target.value });
      }
    
      handleSubmit = e => {
        
        User.login(this.state.userName, this.state.password)
        .then(() =>
        this.props.history.push({
            pathname: '/',
            message: 'Successfully logged in!'
        })
        )

      };
    
    
    
    render () {


      if (localStorage.getItem('currentUser')) { 

      return (

        <Redirect to="/" />

      )

      }
     
      else {


        return (



<Layout style={{ minHeight: '100vh' }}>
    <Header></Header>
    <Content style={{ padding: '200px' }}>

    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={this.handleSubmit}
    >
      <Form.Item
        label="Username"
        name="userName"
        onChange={this.handleUsernameChange}
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        onChange={this.handlePasswordChange}
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

    </Content>
    </Layout>
        )
    }

  }
}
    
export default withRouter(LoginPage);