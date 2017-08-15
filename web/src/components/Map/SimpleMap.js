import React from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const SimpleMap = ({ currentPlace, places }) =>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={{
      lat: currentPlace.latitude,
      lng: currentPlace.longitude,
    }}
  >
    {places.map(place =>
      <Marker
        position={{
          lat: place.latitude,
          lng: place.longitude,
        }}
        key={place.id}
      />
    )}
  </GoogleMap>;

SimpleMap.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      visited: PropTypes.bool.isRequired,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    })
  ).isRequired,
  currentPlace: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    visited: PropTypes.bool.isRequired,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }).isRequired,
};

export default withGoogleMap(SimpleMap);
