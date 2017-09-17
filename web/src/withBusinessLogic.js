import { withState, withHandlers, compose } from 'recompose';
import { gql, graphql } from 'react-apollo';

const createPlaceMutation = gql`
  mutation createPlace($input: CreatePlaceInput!) {
    createPlace(input: $input) {
      id
      name
      visited
      longitude
      latitude
    }
  }
`;

export const withCreatePlaceMutation = graphql(createPlaceMutation, {
  name: 'createPlaceMutation',
  options: props => ({
    refetchQueries: ['getPlaces'],
  }),
});

export const withStateEnhancer = withState('inputValue', 'setInputValue', '');

export const addPlace = ({ createPlaceMutation }) => async placeId => {
  await createPlaceMutation({
    variables: { input: { placeId } },
  });
};

export const editInput = ({ setInputValue }) => async event => {
  const { value } = event.target;

  setInputValue(value);
};

const updatePlaceMutation = gql`
  mutation updatePlace($input: UpdatePlaceInput!) {
    updatePlace(input: $input) {
      id
      name
      visited
      longitude
      latitude
    }
  }
`;

export const withUpdatePlaceMutation = graphql(updatePlaceMutation, {
  name: 'updatePlaceMutation',
});

export const toggleVisited = ({ updatePlaceMutation, places }) => async id => {
  const placeToVisit = places.find(place => place.id === id);

  await updatePlaceMutation({
    variables: { input: { id, visited: !placeToVisit.visited } },
  });
};

const getPlacesQuery = gql`
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

export const withPlacesData = graphql(getPlacesQuery, {
  props: ({ data }) => ({
    placesLoading: data.loading,
    placesError: data.error,
    places: data.places || [],
  }),
});

const runSearchQuery = gql`
  query runSearch($name: String) {
    suggestions(name: $name) {
      id
      name
    }
  }
`;

export const withSuggestionsData = graphql(runSearchQuery, {
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
  withSuggestionsData
);
