import React, {Component} from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

class AddPlace extends Component {

  state = {
    placeLabel: '',
    latitude: '',
    longitude: '',
  }

  handleLabelChange = event => {
    this.setState({ placeLabel: event.target.value });
  }

  handleLatChange = event => {
    this.setState({ latitude: event.target.value });
  }

  handleLongChange = event => {
    this.setState({ longitude: event.target.value });
  }

  handleSubmit = e => {
    console.log("Submit Called");
    const data = {
      label: this.state.placeLabel,
      latitude: this.state.latitude,
      longitude: this.state.longitude
    };
    axios
      .post("https://app.gwoodhouse.com/places", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
      this.props.history.push('/');  
  };

  render() {
    return (

      <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={this.handleSubmit}
    >
      <Form.Item
        label="Place"
        name="label"
        onChange={this.handleLabelChange}
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Latitude"
        name="latitude"
        onChange={this.handleLatChange}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Longitude"
        name="longitude"
        onChange={this.handleLongChange}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>


      
    )
  }
      
}

export default AddPlace;
