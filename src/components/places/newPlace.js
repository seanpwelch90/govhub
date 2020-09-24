import React, {Component} from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';


class AddPlace extends Component {

  state = {
    placeLabel: '',
    latitude: '',
    longitude: '',
    currentPos: '',
  }

  handleMapClick = event => {
    this.setState({ currentPos: event.latlng });
    const { lat, lng } = event.latlng;
    this.setState({ latitude: event.latlng.lat });
    this.setState({ longitude: event.latlng.lng });
    console.log(this.state.longitude);
    console.log(this.state.latitude);

    

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


    const position = [37.82, -122.29]

    return (
      <div>
      <Form
      name="basic"
      ref={this.formRef}
      initialValues={{ remember: true }}
      onFinish={this.handleSubmit}
    >
      <Form.Item
        label="Place"
        name="label"
        onChange={this.handleLabelChange}
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input
        value={this.state.label} />
      </Form.Item>

      <Form.Item
        label="Latitude"
        name="latitude"
        onChange={this.handleLatChange}
      >
        <Input
        value={this.state.latitude} />
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

        <Map center={position} zoom={10} onClick={this.handleMapClick}>
          <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          { this.state.currentPos && 
          <Marker position={this.state.currentPos} draggable={true}>
            <Popup position={this.state.currentPos}>
              Current location: <pre>{JSON.stringify(this.state.currentPos, null, 2)}</pre>
            </Popup>
          </Marker>
          }
        </Map>

    </div>
    )
  }
      
}

export default AddPlace;
