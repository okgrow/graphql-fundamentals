import { withState, withHandlers, flattenProp, compose } from 'recompose';
import { graphql } from 'react-apollo';
import GET_PLACES_QUERY from './getPlaces.query';
import RUN_SEARCH_QUERY from './runSearch.query';
import CREATE_PLACE_MUTATION from './createPlace.mutation';
import UPDATE_PLACE_MUTATION from './updatePlace.mutation';

export const withStateEnhancer = withState('state', 'setState', props => ({
  inputValue: '',
}));

export const withCreatePlaceMutation = graphql(CREATE_PLACE_MUTATION, {
  name: 'createPlaceMutation',
  options: props => ({
    refetchQueries: ['getPlaces'],
  }),
});

export const withUpdatePlaceMutation = graphql(UPDATE_PLACE_MUTATION, {
  name: 'updatePlaceMutation',
});

export const addPlace = ({ createPlaceMutation }) => async placeId => {
  await createPlaceMutation({
    variables: { input: { placeId } },
  });
};

export const editInput = ({ setState }) => async event => {
  const { value } = event.target;

  setState(state => ({
    ...state,
    inputValue: value,
  }));
};

export const toggleVisited = ({ updatePlaceMutation, places }) => async id => {
  const placeToVisit = places.find(place => place.id === id);

  await updatePlaceMutation({
    variables: { input: { id, visited: !placeToVisit.visited } },
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
  withPlacesData,
  withCreatePlaceMutation,
  withUpdatePlaceMutation,
  withStateEnhancer,
  withHandlers({
    addPlace,
    editInput,
    toggleVisited,
  }),
  flattenProp('state'),
  withSuggestionsData
);
