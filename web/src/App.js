import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import withBusinessLogic from './withBusinessLogic';
import Home from './Home';
import Bucket from './Bucket';
import Map from './Map';

const App = ({
  places,
  inputValue,
  suggestions,
  editInput,
  addPlace,
  toggleVisited,
}) =>
  <div>
    <Route exact path="/" render={() => <Home places={places} />} />
    <Route
      path="/bucket"
      render={() =>
        <Bucket
          editInput={editInput}
          addPlace={addPlace}
          toggleVisited={toggleVisited}
          places={places}
          inputValue={inputValue}
          suggestions={suggestions}
        />}
    />
    <Route
      path="/map/:id"
      render={({ match }) => {
        const currentPlace = places.find(place => place.id === match.params.id);
        return <Map currentPlace={currentPlace} places={places} />;
      }}
    />
  </div>;

App.propTypes = {
  editInput: PropTypes.func.isRequired,
  addPlace: PropTypes.func.isRequired,
  toggleVisited: PropTypes.func.isRequired,
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      visited: PropTypes.bool.isRequired,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    })
  ),
  inputValue: PropTypes.string,
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default withBusinessLogic(App);
