import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Bucket from './Bucket';
import Map from './Map';

const App = ({ data: { places = [], loading, error } }) => (
  <div>
    <Route
      exact
      path="/"
      render={() => <Home places={places} loading={loading} error={error} />}
    />
    <Route
      path="/bucket"
      render={() => <Bucket places={places} loading={loading} error={error} />}
    />
    <Route
      path="/map/:id"
      render={({ match }) => {
        const currentPlace = places.find(place => place.id === match.params.id);
        return (
          <Map
            currentPlace={currentPlace}
            places={places}
            loading={loading}
            error={error}
          />
        );
      }}
    />
  </div>
);

export default App;
