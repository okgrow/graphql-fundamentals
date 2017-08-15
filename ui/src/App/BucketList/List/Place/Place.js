import React from 'react';

// import updatePlaceMutation from '../../../../graphql/updatePlaceMutation';
import PlaceView from './PlaceView';

const Place = ({ place }) => {
  return <PlaceView place={place} toggleVisited={() => {}} />;
};

export default Place;
