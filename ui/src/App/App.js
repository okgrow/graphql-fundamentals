import React from 'react';

import Routes from './Routes';
// import getPlacesQuery from '../graphql/getPlacesQuery';

// delete mockPlaces and replace with a query result
import mockPlaces from './mockPlaces';

const App = () => {
  return <Routes places={mockPlaces} />;
};

export default App;
