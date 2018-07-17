import React from 'react';
import { Mutation } from 'react-apollo';

import createPlaceMutation from '../../../graphql/createPlaceMutation';
import Input from './Input';

const AddPlace = () => (
  <Mutation mutation={createPlaceMutation} refetchQueries={['getPlaces']}>
    {addPlace => {
      const addPlaceWithAddress = address =>
        addPlace({
          variables: { input: { address } },
        });
      return <Input addPlace={addPlaceWithAddress} />;
    }}
  </Mutation>
);

export default AddPlace;
