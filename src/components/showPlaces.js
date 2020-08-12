import React from 'react'

    const MapPlaces = ({ places }) => {
      return (
        <div>
          <center><h1>Contact List</h1></center>
          {places.map((place) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{place.label}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{place.latitude}</h6>
                <p class="card-text">{place.longitude}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default MapPlaces
