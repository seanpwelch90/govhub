import React, {Component} from 'react';
import MapView from '../Map';
import { Button, List, Divider, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

class Places extends Component {

    state = {
        places: [],
        isLoading: false
      }

    componentDidMount() {
    this.setState({ isLoading: true })
    fetch('https://app.gwoodhouse.com/places')
    .then(res => res.json())
    .then((data) => {
        this.setState({ places: data, isLoading: false })
    })
    .catch(console.log)
    }    

  render () {

    const { places, isLoading } = this.state

    if (isLoading) {
      return <p>Loading ...</p>;
    } else {

    return (
      <div style={{ padding: '25px' }}>
      <Divider>Places</Divider>
      <Row gutter={16}>
                      
          <Col span={12}>
          <List
          shape="rounded"
        itemLayout="horizontal"
        dataSource={places}
        bordered
        style={{ padding: '15px', cornerRadius: '15px' }}
        renderItem={place => (
          <List.Item
            actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
          >
              <List.Item.Meta
                title={<a href="https://ant.design">{place.label}</a>}
              />
          </List.Item>
        )}
      />
          </Col>
          <Col span={12}>
          <MapView />
          </Col>
          </Row>
      

    </div>

    )}
 
    
    // return (
    //   <div>
    //     <MapView />
    //       {places.map((place) => (
            
    //         <div key={place.id} class="card" style={{ margin: '15px' }}>
    //           <div class="card-body">
    //             <h5 class="card-title">{place.label}</h5>
    //             <h6 class="card-subtitle mb-2 text-muted">{place.latitude}</h6>
    //             <p class="card-text">{place.longitude}</p>
                
    //             <Link to={{ pathname: `/edit/${place.id}`, state: { id: place.id} }}>
    //               <Button style={{float: 'right'}} type="primary">Edit</Button>
    //             </Link>
    //             <Link to={{ pathname: '/edit/', state: { id: place.id} }}>
    //               <Button style={{float: 'right'}} type="primary" danger>Delete </Button>
    //             </Link>
                
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    // );
  }
}

export default Places;