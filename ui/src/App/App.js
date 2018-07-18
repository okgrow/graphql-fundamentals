import React from 'react';
import { Query } from 'react-apollo';

import Routes from './Routes';
import getPlacesQuery from '../graphql/getPlacesQuery';

import Loading from './Loading';
import Error from './Error';

const App = () => {
  return (
    <Query query={getPlacesQuery}>
      {graphqlResponse => {
        const { data, loading, error } = graphqlResponse;
        if (loading) return <Loading />;
        if (error) return <Error />;
        return <Routes places={data.places} />;
      }}
    </Query>
  );
};

export default App;
