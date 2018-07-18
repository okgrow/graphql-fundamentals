import React from 'react';
import { Query } from 'react-apollo';

import Routes from './Routes';
import getPlacesQuery from '../graphql/getPlacesQuery';

const App = () => {
  return (
    <Query query={getPlacesQuery}>
      {graphqlResponse => {
        const { data } = graphqlResponse;
        return <Routes places={data.places} />;
      }}
    </Query>
  );
};

export default App;
