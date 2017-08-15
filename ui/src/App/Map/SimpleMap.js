import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const SimpleMap = ({ currentPlace, places }) => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={{
      lat: currentPlace.location.latitude,
      lng: currentPlace.location.longitude,
    }}
  >
    {places.filter(place => place.location).map(place => (
      <Marker
        position={{
          lat: place.location.latitude,
          lng: place.location.longitude,
        }}
        key={place.id}
      />
    ))}
  </GoogleMap>
);

export default withScriptjs(withGoogleMap(SimpleMap));
