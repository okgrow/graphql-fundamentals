import { withState, withHandlers, compose } from 'recompose';
import { gql, graphql } from 'react-apollo';

export const withStateEnhancer = withState('inputValue', 'setInputValue', '');

export const addPlace = props => async placeId => {};

export const editInput = ({ setInputValue }) => async event => {
  const { value } = event.target;

  setInputValue(value);
};

export const toggleVisited = props => id => {};

export const withPlacesData = graphql(
  gql`
    query getPlaces {
      places {
        id
        name
        visited
        latitude
        longitude
      }
    }
  `,
  {
    props: ({ data }) => ({
      placesLoading: data.loading,
      placesError: data.error,
      places: data.places || [],
    }),
  }
);

export default compose(
  withPlacesData,
  withStateEnhancer,
  withHandlers({
    addPlace,
    editInput,
    toggleVisited,
  })
);
