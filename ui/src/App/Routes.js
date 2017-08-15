import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import BucketList from './BucketList/BucketList';
import Map from './Map/Map';

const Routes = ({ places = [] }) => (
  <div>
    <Route exact path="/" render={() => <Home places={places} />} />
    <Route path="/bucket" render={() => <BucketList places={places} />} />
    <Route
      path="/map/:id"
      render={({ match }) => {
        const currentPlace = places.find(place => place.id === match.params.id);
        return <Map currentPlace={currentPlace} places={places} />;
      }}
    />
  </div>
);

export default Routes;
