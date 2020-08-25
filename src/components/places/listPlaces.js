import React, {Component} from 'react';
import MapView from '../Map';
import { Button, List } from 'antd';
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
    }
 

    return (
      <div>
        <MapView />
          {places.map((place) => (
            <div key={place.id} class="card" style={{ margin: '15px' }}>
              <div class="card-body">
                <h5 class="card-title">{place.label}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{place.latitude}</h6>
                <p class="card-text">{place.longitude}</p>
                
                <Link to={{ pathname: '/edit', state: { id: place.id} }}>
                  <Button style={{float: 'right'}} type="primary">Edit</Button>
                </Link>
                <Link to={{ pathname: '/edit', state: { id: place.id} }}>
                  <Button style={{float: 'right'}} type="primary" danger>Delete </Button>
                </Link>
                
              </div>
            </div>
          ))}
        </div>
    );
  }
}

export default Places;