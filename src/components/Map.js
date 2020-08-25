import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class MapView extends Component {

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

        const position = [37.82, -122.29]

        if (isLoading) {
        return <p>Loading ...</p>;
        }

        return (
            <Map center={position} zoom={10}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {places.map((place) => (
                  
                <Marker position={[place.latitude, place.longitude]}>
                <Popup>{place.label}</Popup>
                </Marker>

                ))}
            </Map>
        )
    }

}

export default MapView;