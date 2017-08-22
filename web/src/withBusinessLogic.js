import { withState, withHandlers, flattenProp, compose } from 'recompose';
import { graphql } from 'react-apollo';
import GET_PLACES_QUERY from './getPlaces.query';
import RUN_SEARCH_QUERY from './runSearch.query';

export const withStateEnhancer = withState('state', 'setState', props => ({
  places: props.defaultPlaces || [],
  inputValue: '',
}));

export const addPlace = ({ setState }) => async placeId => {
  const response = await fetch(`/api/details?id=${placeId}`);

  const newPlace = await response.json();

  setState(state => ({
    ...state,
    inputValue: '',
    places: [
      ...state.places,
      {
        ...newPlace,
        visited: false,
      },
    ],
  }));
};

export const editInput = ({ setState }) => async event => {
  const { value } = event.target;

  setState(state => ({
    ...state,
    inputValue: value,
  }));
};

export const toggleVisited = ({ setState }) => id => {
  setState(state => {
    const newPlaces = state.places.map(place => {
      if (place.id !== id) {
        return place;
      }

      return {
        ...place,
        visited: !place.visited,
      };
    });

    return {
      ...state,
      places: newPlaces,
    };
  });
};

export const withPlacesData = graphql(GET_PLACES_QUERY, {
  props: ({ data }) => ({
    placesLoading: data.loading,
    placesError: data.error,
    places: data.places || [],
  }),
});

export const withSuggestionsData = graphql(RUN_SEARCH_QUERY, {
  options: props => ({
    variables: { name: props.inputValue },
  }),
  props: ({ data }) => ({
    suggestionsLoading: data.loading,
    suggestionsError: data.error,
    suggestions: data.suggestions,
  }),
});

export default compose(
  withStateEnhancer,
  withHandlers({
    addPlace,
    editInput,
    toggleVisited,
  }),
  flattenProp('state')
);
