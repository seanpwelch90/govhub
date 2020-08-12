import React, {Component} from 'react';
import './App.css';
import MapPlaces from './components/showPlaces';


class App extends Component {

  render () {
    return (
      <MapPlaces places={this.state.places} />
    )
  }

  state = {
    places: []
  };

  componentDidMount() {
    fetch('https://app.gwoodhouse.com/places')
    .then(res => res.json())
    .then((data) => {
        this.setState({ places: data })
    })
    .catch(console.log)
  }    

  
}

export default App;
