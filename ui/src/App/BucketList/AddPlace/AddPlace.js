import React from 'react';
import { Mutation } from 'react-apollo';

import createPlaceMutation from '../../../graphql/createPlaceMutation';
import getPlacesQuery from '../../../graphql/getPlacesQuery';

import Input from './Input';

const AddPlace = () => (
  <Mutation
    mutation={createPlaceMutation}
    update={(cache, { data: { createPlace } }) => {
      console.log('updating', createPlace);
      const { places } = cache.readQuery({
        query: getPlacesQuery,
      });
      cache.writeQuery({
        query: getPlacesQuery,
        data: { places: places.concat([createPlace]) },
      });
    }}
  >
    {addPlace => {
      const addPlaceWithAddress = address =>
        addPlace({
          variables: { input: { address } },
          optimisticResponse: {
            createPlace: { ...optimisticResponseBase, address },
          },
        });
      return <Input addPlace={addPlaceWithAddress} />;
    }}
  </Mutation>
);

const optimisticResponseBase = {
  __typename: 'Place',
  id: 'optimistic',
  visited: false,
  location: {
    __typename: 'Location',
    latitude: 0,
    longitude: 0,
    weather: {
      __typename: 'Weather',
      id: 'optimistic-weather',
      icon: '',
      temperature: null,
    },
  },
};

export default AddPlace;
