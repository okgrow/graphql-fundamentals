import { withState, withHandlers, compose } from 'recompose';

export const withStateEnhancer = withState('inputValue', 'setInputValue', '');

export const addPlace = props => async placeId => {};

export const editInput = ({ setInputValue }) => async event => {
  const { value } = event.target;

  setInputValue(value);
};

export const toggleVisited = props => id => {};

const getPlacesQuery = `
  query getPlaces {
    places {
      id
      name
      visited
      latitude
      longitude
    }
  }
`;

export default compose(
  withStateEnhancer,
  withHandlers({
    addPlace,
    editInput,
    toggleVisited,
  })
);
